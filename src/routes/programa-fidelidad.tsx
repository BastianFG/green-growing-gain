import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Gift, Star, Leaf } from "lucide-react";

export const Route = createFileRoute("/programa-fidelidad")({
  head: () => ({
    meta: [
      {
        title: "Club Bascharant | Programa de Fidelidad",
      },
      {
        name: "description",
        content:
          "Únete al Club Bascharant. Acumula puntos (Semillas) con cada compra de plantas en Chile y canjéalos por descuentos exclusivos y asesorías premium.",
      },
    ],
  }),
  component: ProgramaFidelidadPage,
});

function ProgramaFidelidadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-forest text-white py-20 lg:py-32 relative overflow-hidden texture-diagonal">
          <div className="container-x text-center max-w-3xl mx-auto">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">Club Bascharant</h1>
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
              Premiamos tu pasión por la naturaleza. Cultiva tu colección de plantas de interior y acumula beneficios reales en nuestra tienda.
            </p>
          </div>
        </section>

        <section className="py-20 container-x max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div className="bg-bone p-8 rounded-[20px]">
              <div className="mx-auto size-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Leaf className="size-8 text-forest" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">1. Gana Semillas</h3>
              <p className="text-muted-foreground">Por cada $1.000 CLP de compra en nuestra web, recibes 10 Semillas.</p>
            </div>
            <div className="bg-bone p-8 rounded-[20px]">
              <div className="mx-auto size-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Star className="size-8 text-amber-500" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">2. Sube de Nivel</h3>
              <p className="text-muted-foreground">Mientras más semillas acumules, subes a categorías superiores (Brote, Hoja, Selva) con mejores beneficios.</p>
            </div>
            <div className="bg-bone p-8 rounded-[20px]">
              <div className="mx-auto size-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Gift className="size-8 text-rose-500" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">3. Canjea</h3>
              <p className="text-muted-foreground">Usa tus Semillas para obtener envío gratis en Santiago, descuentos directos o visitas técnicas a domicilio.</p>
            </div>
          </div>
          
          <div className="bg-secondary/50 rounded-[20px] p-10 text-center border border-border">
            <h2 className="font-display text-3xl font-bold mb-4">Próximamente disponible</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Estamos ultimando los detalles de la plataforma para nuestro Club de Fidelidad. Si ya has realizado compras, no te preocupes, estamos guardando tu historial para asignarte tus semillas de manera retroactiva.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
