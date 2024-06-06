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
function App() {
  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Navbar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category/:id" element={<Category />} />
          <Route path="/Category/:id/:action" element={<Category />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
