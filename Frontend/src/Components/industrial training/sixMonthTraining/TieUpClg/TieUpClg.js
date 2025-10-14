import React from "react";
import styles from "./TieUpClg.module.css";
// Import all your company/university logos
import aimt from "../../../../assets/TieUpClg/aimt.png";
import baddi from "../../../../assets/TieUpClg/baddi.png";
import cgc from "../../../../assets/TieUpClg/cgc.png";
import cgc2 from "../../../../assets/TieUpClg/cgc2.webp";
import chitkara from "../../../../assets/TieUpClg/chitkara.png";
import jmit from "../../../../assets/TieUpClg/jmit.jpg";
import kuk from "../../../../assets/TieUpClg/kuk.png";
import lpu from "../../../../assets/TieUpClg/lpu.png";
import maimt from "../../../../assets/TieUpClg/maimt.png";
import mm from "../../../../assets/TieUpClg/mm.jpg";
import pu from "../../../../assets/TieUpClg/pu.png";
import timt from "../../../../assets/TieUpClg/timt.webp";
// An array to hold all the imported images for easy mapping
const logos = [
  { src: aimt, alt: "AIMT Logo" },
  { src: baddi, alt: "Baddi University Logo" },
  { src: cgc, alt: "CGC Landran Logo" },
  { src: cgc2, alt: "CGC Jhanjeri Logo" },
  { src: chitkara, alt: "Chitkara University Logo" },
  { src: jmit, alt: "JMIT Logo" },
  { src: kuk, alt: "Kurukshetra University Logo" },
  { src: lpu, alt: "LPU Logo" },
  { src: maimt, alt: "MAIMT Logo" },
  { src: mm, alt: "MMU Logo" },
  { src: pu, alt: "Panjab University Logo" },
  { src: timt, alt: "TIMT Logo" },
];
const TieUpClg = () => {
  // To create a seamless loop, we duplicate the logos array.
  // The animation will translate the container by -50%, and by the time
  // the first set of logos has scrolled past, the second (identical) set
  // is in position to seamlessly continue the animation.
  const extendedLogos = [...logos, ...logos];
  return (
    <div className={styles.tieUpContainer}>
      <h2 className={styles.title}>Our University Tie-Ups</h2>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {extendedLogos.map((logo, index) => (
            <div className={styles.logoContainer} key={index}>
              <img src={logo.src} alt={logo.alt} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TieUpClg;
