import redmi from "./assets/products/redmi.jpg";
import airpods from "./assets/products/airpods.jpg";
import ipad1 from "./assets/products/ipad10/1.jpg";
import ipad2 from "./assets/products/ipad10/2.jpg";
import ipad3 from "./assets/products/ipad10/3.jpg";
import headPhones from "./assets/products/headphones-black.jpg";
import smartWatch from "./assets/products/smart-watch-red.jpg";
import powerBank from "./assets/products/power-bank.jpg";
import iphone14 from "./assets/products/iphone.jpg";
import speaker from "./assets/products/speaker.jpg";
import microwave1 from "./assets/products/microwave-oven/1.jpg";
import microwave2 from "./assets/products/microwave-oven/2.jpg";
import microwave3 from "./assets/products/microwave-oven/3.jpg";
import microwave4 from "./assets/products/microwave-oven/4.jpg";
import laptop from "./assets/products/laptop.jpg";
import cable1 from "./assets/products/cable/1.jpg";
import cable2 from "./assets/products/cable/2.jpg";
import cable3 from "./assets/products/cable/3.jpg";
import cable4 from "./assets/products/cable/4.jpg";
import cable5 from "./assets/products/cable/5.jpg";
import controller from "./assets/products/controller.jpg";
import gamingKeyboard from "./assets/products/keyboard.jpg";
import cd from "./assets/products/cd.jpg";
import chair from "./assets/products/chair.jpg";
import microphone from "./assets/products/microphone.jpg";
import iphone13 from "./assets/products/iphone-13/black/1.jpg";
import imageBlack1 from "./assets/products/iphone-13/black/1.jpg";
import imageBlack2 from "./assets/products/iphone-13/black/2.jpg";
import imageBlack3 from "./assets/products/iphone-13/black/3.jpg";
import imageBlack4 from "./assets/products/iphone-13/black/4.jpg";
import imageBlack5 from "./assets/products/iphone-13/black/5.jpg";
import imageGreen1 from "./assets/products/iphone-13/green/1.jpg";
import imageGreen2 from "./assets/products/iphone-13/green/2.jpg";
import imageGreen3 from "./assets/products/iphone-13/green/3.jpg";
import imageGreen4 from "./assets/products/iphone-13/green/4.jpg";
import imageBlue1 from "./assets/products/iphone-13/blue/1.jpg";
import imageBlue2 from "./assets/products/iphone-13/blue/2.jpg";
import imageBlue3 from "./assets/products/iphone-13/blue/3.jpg";
import imageBlue4 from "./assets/products/iphone-13/blue/4.jpg";

const globalQuantity = 20;

export type Category = {
  id: string;
  name: string;
  products: string[];
  sousCategories: SousCategory[];
};

export type SousCategory = {
  id: string;
  name: string;
  products: string[];
};

export type ColorsDefinition = {
  name: string;
  code: string;
  imagesColor: string[];
};

export type Variants = {
  attributesName: string[];
  itemsAttributes: {}[];
};

export type Product = {
  id: string;
  name: string;
  title?: string;
  price: number;
  quantity: number;
  features?: string[];
  imageProduct: any;
  images: string[] | null;
  category: string;
  sousCategory: string;
  hasVariants: boolean;
  variants?: Variants;
  colorsDefinition?: ColorsDefinition[];
};

