import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faRocket,
  faUsers,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const highlights = [
    {
      icon: faCode,
      title: "Code Quality",
      description:
        "I write clean, maintainable, and well-structured code. Focused on readability and long-term scalability.",
    },
    {
      icon: faRocket,
      title: "High Performance",
      description:
        "Optimizing applications for speed and efficiency. Ensuring smooth and responsive user experiences.",
    },

    {
      icon: faUsers,
      title: "Team Synergy",
      description:
        "Collaborating effectively with designers and developers. Delivering results through clear communication.",
    },

    {
      icon: faLightbulb,
      title: "Creative Thinking",
      description:
        "Solving problems with innovative and user-focused ideas. Turning concepts into engaging digital experiences.",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Developing the future,
              <span className="font-serif italic font-normal dark:text-white light:text-black">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate UI/UX Designer and Frontend Developer with over
                9+ years of experience creating meaningful digital experiences.
                My journey began with a curiosity for design and web
                technologies, and it has grown into a strong expertise in
                building user-centric and visually engaging interfaces.
              </p>

              <p>
                I specialize in React, modern frontend frameworks, and
                responsive design, transforming ideas into seamless and
                high-performing web applications. My approach blends clean code
                with intuitive design to deliver experiences that are both
                functional and impactful.
              </p>
              <p>
                Beyond development, I enjoy exploring new design trends,
                improving user experiences, and continuously learning to stay
                ahead in the ever-evolving digital world.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to design and build meaningful digital
                experiences that are — seamless, scalable, and truly enjoyable
                for users."
              </p>
            </div>
          </div>
          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => {
              return (
                <div className="glass p-6 rounded-2xl animate-fade-in" key={i}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
