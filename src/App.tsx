import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Gaming from "./components/Gaming";
import banner from "./assets/banner.png";

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
        <img
          src={banner}
          alt="banner"
          className="mt-[8rem] w-full px-4 2xl:px-0"
        />
      </main>
    </>
  );
}

export default App;
