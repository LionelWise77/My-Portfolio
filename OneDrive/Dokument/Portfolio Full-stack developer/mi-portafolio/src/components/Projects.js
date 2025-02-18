import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="text-center">Projects</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card project-card">
              <img
                src="/images/yutorispa.png"
                className="card-img-top"
                alt="YutoriSpa"
              />
              <div className="card-body">
                <h5 className="card-title">YutoriSpa</h5>
                <p className="card-text">
                  A spa booking system built with Django and React.
                </p>
                <a
                  href="https://github.com/yourusername/yutorispa"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
