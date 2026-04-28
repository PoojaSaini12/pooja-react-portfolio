import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL } from '@fortawesome/free-solid-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

import { NavLinks } from '../Constants/navLinks';

export const Navbar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="container mx-auto px-6 flex items-center justify-between">
      <a className="text-xl font-bold tracking-tight hover:text-primary" href={'/'}>PS<span className="text-primary">.</span></a>
      <div className="hidden md:flex items-center gap-1">
        <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
          {NavLinks.map((menu,i)=>{
            return(
              <a key={i} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface' href={menu.href}>{menu.label}</a>
            )
          })}
        </div>

      </div>

      <div className='hidden md:block'>
        <a href="/#contact" className='relative flex overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-4 py-2 text-sm'>
          <span className='relative flex items-center justify-center gap-2'>
            Contact Me
          </span>
        </a>
      </div>

                {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground cursor-pointer">
            <FontAwesomeIcon icon={!isMobileMenuOpen ? faBars : faXmark } />

          </button>
    </nav>
              {/* Mobile Menu */}
              
          <div className={`md:hidden glass-strong animate-fade-in w-full mobile-menu ${isMobileMenuOpen ? 'active' : '' }`}>
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {NavLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <button className='relative w-full overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 py-3 text-base ' onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </button>
            </div>
            
          </div>
    </>
    
  )
}


