import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import landscapingService from "@/assets/landscaping-service.png";
import gardenMaintenance from "@/assets/garden-maintenance.png";
import { ArrowRight, Leaf, ShieldCheck, Sprout, Send } from "lucide-react";
import {
  easeOutQuint,
  easeInOutExpo,
  staggerContainer,
  fadeUp,
  slideRight,
  scaleUp,
} from "@/lib/motion";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      {
        title: "Servicios de Paisajismo en Frutillar — Bascharant Home",
      },
      {
        name: "description",
        content:
          "Mantención de áreas verdes, diseño de parcelas y paisajismo premium en Santiago, Región de Los Lagos y Zapallar. Respaldado por Bascharant Empresas.",
      },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroServices />
        <ServicesDetail />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────
function HeroServices() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-[75vh] overflow-hidden bg-charcoal"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={landscapingService}
          alt="Paisajismo y Mantención de Áreas Verdes"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-background" />
      </motion.div>

      <motion.div
        className="relative z-10 container-x text-center pt-24 pb-12 max-w-4xl mx-auto"
        style={{ opacity: contentOpacity }}
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.15)}
      >
        <motion.p
          className="eyebrow text-bone/80 mb-4"
          variants={fadeUp(20, 0.7)}
        >
          Servicios Profesionales
        </motion.p>
        <motion.h1
          className="font-display text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]"
          variants={fadeUp(30, 0.8)}
        >
          Tu entorno natural en el Sur, <br/>
          <span className="italic font-serif text-[#86895d]">cuidado por expertos.</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-bone/90 max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp(20, 0.8)}
        >
          Ofrecemos diseño de parcelas, instalación de riego automatizado y mantención de áreas verdes en Santiago, Región de Los Lagos y Zapallar. Toda la capacidad operativa y logística de Bascharant Empresas, ahora dedicada a tu hogar.
        </motion.p>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SERVICES DETAIL
// ─────────────────────────────────────────────
function ServicesDetail() {
  return (
    <section className="container-x py-24 lg:py-32">
      <motion.div
        className="text-center mb-16 lg:mb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp(20, 0.6)}
      >
        <h2 className="font-display text-4xl lg:text-5xl text-charcoal">
          Nuestra Experiencia a tu Servicio
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Nos encargamos de integrar la naturaleza con tus espacios interiores y exteriores, respetando las condiciones naturales de cada planta.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        <motion.div
          className="order-2 lg:order-1 space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.1)}
        >
          <motion.div variants={slideRight(30, 0.6)}>
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#86895d]/10 mb-4">
              <Leaf className="size-6 text-[#86895d]" />
            </div>
            <h3 className="font-display text-3xl font-bold">Diseño de Parcelas y Riego</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Planificamos tu terreno aprovechando las condiciones climáticas del sur de Chile. Desde la selección de especies nativas hasta la instalación de sistemas de riego automatizado y paisajismo vial privado, garantizamos proyectos de alta gama con terminaciones impecables.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Diseño arquitectónico del paisaje y planimetría",
                "Instalación de riego tecnificado y automatizado",
                "Construcción de jardines y movimiento de tierras",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-charcoal/80">
                  <div className="mt-1 size-1.5 rounded-full bg-[#86895d] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 rounded-[30px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOutQuint }}
        >
          <img src={landscapingService} alt="Diseño y Paisajismo" className="w-full aspect-[4/3] object-cover" />
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          className="rounded-[30px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOutQuint }}
        >
          <img src={gardenMaintenance} alt="Mantención de Áreas Verdes" className="w-full aspect-[4/3] object-cover" />
        </motion.div>
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.1)}
        >
          <motion.div variants={slideRight(30, 0.6)}>
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#86895d]/10 mb-4">
              <Sprout className="size-6 text-[#86895d]" />
            </div>
            <h3 className="font-display text-3xl font-bold">Mantención de Áreas Verdes</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Un entorno amplio y verde requiere cuidado constante y maquinaria profesional. Ofrecemos planes de mantención para parcelas y residencias en Santiago, Región de Los Lagos y Zapallar, apoyados por nuestro equipo técnico y vehículos de traslado corporativo.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Corte de pasto de grandes extensiones y orillado",
                "Poda estética, sanitaria y manejo de especies mayores",
                "Fertilización programada y control fitosanitario",
                "Revisión y ajuste de riego tecnificado",
                "Garantía verde: reemplazo sin costo de plantas bajo nuestro cuidado mensual",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-charcoal/80">
                  <div className="mt-1 size-1.5 rounded-full bg-[#86895d] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CONTACT FORM SECTION (Glassmorphism & Tech)
