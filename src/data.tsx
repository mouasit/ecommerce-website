import redmi from "./assets/products/redmi.jpg";
import airpods from "./assets/products/airpods.jpg";
import ipad from "./assets/products/ipad.jpg";
import headPhones from "./assets/products/headphones-black.jpg";
import smartWatch from "./assets/products/smart-watch-red.jpg";
import powerBank from "./assets/products/power-bank.jpg";
import iphone from "./assets/products/iphone.jpg";
import speaker from "./assets/products/speaker.jpg";
import microwave from "./assets/products/microwave.jpg";
import laptop from "./assets/products/laptop.jpg";
import cable from "./assets/products/cable.jpg";
import controller from "./assets/products/controller.jpg";
import cd from "./assets/products/cd.jpg";
import chair from "./assets/products/chair.jpg";
import microphone from "./assets/products/microphone.jpg";

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

export type Product = {
  id: string;
  name: string;
  price: number;
  imageProduct: any;
};

export const categories: Category[] = [
  {
    id: "c1",
    name: "electronics",
    products: ["p1", "p2", "p3", "p4", "p5", "p6"],
    sousCategories: [
      {
        id: "sc10",
        name: "phones",
        products: ["p1", "p7"],
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
    imageProduct: redmi,
  },
  {
    id: "p2",
    name: "Apple airpods 3",
    price: 300,
    imageProduct: airpods,
  },
  {
    id: "p3",
    name: "Apple ipad 10",
    price: 4000,
    imageProduct: ipad,
  },
  {
    id: "p4",
    name: "Surface Headphones",
    price: 1500,
    imageProduct: headPhones,
  },
  {
    id: "p5",
    name: "Smart watch red",
    price: 300,
    imageProduct: smartWatch,
  },
  {
    id: "p6",
    name: "Power Bank",
    price: 600,
    imageProduct: powerBank,
  },
  {
    id: "p7",
    name: "iphone 14 plus",
    price: 11000,
    imageProduct: iphone,
  },
  {
    id: "p8",
    name: "JBL Flip 5",
    price: 1500,
    imageProduct: speaker,
  },
  {
    id: "p9",
    name: "JBL Flip 5",
    price: 1500,
    imageProduct: speaker,
  },
  {
    id: "p10",
    name: "Microwave oven",
    price: 3000,
    imageProduct: microwave,
  },
  {
    id: "p11",
    name: "OMEN 16-wd0040nf",
    price: 12000,
    imageProduct: laptop,
  },
  {
    id: "p12",
    name: "Baseus Tungsten",
    price: 400,
    imageProduct: cable,
  },
  {
    id: "p13",
    name: "controller PS5",
    price: 600,
    imageProduct: controller,
  },
  {
    id: "p14",
    name: "FC 24 PS5",
    price: 600,
    imageProduct: cd,
  },
  {
    id: "p15",
    name: "gaming chair",
    price: 4000,
    imageProduct: chair,
  },
  {
    id: "p16",
    name: "microphone RGB",
    price: 1200,
    imageProduct: microphone,
  },
];
