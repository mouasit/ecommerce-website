import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Products from "./components/Products";
import Categories from "./components/Categories";

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
      </main>
    </>
  );
}

export default App;
