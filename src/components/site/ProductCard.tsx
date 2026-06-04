import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatCLP } from "@/lib/products";
import { addToCart } from "@/lib/cart";
import { easeOutQuint } from "@/lib/motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
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
          className="relative overflow-hidden bg-secondary aspect-[4/5] rounded-[20px]"
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
            src={product.image}
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

          {/* Quick-add button slides up from bottom as a premium pill */}
          {product.inStock !== false ? (
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                addToCart({
                  slug: product.slug,
                  name: product.name,
                  image: product.image,
                  price: product.price,
                  qty: 1,
                });
              }}
              className="absolute bottom-4 inset-x-4 bg-[#86895d] text-white text-[11px] font-semibold tracking-[0.2em] uppercase py-3 rounded-[50px] z-10 shadow-lg text-center"
              variants={{
                idle: { y: "130%", opacity: 0 },
                hovered: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, ease: easeOutQuint },
                },
              }}
              whileHover={{ backgroundColor: "#777a53", scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              Agregar rápido
            </motion.button>
          ) : (
            <div className="absolute bottom-4 inset-x-4 bg-neutral-500/80 text-white text-[11px] font-semibold tracking-[0.2em] uppercase py-3 rounded-[50px] z-10 shadow-lg text-center cursor-default">
              Sin stock
            </div>
          )}
        </motion.div>

        {/* Product info */}
        <div className="pt-4 flex justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-lg leading-snug truncate group-hover:text-forest transition-colors duration-300">
              {product.name}
            </h3>
            {product.scientific && (
              <p className="text-xs text-muted-foreground italic mt-0.5 truncate">
                {product.scientific}
              </p>
            )}
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm font-medium">{formatCLP(product.price)}</p>
            {product.oldPrice && (
              <p className="text-xs text-muted-foreground line-through">
                {formatCLP(product.oldPrice)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
