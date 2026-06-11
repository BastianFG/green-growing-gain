import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, ShoppingBag, Heart, Menu } from "lucide-react";
import { getCart } from "@/lib/cart";
import { AnnouncementBar } from "./AnnouncementBar";
import { MobileMenu } from "./MobileMenu";
import { CartDrawer } from "./CartDrawer";
import { easeInOutExpo } from "@/lib/motion";

const nav = [
  { to: "/tienda", label: "Tienda" },
  { to: "/tienda", label: "Plantas" },
  { to: "/tienda", label: "Maceteros" },
  { to: "/tienda", label: "Accesorios" },
  { to: "/servicios", label: "Servicio Hogar" },
 // { to: "/tienda", label: "Lookbook" },
  { to: "https://www.bascharant.com/", label: "Servicio Empresa" },

];

export function Header() {
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { scrollY } = useScroll();

  // Cart sync
  useEffect(() => {
    const sync = () => setCount(getCart().reduce((s, i) => s + i.qty, 0));
    sync();
    window.addEventListener("cart:update", sync);
    return () => window.removeEventListener("cart:update", sync);
  }, []);

  // Scroll detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  // Lock body scroll when mobile menu or cart drawer open
  useEffect(() => {
    document.body.style.overflow = (mobileOpen || cartOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, cartOpen]);

  return (
    <>
      <AnnouncementBar />
      <motion.header
        id="site-header"
        className="sticky top-0 z-40 transition-none"
        animate={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.88)"
            : "rgba(255, 255, 255, 0)",
          borderBottomColor: scrolled
            ? "rgba(39, 40, 49, 0.08)"
            : "rgba(39, 40, 49, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: easeInOutExpo }}
        style={{
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        }}
      >
        <div className="container-x flex items-center justify-between h-16 lg:h-20">
          {/* Mobile hamburger */}
          <motion.button
            aria-label="Abrir menú"
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
            whileTap={{ scale: 0.92 }}
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </motion.button>

          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl lg:text-3xl tracking-tight absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            Bascharant<span className="italic">.</span>
          </Link>

          {/* Desktop nav — centered */}
          <nav
            className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
            aria-label="Principal"
          >
            {nav.map((n) => {
              const isExternal = n.to.startsWith("http");
              if (isExternal) {
                return (
                  <a
                    key={n.label}
                    href={n.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[12px] tracking-[0.12em] uppercase font-medium text-foreground/75 hover:text-foreground transition-colors group"
                  >
                    {n.label}
                    {/* Animated underline */}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ink group-hover:w-full transition-all duration-300 ease-out" />
                  </a>
                );
              }
              return (
                <Link
                  key={n.label}
                  to={n.to}
                  className="relative text-[12px] tracking-[0.12em] uppercase font-medium text-foreground/75 hover:text-foreground transition-colors group"
                >
                  {n.label}
                  {/* Animated underline */}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ink group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              );
            })}
          </nav>

          {/* Action icons */}
          <div className="flex items-center gap-1 lg:gap-2">
            <motion.button
              aria-label="Buscar"
              className="p-2"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="size-[18px]" strokeWidth={1.5} />
            </motion.button>
            <motion.button
              aria-label="Favoritos"
              className="p-2 hidden sm:block"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              <Heart className="size-[18px]" strokeWidth={1.5} />
            </motion.button>
            <motion.button
              aria-label="Abrir carrito"
              onClick={() => setCartOpen(true)}
              className="p-2 relative"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              <ShoppingBag className="size-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-0.5 -right-0.5 text-[10px] bg-forest text-white rounded-full size-4 flex items-center justify-center font-bold"
                >
                  {count}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile nav drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Cart drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
