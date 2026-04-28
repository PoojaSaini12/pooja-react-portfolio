import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavLinks } from '../Constants/navLinks';
import {Socialicons} from "../Constants/socialIcons"
const BASE = import.meta.env.BASE_URL;

function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <>
           <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href={`${BASE}`} className="text-xl font-bold tracking-tight">
              PS<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Pooja Saini. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {NavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {Socialicons.map((social, fIndx) => (
              <a
                key={fIndx}
                href={social.href}
                target='_blank'
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer