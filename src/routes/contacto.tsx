import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      {
        title: "Contacto | Bascharant",
      },
      {
        name: "description",
        content:
          "Ponte en contacto con Bascharant. Escríbenos para consultas de ventas corporativas, despachos en Santiago o asesoría botánica.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="container-x text-center max-w-2xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">Hablemos</h1>
            <p className="text-lg text-muted-foreground">
              ¿Tienes dudas sobre un pedido, buscas plantas para tu oficina en Santiago o necesitas un proyecto de paisajismo? Estamos aquí para ayudarte.
            </p>
          </div>
        </section>

        <section className="py-20 container-x">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Información Directa</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="size-6 text-forest shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-ink">Correo Electrónico</p>
                      <a href="mailto:hola@bascharant.com" className="text-muted-foreground hover:text-forest transition-colors">hola@bascharant.com</a>
                      <p className="text-sm text-muted-foreground mt-1">Respondemos en menos de 24h hábiles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="size-6 text-forest shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-ink">WhatsApp / Teléfono</p>
                      <a href="#" className="text-muted-foreground hover:text-forest transition-colors">+56 9 1234 5678</a>
                      <p className="text-sm text-muted-foreground mt-1">Lunes a Viernes de 09:00 a 18:00 hrs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="size-6 text-forest shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-ink">Centro de Operaciones</p>
                      <p className="text-muted-foreground">Quilicura, Santiago, Chile.</p>
                      <p className="text-sm text-muted-foreground mt-1">Atención presencial exclusiva con cita previa.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bone p-8 rounded-[20px] border border-border">
                <h3 className="font-bold text-ink mb-2">Ventas Corporativas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Si necesitas regalos corporativos verdes o plantas al por mayor para oficinas, solicita nuestro catálogo B2B.
                </p>
                <a href="mailto:empresas@bascharant.com" className="text-forest font-bold tracking-widest text-xs uppercase hover:opacity-80 transition-opacity">
                  Contactar área empresas →
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 lg:p-10 rounded-[20px] shadow-sm border border-border">
              <h2 className="font-display text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Nombre completo</label>
                  <input type="text" id="name" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 outline-none focus:border-forest transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Correo electrónico</label>
                  <input type="email" id="email" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 outline-none focus:border-forest transition-colors" placeholder="tu@correo.cl" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">Motivo</label>
                  <select id="subject" className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 outline-none focus:border-forest transition-colors">
                    <option>Consulta sobre mi pedido</option>
                    <option>Asesoría de cuidado</option>
                    <option>Ventas empresas</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Mensaje</label>
                  <textarea id="message" rows={4} className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 outline-none focus:border-forest transition-colors resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
                </div>
                <button type="submit" className="w-full bg-forest text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#777a53] transition-colors flex items-center justify-center gap-2">
                  Enviar Mensaje <Send className="size-4" />
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