// ─────────────────────────────────────────────
export function ContactFormSection() {
  return (
    <section id="contacto" className="relative py-20 lg:py-24 overflow-hidden bg-charcoal">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-[#86895d] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[#a3a67d] blur-[100px]" />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
          className="text-white text-center lg:text-left"
        >
          <motion.div variants={scaleUp(0.8, 0.5)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3a67d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86895d]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase">Agenda tu Visita</span>
          </motion.div>
          
          <motion.h2 variants={fadeUp(20, 0.6)} className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Diseñamos y cuidamos <br className="hidden lg:block"/>tu entorno natural
          </motion.h2>
          
          <motion.p variants={fadeUp(20, 0.7)} className="mt-4 text-white/80 text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Agenda una visita técnica o solicita tu cotización. Nos adaptamos a tus necesidades.
          </motion.p>

          <motion.div variants={fadeUp(20, 0.75)} className="mt-8 p-5 rounded-2xl bg-[#86895d]/20 border border-[#86895d]/30 text-left">
            <h3 className="font-bold text-[#e1e3c8] text-lg mb-1 flex items-center gap-2">
              <ShieldCheck className="size-5" /> ¿Eres Particular?
            </h3>
            <p className="text-sm text-white/90 font-medium">
              ¿Necesitas boleta o factura para tu servicio? ¡Te lo entregamos sin problemas! Detállalo en tu solicitud.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp(20, 0.8)} className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <a href="https://wa.me/56900000000" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-transform">
              Contactar por WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Form Container with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOutQuint, delay: 0.2 }}
        >
          <div className="glass-panel p-6 md:p-10 rounded-[24px] md:rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            
            {/* Form Highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#86895d] via-[#e1e3c8] to-[#86895d] opacity-80" />

            <form 
              action="https://formspree.io/f/xkjgrljy" 
              method="POST" 
              className="space-y-4"
            >
              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[11px] font-bold text-white uppercase tracking-wider pl-1">Nombre</label>
                  <input 
                    required
                    id="name"
                    name="name"
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 md:py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#86895d] focus:bg-white/20 transition-all text-base"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-[11px] font-bold text-white uppercase tracking-wider pl-1">Teléfono</label>
                  <input 
                    required
                    id="phone"
                    name="phone"
                    type="tel" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 md:py-3.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#86895d] focus:bg-white/20 transition-all text-base"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>

              {/* Tipo de Propiedad y Servicio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="property" className="text-[11px] font-bold text-white uppercase tracking-wider pl-1">Tipo de Propiedad</label>
                  <select 
                    required
                    id="property"
                    name="property"
                    className="w-full bg-charcoal/90 border border-white/20 rounded-xl px-4 py-3 md:py-3.5 text-white focus:outline-none focus:border-[#86895d] focus:bg-charcoal transition-all text-base appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="Casa">Casa</option>
                    <option value="Parcela">Parcela</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-[11px] font-bold text-white uppercase tracking-wider pl-1">Tipo de Servicio</label>
                  <select 
                    required
                    id="service"
                    name="service"
                    className="w-full bg-charcoal/90 border border-white/20 rounded-xl px-4 py-3 md:py-3.5 text-white focus:outline-none focus:border-[#86895d] focus:bg-charcoal transition-all text-base appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Selecciona un servicio</option>
                    <option value="Mantención de Áreas Verdes">Mantención de Áreas Verdes</option>
                    <option value="Diseño de Parcelas">Diseño de Parcelas</option>
                    <option value="Paisajismo">Paisajismo</option>
                    <option value="Riego Tecnificado">Riego Tecnificado</option>
                  </select>
                </div>
              </div>

              {/* Comuna */}
              <div className="space-y-1.5">
                <label htmlFor="comuna" className="text-[11px] font-bold text-white uppercase tracking-wider pl-1">Comuna</label>
                <select 
                  required
                  id="comuna"
                  name="comuna"
                  className="w-full bg-charcoal/90 border border-white/20 rounded-xl px-4 py-3 md:py-3.5 text-white focus:outline-none focus:border-[#86895d] focus:bg-charcoal transition-all text-base appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Elige tu comuna</option>
                  <optgroup label="Región de Los Lagos">
                    <option value="Puerto Montt">Puerto Montt</option>
                    <option value="Puerto Varas">Puerto Varas</option>
                    <option value="Llanquihue">Llanquihue</option>
                    <option value="Frutillar">Frutillar</option>
                    <option value="Osorno">Osorno</option>
                  </optgroup>
                  <optgroup label="Región Metropolitana">
                    <option value="Colina (Chicureo)">Colina (Chicureo)</option>
                    <option value="Lo Barnechea">Lo Barnechea</option>
                    <option value="Las Condes">Las Condes</option>
                    <option value="Vitacura">Vitacura</option>
                    <option value="Santiago">Santiago Centro</option>
                  </optgroup>
                  <optgroup label="Otras">
                    <option value="Zapallar">Zapallar</option>
                  </optgroup>
                </select>
              </div>

              {/* Factura / Boleta */}
              <div className="space-y-1.5 pt-2">
                <label htmlFor="documento" className="text-[11px] font-bold text-[#e1e3c8] uppercase tracking-wider pl-1">¿Necesitas Boleta o Factura?</label>
                <select 
                  required
                  id="documento"
                  name="documento"
                  className="w-full bg-[#86895d]/20 border border-[#86895d]/50 rounded-xl px-4 py-3 md:py-3.5 text-white focus:outline-none focus:border-white transition-all text-base appearance-none"
                  defaultValue="No necesito / Particular"
                >
                  <option value="Boleta">Sí, necesito Boleta</option>
                  <option value="Factura">Sí, necesito Factura</option>
                  <option value="No necesito / Particular">No necesito / Particular</option>
                </select>
              </div>

              {/* Botón Enviar */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-white text-charcoal font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#e1e3c8] transition-colors shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Solicitar Visita Ahora
                    <Send className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </div>
              
              <p className="text-center text-xs text-white/50 mt-4">
                Tus datos están seguros con nosotros.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
