import { useEffect, useState } from "react";
import "./Planets.css";

function Planets({ refProp }) {
  const [planets, setPlanets] = useState([]);

  const planetImages = {
    Mercury: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    Venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    Earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    Mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    Jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    Saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    Uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    Neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    Pluto: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg",
  };

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => {
        const fixedData = data.map((planet) => ({
          ...planet,
          image: planetImages[planet.planet],
        }));
        setPlanets(fixedData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    /* SECTION WITH REF ATTACHED */
    <section ref={refProp} id="planets-section" className="planet-section">
      <div className="planet-container">

        <h3>Visualizing the Differences Between Planets</h3>

        <p>
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>

        <div className="planet-grid">
          {planets.map((planet, index) => (
            <div className="planet-card" key={index}>
              <img src={planet.image} alt={planet.planet} />
              <h4>{planet.planet}</h4>
              <p>{planet.distanceFromSun} million km</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Planets;
