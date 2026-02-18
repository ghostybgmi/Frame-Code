import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Frontend Development', 'Backend Development', 'UI/UX Design', 'SEO Optimization', 'Hosting & DevOps'],
    Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'],
    Resources: ['Case Studies', 'Documentation', 'Help Center', 'Terms of Service', 'Privacy Policy'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px),linear-gradient(to_bottom,#4f46e508_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <span className="text-2xl font-bold">
                Digital<span className="text-indigo-400">Agency</span>
              </span>
            </motion.div>
            <p className="text-slate-500 mb-6 leading-relaxed">
              We transform ideas into exceptional digital experiences. Building the future, one project at a time.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>hello@digitalagency.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm"
          >
            © {currentYear} DigitalAgency. All rights reserved.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-violet-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-slate-700/50 hover:border-transparent hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}