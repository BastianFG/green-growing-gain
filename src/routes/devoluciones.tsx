import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RefreshCcw, FileText, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/devoluciones")({
  head: () => ({
    meta: [
      {
        title: "Política de Devoluciones y Retracto | Bascharant",
      },
      {
        name: "description",
        content:
          "Conoce nuestra política de devoluciones y derecho a retracto en Chile (SERNAC) para compras online de plantas, maceteros y accesorios.",
      },
    ],
  }),
  component: DevolucionesPage,
});

function DevolucionesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary py-20 relative overflow-hidden">
          <div className="container-x">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">Políticas de Devolución</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Nuestra prioridad es que recibas plantas y productos en perfecto estado. Revisa nuestras políticas basadas en la normativa chilena vigente (SERNAC).
            </p>
          </div>
        </section>

        <section className="py-20 container-x max-w-4xl">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <RefreshCcw className="size-6 text-forest" />
                <h2 className="font-display text-2xl font-bold">1. Derecho a Retracto (10 días)</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En cumplimiento con la Ley Pro Consumidor de Chile, tienes derecho a arrepentirte de tu compra online dentro de los <strong>primeros 10 días</strong> desde la recepción del producto. 
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>El producto debe ser devuelto en su empaque original, sin uso y en perfectas condiciones.</li>
                <li>Los costos de envío por la devolución corren por cuenta del cliente.</li>
                <li><strong>Excepción (Plantas):</strong> Al ser organismos vivos perecederos que pueden sufrir daños irreversibles por cambios de clima y manipulación, <strong>el derecho a retracto de 10 días NO aplica para plantas vivas</strong> una vez entregadas en buen estado. Solo aplica a maceteros y accesorios.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="size-6 text-forest" />
                <h2 className="font-display text-2xl font-bold">2. Plantas Dañadas en Tránsito</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si tu planta llega con daños estructurales debido al transporte (maceta rota, tallo principal quebrado), debes notificarnos dentro de las <strong>primeras 24 horas</strong> de haberla recibido.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para esto, por favor envíanos un correo a <strong>hola@bascharant.com</strong> con fotos claras del producto y la caja. Organizaremos el retiro y reemplazo del ejemplar sin costo extra para ti.
              </p>
            </div>

            <div className="bg-bone p-8 rounded-[20px] border border-border">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="size-6 text-forest" />
                <h2 className="font-display text-2xl font-bold">3. Nuestra Garantía Verde (Exclusivo Bascharant)</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A diferencia del mercado tradicional, te damos 15 días de cobertura si tu planta no logra adaptarse a tu hogar, a pesar de seguir las indicaciones de luz y riego. Para conocer más sobre cómo funciona este beneficio único, revisa la sección correspondiente.
              </p>
              <Link to="/garantia-verde" className="text-forest font-bold tracking-widest text-xs uppercase hover:opacity-80 transition-opacity">
                Ver Garantía Verde →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
