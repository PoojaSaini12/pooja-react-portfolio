import React from "react";

import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const BASE = import.meta.env.BASE_URL;

export default function Projects() {
  const projectList = [
    {
      img: project1,
      link: "https://kuberwms.com/",
      title: "Kuber Warehouse Managemenet",
      description:
        "A powerful warehouse and order fulfillment platform that simplifies inventory and logistics operations.",
      tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    },
    {
      img: project2,
      link: "https://yoursafehub.com/",
      title: "Your Save Hub",
      description:
        "A secure platform for anonymous employee reporting, helping organizations manage workplace issues with transparency and efficiency.",
      tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    },
    {
      img: project2,
      link: "https://www.aquevix.com/",
      title: "Aquevix",
      description:
        "Transforming ideas into scalable digital solutions with expert web and mobile development.",
      tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, projectid) => {
            return (
              <div
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                key={projectid}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.img}
                    alt="{project.title}"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60">
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        target="_blank"
                        href={project.link}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagindx) => {
                      return (
                        <span
                          key={tagindx}
                          className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <Link
            className="relative bg-transparent border border-border 
        text-foreground hover:border-primary/50 transition-all 
        duration-1000 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-8 py-4 text-lg font-medium rounded-full overflow-visible 
        animated-border"
            to={`${BASE}/projects`}  
          >
            View All Projects <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
}
