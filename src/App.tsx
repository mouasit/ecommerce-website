import React, { useState } from "react";
import "./App.css";
import "./animation.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnnouncementBar from "./components/layouts/AnnouncementBar";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layouts/Footer";
import Product from "./components/pages/Product";
import Category from "./components/pages/Category";
import Checkout from "./components/pages/Checkout";
import NotFound from "./components/pages/NotFound";
import { CheckIcon, CloseIcon } from "./components/layouts/Icons";

export type ShoppingCart = {
  idProduct: string;
  nameProduct: string;
  price: number;
  quantity: number;
  variants?: { name: string; value: string }[];
  imageProduct: any;
};

export const ShoppingCartContext = React.createContext<{
  shoppingCart: ShoppingCart[];
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCart[]>>;
  subTotal: number;
  setSubTotal: React.Dispatch<React.SetStateAction<number>>;
}>({
  shoppingCart: [],
  setShoppingCart: () => {},
  subTotal: 0,
  setSubTotal: () => {},
});

function App() {
  const shoppingCartLocalStorage = JSON.parse(
    localStorage.getItem("shoppingCart") as any,
  );
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart[]>(
    shoppingCartLocalStorage ? shoppingCartLocalStorage.shoppingCart : [],
  );
  const [subTotal, setSubTotal] = useState<number>(
    shoppingCartLocalStorage ? shoppingCartLocalStorage.subTotal : 0,
  );
  return (
    <BrowserRouter>
      <ShoppingCartContext.Provider
        value={{ shoppingCart, setShoppingCart, subTotal, setSubTotal }}
      >
        <AnnouncementBar />
        <Navbar />
        <main className="app-container">
          <div className="px-4 py-4 2xlg:px-0">
            <div className="  border-b-success flex items-center justify-between  rounded-lg border-b-4 bg-[#adf5ce] p-4">
              <div className="flex items-center gap-3">
                <div className="border-success flex h-6 w-6 items-center justify-center rounded-full border-2">
                  <CheckIcon className="fill-success h-3 w-3" />
                </div>
                <div className="text-success flex  gap-1 text-sm font-light flex-wrap">
                  <span className="space-x-1">
                    <span>Product</span>
                    <span className="font-medium">Iphone</span>
                  </span>
                  <span>successfully added to your cart.</span>
                </div>
              </div>
              <button className="rounded-full">
                <CloseIcon className="fill-success h-3 w-3" />
              </button>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Category/:id" element={<Category />} />
            <Route path="/Category/:id/:action" element={<Category />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </ShoppingCartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
