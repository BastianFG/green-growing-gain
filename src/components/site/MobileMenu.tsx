import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { easeSnappy, easeOutQuint } from "@/lib/motion";

const navLinks = [
  { to: "/tienda", label: "Tienda" },
  { to: "/tienda", label: "Plantas" },
  { to: "/tienda", label: "Maceteros" },
  { to: "/tienda", label: "Jardinería" },
  { to: "/tienda", label: "Lookbook" },
  { to: "https://www.bascharant.com/", label: "Servicios" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOutQuint }}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.45, ease: easeSnappy }}
            className="fixed inset-y-0 left-0 z-50 w-[80vw] max-w-sm bg-bone flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link
                to="/"
                onClick={onClose}
                className="font-display text-2xl tracking-tight"
              >
                Bascharant<span className="italic">.</span>
              </Link>
              <motion.button
                aria-label="Cerrar menú"
                onClick={onClose}
                className="p-2 -mr-2 text-ink/70 hover:text-ink transition-colors"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.25, ease: easeOutQuint }}
              >
                <X className="size-5" strokeWidth={1.5} />
              </motion.button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-6 pt-8 gap-0">
              {navLinks.map((n, i) => {
                const isExternal = n.to.startsWith("http");
                return (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: easeOutQuint,
                      delay: 0.08 + i * 0.07,
                    }}
                  >
                    {isExternal ? (
                      <a
                        href={n.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="block font-display text-3xl py-3 border-b border-border/50 hover:text-forest transition-colors"
                      >
                        {n.label}
                      </a>
                    ) : (
                      <Link
                        to={n.to}
                        onClick={onClose}
                        className="block font-display text-3xl py-3 border-b border-border/50 hover:text-forest transition-colors"
                      >
                        {n.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer inside drawer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mt-auto px-6 pb-8 pt-6"
            >
              <p className="eyebrow mb-3">Ayuda</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Envíos y entregas</a>
                <a href="#" className="hover:text-foreground transition-colors">Contáctanos</a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
