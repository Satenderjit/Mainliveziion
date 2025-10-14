import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sixweek.module.css";
import {
  FaLaptopCode,
  FaUserTie,
  FaCertificate,
  FaPhoneAlt,
  FaRocket,
} from "react-icons/fa";
import Footer from "../../footer/Footer";
import Navbar from "../../head/Navbar";
import ReviewsSection from "../../reviews/ReviewsSection";
import useCustom from "../../customHook/useCustom";

const techStack = [
  '/logos/react.png', '/logos/node.png', '/logos/javascript.png',
  '/logos/python.png', '/logos/figma.png', '/logos/mongodb.png',
];
const marqueeTech = [...techStack, ...techStack, ...techStack];

const Sixweek = () => {
  useCustom("Six Week Industrial Training | Ziion Technology");
  const navigate = useNavigate();

  // --- Refs for interactive elements ---
  const heroVisualRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const techSectionRef = useRef(null);
  const bentoGridRef = useRef(null);

  useEffect(() => {
    // --- Interactive Hero Cube Logic ---
    const handleMouseMove = (e) => {
      if (heroVisualRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const rotateX = (clientY / innerHeight - 0.5) * -20; // Max 10deg rotation
        const rotateY = (clientX / innerWidth - 0.5) * 20;  // Max 10deg rotation
        heroVisualRef.current.style.setProperty('--mouse-rotate-x', `${rotateX}deg`);
        heroVisualRef.current.style.setProperty('--mouse-rotate-y', `${rotateY}deg`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Scroll-driven Animations Logic ---
    const handleScroll = () => {
      if (bentoGridRef.current) {
        const { top, height } = bentoGridRef.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        // Calculate progress of grid scrolling through the viewport
        const progress = Math.max(0, Math.min(1, 1 - (top + height * 0.8) / screenHeight));
        bentoGridRef.current.style.setProperty('--scroll-progress', progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // --- Intersection Observer for initial fade-in ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 }
    );
    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
    if (techSectionRef.current) observer.observe(techSectionRef.current);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (aboutSectionRef.current) observer.unobserve(aboutSectionRef.current);
      if (techSectionRef.current) observer.unobserve(techSectionRef.current);
    };
  }, []);

  const heroHeading = "Launch Your Tech Career in Just Six Weeks".split(" ");

  return (
    <>
      <Navbar />
      <main className={styles.pageWrapper}>
        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroHeading}>
                {heroHeading.map((word, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>{word}</span>
                ))}
              </h1>
              <p className={styles.heroSubheading} style={{ animationDelay: "0.8s" }}>
                Gain real-world skills with our intensive, project-based industrial training program.
              </p>
              <button className={styles.heroButton} style={{ animationDelay: "1s" }} onClick={() => navigate("/contact")}>
                Enroll Now <FaRocket />
              </button>
            </div>
            <div ref={heroVisualRef} className={styles.heroVisual}>
              <div className={styles.cube}>
                <div className={`${styles.face} ${styles.front}`}></div>
                <div className={`${styles.face} ${styles.back}`}></div>
                <div className={`${styles.face} ${styles.right}`}></div>
                <div className={`${styles.face} ${styles.left}`}></div>
                <div className={`${styles.face} ${styles.top}`}></div>
                <div className={`${styles.face} ${styles.bottom}`}></div>
              </div>
            </div>
          </div>
        </section>

        <section ref={aboutSectionRef} className={`${styles.aboutSection} ${styles.animateFadeIn}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.subHeading}>WHY CHOOSE US</p>
            <h2 className={styles.heading}>An Experience Designed for Success</h2>
          </div>
          <div ref={bentoGridRef} className={styles.bentoGrid}>
             <div className={`${styles.bentoItem} ${styles.bentoItemLarge}`}>
              <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" alt="Team collaboration" className={styles.bentoImage} />
              <div className={styles.bentoOverlay}>
                <h3>Live Projects, Real Skills</h3>
                <p>Build portfolio-worthy projects that solve real-world problems.</p>
              </div>
            </div>
            <div className={styles.bentoItem}>
              <FaUserTie className={styles.bentoIcon} /><h4>Expert Mentorship</h4>
              <p>Learn from industry veterans who bring years of experience.</p>
            </div>
            <div className={styles.bentoItem}>
              <FaLaptopCode className={styles.bentoIcon} /><h4>Cutting-Edge Curriculum</h4>
              <p>Our syllabus is updated constantly to match industry demand.</p>
            </div>
            <div className={styles.bentoItem}>
              <FaCertificate className={styles.bentoIcon} /><h4>Verified Certification</h4>
              <p>Earn a recognized certificate to validate your new skills.</p>
            </div>
            <div className={`${styles.bentoItem} ${styles.bentoItemWide}`}>
              <div className={styles.contactInfo}><FaPhoneAlt/>
                <div><strong>Have Questions? Talk to Our Counselor.</strong><p>(+91) 98765-43210</p></div>
              </div>
              <button className={styles.bentoButton} onClick={() => navigate('/contact')}>Get in Touch</button>
            </div>
          </div>
        </section>

        <section ref={techSectionRef} className={`${styles.techSection} ${styles.animateFadeIn}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.heading}>Technologies You Will Master</h2>
          </div>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {marqueeTech.map((imgSrc, i) => (
                <div key={`tech-${i}`} className={styles.techIcon}>
                  <img src={imgSrc} alt={`Tech logo ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
};

export default Sixweek;