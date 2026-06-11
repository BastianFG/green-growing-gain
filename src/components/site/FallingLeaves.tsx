import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Autumn color palette
const LEAF_COLORS = [
  "#d97736", // orange
  "#e8a838", // gold
  "#a64924", // burnt orange
  "#8c5b3e", // brown
  "#c4883d", // golden brown
  "#b04323", // deep red/orange
];

// Solid Leaf SVG to match the reference image
const SolidLeaf = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 3C21 3 20 2.5 17 3C13.5 3.5 10 5.5 8 9C7.5 10 7.5 11.5 8 13L2 19L3.5 20.5L9.5 14.5C11 15 12.5 15 13.5 14.5C17 12.5 19 9 19.5 5.5C19.5 2.5 21 3 21 3Z" />
  </svg>
);

export function FallingLeaves() {
  const [leaves, setLeaves] = useState<any[]>([]);

  useEffect(() => {
    // Generate leaves only on the client to avoid hydration mismatch
    const numLeaves = 15;
    const newLeaves = Array.from({ length: numLeaves }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: 12 + Math.random() * 12, // between 12s and 24s falling down
      delay: Math.random() * 15, // stagger the start times
      size: 16 + Math.random() * 20, // 16px to 36px
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      opacity: 0.4 + Math.random() * 0.6,
      rotationStart: Math.random() * 360,
      rotationEnd: Math.random() * 360 + 360 * (Math.random() > 0.5 ? 1 : -1),
      swayAmount: 20 + Math.random() * 40, // how much it moves left and right
    }));
    setLeaves(newLeaves);
  }, []);

  if (leaves.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[0] overflow-hidden" aria-hidden="true">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ 
            left: leaf.left, 
            top: "-10%",
            color: leaf.color, 
            opacity: leaf.opacity 
          }}
          animate={{
            y: ["0%", "1200%"],
            x: [
              "0px", 
              `${leaf.swayAmount}px`, 
              `-${leaf.swayAmount}px`, 
              `${leaf.swayAmount}px`, 
              "0px"
            ],
            rotate: [leaf.rotationStart, leaf.rotationEnd],
          }}
          transition={{
            y: { 
              duration: leaf.animationDuration, 
              repeat: Infinity, 
              delay: leaf.delay, 
              ease: "linear" 
            },
            x: { 
              duration: leaf.animationDuration, 
              repeat: Infinity, 
              delay: leaf.delay, 
              ease: "easeInOut" 
            },
            rotate: { 
              duration: leaf.animationDuration, 
              repeat: Infinity, 
              delay: leaf.delay, 
              ease: "linear" 
            }
          }}
        >
          <SolidLeaf size={leaf.size} />
        </motion.div>
      ))}
    </div>
  );
}
