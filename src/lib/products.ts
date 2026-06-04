import monstera from "@/assets/p-monstera.jpg";
import sansevieria from "@/assets/p-sansevieria.jpg";
import ficus from "@/assets/p-ficus.jpg";

import lavanda from "@/assets/p-lavanda.jpg";
import romero from "@/assets/Romero.png";
import { getStorefrontApiUrl, getPublicTokenHeaders } from "./shopify";
import geranio from "@/assets/p-geranio-zonal.png";
import kumquat from "@/assets/p-kumquat.png";
import bamboo from "@/assets/p-sacred-bamboo.png";
import rhus from "@/assets/p-rhus-crenata.png";
import fern from "@/assets/p-helecho-espada.png";
import yucca from "@/assets/p-yucca.png";
import agapanthus from "@/assets/p-agapanthus.png";
import aloe from "@/assets/p-aloe-vera.png";
import lantana from "@/assets/p-lantana.png";
import veronica from "@/assets/p-veronica-buxifolia.png";
import pittosporum from "@/assets/p-pittosporum-tobira.png";
import pennisetum from "@/assets/p-pennisetum-alopecuroides.png";
import lippia from "@/assets/p-lippia-citriodora.png";
import ficusBinnendijkii from "@/assets/p-ficus-binnendijkii.png";


export type Product = {
  slug: string;
  name: string;
  scientific?: string;
  category: "Plantas" | "Maceteros" | "Jardinería" | "Decoración";
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  tag?: "Nuevo" | "Best Seller" | "Pet Friendly" | "Poca luz";
  care?: "Fácil" | "Medio" | "Avanzado";
  description?: string;
  careDetails?: string;
  variantId?: string;
  inStock?: boolean;
};

