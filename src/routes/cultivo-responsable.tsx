import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Leaf, Sun, Droplets, Map } from "lucide-react";

export const Route = createFileRoute("/cultivo-responsable")({
  head: () => ({
    meta: [
      {
        title: "Cultivo Responsable y Viveros Locales en Chile | Bascharant",
      },
      {
        name: "description",
        content:
          "Nuestras plantas provienen de viveros certificados en la zona central de Chile. Promovemos el uso de sustratos sustentables y la reducción de plásticos.",
      },
    ],
  }),
  component: CultivoResponsablePage,
});

function CultivoResponsablePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary py-20 lg:py-32 relative overflow-hidden">
          <div className="container-x relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 text-forest">
                <Leaf className="size-5" /> Sustentabilidad Real
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 text-ink">
                Cultivadas con respeto, <br/>
                <span className="italic font-serif font-normal text-forest">desde la raíz.</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                El comercio de plantas también tiene una huella de carbono. En Bascharant nos hemos propuesto hacer las cosas diferentes, colaborando con productores locales en Chile y exigiendo altos estándares ambientales.
              </p>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="py-20 lg:py-24 container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-border">
              <Map className="size-10 text-forest mb-4" />
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Viveros Locales</h3>
              <p className="text-muted-foreground">
                Trabajamos de la mano con productores certificados de la Zona Central (Valparaíso y Metropolitana). Evitamos la importación innecesaria de especies que genera una alta huella de carbono logística, prefiriendo aquellas aclimatadas al entorno nacional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-border">
              <Droplets className="size-10 text-forest mb-4" />
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Sustratos Sustentables</h3>
              <p className="text-muted-foreground">
                Estamos en transición para eliminar la turba de nuestros sustratos (un recurso no renovable crucial para la captura de CO2). Usamos fibra de coco, perlita, compost local y humus de lombriz para dar nutrición responsable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[20px] shadow-sm border border-border sm:col-span-2 lg:col-span-1">
              <Sun className="size-10 text-forest mb-4" />
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Impacto Plástico</h3>
              <p className="text-muted-foreground">
                Nuestros maceteros de cultivo son recuperables. Ofrecemos a nuestros clientes la opción de devolver los contenedores plásticos originales para ser higienizados y re-utilizados en los viveros productores en nuevas cosechas.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest py-20 text-center">
          <div className="container-x">
            <h2 className="font-display text-4xl text-white font-bold mb-6">Elige verde de verdad</h2>
            <Link
                to="/tienda"
                className="inline-flex bg-white text-forest px-10 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-bone transition-colors"
              >
                Conoce nuestras Plantas
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
