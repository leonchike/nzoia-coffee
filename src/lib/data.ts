export interface ProductVariant {
  id: string;
  type: "whole-bean" | "ground";
  label: string;
  size: string;
  weight: string;
  shopUrl: string;
}

export interface Product {
  id: string;
  name: string;
  roastLine: string;
  profile: string;
  roastLevel: "Light" | "Medium" | "Dark";
  origin: string;
  coffeeType: string;
  description: string;
  sensoryNotes: string[];
  oneLiner: string;
  variants: ProductVariant[];
  image: string;
}

export interface RoastLine {
  id: string;
  name: string;
  tagline: string;
  description: string;
  products: Product[];
}

export const SHOP_URL = "https://www.shopify.com";

export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
  "https://formspree.io/f/YOUR_FORM_ID";

export const CONTACT_EMAIL = "hello@nzoiacoffee.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Origins", href: "/origins" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Facebook", href: "#", icon: "facebook" },
];

export const INQUIRY_TYPES = [
  "General Inquiry",
  "Wholesale / Business",
  "Press / Media",
  "Other",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export interface ContactFormData {
  name: string;
  email: string;
  inquiryType: InquiryType;
  message: string;
}

const nonyeReserve: Product[] = [
  {
    id: "nonye-reserve-whole-bean",
    name: "Nonye Reserve",
    roastLine: "Nonye Reserve",
    profile: "Balanced, Fruity Flavors",
    roastLevel: "Medium",
    origin: "Single-origin, Kirinyaga, Kenya",
    coffeeType: "100% Arabica",
    description:
      "A coffee that arrives like sunrise over the Kirinyaga highlands — bright, alive, and full of promise. Nonye Reserve celebrates the natural vibrancy of high-altitude Kenyan beans, where volcanic soil and cool mountain air coax extraordinary fruit-forward complexity from every cherry. The first sip opens with sparkling blackcurrant and Meyer lemon, unfolding into layers of passion fruit and ripe mandarin. A delicate honey sweetness carries the finish, clean and lingering, like the memory of warm rain on red earth. This is coffee that doesn't just taste — it tells you exactly where it grew.",
    sensoryNotes: ["Blackcurrant", "Citrus", "Passion Fruit", "Honey"],
    oneLiner:
      "Bright and lively, with sparkling blackcurrant and sun-ripened citrus from the Kirinyaga highlands.",
    variants: [
      {
        id: "nonye-wb",
        type: "whole-bean",
        label: "Whole Beans",
        size: "12oz",
        weight: "340g",
        shopUrl: SHOP_URL,
      },
      {
        id: "nonye-gr",
        type: "ground",
        label: "Ground",
        size: "12oz",
        weight: "340g",
        shopUrl: SHOP_URL,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=2000",
  },
];

const kirinyagaPeaks: Product[] = [
  {
    id: "kirinyaga-peaks-whole-bean",
    name: "Kirinyaga Peaks",
    roastLine: "Kirinyaga Peaks",
    profile: "Bold, Majestic Roast",
    roastLevel: "Dark",
    origin: "Single-origin, Kirinyaga, Kenya",
    coffeeType: "100% Arabica",
    description:
      "Named for the ancient peaks that guard Kenya's heartland, Kirinyaga Peaks is a coffee of commanding presence and quiet depth. Roasted darker to unlock the bean's full baritone, this is a cup that fills the room. Rich dark chocolate opens the palate, followed by waves of smoky cedar and roasted walnut. The body is full and velvety, with a finish that lingers like embers — warm, bittersweet, and deeply satisfying. For those who believe coffee should be felt as much as tasted, Kirinyaga Peaks is an invitation to stand at the summit.",
    sensoryNotes: [
      "Dark Chocolate",
      "Smoky Cedar",
      "Roasted Walnut",
      "Caramel",
    ],
    oneLiner:
      "Bold and commanding, with dark chocolate depth and a smoky, lingering finish.",
    variants: [
      {
        id: "kirinyaga-wb",
        type: "whole-bean",
        label: "Whole Beans",
        size: "12oz",
        weight: "340g",
        shopUrl: SHOP_URL,
      },
      {
        id: "kirinyaga-gr",
        type: "ground",
        label: "Ground",
        size: "12oz",
        weight: "340g",
        shopUrl: SHOP_URL,
      },
    ],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=2000",
  },
];

const ketochiRoast: Product[] = [
  {
    id: "ketochi-roast-whole-bean",
    name: "Ketochi Roast",
    roastLine: "Ketochi Roast",
    profile: "Smooth, Mellow Blend",
    roastLevel: "Medium",
    origin: "Single-origin, Kirinyaga, Kenya",
    coffeeType: "100% Arabica",
    description:
      "Some coffees demand attention. Ketochi Roast simply earns it. This is the cup that becomes ritual — the one you reach for at dawn, the one that turns an ordinary morning into a quiet ceremony. Roasted to a careful medium that preserves the bean's natural sweetness, Ketochi opens with warm honey and brown sugar, flowing into silky caramel and a whisper of toasted almond. The body is rounded and comforting, the finish clean and effortless. Not every coffee needs to be an event. Some just need to be perfect.",
    sensoryNotes: ["Honey", "Caramel", "Toasted Almond", "Brown Sugar"],
    oneLiner:
      "Silky smooth with honey sweetness and caramel warmth — your morning ritual, elevated.",
    variants: [
      {
        id: "ketochi-wb",
        type: "whole-bean",
        label: "Whole Beans",
        size: "12oz",
        weight: "340g",
        shopUrl: SHOP_URL,
      },
      {
        id: "ketochi-gr",
        type: "ground",
        label: "Ground",
        size: "12oz",
        weight: "340g",
        shopUrl: SHOP_URL,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=2000",
  },
];

export const roastLines: RoastLine[] = [
  {
    id: "nonye-reserve",
    name: "Nonye Reserve",
    tagline: "Balanced, Fruity Flavors",
    description:
      "Where volcanic soil meets mountain mist, something extraordinary happens. Nonye Reserve captures the bright, fruit-forward character of Kirinyaga's finest beans — a celebration of origin in every cup.",
    products: nonyeReserve,
  },
  {
    id: "kirinyaga-peaks",
    name: "Kirinyaga Peaks",
    tagline: "Bold, Majestic Roast",
    description:
      "At the foot of Mount Kenya, where the air thins and the soil runs deep, coffee develops a richness that commands attention. Kirinyaga Peaks channels that power — dark, bold, unyielding.",
    products: kirinyagaPeaks,
  },
  {
    id: "ketochi-roast",
    name: "Ketochi Roast",
    tagline: "Smooth, Mellow Blend",
    description:
      "Not every extraordinary thing announces itself. Ketochi Roast is the quiet luxury of Kenyan coffee — smooth, sweet, and impossibly easy to love. The cup you come back to, every single morning.",
    products: ketochiRoast,
  },
];

export const allProducts: Product[] = [
  ...nonyeReserve,
  ...kirinyagaPeaks,
  ...ketochiRoast,
];
