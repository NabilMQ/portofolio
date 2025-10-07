"use client";

import NavBar from "./section/navbar";
import {styles} from '@material/web/typography/md-typescale-styles.js';
import { useEffect } from "react";
import Footer from "./section/footer";
import BodyBanner from "./section/body_banner";
import BodyExperience from "./section/body_experience";
import BodyContact from "./section/body_contact";
import BodyAchievement from "./section/body_achievement";
import BodyProject from "./section/body_project";
import BodySkills from "./section/body_skills";
import { useWindowWidth } from "./global_data/window_size_context";

export default function Home() {

  const windowSize  = useWindowWidth();

  useEffect(() => {
    const styleSheet : CSSStyleSheet = styles.styleSheet!;
    document.adoptedStyleSheets.push(styleSheet); 

    function handleResize() {
      windowSize?.setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  })

  return (
    <main className="bg-light-surface-container-low dark:bg-dark-surface-container-low space-y-6">
      <NavBar></NavBar>
      <BodyBanner />
      <BodySkills />
      <BodyExperience />
      <BodyAchievement />
      <BodyProject />
      <BodyContact />
      <Footer />
    </main>
  );
}