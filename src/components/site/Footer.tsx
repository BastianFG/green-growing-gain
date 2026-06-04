import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp, easeOutQuint } from "@/lib/motion";

const cols = [
  {
    title: "Comprar",
    links: [
      "Plantas de interior",
      "Plantas pet friendly",
      "Maceteros",
      "Jardinería",
      "Regalos verdes",
    ],
  },
  {
    title: "Ayuda",
    links: [
      "Envíos y entregas",
      "Devoluciones",
      "Guía de cuidado",
      "Preguntas frecuentes",
      "Contáctanos",
    ],
  },
  {
    title: "Bascharant",
    links: [
      "Sobre nosotros",
      "Sostenibilidad",
      "Programa de fidelidad",
      "Tiendas",
      "Trabaja con nosotros",
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      {/* ── Mega top band ── */}
      <div className="bg-charcoal text-bone overflow-hidden">
        <div className="container-x py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-end">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer(0.12, 0.05)}
          >
            <motion.p
              variants={fadeUp(16, 0.6)}
              className="eyebrow text-bone/50 mb-5"
            >
              Cultivo responsable · Chile
            </motion.p>
            <motion.h2
              variants={fadeUp(28, 0.85)}
              className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[1.02]"
            >
              Vivir con{" "}
              <span className="italic">plantas</span>
              <br />
              es vivir mejor.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: easeOutQuint }}
            className="lg:text-right"
          >
            <p className="text-sm text-bone/60 max-w-xs lg:ml-auto leading-relaxed mb-8">
              Plantas seleccionadas, maceteros y todo lo necesario
              para cultivar un hogar más sereno.
            </p>
            <form className="flex border-b border-bone/30 focus-within:border-bone transition max-w-sm lg:ml-auto">
              <input
                type="email"
                required
                placeholder="Tu correo"
                aria-label="Correo electrónico"
                className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-bone/40 text-bone"
              />
              <button
                type="submit"
                className="text-xs tracking-[0.2em] uppercase py-3 px-2 text-bone/70 hover:text-bone transition flex items-center gap-2"
              >
                Suscribir <ArrowRight className="size-3.5" strokeWidth={1.5} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── Links grid ── */}
      <div className="bg-bone">
        <div className="container-x py-16 grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="font-display text-3xl mb-4">
              Bascharant<span className="italic">.</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Plantas, maceteros y objetos para una vida más verde. Cultivados
              con cuidado en Chile.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <motion.a
                href="https://www.instagram.com/paisajismobascharant"
                aria-label="Instagram"
                className="size-9 border border-border rounded-full flex items-center justify-center text-muted-foreground"
                whileHover={{ scale: 1.1, borderColor: "var(--ink)", color: "var(--ink)" }}
                transition={{ duration: 0.2 }}
              >
                <Instagram className="size-4" strokeWidth={1.5} />
              </motion.a>
              {/* Pinterest SVG */}
              <motion.a
                href="#"
                aria-label="Pinterest"
                className="size-9 border border-border rounded-full flex items-center justify-center text-muted-foreground"
                whileHover={{ scale: 1.1, borderColor: "var(--ink)", color: "var(--ink)" }}
                transition={{ duration: 0.2 }}
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.266.64 1.266 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.561 0-2.387-1.715-4.054-4.163-4.054-2.835 0-4.498 2.126-4.498 4.323 0 .856.33 1.774.74 2.276a.3.3 0 0 1 .069.284c-.075.313-.243 1.002-.277 1.142-.044.181-.148.219-.34.132C6.4 15.23 5.5 13.2 5.5 11.4c0-3.1 2.253-5.95 6.5-5.95 3.41 0 6.063 2.432 6.063 5.68 0 3.39-2.137 6.12-5.107 6.12-1 0-1.937-.52-2.26-1.13l-.615 2.293c-.222.856-.822 1.926-1.225 2.58.924.285 1.9.44 2.908.44C17.523 22 22 17.523 22 12S17.523 2 12 2z"/>
                </svg>
              </motion.a>
              {/* TikTok SVG */}
              <motion.a
                href="#"
                aria-label="TikTok"
                className="size-9 border border-border rounded-full flex items-center justify-center text-muted-foreground"
                whileHover={{ scale: 1.1, borderColor: "var(--ink)", color: "var(--ink)" }}
                transition={{ duration: 0.2 }}
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.79a8.18 8.18 0 0 0 4.79 1.53V6.87a4.85 4.85 0 0 1-1.02-.18z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="eyebrow mb-5">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="container-x py-5 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
            <span>
              © {new Date().getFullYear()} Bascharant · Todos los derechos reservados
            </span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
              <a href="#" className="hover:text-foreground transition-colors">Términos</a>
              <span>Hecho con cuidado en Santiago</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
