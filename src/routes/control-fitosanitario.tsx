import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import fitosanitarioImg from "@/assets/control_fitosanitario.jpg";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/control-fitosanitario")({
  head: () => ({
    meta: [
      { title: "Control Fitosanitario y Plagas en Jardines | Bascharant Home" },
      { name: "description", content: "Protege tu jardín y parcela con nuestro servicio de control fitosanitario. Eliminación de plagas, hongos y enfermedades en plantas de manera segura y efectiva." },
      { name: "keywords", content: "control fitosanitario, fumigación de jardines, control de plagas, plantas enfermas, cuidado de plantas, hogar, parcelas" },
    ],
  }),
  component: FitosanitarioPage,
});

function FitosanitarioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[104px]">
        {/* Hero Section */}
        <section className="bg-charcoal text-bone py-16 lg:py-24 relative overflow-hidden">
          <div className="container-x max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Control <span className="italic font-serif font-normal text-forest">Fitosanitario</span> de Jardines
            </h1>
            <p className="text-muted-foreground mt-4 leading-relaxed text-lg max-w-2xl mx-auto">
              Mantén tus plantas libres de plagas y enfermedades. Protegemos tu inversión verde con tratamientos seguros para tu hogar y familia.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={fitosanitarioImg} alt="Control fitosanitario y aplicación de productos en plantas" className="w-full h-full object-cover aspect-video lg:aspect-square" />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4 text-charcoal">Protección total para tus plantas</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Los pulgones, las conchuelas, los hongos y otras plagas pueden destruir años de cuidado en tu jardín rápidamente. Nuestro servicio de control fitosanitario diagnostica el problema y aplica la solución correcta para devolverle la salud y el vigor a tus plantas, respetando siempre el entorno de tu hogar.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-xl text-charcoal">Beneficios de nuestro servicio:</h3>
                <ul className="space-y-3">
                  {[
                    "Diagnóstico experto de enfermedades, hongos y ataque de insectos.",
                    "Aplicación de productos específicos, seguros y de alta calidad.",
                    "Tratamientos preventivos para proteger tu jardín antes del ataque de plagas estacionales.",
                    "Asesoría para el cuidado posterior de las plantas tratadas.",
                    "Especial enfoque en grandes superficies y parcelas donde las plagas se propagan rápido."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <ShieldCheck className="size-6 text-forest shrink-0" />
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
                  Contáctanos para una Evaluación
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
