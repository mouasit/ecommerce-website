import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CategoryProduct from "./components/CategoryProduct";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="app-container">
        {/* <Home /> */}
        {/* <CategoryProduct /> */}
        <ProductDetails />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