export const products: Product[] = [
  { slug: "monstera-deliciosa", name: "Monstera Deliciosa", scientific: "Costilla de Adán", category: "Plantas", price: 24500, image: monstera, tag: "Best Seller", care: "Fácil" },
  { slug: "ficus-lyrata", name: "Ficus Lyrata", scientific: "Hoja de violín", category: "Plantas", price: 32000, image: ficus, tag: "Nuevo", care: "Medio" },
  {
    slug: "ficus-binnendijkii",
    name: "Ficus binnendijkii",
    scientific: "Ficus binnendijkii",
    category: "Plantas",
    price: 21500,
    image: ficusBinnendijkii,
    tag: "Nuevo",
    care: "Fácil",
    description: "El Ficus binnendijkii (también conocido como Ficus Ali o de hoja estrecha) es una planta de interior sumamente elegante y decorativa. Se caracteriza por sus hojas largas y arqueadas de un verde brillante y textura coriácea, que caen con gracia simulando un sauce. Es ideal para dar un toque tropical y sofisticado a espacios interiores, purifica el aire de forma eficiente y requiere cuidados sencillos.",
    careDetails: "Luz brillante indirecta o semisombra. Riego moderado, permitiendo que la tierra se seque superficialmente entre riegos. Mantener en temperaturas cálidas y proteger de heladas intensas."
  },

  { slug: "sansevieria", name: "Sansevieria", scientific: "Lengua de suegra", category: "Plantas", price: 12000, image: sansevieria, tag: "Pet Friendly", care: "Fácil" },
  { slug: "lavanda-dentada", name: "Lavanda", scientific: "Lavandula dentata", category: "Plantas", price: 4500, image: lavanda, tag: "Poca luz", care: "Fácil" },
  {
    slug: "romero",
    name: "Romero",
    scientific: "Rosmarinus officinalis",
    category: "Plantas",
    price: 6500,
    image: romero,
    tag: "Nuevo",
    care: "Fácil",
    description: "El Romero es un arbusto aromático de hojas perennes, ideal tanto para cultivar en macetas en terrazas luminosas como en el jardín directamente. Posee un aroma leñoso inconfundible y es muy apreciado en la gastronomía mediterránea y la aromaterapia.",
    careDetails: "Sol directo o luz muy brillante. Riego moderado, permitiendo que la tierra se seque completamente entre riegos. Es muy resistente a la sequía y prefiere sustratos con excelente drenaje."
  },
  {
    slug: "cardenal-geranio-zonal",
    name: "Cardenal · Geranio Zonal",
    scientific: "Pelargonium zonale",
    category: "Plantas",
    price: 9500,
    image: geranio,
    tag: "Nuevo",
    care: "Fácil",
    description: "El Geranio Zonal o Cardenal es una planta de exterior clásica, muy apreciada por sus abundantes flores de vivos colores y su resistencia. Sus hojas redondas poseen una zona oscura característica en forma de anillo. Ideal para terrazas y balcones soleados.",
    careDetails: "Sol directo o semisombra muy luminosa. Riego moderado, permitiendo que la tierra se seque superficialmente entre riegos. Evitar mojar hojas y flores al regar."
  },
  {
    slug: "kumquat",
    name: "Kumquat · Naranjo Enano",
    scientific: "Fortunella margarita",
    category: "Plantas",
    price: 18500,
    image: kumquat,
    tag: "Nuevo",
    care: "Medio",
    description: "El Kumquat o Naranjo Enano es un pequeño árbol frutal de interior o exterior muy decorativo. Produce abundantes frutos cítricos ovoides de piel dulce comestible y pulpa ligeramente ácida. Sus hojas son de un verde oscuro brillante y exhala un delicioso aroma a azahar durante la floración.",
    careDetails: "Sol directo o mucha luz natural. Riego regular en verano permitiendo que el sustrato se seque un poco. Proteger de las heladas intensas."
  },
  {
    slug: "sacred-bamboo",
    name: "Bambú Sagrado · Nandina",
    scientific: "Nandina domestica",
    category: "Plantas",
    price: 14500,
    image: bamboo,
    tag: "Nuevo",
    care: "Fácil",
    description: "El Bambú Sagrado o Nandina es un arbusto perenne muy valorado por el cambio de coloración de sus hojas, que van del verde brillante al rojo intenso en otoño e invierno. Produce delicadas flores blancas en verano seguidas de racimos de bayas rojas brillantes muy ornamentales. A pesar de su nombre común, no es un bambú real, lo que la hace mucho más fácil de controlar y mantener.",
    careDetails: "Luz indirecta brillante o semisombra. Tolera sol directo moderado. Riego moderado, permitiendo que la tierra se seque parcialmente. Muy resistente al frío."
  },
  {
    slug: "rhus-crenata",
    name: "Rhus Crenata · Arbusto de Dunas",
    scientific: "Rhus crenata",
    category: "Plantas",
    price: 16000,
    image: rhus,
    tag: "Nuevo",
    care: "Fácil",
    description: "El Rhus Crenata (también conocido como Searsia crenata o Dune Crow-berry) es un arbusto de hoja perenne muy resistente y de crecimiento compacto. Posee hojas pequeñas de un verde oscuro brillante con bordes festoneados muy característicos. Es una planta ideal para dar estructura en balcones y terrazas o para formar setos bajos, tolerando perfectamente el viento y condiciones costeras.",
    careDetails: "Sol directo o semisombra. Riego moderado, tolerando periodos de sequía una vez establecido. Prefiere sustratos con buen drenaje."
  },
  {
    slug: "helecho-espada",
    name: "Helecho Espada",
    scientific: "Nephrolepis exaltata",
    category: "Plantas",
    price: 11000,
    image: fern,
    tag: "Pet Friendly",
    care: "Medio",
    description: "El Helecho Espada es una de las plantas de interior más populares y elegantes, conocida por sus frondas largas y plumosas de color verde brillante que caen con gracia. Es un purificador de aire natural excelente y es completamente seguro para las mascotas. Prefiere ambientes húmedos, por lo que es ideal para baños iluminados o cocinas.",
    careDetails: "Luz indirecta brillante o semisombra. Evitar sol directo. Riego frecuente para mantener la tierra húmeda pero no encharcada. Agradece la pulverización constante de sus hojas."
  },
  {
    slug: "yucca-elephantipes",
    name: "Yucca Pata de Elefante",
    scientific: "Yucca elephantipes",
    category: "Plantas",
    price: 29000,
    image: yucca,
    tag: "Nuevo",
    care: "Fácil",
    description: "La Yucca o Pata de Elefante es una planta de interior y exterior extremadamente resistente y escultural, caracterizada por sus gruesos troncos leñosos y coronas de hojas verdes rígidas en forma de espada. Es ideal para principiantes debido a sus bajísimos requisitos de riego y mantenimiento, y aporta una presencia arquitectónica inigualable a cualquier rincón luminoso.",
    careDetails: "Luz brillante o sol directo. Riego escaso, dejando secar la tierra por completo entre riegos. Es muy tolerante a la sequía y prefiere macetas bien drenadas.",
    inStock: false
  },
  {
    slug: "agapanthus-africanus",
    name: "Agapanto · Lirio Africano",
    scientific: "Agapanthus africanus",
    category: "Plantas",
    price: 8500,
    image: agapanthus,
    tag: "Nuevo",
    care: "Fácil",
    description: "El Agapanto o Lirio Africano es una planta herbácea perenne muy vigorosa, muy apreciada en jardinería y paisajismo por sus llamativas cabezuelas florales globosas compuestas de abundantes flores acampanadas de color azul lavanda. Su follaje acintado y arqueado forma densas matas de un verde intenso que permanecen atractivas durante todo el año.",
    careDetails: "Sol directo o semisombra. Muy resistente y rústico. Riego moderado, permitiendo que la tierra se seque superficialmente. Soporta bien el frío y heladas ligeras."
  },
  {
    slug: "aloe-vera",
    name: "Aloe Vera",
    scientific: "Aloe barbadensis Miller",
    category: "Plantas",
    price: 12500,
    image: aloe,
    tag: "Best Seller",
    care: "Fácil",
    description: "El Aloe Vera es una planta suculenta clásica y versátil, famosa mundialmente por las propiedades calmantes y regeneradoras del gel translúcido que contienen sus hojas. Posee hojas gruesas, carnosas y erectas dispuestas en rosetas, con pequeños dientes en sus bordes. Es una excelente opción para interiores luminosos y requiere mínimos cuidados, resistiendo muy bien la falta de agua.",
    careDetails: "Sol directo o mucha luz indirecta. Riego muy escaso, asegurando que la tierra esté completamente seca antes de volver a regar. Requiere un sustrato poroso con excelente drenaje."
  },
  {
    slug: "lantana-camara",
    name: "Lantana",
    scientific: "Lantana camara",
    category: "Plantas",
    price: 7500,
    image: lantana,
    tag: "Nuevo",
    care: "Fácil",
    description: "La Lantana es un arbusto perenne muy popular y robusto, famoso por sus espectaculares inflorescencias globosas y densas compuestas por pequeñas flores que cambian de color a medida que maduran, creando un precioso efecto multicolor en tonos amarillo, naranja y rojo. Sus hojas verdes y ásperas son muy aromáticas. Es extremadamente resistente al sol, a la sequía y atrae a una gran cantidad de mariposas y polinizadores al jardín.",
    careDetails: "Sol directo o mucha iluminación. Riego moderado, permitiendo que la tierra se seque superficialmente entre riegos. Es muy resistente al calor, pero sensible a heladas intensas."
  },
  {
    slug: "veronica-buxifolia",
    name: "Verónica Buxifolia",
    scientific: "Hebe buxifolia",
    category: "Plantas",
    price: 13500,
    image: veronica,
    tag: "Nuevo",
    care: "Fácil",
    description: "La Verónica Buxifolia o Hebe de Hojas de Boj es un arbusto perenne muy ordenado y compacto de origen neozelandés. Sus hojas son de un verde lustroso muy pequeño y están dispuestas con una simetría geométrica asombrosa a lo largo de sus ramas. En verano se llena de densos racimos de pequeñas flores blancas y aromáticas. Es ideal para dar toques de estructura formal en macetas en patios o terrazas luminosas.",
    careDetails: "Sol directo o semisombra muy luminosa. Riego regular, manteniendo el sustrato húmedo pero bien drenado, sin encharcamientos. Tolera bien el viento y el frío moderado."
  },
  {
    slug: "pittosporum-tobira",
    name: "Pittosporum Tobira",
    scientific: "Pittosporum tobira",
    category: "Plantas",
    price: 11500,
    image: pittosporum,
    tag: "Nuevo",
    care: "Fácil",
    description: "El Pitosporo Azarero es un arbusto de hoja perenne sumamente resistente y longevo, de origen asiático. Se caracteriza por sus hojas coriáceas, de forma ovalada, con un verde brillante muy intenso y márgenes curvados hacia abajo. En primavera produce pequeños racimos de flores blancas y cremosas con un exquisito perfume que recuerda al azahar (de ahí su nombre azarero). Es ideal para terrazas, setos bajos o maceteros grandes expuestos a pleno sol y viento.",
    careDetails: "Sol directo o semisombra. Tolerante al viento, salinidad y sequía. Riego moderado, permitiendo que la tierra se seque superficialmente. Soporta heladas ligeras."
  },
  {
    slug: "pennisetum-alopecuroides",
    name: "Pennisetum Alopecuroides",
    scientific: "Pennisetum alopecuroides",
    category: "Plantas",
    price: 10500,
    image: pennisetum,
    tag: "Nuevo",
    care: "Fácil",
    description: "El Pennisetum Alopecuroides, comúnmente conocido como hierba de la cola de zorro o limpia tubos, es una gramínea ornamental perenne sumamente decorativa. Destaca por sus densas matas de hojas arqueadas, finas y de color verde brillante que se coronan en verano y otoño con unas inflorescencias plumosas espectaculares, similares a espigas, que se mecen suavemente con el viento. Su follaje adquiere tonos dorados y cobrizos muy atractivos durante el invierno.",
    careDetails: "Sol directo o semisombra. Riego moderado, tolerando bien la sequía una vez establecido, pero prefiere humedad moderada en el suelo bien drenado. Muy resistente a las heladas y al viento."
  },
  {
    slug: "lippia-citriodora",
    name: "Cedrón · Lippia Citriodora",
    scientific: "Lippia citriodora",
    category: "Plantas",
    price: 8900,
    image: lippia,
    tag: "Nuevo",
    care: "Fácil",
    description: "La Lippia Citriodora, conocida popularmente como Cedrón, Hierba Luisa o Verbena de Indias, es un arbusto caducifolio famoso por el intenso y delicioso aroma a limón que desprenden sus hojas al ser rozadas. Sus hojas son alargadas, ásperas y de un verde pálido muy característico. En verano produce pequeñas espigas de flores de tonos blanco-violáceos. Es sumamente valorada en infusión por sus propiedades digestivas y relajantes, así como en gastronomía para aromatizar platos y postres.",
    careDetails: "Pleno sol o semisombra muy luminosa. Requiere un suelo con excelente drenaje y riego moderado, evitando el encharcamiento ya que es sensible al exceso de humedad en las raíces. Proteger de heladas fuertes y vientos fríos."
  },

];

