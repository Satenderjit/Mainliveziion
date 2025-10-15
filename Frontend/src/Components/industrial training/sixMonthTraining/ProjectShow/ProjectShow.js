import React, { useState } from "react";
import styles from "./ProjectShow.module.css";
import { useInView } from "react-intersection-observer";
import Form from "../../../form/Getdemo"; // Import the form component

// Make sure the path to your images is correct
import financialImage from "../../../../assets/ProjectImages/Financial.jpg";
import taskImage from "../../../../assets/ProjectImages/Task.jpg";
import portfolioImage from "../../../../assets/ProjectImages/Portfolio.jpg";
import ecomImage from "../../../../assets/ProjectImages/ecom.jpg";

// --- ICONS ---
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <circle cx="9" cy="21" r="1"></circle> <circle cx="20" cy="21" r="1"></circle> <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path> </svg>
);
const BudgetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path> <path d="M22 12A10 10 0 0 0 12 2v10z"></path> </svg>
);
const KanbanIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect> <line x1="9" y1="3" x2="9" y2="21"></line> <line x1="15" y1="3" x2="15" y2="21"></line> </svg>
);
const PortfolioIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle> </svg>
);

// --- Project Data Array ---
const projectsData = [
  {
    icon: <CartIcon />,
    title: "Scalable E-commerce Platform",
    description: "Engineered a responsive e-commerce solution with secure user authentication, dynamic product catalogs, and an integrated Stripe payment gateway for seamless transactions.",
    techStack: "MERN Stack",
    coreFeature: "Payment Gateway",
    buttonText: "Live Demo",
    buttonType: "demo", // Added button type
    imageUrl: ecomImage,
  },
  {
    icon: <BudgetIcon />,
    title: "Financial Analytics Dashboard",
    description: "Developed a personal finance application to monitor income and expenses, featuring interactive data visualization through Chart.js for insightful financial analysis.",
    techStack: "React & Chart.js",
    coreFeature: "Data Visualization",
    buttonText: "Live Demo",
    buttonType: "demo", // Added button type
    imageUrl: financialImage,
  },
  {
    icon: <KanbanIcon />,
    title: "Collaborative Task Manager",
    description: "Built a Kanban-style project management tool enabling real-time collaboration. Implemented a drag-and-drop interface for intuitive task workflow management.",
    techStack: "React & Node.js",
    coreFeature: "Drag & Drop UI",
    buttonText: "Live Demo",
    buttonType: "demo", // Added button type
    imageUrl: taskImage,
  },
  {
    icon: <PortfolioIcon />,
    title: "Responsive Personal Portfolio",
    description: "Designed and deployed a modern, single-page portfolio application with a focus on clean UI/UX, responsive design, and performance optimization.",
    techStack: "React & CSS Modules",
    coreFeature: "Responsive Design",
    buttonText: "View Source",
    buttonType: "source", // Added button type
    imageUrl: portfolioImage,
  },
];

// --- Animated Card Component ---
const AnimatedProjectCard = ({ project, index, onDemoClick }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce has been removed to allow continuous animations
  });

  const handleClick = () => {
    if (project.buttonType === "demo") {
      onDemoClick(project); // Open form for demo buttons
    } else if (project.buttonType === "source") {
      // Open GitHub repository for source buttons
      if (project.title === "Responsive Personal Portfolio") {
        window.open("https://github.com/ziion-technology/personal-portfolio", "_blank");
      } else if (project.title === "Scalable E-commerce Platform") {
        window.open("https://github.com/ziion-technology/ecommerce-platform", "_blank");
      } else if (project.title === "Financial Analytics Dashboard") {
        window.open("https://github.com/ziion-technology/financial-dashboard", "_blank");
      } else if (project.title === "Collaborative Task Manager") {
        window.open("https://github.com/ziion-technology/task-manager", "_blank");
      }
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.projectCard} ${inView ? styles.isVisible : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
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
        <button className={styles.viewCaseStudyButton} onClick={handleClick}>
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
const Projectshow = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDemoClick = (project) => {
    setSelectedProject(project);
    setShowDemoForm(true);
  };

  const closeDemoForm = () => {
    setShowDemoForm(false);
    setSelectedProject(null);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.projectShowContainer}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>
              Featured{" "}
              <span className={styles.brandStories}>Full-Stack Projects</span>
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
            <AnimatedProjectCard 
              key={index} 
              project={project} 
              index={index} 
              onDemoClick={handleDemoClick}
            />
          ))}
        </main>
      </div>
      {showDemoForm && <Form closeForm={closeDemoForm} />}
    </div>
  );
};

export default Projectshow;