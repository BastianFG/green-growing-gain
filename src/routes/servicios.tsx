import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
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
        title: "Servicios de Mantención y Paisajismo — Bascharant",
      },
      {
        name: "description",
        content:
          "Servicios especializados de mantención de áreas verdes y paisajismo para hogares. Diseño, cuidado, poda y fertilización con garantía.",
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
          Transformamos tu hogar en un <span className="italic font-serif text-[#86895d]">ecosistema</span> vivo.
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-bone/90 max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp(20, 0.8)}
        >
          Desde el diseño arquitectónico de tu jardín hasta la mantención mensual para asegurar que cada hoja y cada raíz crezca sana y fuerte.
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
            <h3 className="font-display text-3xl font-bold">Diseño y Paisajismo</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Creamos espacios verdes únicos que se integran a la arquitectura de tu hogar. Realizamos un estudio de luz, humedad y estilo para seleccionar las especies perfectas, logrando un jardín armónico, funcional y de bajo impacto hídrico.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Asesoría en selección de especies y maceteros",
                "Integración interior / exterior",
                "Instalación de jardineras y sustratos premium",
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
            <h3 className="font-display text-3xl font-bold">Mantención Integral</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Un jardín hermoso requiere cuidado constante. Ofrecemos planes de mantención mensual con visitas programadas para hogares y empresas. Nos preocupamos de cada detalle para que tu entorno natural siempre luzca impecable.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Corte de pasto y orillado profesional",
                "Poda estética y sanitaria, limpieza de hojas",
                "Fertilización de temporada y control fitosanitario (plagas)",
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
function ContactFormSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "mantencion", message: "" });
  const [state, handleSubmit] = useForm("xgoblbeg");

  return (
    <section className="relative py-24 overflow-hidden bg-charcoal">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-[#86895d] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-[#a3a67d] blur-[100px]" />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
          className="text-white"
        >
          <motion.div variants={scaleUp(0.8, 0.5)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3a67d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86895d]"></span>
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase">Cotización Rápida</span>
          </motion.div>
          <motion.h2 variants={fadeUp(20, 0.6)} className="font-display text-4xl lg:text-5xl font-bold">
            ¿Listo para darle vida a tus espacios?
          </motion.h2>
          <motion.p variants={fadeUp(20, 0.7)} className="mt-4 text-white/70 text-lg max-w-md">
            Completa nuestro formulario inteligente y nos pondremos en contacto contigo en menos de 24 horas con una propuesta a medida.
          </motion.p>
          
          <motion.div variants={fadeUp(20, 0.8)} className="mt-10 flex items-center gap-4">
            <div className="size-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <ShieldCheck className="size-5 text-[#86895d]" />
            </div>
            <div>
              <p className="font-semibold text-sm">Garantía de Satisfacción</p>
              <p className="text-xs text-white/50">Tu jardín siempre en las mejores manos.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Form Container with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOutQuint, delay: 0.2 }}
        >
          <div className="glass-panel p-8 md:p-10 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            
            {/* Form Highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#86895d] to-transparent opacity-50" />

            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="size-16 rounded-full bg-[#86895d]/20 flex items-center justify-center mb-6">
                  <ShieldCheck className="size-8 text-[#86895d]" />
                </div>
                <h3 className="font-display text-2xl text-white mb-2">¡Solicitud Enviada!</h3>
                <p className="text-white/70">Hemos recibido tu información. Un experto se pondrá en contacto contigo muy pronto.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-8 text-sm text-[#86895d] hover:text-white transition-colors"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-medium text-white/60 uppercase tracking-wider">Nombre</label>
                    <input 
                      required
                      id="name"
                      name="name"
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#86895d] focus:ring-1 focus:ring-[#86895d] transition-all"
                      placeholder="Ej. María Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[11px] font-medium text-white/60 uppercase tracking-wider">Teléfono</label>
                    <input 
                      required
                      id="phone"
                      name="phone"
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#86895d] focus:ring-1 focus:ring-[#86895d] transition-all"
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[11px] font-medium text-white/60 uppercase tracking-wider">Email</label>
                  <input 
                    required
                    id="email"
                    name="email"
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#86895d] focus:ring-1 focus:ring-[#86895d] transition-all"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-[11px] font-medium text-white/60 uppercase tracking-wider">Servicio de Interés</label>
                  <select 
                    id="service"
                    name="service"
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#86895d] focus:ring-1 focus:ring-[#86895d] transition-all appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="mantencion">Mantención de Áreas Verdes</option>
                    <option value="paisajismo">Diseño y Paisajismo</option>
                    <option value="riego">Mantención de Riego Tecnificado</option>
                    <option value="otro">Otro</option>
                  </select>
                  <ValidationError prefix="Service" field="service" errors={state.errors} />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-medium text-white/60 uppercase tracking-wider">Detalles Adicionales</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#86895d] focus:ring-1 focus:ring-[#86895d] transition-all resize-none"
                    placeholder="Cuéntanos un poco sobre tu jardín..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full group relative overflow-hidden bg-[#86895d] text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#777a53] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2 text-sm tracking-widest uppercase">
                    {state.submitting ? "Enviando..." : "Solicitar Cotización"}
                    {!state.submitting && <Send className="size-4 group-hover:translate-x-1 transition-transform" />}
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
