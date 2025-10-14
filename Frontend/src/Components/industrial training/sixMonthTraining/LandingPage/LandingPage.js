import React from "react";
import styles from "./LandingPage.module.css"; // Import the CSS module
import GrowthStory from "../GrowthStory/GrowthStory";
import ProjectShow from "../ProjectShow/ProjectShow";
import TalkToExpert from "../TalkToExpert/Talktoexpert";
import TieUpClg from "../TieUpClg/TieUpClg";

import {
  FaPython,
  FaJs,
  FaJava,
  FaCss3,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaBootstrap,
  FaSass,
  FaGit,
  FaDocker,
  FaAws,
  FaRust,
  FaPhp,
  FaSwift,
  FaAndroid,
  FaApple,
  FaCode,
} from "react-icons/fa";
import { DiMongodb, DiPostgresql, DiMysql, DiJqueryLogo } from "react-icons/di";
import {
  SiTypescript,
  SiKotlin,
  SiGo,
  SiRuby,
  SiPerl,
  SiR,
  SiScala,
} from "react-icons/si";
import CompaniesTieUp from "../CompaniesTieUp/CompaniesTieUp";
import FAQ from "../FAQ/FAQ";
import Placements from "../Placements/Placements";
import Proposal from "../../sixWeekTraining/Proposal/Proposal";
import Courses from "../../sixWeekTraining/Courses/Courses";
// Data for the technology icons - easy to update!
const techIcons = [
  { name: "Python", icon: <FaPython size={64} color="#3776ab" /> },
  { name: "JavaScript", icon: <FaJs size={64} color="#f7df1e" /> },
  { name: "Java", icon: <FaJava size={64} color="#ed8b00" /> },
  { name: "CSS", icon: <FaCss3 size={64} color="#1572b6" /> },
  { name: "HTML", icon: <FaHtml5 size={64} color="#e34f26" /> },
  { name: "React", icon: <FaReact size={64} color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs size={64} color="#339933" /> },
  { name: "Angular", icon: <FaAngular size={64} color="#dd0031" /> },
  { name: "Vue.js", icon: <FaVuejs size={64} color="#4fc08d" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={64} color="#7952b3" /> },
  { name: "Sass", icon: <FaSass size={64} color="#cc6699" /> },
  { name: "Git", icon: <FaGit size={64} color="#f05032" /> },
  { name: "Docker", icon: <FaDocker size={64} color="#2496ed" /> },
  { name: "AWS", icon: <FaAws size={64} color="#ff9900" /> },
  { name: "Rust", icon: <FaRust size={64} color="#000000" /> },
  { name: "C", icon: <FaCode size={64} color="#A8B9CC" /> },
  { name: "PHP", icon: <FaPhp size={64} color="#777bb4" /> },
  { name: "Swift", icon: <FaSwift size={64} color="#FA7343" /> },
  { name: "Android", icon: <FaAndroid size={64} color="#3DDC84" /> },
  { name: "MongoDB", icon: <DiMongodb size={64} color="#47A248" /> },
  { name: "PostgreSQL", icon: <DiPostgresql size={64} color="#336791" /> },
  { name: "MySQL", icon: <DiMysql size={64} color="#4479A1" /> },
  { name: "TypeScript", icon: <SiTypescript size={64} color="#3178c6" /> },
  { name: "Kotlin", icon: <SiKotlin size={64} color="#0095D5" /> },
  { name: "Go", icon: <SiGo size={64} color="#00ADD8" /> },
  { name: "Ruby", icon: <SiRuby size={64} color="#CC342D" /> },
];

const LandingPage = () => {
  return (
    <main className={styles.container}>
      {/* --- Hero Section --- */}
      <section className={styles.heroGrid}>
        <article className={styles.heroText}>
          <span className={styles.heroSubtitle}>
            Join Ziion technology for a transformative experience
          </span>
          <h1>
            Transform
            <br /> Your Career with
          </h1>
          <h2> Six Months Industrial Training in Chandigarh</h2>
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
          {/* --- MODIFIED: Button Container --- */}
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
            >
              Talk To Us
            </button>
            <button
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
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
            {/* We render the list twice for a seamless loop */}
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
    </main>
  );
};

export default LandingPage;
