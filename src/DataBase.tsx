import redmi from "./assets/products/redmi.jpg";
import airpods from "./assets/products/airpods.jpg";
import ipad from "./assets/products/ipad.jpg";
import headPhones from "./assets/products/headphones-black.jpg";
import smartWatch from "./assets/products/smart-watch-red.jpg";
import powerBank from "./assets/products/power-bank.jpg";
import iphone14 from "./assets/products/iphone.jpg";
import speaker from "./assets/products/speaker.jpg";
import microwave from "./assets/products/microwave.jpg";
import laptop from "./assets/products/laptop.jpg";
import cable from "./assets/products/cable.jpg";
import controller from "./assets/products/controller.jpg";
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
  variants?: Variants;
  colorsDefinition?: ColorsDefinition[];
};

export const categories: Category[] = [
  {
    id: "c1",
    name: "electronics",
    products: ["p17", "p2", "p3", "p4", "p5", "p6"],
    sousCategories: [
      {
        id: "sc10",
        name: "phones",
        products: ["p17", "p7", "p1"],
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
        products: ["p11"],
      },
      {
        id: "sc60",
        name: "smart watches",
        products: ["p5"],
      },
      {
        id: "sc70",
        name: "accessories",
        products: ["p6", "p9", "p12"],
      },
    ],
  },
  {
    id: "c2",
    name: "home appliance",
    products: ["p10"],
    sousCategories: [
      {
        id: "sc80",
        name: "microwaves",
        products: ["p10"],
      },
    ],
  },
  {
    id: "c3",
    name: "gaming",
    products: ["p13", "p14", "p15", "p16"],
    sousCategories: [
      {
        id: "sc90",
        name: "Consoles & Controllers",
        products: ["p13"],
      },
      {
        id: "sc100",
        name: "games",
        products: ["p14"],
      },
      {
        id: "sc110",
        name: "Chairs",
        products: ["p15"],
      },
      {
        id: "sc111",
        name: "microphones",
        products: ["p16"],
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
  },
  {
    id: "p2",
    name: "Apple airpods 3",
    price: 300,
    quantity: globalQuantity,
    imageProduct: airpods,
    images: null,
  },
  {
    id: "p3",
    name: "Apple ipad 10",
    price: 4000,
    quantity: globalQuantity,
    imageProduct: ipad,
    images: null,
  },
  {
    id: "p4",
    name: "Surface Headphones",
    price: 1500,
    quantity:globalQuantity,
    imageProduct: headPhones,
    images: null,
  },
  {
    id: "p5",
    name: "Smart watch red",
    price: 300,
    quantity:globalQuantity,
    imageProduct: smartWatch,
    images: null,
  },
  {
    id: "p6",
    name: "Power Bank",
    price: 600,
    quantity:globalQuantity,
    imageProduct: powerBank,
    images: null,
  },
  {
    id: "p7",
    name: "iphone 14 plus",
    price: 11000,
    quantity:globalQuantity,
    imageProduct: iphone14,
    images: null,
  },
  {
    id: "p8",
    name: "JBL Flip 5",
    price: 1500,
    quantity:globalQuantity,
    imageProduct: speaker,
    images: null,
  },
  {
    id: "p9",
    name: "JBL Flip 5",
    price: 1500,
    quantity:globalQuantity,
    imageProduct: speaker,
    images: null,
  },
  {
    id: "p10",
    name: "Microwave oven",
    price: 3000,
    quantity:globalQuantity,
    imageProduct: microwave,
    images: null,
  },
  {
    id: "p11",
    name: "OMEN 16-wd0040nf",
    price: 12000,
    quantity:globalQuantity,
    imageProduct: laptop,
    images: null,
  },
  {
    id: "p12",
    name: "Baseus Tungsten",
    price: 400,
    quantity:globalQuantity,
    imageProduct: cable,
    images: null,
  },
  {
    id: "p13",
    name: "controller PS5",
    price: 600,
    quantity:globalQuantity,
    imageProduct: controller,
    images: null,
  },
  {
    id: "p14",
    name: "FC 24 PS5",
    price: 600,
    quantity:globalQuantity,
    imageProduct: cd,
    images: null,
  },
  {
    id: "p15",
    name: "gaming chair",
    price: 4000,
    quantity:globalQuantity,
    imageProduct: chair,
    images: null,
  },
  {
    id: "p16",
    name: "microphone RGB",
    price: 1200,
    quantity:globalQuantity,
    imageProduct: microphone,
    images: null,
  },
  {
    id: "p17",
    name: "iphone 13",
    title: `apple iPhone 13 6,1" 5G`,
    price: 10000,
    quantity:globalQuantity,
    imageProduct: iphone13,
    features: [
      "bass and Stereo Sound",
      "display with 3088 x 1440 pixels resolution",
      "memory, Storage & SIM: 12GB RAM, 256GB",
    ],
    images: null,
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
  },
];
