import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Users, Sprout, Truck, Palette } from "lucide-react";

export const Route = createFileRoute("/trabaja-con-nosotros")({
  head: () => ({
    meta: [
      {
        title: "Trabaja con Nosotros | Bascharant",
      },
      {
        name: "description",
        content:
          "Únete al equipo de Bascharant en Santiago. Buscamos paisajistas, expertos en atención al cliente botánica y logística verde.",
      },
    ],
  }),
  component: TrabajosPage,
});

function TrabajosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="container-x text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">Trabaja con Nosotros</h1>
            <p className="text-lg text-muted-foreground">
              Queremos llenar los hogares de Chile de naturaleza. ¿Nos ayudas?
            </p>
          </div>
        </section>

        <section className="py-20 container-x max-w-5xl">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <Users className="size-12 text-forest mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold mb-4">Cultura Bascharant</h2>
            <p className="text-muted-foreground leading-relaxed">
              Somos un equipo joven y apasionado por la botánica y el diseño de interiores. Trabajamos desde Quilicura promoviendo un ecosistema de respeto por el medio ambiente, aprendizaje continuo y pasión por el buen servicio.
            </p>
          </div>

          <h3 className="font-display text-2xl font-bold mb-8 border-b border-border pb-4">Áreas de desarrollo</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-bone p-8 rounded-[20px]">
              <Sprout className="size-8 text-forest mb-4" />
              <h4 className="font-bold text-lg mb-2">Botánica y Vivero</h4>
              <p className="text-sm text-muted-foreground">Cuidado diario de nuestro stock, propagación, trasplantes y preparación de pedidos en centro logístico.</p>
            </div>
            <div className="bg-bone p-8 rounded-[20px]">
              <Palette className="size-8 text-forest mb-4" />
              <h4 className="font-bold text-lg mb-2">Atención y Paisajismo</h4>
              <p className="text-sm text-muted-foreground">Asesoría a clientes, diseño de interiores con plantas y diagnóstico fitosanitario online o a domicilio.</p>
            </div>
            <div className="bg-bone p-8 rounded-[20px]">
              <Truck className="size-8 text-forest mb-4" />
              <h4 className="font-bold text-lg mb-2">Logística Verde</h4>
              <p className="text-sm text-muted-foreground">Planificación de rutas y transporte especializado de carga viva en la Región Metropolitana.</p>
            </div>
          </div>

          <div className="bg-forest text-white p-10 rounded-[20px] text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Postulaciones Abiertas</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Constantemente buscamos talento para nuestras temporadas altas. Envíanos tu CV y cuéntanos cuál es tu planta favorita y por qué te gustaría unirte.
            </p>
            <a href="mailto:talento@bascharant.com" className="inline-block bg-white text-forest px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-bone transition-colors">
              Enviar CV
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
