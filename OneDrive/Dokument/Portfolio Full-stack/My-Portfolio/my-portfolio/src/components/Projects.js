import React from "react";
import styles from "../styles/Projects.module.css"; // Importamos los estilos
import HarmonizeImg from "../assets/images/CalenderView.webp";
import yutoriSpaImg from "../assets/images/yutorispa.png";
import FiFaQuizAppImg from "../assets/images/FiFaQuizAppImg.png";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className="text-center">Projects</h2>
      <div className={styles.projectsContainer}>
        {[
          {
            title: "YutoriSpa",
            desc: "A spa booking system built with Django and React.",
            img: yutoriSpaImg,
            link: "https://github.com/LionelWise77/Yutori-PP4",
          },
          {
            title: "Harmonize Calender",
            desc: "A Calender app Who help to plan your day.",
            img: HarmonizeImg,
            link: "https://github.com/LionelWise77/harmonize-frontend",
          },
          {
            title: "FiFa Quiz App",
            desc: "A game Quiz and funny way for increase your football Knowledge.",
            img: FiFaQuizAppImg,
            link: "https://github.com/LionelWise77/FIFA-World-Cup-Quiz",
          },
        ].map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div className={styles.overlay}></div>{" "}
            {/* Overlay semitransparente */}
            <div className={styles.projectContent}>
              <h5>{project.title}</h5>
              <p>{project.desc}</p>
              <a
                href={project.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
