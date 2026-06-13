import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import aboutImg from "@/assets/hero-plant.jpg"; // Reusing an asset

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      {
        title: "Nuestra Historia | Bascharant",
      },
      {
        name: "description",
        content:
          "Conoce la historia de Bascharant. Somos un equipo apasionado por la botánica y el diseño, cultivando en Santiago de Chile para llevar naturaleza a tu hogar.",
      },
    ],
  }),
  component: SobreNosotrosPage,
});

function SobreNosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-charcoal text-bone py-20 lg:py-32 relative overflow-hidden">
          <div className="container-x text-center max-w-3xl mx-auto">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Cultivando un estilo de vida <span className="italic font-serif font-normal text-forest">más verde.</span>
            </h1>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              Bascharant nació en Santiago con una idea simple: la naturaleza no debe estar reservada solo para el exterior. Creemos en el poder transformador de las plantas dentro del hogar.
            </p>
          </div>
        </section>

        <section className="py-20 container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[20px] overflow-hidden bg-secondary">
              <img src={aboutImg} alt="Nuestro equipo en el vivero" className="w-full h-full object-cover aspect-[4/5] lg:aspect-square" />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">De la tierra a tu casa</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Operamos desde nuestro vivero central en Quilicura, donde seleccionamos, aclimatamos y preparamos cada planta que ves en nuestro catálogo. Nos alejamos del modelo de importación masiva para apostar por el cultivo local y sustentable en la zona central de Chile.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">Diseño y Botánica</h2>
                <p className="text-muted-foreground leading-relaxed">
                  No solo vendemos plantas; vendemos diseño interior vivo. Curamos cuidadosamente nuestra selección de maceteros de cerámica, greda y polímeros reciclados para que armonicen con estéticas contemporáneas.
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <blockquote className="font-display text-2xl italic text-ink border-l-4 border-forest pl-6 py-2">
                  "Nuestra misión es que cualquier persona, sin importar su nivel de experiencia, pueda mantener un hogar verde y sano."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
