import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faCircleCheck, faPaperPlane, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import emailjs from "@emailjs/browser";
import { useState } from "react";

const contactInfo = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "pooja.saini12@gmail.com",
    link: "mailto:pooja.saini12@gmail.com"
  },
    {
    icon: faPhone,
    label: "Phone",
    value: "+91 9953455706",
    link: "tel:+919953455706"
  },
  {
    icon: faLocationDot,
    label: "Location",
    value: "Gurgaon, Haryana",
    link: "#"
  }
];

export default function Contact() {
  return (
        <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let’s build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Let’s connect and explore how I can contribute to your team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value=""
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  type="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  required
                  placeholder="your@email.com"
                  value=""
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  required
                  value=""
                  
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <button
                className="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-8 py-4 text-lg w-full"
                type="submit" disabled>
              </button>

    
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

             {contactInfo.map((contactV,contactI) => {
              return(
                   <div className="space-y-4" key={contactI}>
              <a href="" className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                     <FontAwesomeIcon icon={contactV.icon} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {contactV.label}
                      </div>
                      <div className="font-medium">{contactV.value}</div>
                    </div>
                  </a>
              </div>
              )
             })}

           

            </div>
                    {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I’m currently open to new full-time opportunities where I can contribute my skills in frontend development and grow with a dynamic team.
              </p>
            </div>
</div>
    
          </div>
        </div>
      
    </section>
  )