export function mapShopifyProduct(node: any): Product {
  const price = parseFloat(node.priceRange?.minVariantPrice?.amount || "0");
  const firstVariant = node.variants?.edges?.[0]?.node;
  const oldPrice = firstVariant?.compareAtPrice ? parseFloat(firstVariant.compareAtPrice.amount) : undefined;
  const image = node.images?.edges?.[0]?.node?.url || "";

  // Map category (defaulting to "Plantas")
  let category: Product["category"] = "Plantas";
  const type = node.productType?.toLowerCase();
  if (type === "maceteros" || type === "macetero") category = "Maceteros";
  else if (type === "jardineria" || type === "jardinería") category = "Jardinería";
  else if (type === "decoracion" || type === "decoración") category = "Decoración";

  // Map care & tag from Shopify tags
  let care: Product["care"] = undefined;
  let tag: Product["tag"] = undefined;
  if (Array.isArray(node.tags)) {
    const tagsLower = node.tags.map((t: string) => t.toLowerCase());
    if (tagsLower.includes("fácil") || tagsLower.includes("facil")) care = "Fácil";
    else if (tagsLower.includes("medio")) care = "Medio";
    else if (tagsLower.includes("avanzado")) care = "Avanzado";

    if (tagsLower.includes("nuevo")) tag = "Nuevo";
    else if (tagsLower.includes("best seller") || tagsLower.includes("bestseller")) tag = "Best Seller";
    else if (tagsLower.includes("pet friendly") || tagsLower.includes("petfriendly")) tag = "Pet Friendly";
    else if (tagsLower.includes("poca luz")) tag = "Poca luz";
  }

  const images = node.images?.edges?.map((edge: any) => edge.node?.url).filter(Boolean) || [];

  return {
    slug: node.handle,
    name: node.title,
    scientific: node.tags?.find((t: string) => t.toLowerCase().startsWith("scientific:"))?.split(":")[1] || undefined,
    category,
    price,
    oldPrice,
    image,
    images: images.length > 0 ? images : [image],
    tag,
    care,
    description: node.description,
    careDetails: node.tags?.find((t: string) => t.toLowerCase().startsWith("care:"))?.split(":")[1] || undefined,
    variantId: firstVariant?.id,
    inStock: node.availableForSale,
  };
}

