import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { easeSnappy } from "@/lib/motion";

const DISMISSED_KEY = "bascharant_announcement_dismissed_v1";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(DISMISSED_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(DISMISSED_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="announcement-bar"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: easeSnappy }}
          className="relative z-50 bg-charcoal text-bone flex items-center justify-center px-4"
          style={{ height: "36px" }}
        >
          <p className="text-[11px] tracking-[0.22em] uppercase text-center">
            Envío gratuito en compras sobre $50.000 · Chile
          </p>
          <button
            aria-label="Cerrar aviso"
            onClick={dismiss}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <X className="size-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
