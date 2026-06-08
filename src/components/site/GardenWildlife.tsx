import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// --- SVG Components con Alas Animadas ---

function Hummingbird({ speed = 0.04 }) {
  return (
    <motion.svg width="32" height="32" viewBox="0 0 24 24" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}>
      {/* Pico largo */}
      <path d="M18 10L24 8L18 11Z" fill="#111" />
      {/* Cola */}
      <path d="M6 16L1 21L7 18Z" fill="#059669" />
      {/* Cuerpo verde brillante */}
      <path d="M6 16C6 10 12 8 16 12C18 14 12 18 6 16Z" fill="#10b981" />
      {/* Cabeza */}
      <circle cx="16" cy="11" r="2.5" fill="#059669" />
      {/* Ala Trasera */}
      <motion.path
        d="M12 11C12 2 18 -1 16 8Z"
        fill="#6ee7b7"
        style={{ transformOrigin: "12px 11px" }}
        animate={{ rotateZ: [-10, 70, -10] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      />
      {/* Ala Delantera (Rápida oscilación) */}
      <motion.path
        d="M11 12C10 3 15 1 14 9Z"
        fill="#34d399"
        style={{ transformOrigin: "11px 12px" }}
        animate={{ rotateZ: [10, 80, 10] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      />
    </motion.svg>
  );
}

function Thrush({ speed = 0.25 }) {
  return (
    <motion.svg width="40" height="40" viewBox="0 0 24 24" style={{ filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.3))" }}>
      {/* Cola */}
      <path d="M5 14L0 18L4 18Z" fill="#5c4033" />
      {/* Pecho naranja (Zorzal) */}
      <path d="M4 14C4 10 10 8 15 10C19 10 22 13 22 15C19 18 12 19 4 14Z" fill="#d97736" />
      {/* Espalda marrón */}
      <path d="M4 14C4 10 10 8 15 10C17 10 18 11 19 12C16 14 10 15 4 14Z" fill="#5c4033" />
      {/* Cabeza */}
      <circle cx="18" cy="11" r="3" fill="#4a332a" />
      {/* Pico */}
      <path d="M20 11L24 12L20 13Z" fill="#eab308" />
      {/* Ala Delantera */}
      <motion.path
        d="M11 12C14 5 18 2 20 8C17 10 13 12 11 12Z"
        fill="#78513e"
        style={{ transformOrigin: "11px 12px" }}
        animate={{ rotateZ: [-20, 50, -20] }}
        transition={{ repeat: Infinity, duration: speed, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function Sparrow({ speed = 0.2 }) {
  return (
    <motion.svg width="28" height="28" viewBox="0 0 24 24" style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.2))" }}>
      {/* Cola */}
      <path d="M5 13L1 17L4 17Z" fill="#6b7280" />
      {/* Cuerpo gris/marrón (Chincol) */}
      <path d="M4 13C4 9 9 7 14 9C18 9 20 12 20 14C17 16 11 17 4 13Z" fill="#9ca3af" />
      {/* Copete característico del Chincol */}
      <path d="M15 8L17 5L18 8Z" fill="#4b5563" />
      {/* Cabeza */}
      <circle cx="17" cy="10" r="2.5" fill="#6b7280" />
      {/* Pico */}
      <path d="M19 10L22 11L19 12Z" fill="#d1d5db" />
      {/* Ala */}
      <motion.path
        d="M10 11C13 5 16 3 18 8C15 10 12 11 10 11Z"
        fill="#4b5563"
        style={{ transformOrigin: "10px 11px" }}
        animate={{ rotateZ: [-15, 60, -15] }}
        transition={{ repeat: Infinity, duration: speed, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function Butterfly({ speed = 0.2, color = "#fbbf24" }) {
  return (
    <motion.svg width="24" height="24" viewBox="0 0 24 24" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}>
      {/* Cuerpo */}
      <rect x="11" y="4" width="2" height="14" rx="1" fill="#333" />
      {/* Ala Izquierda */}
      <motion.path
        d="M11 6C4 1 0 8 4 13C1 17 5 22 11 17Z"
        fill={color}
        style={{ transformOrigin: "11px 12px" }}
        animate={{ scaleX: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: speed, ease: "easeInOut" }}
      />
      {/* Ala Derecha */}
      <motion.path
        d="M13 6C20 1 24 8 20 13C23 17 19 22 13 17Z"
        fill={color}
        style={{ transformOrigin: "13px 12px" }}
        animate={{ scaleX: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: speed, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function Bee({ speed = 0.05 }) {
  return (
    <motion.svg width="20" height="20" viewBox="0 0 24 24" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))" }}>
      {/* Cuerpo */}
      <ellipse cx="12" cy="14" rx="7" ry="4" fill="#eab308" />
      <path d="M10 10v8M13 10v8" stroke="#111" strokeWidth="2" />
      <circle cx="18" cy="13" r="1.5" fill="#111" />
      {/* Ala */}
      <motion.path
        d="M11 10 C 9 1 17 -1 17 8 Z"
        fill="rgba(255,255,255,0.8)" stroke="#ccc"
        style={{ transformOrigin: "11px 10px" }}
        animate={{ rotateZ: [-10, 60, -10] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      />
    </motion.svg>
  );
}

// --- Componente Principal ---

export function GardenWildlife() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[45] overflow-hidden" aria-hidden="true">
      
      {/* Picaflor chico (vuelo muy rápido, errático, se inclina al volar) */}
      <motion.div
        className="absolute"
        animate={{
          x: ["-10vw", "30vw", "50vw", "70vw", "110vw"],
          y: ["30vh", "25vh", "35vh", "20vh", "10vh"],
          rotate: [10, -15, 15, -10, 10],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 1,
          times: [0, 0.15, 0.5, 0.85, 1] // Pasa el 70% del tiempo en el centro
        }}
      >
        <Hummingbird />
      </motion.div>

      {/* Zorzal (vuelo recto y mediano) */}
      <motion.div
        className="absolute"
        animate={{
          x: ["110vw", "75vw", "50vw", "25vw", "-10vw"],
          y: ["45vh", "40vh", "50vh", "45vh", "40vh"],
          rotate: [-5, 5, -5, 5, 0]
        }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "linear", 
          delay: 2,
          times: [0, 0.15, 0.5, 0.85, 1]
        }}
        style={{ transform: "scaleX(-1)" }} // Volando hacia la izquierda
      >
        <Thrush />
      </motion.div>

      {/* Chincol (vuelo con pequeños saltos) */}
      <motion.div
        className="absolute"
        animate={{
          x: ["-10vw", "25vw", "45vw", "65vw", "110vw"],
          y: ["75vh", "65vh", "75vh", "60vh", "75vh"],
          rotate: [0, -15, 10, -15, 5]
        }}
        transition={{ 
          duration: 28, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 6,
          times: [0, 0.15, 0.5, 0.85, 1]
        }}
      >
        <Sparrow />
      </motion.div>

      {/* Abeja 1 */}
      <motion.div
        className="absolute"
        animate={{
          x: ["-5vw", "25vw", "45vw", "65vw", "105vw"],
          y: ["50vh", "45vh", "55vh", "40vh", "50vh"],
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 0,
          times: [0, 0.2, 0.5, 0.8, 1]
        }}
      >
        <Bee />
      </motion.div>
      
      {/* Mariposa */}
      <motion.div
        className="absolute"
        animate={{
          x: ["105vw", "75vw", "55vw", "35vw", "-5vw"],
          y: ["20vh", "30vh", "25vh", "35vh", "20vh"],
        }}
        transition={{ 
          duration: 26, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 3,
          times: [0, 0.15, 0.5, 0.85, 1]
        }}
      >
        <Butterfly color="#60a5fa" /> {/* Mariposa azul celeste */}
      </motion.div>

      {/* Abeja 2 */}
      <motion.div
        className="absolute"
        animate={{
          x: ["-5vw", "30vw", "50vw", "70vw", "105vw"],
          y: ["80vh", "90vh", "75vh", "85vh", "80vh"],
        }}
        transition={{ 
          duration: 24, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: 8,
          times: [0, 0.2, 0.5, 0.8, 1]
        }}
      >
        <Bee speed={0.04} />
      </motion.div>
    </div>
  );
}
