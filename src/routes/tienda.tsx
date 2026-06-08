import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products, fetchShopifyProducts } from "@/lib/products";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

export const Route = createFileRoute("/tienda")({
  loader: async () => {
    const shopifyProducts = await fetchShopifyProducts();
    return { products: shopifyProducts };
  },
  head: () => ({
    meta: [
      { title: "Tienda — Bascharant" },
      { name: "description", content: "Explora plantas de interior, maceteros, jardinería y decoración premium." },
      { property: "og:title", content: "Tienda — Bascharant" },
      { property: "og:description", content: "Explora plantas, maceteros y jardinería premium." },
      { property: "og:url", content: "/tienda" },
    ],
    links: [{ rel: "canonical", href: "/tienda" }],
  }),
  component: Shop,
});

const CATEGORIES = ["Todas", "Plantas", "Maceteros", "Jardinería", "Decoración", "Cactáceas"] as const;
const CARE = ["Fácil", "Medio", "Avanzado"] as const;
const TAGS = ["Best Seller", "Nuevo", "Pet Friendly", "Poca luz"] as const;

function Shop() {
  const { products: shopifyProducts } = Route.useLoaderData();
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todas");
  const [care, setCare] = useState<Set<string>>(new Set());
  const [tags, setTags] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<"recommended" | "price-asc" | "price-desc">("recommended");
  const [openFilters, setOpenFilters] = useState(false);

  const filtered = useMemo(() => {
    let r = shopifyProducts.filter((p) => (cat === "Todas" ? true : p.category === cat));
    if (care.size) r = r.filter((p) => p.care && care.has(p.care));
    if (tags.size) r = r.filter((p) => p.tag && tags.has(p.tag));
    if (sort === "price-asc") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [shopifyProducts, cat, care, tags, sort]);

  const toggle = (set: Set<string>, value: string, fn: (s: Set<string>) => void) => {
    const next = new Set(set);
    next.has(value) ? next.delete(value) : next.add(value);
    fn(next);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Editorial banner */}
        <section className="container-x pt-10 lg:pt-14">
          <nav aria-label="Migas de pan" className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Inicio</Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground">Tienda</span>
          </nav>
          <div className="mt-6 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">Colección permanente</p>
              <h1 className="mt-3 font-display text-5xl lg:text-6xl tracking-tight font-bold">
                Plantas, maceteros<br />y objetos <span className="italic font-serif">vivos</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-muted-foreground leading-relaxed max-w-md">
              Una selección estrecha y cuidadosamente curada de especies, materiales y herramientas
              para quien entiende que el hogar también respira.
            </p>
          </div>
        </section>

        {/* Category pills */}
        <div className="container-x mt-10 pb-4 border-b border-border">
          <div className="flex gap-2 overflow-x-auto -mx-1 pb-px">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 px-5 py-2 text-[12px] font-semibold tracking-[0.12em] uppercase rounded-full border transition-all duration-200 ${
                  cat === c ? "bg-[#86895d] text-white border-[#86895d] shadow-sm" : "bg-transparent text-muted-foreground border-neutral-200 hover:text-foreground hover:border-neutral-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className="container-x flex items-center justify-between py-5 text-sm">
          <button
            onClick={() => setOpenFilters(true)}
            className="flex items-center gap-2 hover:text-[#86895d] transition-colors font-semibold"
          >
            <SlidersHorizontal className="size-4" strokeWidth={1.5} />
            Filtros {care.size + tags.size > 0 && <span className="text-xs">({care.size + tags.size})</span>}
          </button>
          <p className="text-xs text-muted-foreground">{filtered.length} productos</p>
          <label className="flex items-center gap-2 text-xs">
            <span className="hidden sm:inline text-muted-foreground font-medium">Ordenar</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="bg-transparent border-b border-[#86895d]/30 py-1 px-1 outline-none focus:border-[#86895d] cursor-pointer font-semibold text-[#272831]"
            >
              <option value="recommended">Recomendado</option>
              <option value="price-asc">Precio: menor</option>
              <option value="price-desc">Precio: mayor</option>
            </select>
          </label>
        </div>

        <div className="container-x grid lg:grid-cols-12 gap-10">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <FilterPanel
              care={care}
              tags={tags}
              onCare={(v) => toggle(care, v, setCare)}
              onTag={(v) => toggle(tags, v, setTags)}
            />
          </aside>
          <motion.div
            className="lg:col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-8 md:gap-y-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer(0.06, 0.04)}
          >
            {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
          </motion.div>
        </div>

        {/* Mobile filter drawer */}
        {openFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[3px]" onClick={() => setOpenFilters(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-background rounded-l-[20px] p-6 overflow-y-auto shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display text-2xl font-bold">Filtros</h3>
                <button onClick={() => setOpenFilters(false)} aria-label="Cerrar">
                  <X className="size-5" strokeWidth={1.5} />
                </button>
              </div>
              <FilterPanel
                care={care}
                tags={tags}
                onCare={(v) => toggle(care, v, setCare)}
                onTag={(v) => toggle(tags, v, setTags)}
              />
              <button
                onClick={() => setOpenFilters(false)}
                className="mt-8 w-full bg-[#86895d] hover:bg-[#777a53] text-white py-4 rounded-[50px] text-[13px] font-semibold tracking-[0.2em] uppercase shadow-md transition-colors"
              >
                Ver {filtered.length} productos
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function FilterPanel({
  care, tags, onCare, onTag,
}: { care: Set<string>; tags: Set<string>; onCare: (v: string) => void; onTag: (v: string) => void }) {
  return (
    <div className="space-y-8">
      <FilterGroup title="Nivel de cuidado">
        {CARE.map((c) => (
          <Check key={c} label={c} checked={care.has(c)} onChange={() => onCare(c)} />
        ))}
      </FilterGroup>
      <FilterGroup title="Características">
        {TAGS.map((t) => (
          <Check key={t} label={t} checked={tags.has(t)} onChange={() => onTag(t)} />
        ))}
      </FilterGroup>
      <FilterGroup title="Disponibilidad">
        <Check label="En stock" checked onChange={() => {}} />
        <Check label="Despacho 24h" checked={false} onChange={() => {}} />
      </FilterGroup>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow mb-4">{title}</h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <li>
      <label className="flex items-center gap-3 text-sm cursor-pointer group text-foreground font-medium">
        <span
          className={`size-4 border rounded-[4px] flex items-center justify-center transition-colors ${
            checked ? "bg-[#86895d] border-[#86895d]" : "border-neutral-300 bg-transparent group-hover:border-neutral-500"
          }`}
        >
          {checked && <span className="size-1.5 bg-white rounded-[1px]" />}
        </span>
        <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
        {label}
      </label>
    </li>
  );
}
