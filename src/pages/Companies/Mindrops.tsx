import React from 'react'
import { MindropsProjects } from '../../data/ProjectsData/MindropsProjects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function Mindrops() {
return (


<div className='projects-container mb-18'>
    <div className='text-center mx-auto max-w-3xl mb-16'>
        <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
                                Work done in Mindrops Solutions (for client site > eRevmax Technologies) </span>
        <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            A collection of WordPress websites crafted using Elementor, custom CSS, and jQuery, with pixel-perfect Adobe XD to WordPress conversion, responsive design, and performance optimization.
        </p>
    </div>

    <div className="flex  gap-4 justify-items-center flex-wrap justify-center">
        {MindropsProjects.map((project, projectid) => {
            return (
                <div className="group glass rounded-2xl overflow-hidden animate-fade-in justify-center  w-[200px]" key={projectid}>
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                        <img src={project.img} alt="{project.title}" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                        <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'>
                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a target='_blank' href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <FontAwesomeIcon icon={faLink} />
                                </a>
                            </div>
                        </div>





                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-4">
                        <div className="flex justify-between justify-center">
                            <h3 className="text-sm text-center group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                        </div>





                    </div>
                </div>


            )
        })}
    </div>


</div>
)
}
