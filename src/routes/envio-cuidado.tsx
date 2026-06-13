import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Truck, MapPin, Package, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/envio-cuidado")({
  head: () => ({
    meta: [
      {
        title: "Envío Cuidado de Plantas en Santiago | Bascharant",
      },
      {
        name: "description",
        content:
          "Envíos especializados de plantas a domicilio en todo Santiago. Conoce nuestras tarifas por comuna desde Quilicura y recibe tus plantas en perfecto estado.",
      },
    ],
  }),
  component: EnvioCuidadoPage,
});

const deliveryZones = [
  { zone: "Zona Norte (Local)", price: "$2.500", comunas: "Quilicura" },
  { zone: "Zona Norte Extendida", price: "$3.500", comunas: "Conchalí, Renca, Huechuraba, Independencia, Recoleta" },
  { zone: "Zona Centro & Norponiente", price: "$4.000", comunas: "Santiago Centro, Quinta Normal, Cerro Navia, Lo Prado, Pudahuel Sur" },
  { zone: "Zona Centro Sur & Oriente", price: "$4.500", comunas: "Providencia, Ñuñoa, Macul, San Miguel, San Joaquín, Pedro Aguirre Cerda, Estación Central, Cerrillos" },
  { zone: "Zona Oriente Premium", price: "$5.000", comunas: "Las Condes, Vitacura, La Reina, Peñalolén" },
  { zone: "Zona Sur & Poniente Extendida", price: "$5.500", comunas: "Maipú, La Florida, Lo Espejo, La Cisterna, San Ramón" },
  { zone: "Zona Periférica", price: "$6.500", comunas: "Lo Barnechea, Puente Alto, San Bernardo, El Bosque, La Pintana" },
];

function EnvioCuidadoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-forest text-white py-20 lg:py-32 relative overflow-hidden texture-diagonal">
          <div className="container-x relative z-10">
            <div className="max-w-2xl">
              <span className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 opacity-80">
                <Truck className="size-5" /> Envíos Seguros
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
                Llevamos naturaleza a tu puerta, <span className="italic font-serif font-normal">con cuidado.</span>
              </h1>
              <p className="text-lg lg:text-xl opacity-90 leading-relaxed mb-8">
                El transporte de plantas vivas requiere logística especializada. Desde nuestro centro en Quilicura, hemos diseñado rutas y un embalaje antivuelco para que tu nueva planta llegue perfecta a cualquier rincón de Santiago.
              </p>
              <Link
                to="/tienda"
                className="inline-flex bg-white text-forest px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs hover:bg-bone transition-colors"
              >
                Ir a la Tienda
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-24 container-x">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-bone p-8 rounded-[20px]">
              <Package className="size-10 text-forest mb-4" />
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Empaque Antivuelco</h3>
              <p className="text-muted-foreground">
                No usamos cajas estándar. Nuestro embalaje se ajusta a la maceta e impide que la tierra se derrame o las hojas se quiebren en el camino.
              </p>
            </div>
            <div className="bg-bone p-8 rounded-[20px]">
              <Clock className="size-10 text-forest mb-4" />
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Rutas Optimizadas</h3>
              <p className="text-muted-foreground">
                Minimizamos el tiempo que tu planta pasa en tránsito (24-72h) para evitar estrés hídrico y térmico. Despachamos cuidando el clima del día.
              </p>
            </div>
            <div className="bg-bone p-8 rounded-[20px]">
              <ShieldCheck className="size-10 text-forest mb-4" />
              <h3 className="font-display text-2xl font-bold text-ink mb-3">Garantía de Llegada</h3>
              <p className="text-muted-foreground">
                Si a pesar de nuestros cuidados tu planta sufre algún daño estructural durante el transporte, te la reponemos sin costo adicional.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container-x max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-ink mb-4">Costos de Envío por Comuna</h2>
              <p className="text-muted-foreground">
                Tarifas de despacho especializado calculadas en base a la distancia desde nuestro vivero principal en Quilicura.
              </p>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm overflow-hidden border border-border">
              <div className="hidden sm:grid grid-cols-12 gap-4 bg-forest/5 p-6 border-b border-border">
                <div className="col-span-3 font-semibold text-sm tracking-wider uppercase text-ink/70">Zona</div>
                <div className="col-span-7 font-semibold text-sm tracking-wider uppercase text-ink/70">Comunas</div>
                <div className="col-span-2 font-semibold text-sm tracking-wider uppercase text-ink/70 text-right">Tarifa</div>
              </div>
              
              <div className="divide-y divide-border">
                {deliveryZones.map((zone, i) => (
                  <div key={i} className="grid sm:grid-cols-12 gap-2 sm:gap-4 p-6 hover:bg-forest/5 transition-colors">
                    <div className="col-span-3 font-medium text-ink flex items-center gap-2">
                      <MapPin className="size-4 text-forest hidden sm:block" /> {zone.zone}
                    </div>
                    <div className="col-span-7 text-muted-foreground text-sm leading-relaxed">
                      {zone.comunas}
                    </div>
                    <div className="col-span-2 text-right font-display text-lg font-bold text-forest mt-2 sm:mt-0">
                      {zone.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>* Para despachos a regiones o compras mayoristas, por favor contáctanos directamente para coordinar un transporte especializado.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