export async function fetchShopifyProducts(): Promise<Product[]> {
  try {
    const query = `
      query GetProducts {
        products(first: 50) {
          edges {
            node {
              id
              title
              handle
              availableForSale
              description
              productType
              tags
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    compareAtPrice {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(getStorefrontApiUrl(), {
      method: "POST",
      headers: getPublicTokenHeaders(),
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    const { data, errors } = await response.json();
    if (errors && errors.length > 0) {
      throw new Error(errors[0].message);
    }

    if (!data?.products?.edges || data.products.edges.length === 0) {
      return products;
    }

    return data.products.edges.map(({ node }: any) => mapShopifyProduct(node));
  } catch (error) {
    console.error("Error fetching products from Shopify:", error);
    return products;
  }
}

export async function getShopifyProductByHandle(handle: string): Promise<Product | undefined> {
  try {
    const query = `
      query GetProductByHandle($handle: String!) {
        product(handle: $handle) {
          id
          title
          handle
          availableForSale
          description
          productType
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                url
              }
            }
          }
          variants(first: 20) {
            edges {
              node {
                id
                title
                price {
                  amount
                }
                compareAtPrice {
                  amount
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(getStorefrontApiUrl(), {
      method: "POST",
      headers: getPublicTokenHeaders(),
      body: JSON.stringify({ query, variables: { handle } }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`);
    }

    const { data, errors } = await response.json();
    if (errors && errors.length > 0) {
      throw new Error(errors[0].message);
    }

    if (!data?.product) {
      return products.find((p) => p.slug === handle);
    }

    return mapShopifyProduct(data.product);
  } catch (error) {
    console.error(`Error fetching product ${handle} from Shopify:`, error);
    return products.find((p) => p.slug === handle);
  }
}

export const formatCLP = (n: number) =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
