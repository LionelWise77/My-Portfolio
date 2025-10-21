import React from "react";
import styles from "../styles/Projects.module.css";
import HarmonizeImg from "../assets/images/CalenderView.webp";
import yutoriSpaImg from "../assets/images/yutorispa.png";
import FiFaQuizAppImg from "../assets/images/FiFaQuizAppImg.png";
import dragonBallImg from "../assets/images/dragonball.png";

function Projects() {
  const projects = [
    {
      title: "YutoriSpa",
      desc: "A full-featured spa booking system built with Django and React, allowing users to book, reschedule and manage appointments easily.",
      img: yutoriSpaImg,
      tech: ["React", "Django", "Python", "PostgreSQL"],
      link: "https://github.com/LionelWise77/Yutori-PP4",
      live: "https://yutorispa-4e43a431e62f.herokuapp.com/",
    },
    {
      title: "Harmonize Calendar",
      desc: "A daily planner and calendar app built with React, helping users to organize tasks, habits and goals efficiently.",
      img: HarmonizeImg,
      tech: ["React", "Node.js", "CSS"],
      link: "https://github.com/LionelWise77/harmonize-frontend",
      live: "https://harmonize-frontend-658a78db4f9b.herokuapp.com/",
    },
    {
      title: "FIFA Quiz App",
      desc: "A fun interactive quiz app to test and improve your football knowledge with World Cup trivia.",
      img: FiFaQuizAppImg,
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/LionelWise77/FIFA-World-Cup-Quiz",
      live: "",
    },
    {
      title: "Dragon Ball Fan Page",
      desc: "An interactive fan page dedicated to Dragon Ball. Built with React, i18n, animations, and a clean responsive design.",
      img: dragonBallImg,
      tech: ["React", "i18next", "CSS"],
      link: "https://github.com/LionelWise77/DragonBallFanPage",
      deploy: "https://github.com/LionelWise77/DragonBall-React",
      live: "https://dragon-ball-react-psi.vercel.app/",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className={styles.techStack}>
                {project.tech.map((techItem, idx) => (
                  <span key={idx} className={styles.techBadge}>
                    {techItem}
                  </span>
                ))}
              </div>
              <div className={styles.buttons}>
                <a
                  href={project.link}
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                {/* Only show Live Demo button if live link exists 
                {project.live && (
                  <a
                    href={project.live}
                    className={`${styles.button} ${styles.secondary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                  */}
                <p className={styles.notice}>⚠️ Live demo coming soon!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
