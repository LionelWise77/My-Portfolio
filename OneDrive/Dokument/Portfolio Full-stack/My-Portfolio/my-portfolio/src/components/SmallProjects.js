import React from "react";
import styles from "../styles/SmallProjects.module.css"; // Importamos los estilos
import hangmanImg from "../assets/images/hangmanGame.jpg";
import calculatorImg from "../assets/images/calculator.webp";
import alchemistImg from "../assets/images/footer.webp";

function SmallProjects() {
  const projects = [
    {
      title: "Hangman Game",
      desc: "A simple Python Game.",
      link: "https://github.com/LionelWise77/Hangman88",
      img: hangmanImg,
    },
    {
      title: "REACT Calculator",
      desc: "A simple calculator built with React.",
      link: "https://github.com/yourusername/weather-app",
      img: calculatorImg,
    },
    {
      title: "Alchemist Cave",
      desc: "A page with BreatheWork techniques.",
      link: "https://github.com/LionelWise77/PP1-The-Alchemist-Cave",
      img: alchemistImg,
    },
  ];

  return (
    <section id="small-projects" className={styles.smallProjects}>
      <h2 className="text-center">Small Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.smallProjectCard}
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div className={styles.overlay}>
              <h6 className={styles.title}>{project.title}</h6>
              <p className={styles.desc}>{project.desc}</p>
              <a
                href={project.link}
                className={styles.btn}
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

export default SmallProjects;
