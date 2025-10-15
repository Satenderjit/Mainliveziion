import React, { useState } from "react";
import styles from "./LandingPage.module.css"; // Import the CSS module
import GrowthStory from "../GrowthStory/GrowthStory";
import ProjectShow from "../ProjectShow/ProjectShow";
import TalkToExpert from "../TalkToExpert/Talktoexpert";
import TieUpClg from "../TieUpClg/TieUpClg";
import Form from "../../../form/Form"; // Import the Form component
import Getdemo from "../../../form/Getdemo"; // Import the Getdemo component

import {
  FaPython, FaJs, FaJava, FaCss3, FaHtml5, FaReact, FaNodeJs, FaAngular, FaVuejs,
  FaBootstrap, FaSass, FaGit, FaDocker, FaAws, FaRust, FaPhp, FaSwift, FaAndroid,
  FaApple, FaCode,
} from "react-icons/fa";
import { DiMongodb, DiPostgresql, DiMysql, DiJqueryLogo } from "react-icons/di";
import { SiTypescript, SiKotlin, SiGo, SiRuby, SiPerl, SiR, SiScala } from "react-icons/si";
import CompaniesTieUp from "../CompaniesTieUp/CompaniesTieUp";
import FAQ from "../FAQ/FAQ";
import Placements from "../Placements/Placements";
import Proposal from "../../sixWeekTraining/Proposal/Proposal";
import Courses from "../../sixWeekTraining/Courses/Courses";

const techIcons = [
  { name: "Python", icon: <FaPython size={64} color="#3776ab" /> },
  { name: "JavaScript", icon: <FaJs size={64} color="#f7df1e" /> },
  { name: "Java", icon: <FaJava size={64} color="#ed8b00" /> },
  // ... (rest of the icons array remains the same)
  { name: "Ruby", icon: <SiRuby size={64} color="#CC342D" /> },
];

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const closeForm = () => {
    setShowForm(false);
  };

  const closeDemo = () => {
    setShowDemo(false);
  };

  return (
    <main className={styles.container}>
      {/* --- Hero Section --- */}
      <section className={styles.heroGrid}>
        <article className={styles.heroText}>
          <span className={styles.heroSubtitle}>
            Join Ziion technology for a transformative experience
          </span>
          <h1>
            Six Months
            <br />
            {/* MODIFIED: Wrapped text in a span with the new gradient class */}
            <span className={styles.gradientText}>
              Industrial Training 
            </span> in Chandigarh
          </h1>
          <p>
            Ziion Technology is offering six-month industrial training at
            Chandigarh for students of B.Tech (all streams), MCA, M.Sc (IT),
            Diploma, and other graduate courses. During the training duration,
            students are working on actual industry projects where hands-on
            learning is promoted and technical skills are enhanced. Trained
            instructors guide them, and latest tools are employed to maintain
            updated knowledge. The training has been given to prepare the

            students industry-ready and self-assured in terms of their
            competence. With 100% placement support, career opportunities are
            facilitated, and students are aided in finding jobs in
            well-established companies.
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
              onClick={() => setShowForm(true)}
            >
              Talk To Us
            </button>
            <button
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
              onClick={() => setShowDemo(true)}
            >
              Get a DEMO
            </button>
          </div>
        </article>

        <div className={styles.heroImageContainer}>
          <img
            src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/animation_Home_194d1f8f8b.webp"
            alt="Banner animation"
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* --- Tech Icons Section --- */}
      <section className={styles.partnersSection}>
        <h3>
          Learn with the best{" "}
          <span className={styles.highlight}>Technologies</span>
        </h3>
        <div className={styles.logoScroller}>
          <div className={styles.logoTrack}>
            {techIcons.map((tech, index) => (
              <div className={styles.logoSlide} key={index}>
                {tech.icon}
                <div className={styles.techName}>{tech.name}</div>
              </div>
            ))}
            {techIcons.map((tech, index) => (
              <div className={styles.logoSlide} key={`clone-${index}`}>
                {tech.icon}
                <div className={styles.techName}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectShow />
      <Courses />
      <Placements />
      <TieUpClg />
      <GrowthStory />
      <FAQ />
      <CompaniesTieUp />
      <TalkToExpert />
      <Proposal />
      {showForm && <Form closeForm={closeForm} />}
      {showDemo && <Getdemo closeForm={closeDemo} />}
    </main>
  );
};

export default LandingPage;