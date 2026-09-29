import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import videoAreasVerdes from "@/assets/Video Project 8.mp4";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/mantencion-de-areas-verdes")({
  head: () => ({
    meta: [
      { title: "Mantención de Áreas Verdes y Jardines | Bascharant Home" },
      { name: "description", content: "Expertos en mantención de áreas verdes para hogares y parcelas. Corte de pasto, fertilización, control de malezas y cuidado integral de tu jardín." },
      { name: "keywords", content: "mantención de áreas verdes, cuidado de jardines, corte de pasto, paisajismo, parcelas, jardinería" },
    ],
  }),
  component: AreasVerdesPage,
});

function AreasVerdesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[104px]">
        {/* Hero Section */}
        <section className="bg-charcoal text-bone py-16 lg:py-24 relative overflow-hidden">
          <div className="container-x max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Mantención de <span className="italic font-serif font-normal text-forest">Áreas Verdes</span>
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed text-lg max-w-2xl mx-auto">
              Disfruta de un jardín impecable todo el año sin preocuparte del trabajo pesado. Nos encargamos de todo para que tu parcela u hogar luzca perfecto.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-charcoal">El jardín que siempre soñaste</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Mantener un área verde bonita y saludable requiere tiempo, conocimiento y constancia. Nuestro equipo de profesionales en paisajismo se hace cargo de la mantención integral de tu entorno natural, adaptándose a las necesidades de cada estación del año.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-xl text-charcoal">Nuestro servicio integral abarca:</h3>
                <ul className="space-y-3">
                  {[
                    "Corte de césped profesional, orillado y perfilado de bordes.",
                    "Control y extracción manual o química de malezas.",
                    "Fertilización y nutrición de plantas y prados para un verde intenso.",
                    "Revisión y ajuste del sistema de riego para evitar pérdidas de agua.",
                    "Limpieza general de hojas secas y basuras del jardín."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="size-6 text-forest shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Link
                  to="/servicios"
                  className="inline-block bg-forest hover:bg-forest/90 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-xl"
                >
                  Solicita una Visita a Terreno
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <video 
                src={videoAreasVerdes} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover aspect-video lg:aspect-square" 
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
