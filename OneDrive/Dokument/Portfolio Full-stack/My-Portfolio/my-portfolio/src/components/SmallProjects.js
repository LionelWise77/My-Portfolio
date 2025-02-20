import React from "react";
import styles from "../styles/SmallProjects.module.css"; // Importamos los estilos

function SmallProjects() {
  return (
    <section id="small-projects" className={styles.smallProjects}>
      <h2 className="text-center">Small Projects</h2>
      <div className="container">
        <div className="row">
          {[
            {
              title: "To-Do List",
              desc: "A simple task manager.",
              link: "https://github.com/yourusername/todo-app",
            },
            {
              title: "Weather App",
              desc: "Fetches weather data using an API.",
              link: "https://github.com/yourusername/weather-app",
            },
          ].map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className={`card ${styles.smallProjectCard}`}>
                <div className="card-body">
                  <h6 className="card-title">{project.title}</h6>
                  <p className="card-text">{project.desc}</p>
                  <a
                    href={project.link}
                    className="btn btn-sm btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SmallProjects;
