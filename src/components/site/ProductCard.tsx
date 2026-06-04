import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatCLP } from "@/lib/products";
import { addToCart } from "@/lib/cart";
import { easeOutQuint } from "@/lib/motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
}

function getOptimizedImageUrl(url: string, width = 600): string {
  if (!url) return "";
  if (url.includes("cdn.shopify.com")) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}width=${width}`;
  }
  return url;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: easeOutQuint },
        },
      }}
      className="group"
    >
      <Link
        to="/producto/$slug"
        params={{ slug: product.slug }}
        className="block"
      >
        {/* Image wrapper */}
        <motion.div
          className="relative overflow-hidden bg-secondary aspect-square sm:aspect-[4/5] rounded-[20px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial="idle"
          animate={isHovered ? "hovered" : "idle"}
        >
          {/* Tag badge */}
          {product.inStock === false ? (
            <span className="absolute top-3 left-3 z-10 text-[9px] font-bold tracking-[0.15em] uppercase bg-[#865d5d] text-white px-2.5 py-1.5 rounded-full shadow-sm">
              Agotado
            </span>
          ) : product.tag ? (
            <span className="absolute top-3 left-3 z-10 text-[9px] font-bold tracking-[0.15em] uppercase bg-[#86895d] text-white px-2.5 py-1.5 rounded-full shadow-sm">
              {product.tag}
            </span>
          ) : null}

          {/* Product image — zooms on hover */}
          <motion.img
            src={getOptimizedImageUrl(product.image, 600)}
            alt={product.name}
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
            variants={{
              idle: { scale: 1 },
              hovered: {
                scale: 1.08,
                transition: { duration: 1.2, ease: easeOutQuint },
              },
            }}
          />

          {/* Wishlist heart — appears on hover */}
          <motion.button
            aria-label={`Guardar ${product.name} en favoritos`}
            onClick={(e) => e.preventDefault()}
            className="absolute top-3 right-3 z-10 size-8 rounded-full bg-white/90 flex items-center justify-center border border-black/5"
            variants={{
              idle: { opacity: 0, scale: 0.7, y: -4 },
              hovered: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.3, ease: easeOutQuint },
              },
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.88 }}
          >
            <Heart className="size-3.5 text-[#272831]" strokeWidth={1.5} />
          </motion.button>

          {product.inStock !== false && (
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart({
                  slug: product.slug,
                  name: product.name,
                  image: product.image,
                  price: product.price,
                  qty: 1,
                });
                toast.success(`${product.name} agregado`, {
                  description: "1 unidad",
                  action: {
                    label: "Ver carrito",
                    onClick: () => router.navigate({ to: "/carrito" }),
                  },
                });
              }}
              className="absolute bottom-3 right-3 z-10 size-8 md:size-10 rounded-full bg-[#86895d] text-white flex items-center justify-center shadow-md cursor-pointer"
              variants={isMobile ? undefined : {
                idle: { y: "120%", opacity: 0 },
                hovered: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, ease: easeOutQuint },
                },
              }}
              style={isMobile ? { opacity: 1, transform: "none" } : undefined}
              whileHover={{ backgroundColor: "#777a53", scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Agregar ${product.name} al carrito`}
            >
              <Plus className="size-4" strokeWidth={2.5} />
            </motion.button>
          )}
        </motion.div>

        {/* Product info - stacked layout for better mobile space and readability */}
        <div className="pt-3 flex flex-col justify-between h-[88px] md:h-[96px] min-w-0">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-display text-sm md:text-base font-bold text-[#272831] leading-tight group-hover:text-forest transition-colors duration-300 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-[11px] text-muted-foreground italic leading-none min-h-[12px] line-clamp-1">
              {product.scientific || "\u00A0"}
            </p>
          </div>
          <div className="flex items-baseline gap-2 mt-auto">
            <span className="text-sm font-bold text-[#272831]">{formatCLP(product.price)}</span>
            {product.oldPrice && (
              <span className="text-[11px] text-muted-foreground line-through">
                {formatCLP(product.oldPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
