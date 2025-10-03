import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Chetannadig',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/chetan-n-v',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:chetan.nv108@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Chetan N V</h3>
            <p className="text-muted-foreground mb-4">
              Software Developer passionate about building scalable and user-centric solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:chetan.nv108@gmail.com" className="hover:text-primary transition-colors">
                  chetan.nv108@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919353507253" className="hover:text-primary transition-colors">
                  +91 9353507253
                </a>
              </li>
              <li>Bengaluru, Karnataka</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Chetan N V. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="text-primary h-4 w-4 inline" fill="currentColor" /> using React & Tailwind
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
