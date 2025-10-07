"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function NavBar() {

  const listOfNavigation = [
    "Home",
    "Experience",
    "Projects",
    "Contact",
  ]
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  function handleScroll() {
    setIsTopOfPage(window.scrollY <= 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // mobile screen is < 768px, or md
    <nav className={`sticky bg-light-surface-container-low dark:bg-dark-surface-container-low top-0 h-[54px] py-2 px-6 gap-6 items-center lg:justify-start md:justify-center flex flex-row cursor-pointer transition-colors ease-in-out duration-[250ms] z-50 ${isTopOfPage ? "border-b-[1px] border-b-transparent" : "border-b-[1px] border-b-light-inverse-surface dark:border-b-dark-inverse-surface"}`}>
      {/* if the screen is not mobile screen */}
       {listOfNavigation.map(nav => (
        <Link href={`#${nav}`} key={nav} className="hover:underline hidden md:inline md-typescale-body-medium">
          {nav}
        </Link>
       ))}
       {/* if mobile screen, show this */}
       <h1 className="md:hidden md-typescale-body-medium text-light-inverse-surface dark:text-dark-inverse-surface">
        NabilMQ | Personal Portofolio
       </h1>
    </nav>
  )
}