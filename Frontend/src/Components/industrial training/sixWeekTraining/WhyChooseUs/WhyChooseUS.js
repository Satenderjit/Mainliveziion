import React, { useState, useEffect, useRef } from "react";
import styles from "./WhyChooseUs.module.css";

// --- Helper Component for Animated Numbers ---
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const endValue = parseInt(end);
          if (start === endValue) return;

          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * endValue);
            setCount(current);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// --- The Main Component ---
const GrowthStory = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>
              <span className={styles.highlight}>Why Choose Us</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerDescription}>
              Choosing us means partnering with a team dedicated to your growth
              and success. We offer expert-led programs, personalized support,
              and real-world opportunities that empower you to achieve your
              goals confidently.{" "}
            </p>
          </div>
        </div>

        <img
          src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/Vector_108_aac5f00240.svg"
          alt="Decorative divider"
          className={styles.divider}
        />

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h4>
              <CountUp end={100} />%
            </h4>
            <p>
              Achieve your career goals with our guaranteed 100% placement
              support!.
            </p>
          </div>
          {/* CARD 2 NOW HAS THE GLOBE BACKGROUND */}
          <div className={`${styles.statCard} ${styles.globeCard}`}>
            <h4>
              <CountUp end={500} />+
            </h4>
            <p>
              A hub for experiential, project-driven learning that turns
              knowledge into practical skills.
            </p>
            <img
              src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/globe_4e73a29d63.webp"
              alt="Globe graphic"
              className={styles.globeImage}
            />
          </div>
          {/* CARD 3 IS A STANDARD CARD AGAIN */}
          <div className={styles.statCard}>
            <h4>
              <CountUp end={50} />+
            </h4>
            <p>
              Learn directly from industry experts with experience at leading
              global companies.
            </p>
          </div>
          <div className={styles.statCard}>
            <h4>
              <CountUp end={20} />+
            </h4>
            <p>
              Gain hands-on experience with the latest tools and technologies
              used in the industry.
            </p>
          </div>
          <div className={styles.statCard}>
            <h4>
              <CountUp end={3000} />+
            </h4>
            <p>
              Empowering students to successfully train, upskill, and excel in
              their careers."
            </p>
          </div>
          {/* CARD 6 STILL HAS THE GLOBE BACKGROUND */}
          <div className={`${styles.statCard} ${styles.globeCard}`}>
            <h4>
              <CountUp end={1} />
              -on-
              <CountUp end={1} />
            </h4>
            <p>
              Get individualized guidance and dedicated support through
              one-on-one mentorship and doubt-clearing sessions .
            </p>
            <img
              src="https://prod-strapi-website-media.s3.ap-south-1.amazonaws.com/globe_4e73a29d63.webp"
              alt="Globe graphic"
              className={styles.globeImage}
            />
          </div>
        </div>

        {/* <div className={styles.bottomContent}>
          <div className={styles.bottomLeft}>
            <h2 className={styles.bottomTitle}>
              Flexible Learning{" "}
              <span className={styles.bottomHighlight}>
                Built <br /> Around
              </span>
              <br /> Your Unique Goals
            </h2>
          </div>
          <div className={styles.bottomRight}>
            <p className={styles.bottomDescription}>
              We understand that everyone learns differently. That's why we
              offer flexible schedules, self-paced modules, and continuous
              support to ensure your learning journey fits your lifestyle.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GrowthStory;
