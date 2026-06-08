import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Pollinators() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[20px]">
      {/* Abeja 1 */}
      <motion.div
        className="absolute text-lg opacity-80 drop-shadow-md"
        animate={{
          x: [0, 15, -10, 20, 0],
          y: [0, -15, 10, -5, 0],
          rotate: [0, -10, 15, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "15%", left: "25%" }}
      >
        🐝
      </motion.div>
      
      {/* Mariposa 1 */}
      <motion.div
        className="absolute text-xl opacity-90 drop-shadow-md"
        animate={{
          x: [0, -25, 15, -20, 0],
          y: [0, 20, -15, 10, 0],
          rotate: [0, -20, 20, -10, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ top: "45%", right: "15%" }}
      >
        🦋
      </motion.div>
      
      {/* Abeja 2 */}
      <motion.div
        className="absolute text-sm opacity-70 drop-shadow-sm"
        animate={{
          x: [0, -15, 20, -10, 0],
          y: [0, 15, -10, 20, 0],
          rotate: [0, 15, -15, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        style={{ bottom: "25%", left: "20%" }}
      >
        🐝
      </motion.div>
      
      {/* Mariposa 2 */}
      <motion.div
        className="absolute text-base opacity-75 drop-shadow-sm"
        animate={{
          x: [0, 20, -15, 25, 0],
          y: [0, -25, 15, -20, 0],
          rotate: [0, 25, -20, 15, 0]
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        style={{ bottom: "15%", right: "25%" }}
      >
        🦋
      </motion.div>
    </div>
  );
}
