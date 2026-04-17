import React from "react";
import styles from "../styles/AboutMe.module.css";
import profileImg from "../assets/images/profilpic.jpg";

function AboutMe() {
  const skills = [
    { category: "Frontend", items: ["React", "HTML", "CSS", "JavaScript"] },
    {
      category: "Backend",
      items: ["Node.js", "Django", "Python", "PostgreSQL"],
    },
    {
      category: "Marketing Ops",
      items: ["Customer.io", "Zapier", "LinkedIn Ads", "Google Ads"],
    },
    {
      category: "Tools",
      items: ["Figma", "GitHub", "WordPress", "Squarespace"],
    },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <img
            src={profileImg}
            alt="Sebastián Perez Betancur"
            className={styles.profileImg}
          />
          <div className={styles.intro}>
            <h2>About Me</h2>
            <p>
              I'm <strong>Sebastián Pérez Betancur</strong> a Fullstack
              Developer and Growth Marketer based in Stockholm, Sweden. I build
              things that actually work, from React apps and automation
              workflows to client websites and marketing campaigns.
            </p>
            <p>
              Recently I designed and launched{" "}
              <a
                href="https://avalerion.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                avalerion.com
              </a>{" "}
              for a B2B IT consulting firm, ran 90-day organic campaigns, and
              cut email production time by 50% through automation. Before that I
              worked as a Fullstack Developer at Growth Marketing Sweden AB
              delivering React and WordPress projects for real clients.
            </p>
            <p>
              Trilingual — Spanish, English, Swedish. Driven by discipline and
              continuous learning. Open to fullstack, growth, or hybrid roles,
              remote or relocation.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>📍 Stockholm, Sweden</span>
              <span className={styles.badge}>🌐 ES · EN · SV</span>
              <span className={styles.badge}>✈️ Open to relocation</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>Skills</h3>
          <div className={styles.skillsGrid}>
            {skills.map((group, i) => (
              <div key={i} className={styles.skillGroup}>
                <h4>{group.category}</h4>
                <div className={styles.skillTags}>
                  {group.items.map((skill, j) => (
                    <span key={j} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
