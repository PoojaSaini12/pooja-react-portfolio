import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Testimonials from "./Sections/Testimonials";

function App() {

  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
