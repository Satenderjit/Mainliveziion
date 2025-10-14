import React, { useState } from "react";
import styles from "./FAQ.module.css";

// --- Extracted FAQ Data ---

// Storing the answer with bullet points as an object for easy rendering
const complexAnswer = {
  intro:
    "We believe in transparency, collaboration, and tailored solutions. DianApps is the right fit for you if you’re looking for:",
  points: [
    "Expertise in emerging technologies like AI, blockchain, and cloud computing.",
    "A customer-centric approach that focuses on solving real business challenges.",
    "Scalable and cost-effective solutions that align with your goals.",
    "A track record of 350+ successful projects and a growing global presence.",
  ],
  outro:
    "We encourage you to schedule a free consultation to discuss your project and see how we can help you scale your business.",
};

const leftColumnFaqs = [
  {
    question: "Does DianApps Offer an End-to-End AI Development Service?",
    answer:
      "Yes! DianApps provides comprehensive AI development services, from conceptualization to deployment. Our team specializes in AI strategy, data modeling, machine learning integration, NLP (Natural Language Processing), and AI-driven automation to create intelligent, scalable, and future-ready solutions for businesses across industries.",
  },
  {
    question: "What Mobile App Development Services Do You Offer?",
    answer:
      "DianApps specializes in custom mobile app development across iOS, Android, and cross-platform frameworks like Flutter and React Native. Our services include MVP development, UI/UX design, AI-powered automation, backend development, and third-party integrations, delivering high-performance, scalable, and user-friendly applications.",
  },
  {
    question: "What Industries Benefit from DianApps’ AI Solutions?",
    answer:
      "Our AI-driven innovations cater to diverse industries, including healthcare, finance, e-commerce, logistics, and education. Whether it’s AI-powered fraud detection in fintech, personalized shopping experiences in retail, or smart automation in supply chain management, we tailor AI solutions to maximize efficiency and business growth.",
  },
  {
    question: "How do I know if DianApps is the right partner for me?",
    answer: complexAnswer, // Using the complex answer object here
  },
];

const rightColumnFaqs = [
  {
    question: "Do You Provide Post-Launch Software Maintenance?",
    answer:
      "Absolutely! We offer dedicated post-launch maintenance and support services, including performance optimization, security updates, feature enhancements, and bug fixes, ensuring your software remains up-to-date and fully functional.",
  },
  {
    question: "How Does DianApps Integrate AI into Digital Solutions?",
    answer:
      "Our AI integration process is tailored to enhance business efficiency, user experience, and automation. We leverage machine learning models, predictive analytics, chatbots, recommendation engines, and generative AI to make applications smarter. Whether it's an AI-powered chatbot, data-driven decision-making, or process automation, we seamlessly embed AI into your mobile apps, websites, and enterprise software to drive innovation.",
  },
  {
    question:
      "How can I build a cost-effective product with a quick turnaround for market fit?",
    answer:
      "At DianApps, we focus on lean development methodologies to help businesses quickly validate their ideas without overspending. Our MVP (Minimum Viable Product) approach ensures that we build only the essential features first, allowing you to test market fit, gather user feedback, and scale efficiently. With agile execution and optimized cost structures, we help you bring your product to market faster without compromising quality.",
  },
  {
    question:
      "Why should I choose your company for my next app development project?",
    answer:
      "At our company, we combine innovation with expertise to deliver custom app development solutions that drive real results. With a team of seasoned developers, UI/UX specialists, and project managers, we ensure end-to-end support, from idea validation to post-launch maintenance. Our track record includes delivering high-performing, scalable apps across industries, all while staying on time and within budget. When you work with us, you're not just hiring a development team, you’re gaining a technology partner committed to your long-term success.",
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
