import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/layouts/AnnouncementBar";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layouts/Footer";
import Product from "./components/pages/Product";
import Category from "./components/pages/Category";
import Checkout from "./components/pages/Checkout";
function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="app-container">
        {/* <Home /> */}
        {/* <Category /> */}
        {/* <Product /> */}
        <Checkout />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
