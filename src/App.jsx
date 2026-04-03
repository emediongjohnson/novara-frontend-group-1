import { useRef } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/InfoSection/InfoSection";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Planets from "./components/Planets/Planets";
import PlanetTable from "./components/PlanetTable/PlanetTable";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  const planetsRef = useRef(null);

  const scrollToPlanets = () => {
    console.log("Scrolling..."); // 🔥 debug
    planetsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      {/* PASS FUNCTION */}
      <Hero onExploreClick={scrollToPlanets} />

      <InfoSection />
      <VideoPlayer />

      {/* ATTACH REF */}
      <Planets refProp={planetsRef} />

      <PlanetTable />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
