import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ShieldCheck, HeartPulse, RefreshCw, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/garantia-verde")({
  head: () => ({
    meta: [
      {
        title: "Garantía Verde: Compra Plantas Vivas con Seguridad | Bascharant",
      },
      {
        name: "description",
        content:
          "Si tu planta no se adapta o llega dañada a tu hogar en Santiago, nuestra Garantía Verde te protege con reposición sin costo durante los primeros 15 días.",
      },
    ],
  }),
  component: GarantiaVerdePage,
});

function GarantiaVerdePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-charcoal text-bone py-20 lg:py-32 relative overflow-hidden">
          <div className="container-x relative z-10">
            <div className="max-w-2xl">
              <span className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 opacity-80 text-forest">
                <ShieldCheck className="size-5" /> Confianza Absoluta
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
                Tu tranquilidad está <span className="italic font-serif font-normal text-forest">garantizada.</span>
              </h1>
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed mb-8">
                Sabemos que comprar plantas vivas por internet genera dudas. A diferencia de viveros tradicionales, nosotros nos hacemos cargo de la adaptación de tu planta. Si no sobrevive sus primeros días contigo, lo solucionamos.
              </p>
              <Link
                to="/tienda"
                className="inline-flex bg-forest text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-[#777a53] transition-colors"
              >
                Explorar Plantas
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 container-x">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-ink mb-4">¿Cómo funciona la Garantía Verde?</h2>
            <p className="text-muted-foreground text-lg">Te protegemos en los dos momentos más críticos: la llegada a tu casa y el periodo de aclimatación.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-[20px] shadow-sm border border-border">
              <HeartPulse className="size-12 text-forest mb-6" />
              <h3 className="font-display text-2xl font-bold text-ink mb-4">1. Llegada Perfecta</h3>
              <p className="text-muted-foreground leading-relaxed">
                Si al recibir tu pedido notas que la maceta se rompió, los tallos principales están quebrados o la planta sufrió estrés térmico severo durante el envío en Santiago, <strong>tienes 24 horas para notificarnos</strong> con fotos y gestionaremos un reemplazo inmediato sin costo extra.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[20px] shadow-sm border border-border">
              <RefreshCw className="size-12 text-forest mb-6" />
              <h3 className="font-display text-2xl font-bold text-ink mb-4">2. Adaptación (15 Días)</h3>
              <p className="text-muted-foreground leading-relaxed">
                El cambio de ambiente es duro para las plantas de interior. Si dentro de los primeros 15 días tu planta decae abruptamente o muere, a pesar de seguir nuestra guía de cuidados, <strong>te enviaremos una nueva o te devolveremos el dinero</strong> en crédito para la tienda.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 py-16">
          <div className="container-x max-w-4xl">
            <div className="bg-bone p-8 rounded-[20px] flex gap-6 items-start">
              <AlertTriangle className="size-8 text-ink/40 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-ink mb-2">Consideraciones Importantes</h4>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-muted-foreground">
                  <li>La garantía no cubre daños causados por mascotas, caídas accidentales en el hogar o sobre riego severo evidente.</li>
                  <li>Las plantas son seres vivos, es normal que caigan 1 o 2 hojas viejas al adaptarse. La garantía aplica para deterioro general de la salud de la planta.</li>
                  <li>Para hacer válida la garantía, requeriremos que nos contactes por correo adjuntando imágenes del estado de la planta y detalles de luz/riego proporcionados.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
