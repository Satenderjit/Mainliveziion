import React from "react";
import styles from "./Talktoexpert.module.css";

const TalkToExpert = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        We Create <span className={styles.highlight}>AI-Focused Products</span>{" "}
        That Enhance Productivity & Profitability.
      </h2>
      <button className={styles.expertButton}>Talk to AI Expert</button>
    </section>
  );
};

export default TalkToExpert;
