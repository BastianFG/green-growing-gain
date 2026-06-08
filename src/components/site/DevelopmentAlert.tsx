import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Hammer } from "lucide-react";
import { easeSnappy } from "@/lib/motion";

export function DevelopmentAlert() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("dev_alert_dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("dev_alert_dismissed", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: easeSnappy }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-lg pointer-events-none"
        >
          <div className="pointer-events-auto overflow-hidden relative flex items-start sm:items-center gap-3 bg-amber-500/90 backdrop-blur-xl text-amber-950 px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/60 ring-1 ring-black/5">
            {/* Shimmer effect */}
            <motion.div 
              className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="flex-shrink-0 relative z-10 pt-0.5 sm:pt-0">
              <motion.div
                animate={{ rotate: [0, -20, 20, -20, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                className="bg-amber-400 p-2 rounded-full shadow-inner"
              >
                <Hammer className="size-4" />
              </motion.div>
            </div>
            
            <div className="flex-1 pr-6 z-10">
              <h4 className="font-bold text-sm tracking-tight">
                Página en Desarrollo
              </h4>
              <p className="text-xs font-medium text-amber-950/80 mt-0.5 leading-snug">
                Estamos trabajando en la página, por lo que podría presentar errores. 
                <span className="font-bold text-amber-950 ml-1">¡Pero sí puedes cotizar los productos del listado!</span>
              </p>
            </div>
            
            <button
              onClick={dismiss}
              className="flex-shrink-0 relative z-10 hover:bg-amber-600/20 p-1.5 rounded-full transition-colors absolute right-2 top-3 sm:top-1/2 sm:-translate-y-1/2 text-amber-900"
              aria-label="Cerrar aviso"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
