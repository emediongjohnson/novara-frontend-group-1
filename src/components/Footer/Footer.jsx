import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ABOUT */}
        <div className="footer-top">
          <h3>About</h3>

          <p>
            We are Novara Cohort Frontend Group 1 — a team of passionate
            frontend developers dedicated to building modern, responsive, and
            user-friendly web applications.
          </p>

          {/* TEAM LINKS */}
          <p className="team-links">
            Team members:{" "}
            <a
              href="https://github.com/emediongjohnson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emediong
            </a>
            ,{" "}
            <a
              href="https://github.com/marcelchike"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcel
            </a>
            ,{" "}
            <a
              href="https://github.com/ademilola-04"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ademilo
            </a>
            ,{" "}
            <a
              href="https://github.com/creativeakj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creativeakj
            </a>
            ,{" "}
            <a
              href="https://github.com/dannwillz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniel
            </a>
            ,{" "}
            <a
              href="https://github.com/diya210"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diya
            </a>
            ,{" "}
            <a
              href="https://github.com/esthersalau8-ux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Esther
            </a>
            ,{" "}
            <a
              href="https://github.com/Jamic-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jamic
            </a>
            ,{" "}
            <a
              href="https://github.com/laraolamipo-stack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lara
            </a>
            ,{" "}
            <a
              href="https://github.com/Emerald2112hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emmanuel
            </a>
          </p>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            ©2026 Designed by{" "}
            <a
              href="https://github.com/Anurella"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-link"
            >
              Amaka
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/ifeomaokocha"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-link"
            >
              Ifeoma A.
            </a>
            <br />
            Built by{" "}
            <a
              href="https://github.com/emediongjohnson/novara-frontend-group-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group-link"
            >
              Novara Cohort Frontend Group 1
            </a>
            <br />
            All rights reserved
          </p>

          <div className="footer-links">
            <a
              href="https://tsacademyonline.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TSAcademy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
