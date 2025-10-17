import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";
import Courses from "./Courses/Courses";
import Proposal from "./Proposal/Proposal";
import Footer from "../../footer/Footer";
import Navbar from "../../head/Navbar";
import useCustom from "../../customHook/useCustom";
import Placements from "../sixMonthTraining/Placements/Placements";
import TieUpClg from "../sixMonthTraining/TieUpClg/TieUpClg";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUS";
import FAQ2 from "./FAQ2/FAQ2";
import CompaniesTieUp from "../sixMonthTraining/CompaniesTieUp/CompaniesTieUp";
import Talktoexpert from "../sixMonthTraining/TalkToExpert/Talktoexpert";
import ProjectShow from "../sixMonthTraining/ProjectShow/ProjectShow";

const Sixweek = () => {
  useCustom("Six Week Industrial Training | Ziion Technology");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectShow />
        <Courses />
        <Placements />
        <TieUpClg />
        <WhyChooseUs/>
        <FAQ2/>
        <CompaniesTieUp />
        <Talktoexpert/>
        <Proposal />
      </main>
      <Footer />
    </>
  );
};

export default Sixweek;