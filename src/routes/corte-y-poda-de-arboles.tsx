import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import corteYPodaImg from "@/assets/corte_y_poda.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/corte-y-poda-de-arboles")({
  head: () => ({
    meta: [
      { title: "Corte y Poda de Árboles en Parcelas y Hogar | Bascharant Home" },
      { name: "description", content: "Servicio experto de corte y poda de árboles, arbustos y cercos vivos para tu hogar o parcela. Mantén tu jardín seguro, sano y con una estética envidiable." },
      { name: "keywords", content: "corte y poda, poda de árboles, paisajismo, mantención de jardines, poda de arbustos, limpieza de parcelas" },
    ],
  }),
  component: CorteYPodaPage,
});

function CorteYPodaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[104px]">
        {/* Hero Section */}
        <section className="bg-charcoal text-bone py-16 lg:py-24 relative overflow-hidden">
          <div className="container-x max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Servicio de <span className="italic font-serif font-normal text-forest">Corte y Poda</span> para tu Jardín
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed text-lg max-w-2xl mx-auto">
              Dale a tus árboles y arbustos el cuidado que necesitan para crecer sanos, fuertes y seguros. Ideal para casas y grandes parcelas.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={corteYPodaImg} alt="Corte y poda de árboles y arbustos" className="w-full h-full object-cover aspect-video lg:aspect-square" />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-charcoal">¿Por qué es importante la poda?</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  El corte y la poda regular no solo mejoran la apariencia de tu hogar, sino que son vitales para la salud de las plantas. Retirar ramas secas o enfermas previene accidentes en tu parcela, permite que entre más luz a tu jardín y estimula un crecimiento frondoso y ordenado.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-xl text-charcoal">Lo que incluye nuestro servicio:</h3>
                <ul className="space-y-3">
                  {[
                    "Poda de formación para árboles jóvenes y arbustos.",
                    "Poda de limpieza: eliminación de ramas secas, dañadas o peligrosas.",
                    "Rebaje de cercos vivos y setos para mantener la privacidad y estética.",
                    "Despeje de áreas para prevenir riesgos por caídas de ramas.",
                    "Retiro y manejo de los restos vegetales (opcional)."
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
                  Cotiza tu Servicio Aquí
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
