import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Gaming from "./components/Gaming";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="2xl:app-container">
        <Slider />
        <Services />
        <Products />
        <Categories />
        <Gaming />
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;
