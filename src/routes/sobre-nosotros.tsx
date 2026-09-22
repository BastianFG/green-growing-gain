import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import aboutImg from "@/assets/hero-plant.jpg"; // Reusing an asset

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      {
        title: "Nuestra Historia | Bascharant Home",
      },
      {
        name: "description",
        content:
          "Conoce la historia de Bascharant Home. Respaldados por Paisajismo Bascharant, traemos nuestra experiencia corporativa de Santiago al diseño y mantención de parcelas en Frutillar.",
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
              Excelencia corporativa <br/><span className="italic font-serif font-normal text-forest">ahora en tu jardín.</span>
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm md:text-base">
              Bascharant Home nace como la división residencial de Bascharant Empresas, una empresa con sólida trayectoria en obras corporativas, viales y de gran escala. Ahora, traemos toda esa experiencia y capacidad operativa a Santiago, Región de Los Lagos y Zapallar.
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
                <h2 className="font-display text-3xl font-bold mb-4">De Santiago al Sur</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Históricamente, nuestra base de operaciones principal se ha encontrado en Quilicura, Región Metropolitana, desde donde hemos ejecutado megaproyectos de paisajismo para inmobiliarias, autopistas y organismos públicos. Hoy, hemos ampliado nuestra cobertura para llevar esa calidad industrial al cuidado de parcelas, residencias y proyectos de alto estándar en Frutillar, Puerto Varas y sus alrededores.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">Maquinaria y Profesionalismo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A diferencia de los proveedores de mantención tradicionales en la zona sur, contamos con logística propia, maquinaria de alto rendimiento y un equipo técnico calificado para ejecutar obras viales privadas, movimiento de tierras y sistemas de riego automatizado complejos.
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <blockquote className="font-display text-2xl italic text-ink border-l-4 border-forest pl-6 py-2">
                  "Nuestra misión es aplicar el rigor y la eficiencia de las obras a gran escala, en el cuidado íntimo de tu hogar en el Sur."
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
