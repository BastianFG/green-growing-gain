import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Sprout, MessageCircle, Home, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/asesoria-de-cuidado")({
  head: () => ({
    meta: [
      {
        title: "Asesoría Botánica y Paisajismo en Santiago | Bascharant",
      },
      {
        name: "description",
        content:
          "Ofrecemos asesoría gratuita para clientes y servicios premium de diagnóstico a domicilio en todo Santiago. Cuidar tus plantas de interior nunca fue tan fácil.",
      },
    ],
  }),
  component: AsesoriaCuidadoPage,
});

function AsesoriaCuidadoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-bone text-ink py-20 lg:py-32 relative overflow-hidden">
          <div className="container-x relative z-10">
            <div className="max-w-2xl">
              <span className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 opacity-80 text-forest">
                <Sprout className="size-5" /> Expertos a tu Servicio
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
                No tienes que tener "mano verde" para tener una <span className="italic font-serif font-normal text-forest">casa viva.</span>
              </h1>
              <p className="text-lg lg:text-xl opacity-80 leading-relaxed mb-8">
                Te acompañamos en todo el proceso. Desde elegir la planta perfecta para la esquina oscura de tu salón, hasta sanar esa Monstera que se puso amarilla. Ofrecemos soporte integral en Santiago de Chile.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 container-x">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Servicio Gratuito */}
            <div className="bg-white border border-border p-8 lg:p-12 rounded-[20px] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-forest text-white text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-bl-lg">
                Incluido
              </div>
              <Mail className="size-10 text-forest mb-6" />
              <h2 className="font-display text-3xl font-bold mb-4">Soporte Botánico Online</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Todos nuestros clientes cuentan con acceso a nuestro equipo de especialistas. Si tienes dudas sobre riego, fertilización o si notas algún comportamiento extraño en una planta comprada en Bascharant, escríbenos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium"><span className="text-forest">✔</span> Guías digitales con cada compra</li>
                <li className="flex items-center gap-2 text-sm font-medium"><span className="text-forest">✔</span> Diagnóstico por fotos vía correo</li>
                <li className="flex items-center gap-2 text-sm font-medium"><span className="text-forest">✔</span> Respuesta en menos de 48h hábiles</li>
              </ul>
              <a href="mailto:hola@bascharant.com" className="inline-flex items-center gap-2 text-forest font-bold uppercase tracking-widest text-xs hover:opacity-80 transition-opacity">
                Escribir consulta <ArrowRight className="size-4" />
              </a>
            </div>

            {/* Servicio Premium */}
            <div className="bg-charcoal text-white border border-[#3A3B45] p-8 lg:p-12 rounded-[20px] shadow-xl relative overflow-hidden">
              <Home className="size-10 text-forest mb-6" />
              <h2 className="font-display text-3xl font-bold mb-4">Asesoría a Domicilio Premium</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Un paisajista o agrónomo experto de nuestro equipo visitará tu hogar u oficina en Santiago para evaluar iluminación, temperatura y proponer soluciones de diseño, o bien realizar un diagnóstico clínico de tus plantas actuales.
              </p>
              <div className="bg-[#2a2b35] p-4 rounded-xl mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Visita Técnica (Stgo)</p>
                  <p className="font-display font-bold text-xl">Desde $40.000 CLP</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Duración</p>
                  <p className="font-display font-bold text-xl">~ 60 min</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-white/90">
                <li className="flex items-center gap-2 text-sm font-medium"><span className="text-forest">✔</span> Evaluación de humedad y luz in-situ</li>
                <li className="flex items-center gap-2 text-sm font-medium"><span className="text-forest">✔</span> Aplicación de tratamientos fitosanitarios</li>
                <li className="flex items-center gap-2 text-sm font-medium"><span className="text-forest">✔</span> Propuesta de interiorismo vegetal</li>
              </ul>
              <a href="https://www.bascharant.store/servicios" target="_blank" rel="noreferrer" className="inline-block bg-forest text-white text-center w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#777a53] transition-colors">
                Agendar Visita
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
