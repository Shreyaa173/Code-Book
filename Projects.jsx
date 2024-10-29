import React from "react";
import "../App.css";

function Projects() {
  return (
    <>
      <br></br>
      <br></br>
      <h2 id="projects-heading">Projects</h2> {/* Heading outside the box */}
      <section id="projects" className="projects-section">
        <ul className="projects-list">
          <li>
            <a
              href="https://youtu.be/iOeebAM_C5g?feature=shared"
              className="project-link"
            >
              Java Project
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLsPse_rAwAIpjis9XwQXs-uz7gwfu-pcd"
              className="project-link"
            >
              C++ Project
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLiLzqLEAMKr7_oTKOosIP1QH4GTlZe29G"
              className="project-link"
            >
              C Project
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLl316cKxhMxtOWHa88kDqm42uWz1aqGfD"
              className="project-link"
            >
              Python Project
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/5ZdHfJVAY-s?feature=shared"
              className="project-link"
            >
              React Projects
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLMxec9nlD1X2ifPtxeu3Xm9nK1c4eBx2x"
              className="project-link"
            >
              JavaScript Projects
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/playlist?list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf&feature=shared"
              className="project-link"
            >
              HTML and CSS Projects
            </a>
          </li>

          <li>
            <a
              href="https://youtube.com/playlist?list=PLnQbggnVfvo2wIr4kV1h6208xk1pPf2F0&feature=shared"
              className="project-link"
            >
              Swift Projects
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Projects;
