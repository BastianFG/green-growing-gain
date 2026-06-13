import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Droplets, Sun, Wind, Thermometer } from "lucide-react";

export const Route = createFileRoute("/guia-de-cuidado")({
  head: () => ({
    meta: [
      {
        title: "Guía de Cuidado de Plantas de Interior en Chile | Bascharant",
      },
      {
        name: "description",
        content:
          "Aprende a cuidar tus plantas de interior en el clima de Santiago de Chile. Consejos sobre riego, humedad, luz y temperatura para mantener tu selva urbana.",
      },
    ],
  }),
  component: GuiaCuidadoPage,
});

function GuiaCuidadoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-forest text-white py-20 relative overflow-hidden texture-diagonal">
          <div className="container-x">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">Guía Básica de Cuidado</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              El clima mediterráneo de la zona central de Chile tiene sus propios desafíos para las plantas tropicales. Conoce los 4 pilares fundamentales para mantenerlas vivas y felices.
            </p>
          </div>
        </section>

        <section className="py-20 container-x max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="size-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Droplets className="size-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3">1. Riego y Humedad</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Santiago es extremadamente seco, especialmente en verano. Esto significa que la humedad ambiental suele ser inferior al 40%, mientras que plantas como la Monstera o los helechos prefieren un 60%+.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Regla de oro:</strong> Toca la tierra. Riega solo cuando los primeros 3 a 5 cm del sustrato estén secos. Agrupa tus plantas para crear un microclima húmedo o usa un humidificador en los meses calurosos.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="size-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Sun className="size-6 text-amber-500" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3">2. Luz (Evita el sol directo)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  La radiación solar en Chile es muy fuerte desde la primavera. La luz solar directa detrás de una ventana actuará como lupa y quemará las hojas en horas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ubica tus plantas tropicales en espacios con <strong>luz brillante indirecta</strong>. Si la luz del sol entra directamente por tu ventana, usa cortinas visillo para filtrarla.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="size-12 rounded-full bg-red-500/10 flex items-center justify-center">
                  <Thermometer className="size-6 text-red-500" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3">3. Temperatura</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  En invierno, el contraste térmico en Santiago puede ser letal si dejas las plantas pegadas a los ventanales congelados o frente a la estufa/aire acondicionado.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mantén una temperatura estable entre 15°C y 25°C. Aleja las plantas de corrientes de aire frío y no las expongas directamente al calor de la calefacción.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="size-12 rounded-full bg-slate-500/10 flex items-center justify-center">
                  <Wind className="size-6 text-slate-500" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-3">4. Limpieza de hojas</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  El polvo de la ciudad (sobre todo el smog en invierno) obstruye los poros de las hojas, reduciendo su capacidad para hacer fotosíntesis.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Una vez al mes, limpia las hojas de tus ficus o monsteras con un paño húmedo. Esto además ayuda a prevenir plagas comunes como la arañita roja.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
