import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";

// Spring yellow color palette
const FLOWER_COLORS = [
  "#FFD700", // gold
  "#FFDF00", // golden yellow
  "#FFEA00", // bright yellow
  "#FDDA0D", // lemon yellow
  "#FFFF00", // pure yellow
  "#FCE205", // yellow
];

export function FallingLeaves() {
  const [flowers, setFlowers] = useState<any[]>([]);

  useEffect(() => {
    // Generate flowers only on the client to avoid hydration mismatch
    const numFlowers = 15;
    const newFlowers = Array.from({ length: numFlowers }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: 12 + Math.random() * 12, // between 12s and 24s falling down
      delay: Math.random() * 15, // stagger the start times
      size: 16 + Math.random() * 20, // 16px to 36px
      color: FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)],
      opacity: 0.6 + Math.random() * 0.4,
      rotationStart: Math.random() * 360,
      rotationEnd: Math.random() * 360 + 360 * (Math.random() > 0.5 ? 1 : -1),
      swayAmount: 20 + Math.random() * 40, // how much it moves left and right
    }));
    setFlowers(newFlowers);
  }, []);

  if (flowers.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[0] overflow-hidden" aria-hidden="true">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          style={{ 
            left: flower.left, 
            top: "-10%",
            color: flower.color, 
            opacity: flower.opacity 
          }}
          animate={{
            y: ["0%", "1200%"],
            x: [
              "0px", 
              `${flower.swayAmount}px`, 
              `-${flower.swayAmount}px`, 
              `${flower.swayAmount}px`, 
              "0px"
            ],
            rotate: [flower.rotationStart, flower.rotationEnd],
          }}
          transition={{
            y: { 
              duration: flower.animationDuration, 
              repeat: Infinity, 
              delay: flower.delay, 
              ease: "linear" 
            },
            x: { 
              duration: flower.animationDuration, 
              repeat: Infinity, 
              delay: flower.delay, 
              ease: "easeInOut" 
            },
            rotate: { 
              duration: flower.animationDuration, 
              repeat: Infinity, 
              delay: flower.delay, 
              ease: "linear" 
            }
          }}
        >
          <Flower2 size={flower.size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
