import { useRef } from "react";

import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import InfoSection from "./components/InfoSection/InfoSection.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import Planets from "./components/Planets/Planets.jsx";
import PlanetTable from "./components/PlanetTable/PlanetTable.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const planetsRef = useRef(null);

  const scrollToPlanets = () => {
    console.log("Scrolling...");
    planetsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      {/* Hero receives click handler */}
      <Hero onExploreClick={scrollToPlanets} />

      <InfoSection />
      <VideoPlayer />

      {/* Planets receives ref */}
      <Planets refProp={planetsRef} />

      <PlanetTable />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
