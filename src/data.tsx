import redmi from "./assets/products/redmi.jpg";
import airpods from "./assets/products/airpods.jpg";
import ipad from "./assets/products/ipad.jpg";
import headPhones from "./assets/products/headphones-black.jpg";
import smartWatch from "./assets/products/smart-watch-red.jpg";
import powerBank from "./assets/products/power-bank.jpg";

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
        products: ["p7", "p8", "p9", "p10", "p11", "p12"],
      },
      {
        id: "sc20",
        name: "tablets",
        products: ["p13", "p14", "p15", "p16", "p17", "p18"],
      },
      {
        id: "sc30",
        name: "air pods",
        products: ["p19", "p20", "p21", "p22", "p23", "p24"],
      },
      {
        id: "sc40",
        name: "head phones",
        products: ["p25", "p26", "p27", "p28", "p29", "p30"],
      },
      {
        id: "sc50",
        name: "laptops",
        products: ["p31", "p31", "p32", "p33", "p34", "p35"],
      },
      {
        id: "sc60",
        name: "smart watches",
        products: ["p36", "p37", "p38", "p39", "p40", "p41"],
      },
      {
        id: "sc70",
        name: "accessories",
        products: ["p42", "p43", "p44", "p45", "p46", "p47"],
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
];
