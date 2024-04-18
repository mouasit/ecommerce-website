import "./App.css";
import "./animation.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="2xl:app-container">
        <Slider />
      </main>
    </>
  );
}

export default App;
