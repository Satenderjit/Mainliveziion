import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";
import Courses from "./Courses/Courses";
import Proposal from "./Proposal/Proposal";
import Footer from "../../footer/Footer";
import Navbar from "../../head/Navbar";
import useCustom from "../../customHook/useCustom";

const Sixweek = () => {
  useCustom("Six Week Industrial Training | Ziion Technology");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Courses />
        <Proposal />
      </main>
      <Footer />
    </>
  );
};

export default Sixweek;