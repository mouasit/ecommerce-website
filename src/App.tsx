import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="2xl:app-container">
        <Slider />
        <Services />
      </main>
    </>
  );
}

export default App;
