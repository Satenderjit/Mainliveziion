import React, { useState } from "react";
import styles from "./FAQ.module.css";

// --- Extracted FAQ Data ---

// Storing the answer with bullet points as an object for easy rendering
const complexAnswer = {
  intro:
    "We believe in transparency, collaboration, and tailored solutions. Ziion Technology is the right fit for you if you’re looking for:",
  points: [
    "Training is conducted through a blend of live interactive sessions",
    "Hands-on projects to enhance practical skills",
    "Access to recorded materials for easy learning",
    "Dedicated support to ensure you're well-prepared for the job market",
    "A comprehensive curriculum designed to cover essential skills and tools",
    "A 100% placement guarantee to help you land your dream job",
    "A 6-month training program to help you build a successful career",
    "Hands-on projects, and recorded materials accessible anytime for flexible learning.",
  ],
  outro:
    "We encourage you to schedule a free consultation to discuss your project and see how we can help you scale your business.",
};
const complexanswer1 = {
  intro:
    "We provide continuous support via mentors, doubt-clearing sessions, and a dedicated online community to help you throughout the course.",
  points: [
    "Get in Touch With Us",
    " Fill out the form below and our team will get back to you as soon as possible. Whether you're interested in our courses, partnerships, or just want to say hello — we’d love to hear from you!",
  ],
  outro:
    "We encourage you to schedule a free consultation to discuss your project and see how we can help you scale your business.",
};

const leftColumnFaqs = [
  {
    question: "What is the duration of the training program?",
    answer:
      "The training program lasts for six Months, with comprehensive sessions designed to cover essential skills and tools in your chosen field.",
  },
  {
    question: "Which courses are offered in this program?",
    answer:
      "We offer specialized training in Full Stack Development, Data Science, Artificial Intelligence & Machine Learning (AI/ML), and Digital Marketing.",
  },
  {
    question: "Is the training suitable for beginners?",
    answer:
      "Yes! Our courses are structured to accommodate beginners, with foundational concepts explained clearly alongside advanced topics for those with prior experience.",
  },
  {
    question: "What is the mode of training?",
    answer: complexAnswer, // Using the complex answer object here
  },
];

const rightColumnFaqs = [
  {
    question: "Will I get hands-on experience?",
    answer:
      "Absolutely! Each course includes practical assignments, real-world projects, and case studies toensure you gain valuable hands-on experience.",
  },
  {
    question: "Who are the trainers?",
    answer:
      "Our trainers are industry experts with years of experience in their respective fields, committed toproviding personalized guidance and mentorship.",
  },
  {
    question: "Is there any certification upon completion?",
    answer:
      " Yes, participants will receive a certificate of completion which can enhance your professional profile and improve job prospects and improve job prospects.",
  },
  {
    question: "What kind of support is available during the training?",
    answer: complexanswer1,
  },
];

const FAQ = () => {
  // State to track the open accordion. `{ side, index }` identifies which one.
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleToggle = (side, index) => {
    if (openAccordion?.side === side && openAccordion?.index === index) {
      setOpenAccordion(null); // Close if the same one is clicked
    } else {
      setOpenAccordion({ side, index }); // Open the new one
    }
  };

  const renderAnswer = (answer) => {
    if (typeof answer === "string") {
      return <p>{answer}</p>;
    }
    // Handle the complex answer object with bullet points
    return (
      <div>
        <p>{answer.intro}</p>
        <div className={styles.bulletPoints}>
          {answer.points.map((point, i) => (
            <p key={i} className={styles.bulletPoint}>
              <span className={styles.tick}>✔</span> {point}
            </p>
          ))}
        </div>
        <p>{answer.outro}</p>
      </div>
    );
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>
        Frequently Asked <span className={styles.highlight}>Questions</span>
      </h2>
      <p className={styles.faqSubtitle}>
        Here's a list of FAQs that will help you learn more about DianApps.
      </p>

      <div className={styles.faqGrid}>
        {/* Left Column */}
        <div className={styles.faqColumn}>
          {leftColumnFaqs.map((item, index) => (
            <div
              key={`left-${index}`}
              className={`${styles.faqItem} ${
                openAccordion?.side === "left" && openAccordion?.index === index
                  ? styles.open
                  : ""
              }`}
              onClick={() => handleToggle("left", index)}
            >
              <div className={styles.question}>
                <h3>{item.question}</h3>
                <div className={styles.toggleIcon}>+</div>
              </div>
              <div className={styles.answerWrapper}>
                <div className={styles.answer}>{renderAnswer(item.answer)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className={styles.faqColumn}>
          {rightColumnFaqs.map((item, index) => (
            <div
              key={`right-${index}`}
              className={`${styles.faqItem} ${
                openAccordion?.side === "right" &&
                openAccordion?.index === index
                  ? styles.open
                  : ""
              }`}
              onClick={() => handleToggle("right", index)}
            >
              <div className={styles.question}>
                <h3>{item.question}</h3>
                <div className={styles.toggleIcon}>+</div>
              </div>
              <div className={styles.answerWrapper}>
                <div className={styles.answer}>{renderAnswer(item.answer)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