export const categories: Category[] = [
  {
    id: "c1",
    name: "electronics",
    products: ["p16", "p2", "p3", "p4", "p5", "p6"],
    sousCategories: [
      {
        id: "sc10",
        name: "phones",
        products: ["p16", "p7", "p1"],
      },
      {
        id: "sc20",
        name: "tablets",
        products: ["p3"],
      },
      {
        id: "sc30",
        name: "air pods",
        products: ["p2"],
      },
      {
        id: "sc40",
        name: "head phones",
        products: ["p4"],
      },
      {
        id: "sc50",
        name: "laptops",
        products: ["p10"],
      },
      {
        id: "sc60",
        name: "smart watches",
        products: ["p5"],
      },
      {
        id: "sc70",
        name: "accessories",
        products: ["p6", "p8", "p11"],
      },
    ],
  },
  {
    id: "c2",
    name: "home appliance",
    products: ["p9"],
    sousCategories: [
      {
        id: "sc80",
        name: "microwaves",
        products: ["p9"],
      },
    ],
  },
  {
    id: "c3",
    name: "gaming",
    products: ["p12", "p13", "p14", "p15", "p17"],
    sousCategories: [
      {
        id: "sc90",
        name: "consoles & controllers",
        products: ["p12", "p17"],
      },
      {
        id: "sc100",
        name: "games",
        products: ["p13"],
      },
      {
        id: "sc110",
        name: "chairs",
        products: ["p14"],
      },
      {
        id: "sc111",
        name: "microphones",
        products: ["p15"],
      },
    ],
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Xiaomi redmi R",
    price: 1500,
    quantity: globalQuantity,
    imageProduct: redmi,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "phones",
  },
  {
    id: "p2",
    name: "Apple airpods 3",
    price: 300,
    quantity: globalQuantity,
    imageProduct: airpods,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "air pods",
  },
  {
    id: "p3",
    name: "Apple ipad 10",
    price: 4000,
    quantity: globalQuantity,
    imageProduct: ipad1,
    images: [ipad1, ipad2, ipad3],
    hasVariants: false,
    category: "electronics",
    sousCategory: "tablets",
    features: [
      "Superbe écran Liquid Retina de 10,9 pouces avec True Tone",
      "Puce A14 Bionic avec CPU 6 cœurs et GPU 4 cœurs",
      "256Go de stockage",
      "Appareil photo arrière grand angle 12 Mpx",
    ],
  },
  {
    id: "p4",
    name: "Surface Headphones",
    price: 1500,
    quantity: globalQuantity,
    imageProduct: headPhones,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "head phones",
  },
  {
    id: "p5",
    name: "Smart watch red",
    price: 300,
    quantity: globalQuantity,
    imageProduct: smartWatch,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "smart watches",
  },
  {
    id: "p6",
    name: "Power Bank",
    price: 600,
    quantity: globalQuantity,
    imageProduct: powerBank,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "accessories",
  },
  {
    id: "p7",
    name: "iphone 14 plus",
    price: 11000,
    quantity: globalQuantity,
    imageProduct: iphone14,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "phones",
  },
  {
    id: "p8",
    name: "JBL Flip 5",
    price: 1500,
    quantity: globalQuantity,
    imageProduct: speaker,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "accessories",
  },
  {
    id: "p9",
    name: "Microwave oven",
    price: 3000,
    quantity: globalQuantity,
    imageProduct: microwave1,
    images: [microwave1, microwave2, microwave3, microwave4],
    hasVariants: false,
    category: "home appliance",
    sousCategory: "microwaves",
    title: "Bespoke Grill Microwave Oven",
    features: [
      "3-in-1 Cooking: Grill, Grill Fry and Microwave",
      "Triple Distribution System",
      "Home Dessert",
      "Bread Defrost",
    ],
  },
  {
    id: "p10",
    name: "OMEN 16-wd0040nf",
    price: 12000,
    quantity: globalQuantity,
    imageProduct: laptop,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "laptops",
  },
  {
    id: "p11",
    name: "Baseus Tungsten",
    price: 400,
    quantity: globalQuantity,
    imageProduct: cable1,
    images: [cable1, cable2, cable3, cable4, cable5],
    hasVariants: false,
    category: "electronics",
    sousCategory: "accessories",
    title: "Baseus Tungsten Gold cable USB-A",
    features: [
      "Brand Baseus",
      "Black colour",
      "Maximum load 100W (11V/6A)",
      "Length 2m",
    ],
  },
  {
    id: "p12",
    name: "controller PS5",
    price: 600,
    quantity: globalQuantity,
    imageProduct: controller,
    images: null,
    hasVariants: false,
    category: "electronics",
    sousCategory: "phones",
  },
  {
    id: "p13",
    name: "FC 24 PS5",
    price: 600,
    quantity: globalQuantity,
    imageProduct: cd,
    images: null,
    hasVariants: false,
    category: "gaming",
    sousCategory: "games",
  },
  {
    id: "p14",
    name: "gaming chair",
    price: 4000,
    quantity: globalQuantity,
    imageProduct: chair,
    images: null,
    hasVariants: false,
    category: "gaming",
    sousCategory: "chairs",
  },
  {
    id: "p15",
    name: "microphone RGB",
    price: 1200,
    quantity: globalQuantity,
    imageProduct: microphone,
    images: null,
    hasVariants: false,
    category: "gaming",
    sousCategory: "microphones",
  },
  {
    id: "p16",
    name: "iphone 13",
    title: `apple iPhone 13 6,1" 5G`,
    price: 10000,
    quantity: globalQuantity,
    imageProduct: iphone13,
    features: [
      "bass and Stereo Sound",
      "display with 3088 x 1440 pixels resolution",
      "memory, Storage & SIM: 12GB RAM, 256GB",
    ],
    images: null,
    hasVariants: true,
    variants: {
      attributesName: ["storage", "color", "quantity"],
      itemsAttributes: [
        {
          storage: "64 GB",
          color: "black",
          quantity: "44",
        },
        {
          storage: "128 GB",
          color: "green",
          quantity: "12",
        },
        {
          storage: "64 GB",
          color: "green",
          quantity: "05",
        },
        {
          storage: "512 GB",
          color: "green",
          quantity: "10",
        },
        {
          storage: "64 GB",
          color: "blue",
          quantity: "28",
        },
        {
          storage: "512 GB",
          color: "black",
          quantity: "20",
        },
      ],
    },
    colorsDefinition: [
      {
        name: "black",
        code: "#000",
        imagesColor: [
          imageBlack1,
          imageBlack2,
          imageBlack3,
          imageBlack4,
          imageBlack5,
        ],
      },
      {
        name: "green",
        code: "#59965C",
        imagesColor: [imageGreen1, imageGreen2, imageGreen3, imageGreen4],
      },
      {
        name: "blue",
        code: "#3694C7",
        imagesColor: [imageBlue1, imageBlue2, imageBlue3, imageBlue4],
      },
    ],
    category: "electronics",
    sousCategory: "phones",
  },
  {
    id: "p17",
    name: "gaming keyboard",
    price: 400,
    quantity: globalQuantity,
    imageProduct: gamingKeyboard,
    images: null,
    hasVariants: false,
    category: "gaming",
    sousCategory: "consoles & controllers",
  },
];
