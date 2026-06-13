import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Store, Truck, MapPin } from "lucide-react";

export const Route = createFileRoute("/tiendas")({
  head: () => ({
    meta: [
      {
        title: "Nuestras Tiendas | Bascharant",
      },
      {
        name: "description",
        content:
          "Somos una tienda 100% online especializada en plantas de interior con envíos en todo Santiago de Chile. Conoce nuestra logística desde Quilicura.",
      },
    ],
  }),
  component: TiendasPage,
});

function TiendasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-charcoal text-bone py-20 relative overflow-hidden">
          <div className="container-x text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">Nuestras Tiendas</h1>
            <p className="text-lg opacity-80">
              Somos nativos digitales. Llevamos el vivero a la puerta de tu casa.
            </p>
          </div>
        </section>

        <section className="py-20 container-x max-w-4xl">
          <div className="bg-bone rounded-[20px] p-10 lg:p-16 border border-border text-center">
            <Store className="size-16 text-forest mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-ink mb-4">100% Tienda Online</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Actualmente no contamos con sucursales físicas abiertas al público para vitrineo. Operamos como un e-commerce botánico con despacho directo en toda la Región Metropolitana, garantizando que las plantas pasen del cuidado experto de nuestro equipo en Quilicura, directo a tus manos.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <Truck className="size-8 text-forest mb-4" />
                <h3 className="font-bold text-ink mb-2">Despacho en RM</h3>
                <p className="text-sm text-muted-foreground">Cobertura completa en Santiago urbano. Transporte seguro y especializado para plantas vivas en 24-72h.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <MapPin className="size-8 text-forest mb-4" />
                <h3 className="font-bold text-ink mb-2">Centro de Retiro</h3>
                <p className="text-sm text-muted-foreground">Disponemos de opción de "Retiro en Vivero" en nuestra bodega central en Quilicura, solo con compra previa confirmada.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
