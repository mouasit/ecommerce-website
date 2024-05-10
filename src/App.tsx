import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Category from "./components/Category";
function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="app-container">
        {/* <Home /> */}
        <Category />
        {/* <Product /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
