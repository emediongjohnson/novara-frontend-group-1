import "./Hero.css";

function Hero() {
  return (
    /* Section Anchor for Navigation */
    <section id="home" className="hero">
      <div className="hero-container">
        
        {/* Text Content */}
        <div className="hero-text">
          <h1>Explore Our Solar System Through Data</h1>

          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down
            the solar system in a clear, data-driven way.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            
            {/* Scroll to Planets Section */}
            <button
              className="btn-primary"
              onClick={() => {
                document
                  .getElementById("planets-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore the Data
            </button>

            {/* Scroll to Contact Section */}
            <button
              className="btn-outline"
              onClick={() => {
                document
                  .getElementById("contact-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </button>

          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img
            src="https://www.nasa.gov/wp-content/uploads/2015/02/1-bluemarble_west.jpg"
            alt="Earth Blue Marble"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
