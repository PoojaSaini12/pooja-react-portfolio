import React from "react";
import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }  z-50`}
      >
        
        <Navbar />
      </header>
    </>
  );
}
