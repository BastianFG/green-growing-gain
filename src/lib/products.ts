import stenocarpusS from "@/assets/p-stenocarpus-s.png";
import stenocarpusM from "@/assets/p-stenocarpus-m.png";
import stenocarpusL from "@/assets/p-stenocarpus-l.png";
import sanpedroS from "@/assets/p-sanpedro-s.png";
import sanpedroM from "@/assets/p-sanpedro-m.png";
import sanpedroL from "@/assets/p-sanpedro-l.png";
import ficusbenjaminaS from "@/assets/p-ficusbenjamina-s.png";
import ficusbenjaminaM from "@/assets/p-ficusbenjamina-m.png";
import ficusbenjaminaL from "@/assets/p-ficusbenjamina-l.png";
import olivoS from "@/assets/p-olivo-s.png";
import olivoM from "@/assets/p-olivo-m.png";
import olivoL from "@/assets/p-olivo-l.png";
import bougainvilleaS from "@/assets/p-bougainvillea-s.png";
import bougainvilleaM from "@/assets/p-bougainvillea-m.png";
import bougainvilleaL from "@/assets/p-bougainvillea-l.png";
import scheffleraS from "@/assets/p-schefflera-s.png";
import scheffleraM from "@/assets/p-schefflera-m.png";
import scheffleraL from "@/assets/p-schefflera-l.png";
import aloeS from "@/assets/p-aloe-vera-s.png";
import aloeM from "@/assets/p-aloe-vera-m.png";
import aloeL from "@/assets/p-aloe-vera-l.png";
import pittosporumS from "@/assets/p-pittosporum-s.png";
import pittosporumM from "@/assets/p-pittosporum-m.png";
import pittosporumL from "@/assets/p-pittosporum-l.png";
import cedronS from "@/assets/p-cedron-s.png";
import cedronM from "@/assets/p-cedron-m.png";
import cedronL from "@/assets/p-cedron-l.png";
import primulаS from "@/assets/p-primula-s.png";
import primulаM from "@/assets/p-primula-m.png";
import primulаL from "@/assets/p-primula-l.png";
import mandarinoS from "@/assets/p-mandarino-s.png";
import mandarinoM from "@/assets/p-mandarino-m.png";
import mandarinoL from "@/assets/p-mandarino-l.png";
import lantanaS from "@/assets/p-lantana-s.png";
import lantanaM from "@/assets/p-lantana-m.png";
import lantanaL from "@/assets/p-lantana-l.png";
import veronicaS from "@/assets/p-veronica-buxifolia-s.png";
import veronicaM from "@/assets/p-veronica-buxifolia-m.png";
import veronicaL from "@/assets/p-veronica-buxifolia-l.png";
import rhusCrenataS from "@/assets/p-rhus-crenata-s.png";
import rhusCrenataM from "@/assets/p-rhus-crenata-m.png";
import rhusCrenataL from "@/assets/p-rhus-crenata-l.png";
import yuccaS from "@/assets/p-yucca-s.png";
import yuccaM from "@/assets/p-yucca-m.png";
import yuccaL from "@/assets/p-yucca-l.png";
import pennisetumS from "@/assets/p-pennisetum-s.png";
import pennisetumM from "@/assets/p-pennisetum-m.png";
import pennisetumL from "@/assets/p-pennisetum-l.png";
import agapantoS from "@/assets/p-agapanto-s.png";
import agapantoM from "@/assets/p-agapanto-m.png";
import agapantoL from "@/assets/p-agapanto-l.png";
import lavandaS from "@/assets/p-lavanda-s.png";
import lavandaM from "@/assets/p-lavanda-m.png";
import lavandaL from "@/assets/p-lavanda-l.png";
import helechoS from "@/assets/p-helecho-s.png";
import helechoM from "@/assets/p-helecho-m.png";
import helechoL from "@/assets/p-helecho-l.png";
import nandinaS from "@/assets/p-nandina.png";
import kumquatS from "@/assets/p-kumquat.png";
import cardenalS from "@/assets/p-cardenal.png";
import { getStorefrontApiUrl, getPublicTokenHeaders } from "./shopify";



