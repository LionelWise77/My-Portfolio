import React from "react";
import styles from "../styles/Projects.module.css";
import HarmonizeImg from "../assets/images/CalenderView.webp";
import yutoriSpaImg from "../assets/images/yutorispa.png";
import FiFaQuizAppImg from "../assets/images/FiFaQuizAppImg.png";
import dragonBallImg from "../assets/images/dragonball.png";
import avalerionImg from "../assets/images/avalerion.png";
import growthMarketingImg from "../assets/images/growthmarketing.png";
import iggySpudImg from "../assets/images/iggyspud.png";
import coffeeWorldImg from "../assets/images/coffeeworldclub.png";

function Projects() {
  const projects = [
    {
      title: "Avalerion.com",
      desc: "Full website design and build for a B2B IT consulting firm. Built on Squarespace with custom HTML, CSS, and JavaScript. Sole owner from brief to launch.",
      img: avalerionImg,
      tech: ["Squarespace", "HTML", "CSS", "JavaScript"],
      link: "https://avalerions.com",
      live: "https://avalerions.com",
      type: "client",
      bgPos: "center center",
    },
    {
      title: "Growth Marketing Sweden AB",
      desc: "Fullstack development for a digital growth agency — web applications, WordPress integrations, and automation scripts across client projects.",
      img: growthMarketingImg,
      tech: ["React", "Node.js", "WordPress", "PostgreSQL"],
      link: "https://growthmarketing.se",
      live: "https://growthmarketing.se",
      type: "client",
      bgPos: "center center",
    },
    {
      title: "Iggy Spud — Artist Website",
      desc: "Personal website for Colombian artist Iggy Spud. Visual-forward design built to showcase his work and connect with his audience.",
      img: iggySpudImg,
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://iggyspud.netlify.app/",
      live: "https://iggyspud.netlify.app/",
      type: "client",
      bgPos: "center top",
    },
    {
      title: "YutoriSpa",
      desc: "A full-featured spa booking system built with Django and React, allowing users to book, reschedule and manage appointments easily.",
      img: yutoriSpaImg,
      tech: ["React", "Django", "Python", "PostgreSQL"],
      link: "https://github.com/LionelWise77/Yutori-PP4",
      live: "https://yutorispa-4e43a431e62f.herokuapp.com/",
      type: "personal",
      bgPos: "center center",
    },
    {
      title: "Harmonize Calendar",
      desc: "A daily planner and calendar app built with React, helping users to organize tasks, habits and goals efficiently.",
      img: HarmonizeImg,
      tech: ["React", "Node.js", "CSS"],
      link: "https://github.com/LionelWise77/harmonize-frontend",
      live: "https://harmonize-frontend-658a78db4f9b.herokuapp.com/",
      type: "personal",
      bgPos: "center center",
    },
    {
      title: "FIFA Quiz App",
      desc: "A fun interactive quiz app to test and improve your football knowledge with World Cup trivia.",
      img: FiFaQuizAppImg,
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/LionelWise77/FIFA-World-Cup-Quiz",
      live: "",
      type: "personal",
      bgPos: "center center",
    },
    {
      title: "Dragon Ball Fan Page",
      desc: "An interactive fan page dedicated to Dragon Ball. Built with React, i18n, animations, and a clean responsive design.",
      img: dragonBallImg,
      tech: ["React", "i18next", "CSS"],
      link: "https://github.com/LionelWise77/DragonBallFanPage",
      live: "https://dragon-ball-react-psi.vercel.app/",
      type: "personal",
      bgPos: "center center",
    },
    {
      title: "Coffee World Club",
      desc: "WordPress website development and ongoing maintenance for a specialty coffee trading company based in Stockholm.",
      img: coffeeWorldImg,
      tech: ["WordPress", "HTML", "CSS", "PHP"],
      link: "https://coffeeworldclub.com",
      live: "https://coffeeworldclub.com",
      type: "client",
      bgPos: "center 30%",
    },
  ];

  const clientProjects = projects.filter((p) => p.type === "client");
  const personalProjects = projects.filter((p) => p.type === "personal");

  const renderCard = (project, index) => (
    <div
      key={index}
      className={`${styles.projectCard}`}
      style={{
        backgroundImage: `url(${project.img})`,
        backgroundPosition: project.bgPos || "center center",
      }}
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
          {project.live ? (
            <a
              href={project.live}
              className={`${styles.button} ${styles.secondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.type === "client" ? "Visit Site" : "Live Demo"}
            </a>
          ) : (
            <p className={styles.notice}>⚠️ Coming soon</p>
          )}
          {project.link && project.type === "personal" && (
            <a
              href={project.link}
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <h3 className={styles.sectionLabel}>Client Work</h3>
      <div className={styles.projectsContainer}>
        {clientProjects.map((project, index) => renderCard(project, index))}
      </div>

      <h3 className={styles.sectionLabel}>Personal Projects</h3>
      <div className={styles.projectsContainer}>
        {personalProjects.map((project, index) => renderCard(project, index))}
      </div>
    </section>
  );
}

export default Projects;
