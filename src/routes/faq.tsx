import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      {
        title: "Preguntas Frecuentes | Bascharant",
      },
      {
        name: "description",
        content:
          "Resuelve tus dudas sobre pagos con Webpay, tiempos de despacho en Santiago, devoluciones y cuidados de tus nuevas plantas de interior.",
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    category: "Envíos y Despachos",
    items: [
      { q: "¿A qué comunas despachan?", a: "Despachamos a toda la Región Metropolitana. Las tarifas varían según la distancia desde nuestro centro en Quilicura." },
      { q: "¿Hacen envíos a regiones?", a: "Para proteger la integridad de las plantas vivas, por el momento nuestro servicio estándar es solo dentro de Santiago. Para proyectos especiales en regiones, contáctanos directamente." },
      { q: "¿Cuánto tarda en llegar mi pedido?", a: "Una vez confirmado el pago, procesamos y entregamos tu pedido en un rango de 24 a 72 horas hábiles." },
    ]
  },
  {
    category: "Pagos",
    items: [
      { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos tarjetas de crédito y débito chilenas a través de Webpay Plus, y transferencia bancaria directa (Khipu)." },
      { q: "¿Puedo pagar contra entrega?", a: "No, por seguridad de nuestros repartidores todos los pedidos deben estar pagados y confirmados antes del despacho." },
    ]
  },
  {
    category: "Plantas y Garantías",
    items: [
      { q: "La planta que recibí es un poco diferente a la foto.", a: "Las plantas son seres vivos y cada una es única. La foto es referencial respecto al tamaño de maceta y volumen general, pero la disposición exacta de las hojas siempre variará." },
      { q: "¿Qué incluye la Garantía Verde?", a: "Cubre cualquier daño estructural por despacho (informando en 24h) y problemas graves de adaptación en los primeros 15 días, con reposición sin costo." },
    ]
  }
];

function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="container-x">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Todo lo que necesitas saber sobre comprar y recibir tus plantas en Santiago.
            </p>
          </div>
        </section>

        <section className="py-20 container-x max-w-4xl">
          <div className="space-y-16">
            {faqs.map((cat, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl font-bold text-ink mb-6 pb-2 border-b border-border">{cat.category}</h2>
                <div className="space-y-8">
                  {cat.items.map((item, j) => (
                    <div key={j}>
                      <h3 className="text-lg font-bold text-ink mb-2">{item.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
