import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  { icon: faWhatsapp, href: "https://wa.me/919953455706", label: "faWhatsapp" },
  { icon: faLinkedinIn, href: "https://www.linkedin.com/in/poojasaini12/", label: "LinkedIn" },
  { icon: faGithub, href: "https://github.com/PoojaSaini12/", label: "GitHub" },
];

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <>
           <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              PM<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Pedro Machado. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
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
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
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