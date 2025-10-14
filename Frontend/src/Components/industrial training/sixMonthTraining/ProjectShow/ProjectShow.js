import React from "react";
import styles from "./ProjectShow.module.css";

// Import your local images
import financialImage from "../../../../assets/ProjectImages/Financial.jpg";
import taskImage from "../../../../assets/ProjectImages/Task.jpg";
import portfolioImage from "../../../../assets/ProjectImages/Portfolio.jpg";
import ecom from "../../../../assets/ProjectImages/ecom.jpg";

// --- ICONS ---
const CartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);
const BudgetIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);
const KanbanIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
  </svg>
);
const PortfolioIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// --- Project Data Array ---
const projectsData = [
  {
    icon: <CartIcon />,
    title: "Scalable E-commerce Platform",
    description:
      "Engineered a responsive e-commerce solution with secure user authentication, dynamic product catalogs, and an integrated Stripe payment gateway for seamless transactions.",
    techStack: "MERN Stack",
    coreFeature: "Payment Gateway",
    buttonText: "Live Demo",
    imageUrl: ecom,
  },
  {
    icon: <BudgetIcon />,
    title: "Financial Analytics Dashboard",
    description:
      "Developed a personal finance application to monitor income and expenses, featuring interactive data visualization through Chart.js for insightful financial analysis.",
    techStack: "React & Chart.js",
    coreFeature: "Data Visualization",
    buttonText: "Live Demo",
    imageUrl: financialImage,
  },
  {
    icon: <KanbanIcon />,
    title: "AI/ML ",
    description:
      "Build an AI-powered chatbot that can answer customer queries automatically using NLP (Natural Language Processing)..",
    techStack: " Python, TensorFlow/Keras, NLTK, Flask/Django",
    coreFeature: "Understands user queries in natural language.",
    buttonText: "Live Demo",
    imageUrl: taskImage,
  },
  {
    icon: <PortfolioIcon />,
    title: " Google ad form",
    description:
      "To create, manage, and optimize paid search and display campaigns.",
    techStack:
      "Google Analytics,Google Tag Manager, Google Data Studio (Looker Studio),Google Keyword Planner",
    coreFeature:
      "Campaign creation, keyword targeting, audience targeting, bid management, ad scheduling, and A/B testing.",
    buttonText: "View Source",
    imageUrl: portfolioImage,
  },
];

// --- Simple Card Component without intersection observer ---
const AnimatedProjectCard = ({ project, index }) => {
  return (
    <div className={`${styles.projectCard} ${styles.isVisible}`}>
      <div className={styles.infoSection}>
        <div className={styles.infoIcon}>
          {project.icon}
          <span>{project.title}</span>
        </div>
        <p className={styles.infoDescription}>{project.description}</p>
        <div className={styles.metric}>
          <span className={styles.metricValue}>{project.techStack}</span>
          <span className={styles.metricLabel}>Tech Stack</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricValue}>{project.coreFeature}</span>
          <span className={styles.metricLabel}>Core Feature</span>
        </div>
        <button className={styles.viewCaseStudyButton}>
          {project.buttonText}
        </button>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img
            src={project.imageUrl}
            alt={`${project.title} UI`}
            className={styles.projectImage}
          />
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const ProjectShow = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.projectShowContainer}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>
              Featured{" "}
              <span className={styles.brandStories}>
                Real Projects <br /> to Learn ”Modern Tech”
                <br /> In Six Months Training
              </span>
            </h1>
          </div>
          <div className={styles.headerCta}>
            <p className={styles.ctaText}>
              A curated collection of applications demonstrating proficiency in
              front-end and back-end development, API integration, and database
              management.
            </p>
            <button className={styles.caseStudiesButton}>View on GitHub</button>
          </div>
        </header>

        <main className={styles.mainContent}>
          {projectsData.map((project, index) => (
            <AnimatedProjectCard key={index} project={project} index={index} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default ProjectShow;