export type Product = {
  slug: string;
  name: string;
  scientific?: string;
  category: "Plantas" | "Maceteros" | "Jardinería" | "Decoración" | "Cactáceas";
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
  pricesBySize?: {
    [sizeLabel: string]: number;
  };
  sizesAvailability?: {
    [sizeLabel: string]: boolean;
  };
};

export const products: Product[] = [
  {
    slug: "cardenal-pelargonium",
    name: "Cardenal · Pelargonium",
    scientific: "Pelargonium zonale",
    category: "Plantas",
    price: 4900,
    image: cardenalS,
    images: [cardenalS, cardenalS, cardenalS],
    tag: "Best Seller",
    care: "Fácil",
    description: "El Cardenal (Pelargonium zonale) es la planta de exterior floreciente por excelencia en balcones, jardineras y patios de todo Chile. Es famoso por su resistencia inigualable y su capacidad para producir agrupaciones de flores de colores muy vibrantes durante la mayor parte del año. Sus hojas redondeadas, a menudo con una zona central más oscura, desprenden un suave aroma al tacto. Es ideal para aportar color tradicional a cualquier rincón soleado con exigencias de cuidado mínimas.",
    careDetails: "Requiere pleno sol para una floración abundante y constante. Riego moderado, permitiendo que el sustrato se seque superficialmente antes de volver a regar; sensible al exceso de humedad en las raíces. Eliminar las flores marchitas estimula nuevos brotes.",
    pricesBySize: {
      "Pequeña": 4900,
      "Mediana": 8900,
      "Grande": 14900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "kumquat-fortunella",
    name: "Kumquat · Naranjo Enano",
    scientific: "Fortunella margarita",
    category: "Plantas",
    price: 19900,
    image: kumquatS,
    images: [kumquatS, kumquatS, kumquatS],
    tag: "Nuevo",
    care: "Medio",
    description: "El Kumquat (Fortunella margarita), comúnmente conocido como Naranjo Enano, es un pequeño árbol frutal perenne muy apreciado en la jardinería y el paisajismo por su extraordinario valor ornamental. Sus brillantes hojas verdes contrastan espectacularmente con sus pequeños frutos ovalados de un intenso color anaranjado, los cuales son comestibles y tienen un sabor que mezcla notas dulces en la cáscara y cítricas en su interior. Es ideal para cultivar en macetas decorativas, patios y terrazas con abundante luz.",
    careDetails: "Requiere exposición a pleno sol o luz brillante directa. Riego regular, permitiendo que la capa superficial de la tierra se seque entre riegos. Utilizar un sustrato bien drenado y fertilizante para cítricos en temporada de crecimiento para estimular la floración y fructificación.",
    pricesBySize: {
      "Pequeña": 19900,
      "Mediana": 34900,
      "Grande": 54900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "nandina-domestica",
    name: "Bambú Sagrado · Nandina",
    scientific: "Nandina domestica",
    category: "Plantas",
    price: 14900,
    image: nandinaS,
    images: [nandinaS, nandinaS, nandinaS],
    tag: "Nuevo",
    care: "Fácil",
    description: "El Bambú Sagrado (Nandina domestica) es una planta arbustiva perenne de exterior muy apreciada en el paisajismo moderno. Su follaje delicado recuerda al bambú y cambia espectacularmente de color con las estaciones, pasando de verde claro en primavera a un rojo intenso en invierno. Es perfecta para cultivar en macetas, jardineras o para formar setos de bajo mantenimiento.",
    careDetails: "Crece mejor a pleno sol o en semisombra (el frío y el sol directo intensifican el color rojo). Riego moderado, tolerando muy bien periodos de sequía una vez que se ha adaptado. Requiere suelo con buen drenaje.",
    pricesBySize: {
      "Pequeña": 14900,
      "Mediana": 26900,
      "Grande": 48900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "stenocarpus-sinuatus",
    name: "Stenocarpus · Rueda de Fuego",
    scientific: "Stenocarpus sinuatus",
    category: "Plantas",
    price: 22500,
    image: stenocarpusS,
    images: [stenocarpusS, stenocarpusM, stenocarpusL],
    tag: "Nuevo",
    care: "Medio",
    description: "El Stenocarpus (Stenocarpus sinuatus), también conocido como Árbol Rueda de Fuego, es un árbol ornamental exótico de gran valor paisajístico. Destaca por sus hojas de verde brillante que recuerdan al roble y sus espectaculares flores rojas en forma de rueda. Es una opción exclusiva y de alta gama para exteriores protegidos y patios de luz en Chile.",
    careDetails: "Sol directo o semisombra muy luminosa. Riego regular permitiendo que la capa superior se seque entre riegos. Proteger de heladas fuertes.",
    pricesBySize: {
      "Pequeña": 22500,
      "Mediana": 38500,
      "Grande": 59500
    },
    inStock: false
  },
  {
    slug: "cactus-san-pedro",
    name: "Cactus San Pedro",
    scientific: "Echinopsis pachanoi",
    category: "Cactáceas",
    price: 14500,
    image: sanpedroS,
    images: [sanpedroS, sanpedroM, sanpedroL],
    tag: "Nuevo",
    care: "Fácil",
    description: "El Cactus San Pedro (Echinopsis pachanoi) es una cactácea columnar de rápido crecimiento originaria de los Andes. Es muy apreciado en el paisajismo de bajo consumo de agua por su silueta escultural y gran resistencia. Posee costillas pronunciadas de color verde azulado y flores blancas nocturnas en ejemplares maduros.",
    careDetails: "Sol directo o luz muy brillante. Riego mínimo, permitiendo que la tierra se seque completamente. Usar sustrato arenoso y bien drenado.",
    pricesBySize: {
      "Pequeña": 14500,
      "Mediana": 26500,
      "Grande": 42500
    },
    inStock: false
  },
  {
    slug: "ficus-benjamina",
    name: "Ficus Benjamina",
    scientific: "Ficus benjamina",
    category: "Plantas",
    price: 12500,
    image: ficusbenjaminaS,
    images: [ficusbenjaminaS, ficusbenjaminaM, ficusbenjaminaL],
    tag: "Nuevo",
    care: "Medio",
    description: "El Ficus Benjamina (Weeping fig) es una de las plantas de interior más populares y elegantes gracias a su follaje denso y ramas ligeramente péndulas. Posee pequeñas hojas brillantes de un verde intenso. Se adapta muy bien a espacios con luz indirecta brillante, ayudando a purificar el aire del hogar y aportando un toque arbóreo inigualable al diseño de interiores.",
    careDetails: "Luz brillante indirecta. Riego moderado, permitiendo que la capa superficial de la tierra se seque entre riegos. Evitar corrientes de aire frío y cambios bruscos de ubicación para prevenir la caída de hojas.",
    pricesBySize: {
      "Pequeña": 12500,
      "Mediana": 22000,
      "Grande": 34500
    }
  },
  {
    slug: "olivo-comun",
    name: "Olivo · Olea Europaea",
    scientific: "Olea europaea",
    category: "Plantas",
    price: 16500,
    image: olivoS,
    images: [olivoS, olivoM, olivoL],
    tag: "Nuevo",
    care: "Fácil",
    description: "El Olivo (Olea europaea) es un árbol perenne emblemático del Mediterráneo, muy valorado en Chile por su elegancia rústica y gran adaptabilidad. Posee hojas estrechas de color verde plateado y un tronco leñoso que gana un hermoso carácter escultural con los años. Es perfecto para terrazas soleadas, balcones y jardines secos de bajo mantenimiento.",
    careDetails: "Pleno sol. Riego moderado en maceta, tolerando periodos de sequía una vez establecido en tierra. Prefiere suelos muy bien drenados.",
    pricesBySize: {
      "Pequeña": 16500,
      "Mediana": 28500,
      "Grande": 46500
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "bougainvillea",
    name: "Bougainvillea · Santa Rita",
    scientific: "Bougainvillea spectabilis",
    category: "Plantas",
    price: 12500,
    image: bougainvilleaS,
    images: [bougainvilleaS, bougainvilleaM, bougainvilleaL],
    tag: "Nuevo",
    care: "Fácil",
    description: "La Bougainvillea (conocida en Chile como Santa Rita) es una planta trepadora arbustiva de extraordinaria belleza, famosa por sus espectaculares e intensas floraciones en tonos rosa, morado o magenta. Sus verdaderas flores son pequeñas y blancas, pero están rodeadas por llamativas brácteas de colores vibrantes que cubren casi por completo la planta. Es una opción excelente para añadir un estallido de color mediterráneo a fachadas, pérgolas, muros o grandes maceteros en terrazas soleadas.",
    careDetails: "Pleno sol para maximizar la floración. Riego moderado, permitiendo que la tierra se seque superficialmente entre riegos. Es muy resistente a la sequía una vez establecida, pero sensible a las heladas intensas en invierno.",
    pricesBySize: {
      "Pequeña": 12500,
      "Mediana": 24500,
      "Grande": 39500
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": true,
      "Grande": false
    }
  },
  {
    slug: "schefflera-arboricola",
    name: "Schefflera arborícola · Cheflera",
    scientific: "Schefflera arboricola",
    category: "Plantas",
    price: 9900,
    image: scheffleraS,
    images: [scheffleraS, scheffleraM, scheffleraL],
    tag: "Nuevo",
    care: "Fácil",
    description: "La Schefflera arborícola, conocida popularmente como Cheflera o Árbol Paraguas Enano, es una planta de interior de gran presencia decorativa y fácil manejo. Sus características hojas palmadas de color verde brillante se despliegan en forma de paraguas, aportando un exuberante efecto tropical a cualquier espacio interior. Es una de las plantas de oficina y hogar más apreciadas por su alta tolerancia a condiciones de poca luz, su resistencia al descuido y su eficaz capacidad para purificar el aire de contaminantes comunes. Crece de forma ordenada y elegante, adaptándose a macetas tanto pequeñas como grandes sin perder su porte arbustivo característico.",
    careDetails: "Luz brillante indirecta o semisombra. Riego moderado, permitiendo que la capa superficial del sustrato se seque entre riegos. Evitar el encharcamiento y las corrientes de aire frío. Agradece la pulverización ocasional de sus hojas para mantener la humedad ambiental.",
    pricesBySize: {
      "Pequeña": 9900,
      "Mediana": 19900,
      "Grande": 36900
    }
  },
  {
    slug: "aloe-vera",
    name: "Aloe Vera · Aloe barbadensis Miller",
    scientific: "Aloe barbadensis Miller",
    category: "Cactáceas",
    price: 7900,
    image: aloeS,
    images: [aloeS, aloeM, aloeL],
    tag: "Best Seller",
    care: "Fácil",
    description: "El Aloe Vera (Aloe barbadensis Miller) es una suculenta de interior y exterior icónica, mundialmente reconocida tanto por su belleza escultural como por las extraordinarias propiedades calmantes, hidratantes y regeneradoras del gel puro que atesoran sus hojas. Forma elegantes rosetas de hojas gruesas, carnosas y lanceoladas de color verde grisáceo, con finos dientes a lo largo de sus bordes. Es la planta ideal para espacios luminosos de bajo mantenimiento: tolera perfectamente el olvido, el calor y los periodos de sequía prolongados. Purifica el aire del hogar y es un must-have en cualquier botiquín natural.",
    careDetails: "Sol directo o luz brillante indirecta. Riego muy escaso: esperar a que la tierra esté completamente seca antes de volver a regar, aproximadamente cada 2-3 semanas. Usar sustrato poroso con excelente drenaje (mezcla para cactus). Proteger del exceso de lluvia y heladas intensas.",
    pricesBySize: {
      "Pequeña": 7900,
      "Mediana": 14900,
      "Grande": 26900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "pittosporum-tobira",
    name: "Pittosporum Tobira · Azarero",
    scientific: "Pittosporum tobira",
    category: "Plantas",
    price: 8900,
    image: pittosporumS,
    images: [pittosporumS, pittosporumM, pittosporumL],
    tag: "Nuevo",
    care: "Fácil",
    description: "El Pittosporum Tobira, conocido popularmente como Azarero o Pitosporo, es un arbusto de exterior perenne y extraordinariamente resistente, originario de Asia Oriental. Destaca por sus hojas coriáceas de forma ovalada, de un verde brillante muy intenso, y sus márgenes elegantemente curvados hacia abajo. En primavera produce pequeños racimos de flores blancas y cremosas con un delicioso y penetrante perfume que recuerda al azahar. Es una elección premium para terrazas, balcones, setos bajos y maceteros de gran formato expuestos a pleno sol o viento marino. Su extrema tolerancia a la sequía, la salinidad costera y los vientos lo convierten en el arbusto de jardinería más versátil del mercado chileno.",
    careDetails: "Pleno sol o semisombra. Extremadamente tolerante al viento, la salinidad y la sequía. Riego moderado, permitiendo que la tierra se seque superficialmente entre riegos. Soporta heladas ligeras sin problema. Requiere poca o ninguna poda.",
    pricesBySize: {
      "Pequeña": 8900,
      "Mediana": 15900,
      "Grande": 27900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "cedron-lippia-citriodora",
    name: "Cedrón · Lippia Citriodora",
    scientific: "Lippia citriodora",
    category: "Plantas",
    price: 5900,
    image: cedronS,
    images: [cedronS, cedronM, cedronL],
    tag: "Nuevo",
    care: "Fácil",
    description: "El Cedrón (Lippia citriodora), también conocido como Hierba Luisa o Verbena de Indias, es un arbusto aromático caducifolio de gran tradición en la jardinería y gastronomía latinoamericana. Su principal atractivo es el intenso y refrescante aroma a limón que despiden sus hojas al rozarlas, product de sus aceites esenciales de alta concentración. Sus hojas son alargadas, ligeramente ásperas al tacto y de un verde pálido muy característico. En verano produce discretas espigas de pequeñas flores blanco-violáceas. Es una planta de exterior muy valorada tanto por sus propiedades digestivas y relajantes en infusión, como para aromatizar bebidas, postres y platos gourmet. Un imprescindible en terrazas, balcones y huertos urbanos.",
    careDetails: "Pleno sol o semisombra muy luminosa. Riego moderado con excelente drenaje; es sensible al encharcamiento en raíces. Proteger de heladas fuertes y vientos fríos en invierno. En climas fríos puede perder las hojas y rebrotar vigorosa en primavera.",
    pricesBySize: {
      "Pequeña": 5900,
      "Mediana": 10900,
      "Grande": 18900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "oreja-de-oso-primula",
    name: "Oreja de Oso · Prímula",
    scientific: "Primula acaulis",
    category: "Plantas",
    price: 3900,
    image: primulаS,
    images: [primulаS, primulаM, primulаL],
    tag: "Nuevo",
    care: "Fácil",
    description: "La Oreja de Oso (Primula acaulis) es una planta herbácea perenne de exterior sumamente vistosa y fácil de cuidar, considerada una de las grandes protagonistas florales del invierno y la primavera en jardinería. Produce una espectacular profusión de flores acampanadas de colores intensos y vibrantes —amarillo, rojo, rosa, blanco, malva, naranja— que brotan directamente desde su roseta basal de hojas rugosas y aterciopeladas de color verde intenso. Es ideal para aportar color a macetas, bordillos, balcones sombríos y jardines en los meses de menor floración. Una elección visualmente impactante y de bajo mantenimiento.",
    careDetails: "Semisombra o luz indirecta brillante; evitar el sol directo intenso en horas centrales. Riego moderado y constante, manteniendo el sustrato ligeramente húmedo pero sin encharcamiento. Prefiere temperaturas frescas y templadas; no tolera bien el calor veraniego intenso.",
    pricesBySize: {
      "Pequeña": 3900,
      "Mediana": 7400,
      "Grande": 12900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "mandarino-citrus-reticulata",
    name: "Mandarino · Citrus Reticulata",
    scientific: "Citrus reticulata",
    category: "Plantas",
    price: 19900,
    image: mandarinoS,
    images: [mandarinoS, mandarinoM, mandarinoL],
    tag: "Nuevo",
    care: "Medio",
    description: "El Mandarino (Citrus reticulata) es un árbol frutal perenne de extraordinaria belleza ornamental y valor gastronómico, perfectamente adaptado a terrazas, patios y jardines del clima chileno. Sus hojas son de un verde brillante intenso y sus flores blancas (azahar) exhalan un perfume dulce e inconfundible en primavera. Produce frutos —las mandarinas— de piel fina, fácil de pelar, dulces, jugosos y cargados de vitamina C. Es una planta de exterior que combina la belleza escultural de un árbol ornamental con la satisfacción de cosechar frutos frescos en casa. Ideal en macetones grandes a pleno sol o directamente en suelo de jardín.",
    careDetails: "Pleno sol (mínimo 6 horas diarias de luz directa). Riego regular y profundo en primavera y verano, reduciendo en otoño e invierno; dejar secar la capa superficial del sustrato entre riegos. Fertilizar periódicamente con abono específico para cítricos en temporada de crecimiento. Proteger de heladas fuertes and vientos fríos intensos.",
    pricesBySize: {
      "Pequeña": 19900,
      "Mediana": 34900,
      "Grande": 54900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "lantana-camara",
    name: "Lantana · Lantana camara",
    scientific: "Lantana camara",
    category: "Plantas",
    price: 4900,
    image: lantanaS,
    images: [lantanaS, lantanaM, lantanaL],
    tag: "Nuevo",
    care: "Fácil",
    description: "La Lantana (Lantana camara) es una planta de exterior perenne sumamente popular en la jardinería y el paisajismo en Chile, célebre por su extraordinaria floración multicolor y su asombrosa rusticidad. Sus flores se agrupan en cabezuelas globosas que cambian de tonalidad a medida que maduran, exhibiendo una vibrante paleta que transiciona del amarillo al naranja y finalmente al rojo. Su follaje verde oscuro y rugoso exhala un aroma característico al tacto. Es ideal para formar macizos de color, cubrir bordes, taludes y lucir en maceteros a pleno sol. Muy valorada por su gran tolerancia a la sequía, el calor y su capacidad para atraer mariposas y polinizadores, siendo una aliada perfecta para jardines de bajo consumo hídrico.",
    careDetails: "Pleno sol para una floración abundante. Riego moderado, permitiendo que el sustrato se seque entre riegos; resiste bien la sequía una vez establecida. Prefiere suelos muy bien drenados y es sensible a heladas intensas continuas.",
    pricesBySize: {
      "Pequeña": 4900,
      "Mediana": 8900,
      "Grande": 14900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "veronica-buxifolia",
    name: "Verónica Buxifolia · Hebe buxifolia",
    scientific: "Hebe buxifolia",
    category: "Plantas",
    price: 3900,
    image: veronicaS,
    images: [veronicaS, veronicaM, veronicaL],
    tag: "Nuevo",
    care: "Fácil",
    description: "La Verónica Buxifolia (Hebe buxifolia) es una planta de interior compacta y de rápido crecimiento, ideal para espacios interiores con luz indirecta. Sus hojas perennes, de color verde oscuro brillante, aportan textura y densidad al interior del hogar. Es muy apreciada por su resistencia, bajo mantenimiento y su capacidad para adaptarse a condiciones de poca luz, convirtiéndola en una opción perfecta para oficinas y salones. Su forma arbustiva y densa la hace ideal para macetas de tamaño pequeño, creando puntos verdes que animan cualquier ambiente.",
    careDetails: "Luz indirecta brillante o semisombra. Riego moderado, evitando encharcar el sustrato; dejar que la capa superior se seque entre riegos. Prefiere suelos bien drenados y es tolerante a la sequía ligera. No necesita poda frecuente, basta con recortar hojas dañadas.",
    pricesBySize: {
      "Pequeña": 3900,
      "Mediana": 7400,
      "Grande": 12900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "rhus-crenata-arbusto-dunas",
    name: "Rhus Crenata · Arbusto de Dunas",
    scientific: "Searsia crenata",
    category: "Plantas",
    price: 6900,
    image: rhusCrenataS,
    images: [rhusCrenataS, rhusCrenataM, rhusCrenataL],
    tag: "Nuevo",
    care: "Fácil",
    description: "El Rhus Crenata (también conocido como Searsia crenata o Arbusto de Dunas) es una robusta planta de exterior perenne famosa por su increíble resistencia y adaptabilidad. Originario de zonas costeras, se caracteriza por un follaje verde denso de pequeñas hojas lobuladas que aportan una textura muy atractiva a macizos y maceteros. Es la elección perfecta para terrazas expuestas, bordes de piscinas y balcones soleados gracias a su tolerancia a los vientos, la salinidad y la escasez de agua. Una opción de paisajismo infalible para exteriores de bajo mantenimiento.",
    careDetails: "Crece óptimamente a pleno sol, aunque tolera la semisombra. Riego moderado, permitiendo que la tierra se seque superficialmente entre riegos. Es extremadamente tolerante a la sequía y soporta vientos fuertes. Requiere suelo bien drenado.",
    pricesBySize: {
      "Pequeña": 6900,
      "Mediana": 14900,
      "Grande": 24900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "yucca-pata-de-elefante",
    name: "Yucca Pata de Elefante",
    scientific: "Yucca elephantipes",
    category: "Plantas",
    price: 8900,
    image: yuccaS,
    images: [yuccaS, yuccaM, yuccaL],
    tag: "Nuevo",
    care: "Fácil",
    description: "La Yucca Pata de Elefante (Yucca elephantipes) es una de las plantas de interior y exterior más esculturales y resistentes que existen. Originaria de Centroamérica, se distingue por su robusto tronco ensanchado en la base —similar a la pata de un elefante— y sus múltiples rosetas de hojas rígidas y alargadas en color verde intenso. Ideal para aportar verticalidad, carácter arquitectónico y un toque desértico-tropical a terrazas, balcones soleados o interiores muy luminosos. Una verdadera guerrera que perdona casi cualquier descuido.",
    careDetails: "Requiere luz brillante indirecta o sol directo; prefiere exposiciones muy soleadas. El riego debe ser escaso: es crucial dejar que el sustrato se seque por completo antes de volver a regar, ya que su tronco almacena agua. Es extremadamente sensible al encharcamiento. Soporta ambientes secos y altas temperaturas.",
    pricesBySize: {
      "Pequeña": 8900,
      "Mediana": 18900,
      "Grande": 34900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "pennisetum-alopecuroides",
    name: "Pennisetum Alopecuroides",
    scientific: "Pennisetum alopecuroides",
    category: "Plantas",
    price: 4900,
    image: pennisetumS,
    images: [pennisetumS, pennisetumM, pennisetumL],
    tag: "Nuevo",
    care: "Fácil",
    description: "El Pennisetum alopecuroides, también conocido como Pasto Cola de Zorro o Plumero, es una gramínea ornamental de exterior sumamente popular en el paisajismo contemporáneo. Su denso follaje arqueado aporta movimiento y ligereza al jardín, pero su verdadero espectáculo ocurre en verano y otoño, cuando produce suaves espigas en forma de cepillo o 'cola de zorro'. Ideal para crear borduras, macizos dinámicos o para cultivar en maceteros de gran tamaño. Una opción rústica que demanda muy pocos cuidados.",
    careDetails: "Prefiere pleno sol para una máxima producción de espigas. Riego moderado, tolerando periodos de sequía una vez establecida. Requiere suelo bien drenado. A finales de invierno se recomienda realizar una poda drástica (a unos 10-15 cm del suelo) para renovar el follaje en primavera.",
    pricesBySize: {
      "Pequeña": 4900,
      "Mediana": 8900,
      "Grande": 15900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "agapanto-lirio-africano",
    name: "Agapanto · Lirio Africano",
    scientific: "Agapanthus africanus",
    category: "Plantas",
    price: 4500,
    image: agapantoS,
    images: [agapantoS, agapantoM, agapantoL],
    tag: "Nuevo",
    care: "Fácil",
    description: "El Agapanto (Agapanthus africanus), también conocido como Lirio Africano o Flor del Amor, es una planta perenne de exterior sumamente apreciada por sus espectaculares floraciones. Sus abundantes flores en forma de trompeta se agrupan en llamativas esferas de color azul violáceo, elevándose con elegancia sobre un denso follaje de hojas acintadas. Es un clásico indispensable en el paisajismo chileno para conformar macizos, borduras o cultivar en maceteros grandes. Una planta sumamente resistente, rústica y de muy bajo mantenimiento que iluminará tus exteriores durante primavera y verano.",
    careDetails: "Crece y florece mejor a pleno sol, aunque tolera la semisombra (con menos flores). Riego moderado, aumentando ligeramente en los meses cálidos de floración. Tolera muy bien la sequía y el viento una vez establecida. Prefiere sustratos bien drenados. Se aconseja dividir las matas cada 3 o 4 años.",
    pricesBySize: {
      "Pequeña": 4500,
      "Mediana": 7900,
      "Grande": 14900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "lavanda-dentata",
    name: "Lavanda",
    scientific: "Lavandula dentata",
    category: "Plantas",
    price: 3500,
    image: lavandaS,
    images: [lavandaS, lavandaM, lavandaL],
    tag: "Nuevo",
    care: "Fácil",
    description: "La Lavanda (Lavandula dentata), también conocida como espliego dentado, es un arbusto aromático perenne de exterior, imprescindible en cualquier jardín o terraza mediterránea. Sus inconfundibles hojas de borde dentado y sus espigas coronadas por brácteas color lila desprenden un intenso aroma relajante. Es ideal para crear macizos aromáticos, borduras o simplemente para disfrutar en un macetero al sol. Además de su belleza rústica, es una excelente planta melífera que atrae polinizadores a tus espacios verdes.",
    careDetails: "Requiere exposición a pleno sol (al menos 6 horas diarias). El riego debe ser moderado a escaso; es fundamental dejar secar el sustrato completamente entre riegos, ya que no tolera el exceso de humedad ni el encharcamiento. Necesita un suelo muy bien drenado, idealmente algo arenoso. Se recomienda una poda ligera después de la floración para mantener su forma compacta y redondeada.",
    pricesBySize: {
      "Pequeña": 3500,
      "Mediana": 6500,
      "Grande": 12900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  },
  {
    slug: "helecho-espada",
    name: "Helecho Espada",
    scientific: "Nephrolepis exaltata",
    category: "Plantas",
    price: 4900,
    image: helechoS,
    images: [helechoS, helechoM, helechoL],
    tag: "Nuevo",
    care: "Medio",
    description: "El Helecho Espada (Nephrolepis exaltata) es la planta de interior clásica por excelencia. Sus elegantes frondas largas y arqueadas de color verde brillante aportan una textura suave y una innegable sensación de exuberancia tropical a cualquier ambiente. Es ideal para colgar en macetas, colocar sobre pedestales o estantes altos donde sus hojas puedan caer libremente en cascada. Además de su belleza atemporal, es una de las mejores plantas para purificar el aire del hogar, mejorando la humedad ambiental y la frescura interior.",
    careDetails: "Prefiere luz indirecta brillante, pero tolera la semisombra. Se debe evitar siempre el sol directo, ya que quema sus delicadas frondas. Es fundamental mantener el sustrato constantemente húmedo (pero no encharcado) y proporcionarle alta humedad ambiental, idealmente pulverizando sus hojas con frecuencia. No tolera corrientes de aire frío ni los ambientes extremadamente resecos generados por la calefacción o el aire acondicionado.",
    pricesBySize: {
      "Pequeña": 4900,
      "Mediana": 8900,
      "Grande": 15900
    },
    sizesAvailability: {
      "Pequeña": true,
      "Mediana": false,
      "Grande": false
    }
  }
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
  else if (type === "cactaceas" || type === "cactáceas" || type === "cactus") category = "Cactáceas";

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
