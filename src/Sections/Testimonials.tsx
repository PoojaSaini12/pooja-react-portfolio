import React, { useState } from "react";
import Saurav from "../images/saurav.jpg";
import Antra from "../images/antra.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    quote:
      "It is been wonderful working together with Pooja. She is a brilliant team player and a passionate resource. Whatever she does, be it development or accepting any challenges, she is up for the game, loyal to her work, insightful, and a hard-working professional. Pooja will find a way to weather any storm with a smile. She shines in a hectic environment and is always there to help her team or others in any manner. Definitely, worth recommending.",
    author: "Saurav Sharma",
    role: "Global Marketing Manager at ViewTrade | Gurugram",
    avatar: Saurav,
  },

  {
    quote:
      "I have had the pleasure of working closely with Pooja and can attest to her exceptional professionalism, dedication, and expertise. Pooja approaches her work with remarkable professionalism, consistently delivering high-quality results. Her strong work ethic is evident in her unwavering commitment to excellence, even when faced with challenging deadlines. Additionally, her extensive Website Design and Development knowledge greatly contributes to her effectiveness in her role. Pooja is truly an asset to any team, and I highly recommend her for her outstanding contributions and dedication.",
    author: "Antara De",
    role: "Process Lead - Marketing | Portfolio Management, Google Ads, Social Media",
    avatar: Antra,
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto  px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground  text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt="Saurav"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((testvalue, testidx) => {
                  return (
                    <button
                      key={testidx}
                      className={` w-2 h-2 rounded-full transition-all duration-300 ${testidx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    ></button>
                  );
                })}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
