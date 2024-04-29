import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CategoryProduct from "./components/CategoryProduct";
function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="2xl:app-container">
        <Home />
        <CategoryProduct />
      </main>
      <Footer />
    </>
  );
}

export default App;
