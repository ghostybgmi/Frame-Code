import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Case Studies', 'Documentation', 'API'],
    Company: ['About Us', 'Team', 'Careers', 'Blog', 'Press'],
    Resources: ['Community', 'Help Center', 'Partners', 'Events', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'Licenses'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className={`relative border-t transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-slate-950 text-white border-slate-800/50'
        : 'bg-white text-gray-900 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column - spans 2 columns */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Frame<span className="text-indigo-500">&</span>Code
              </span>
            </motion.div>
            <p className={`text-sm mb-6 max-w-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Building exceptional digital experiences that transform businesses and delight users.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                    theme === 'dark'
                      ? 'bg-slate-800/50 hover:bg-slate-700 text-gray-400 hover:text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-span-1"
            >
              <h3 className={`font-semibold text-sm mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className={`text-sm transition-colors duration-200 ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${
          theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200'
        }`}>
          <p className={`text-xs ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            © {currentYear} Frame&Code. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className={`text-xs transition-colors duration-200 ${
              theme === 'dark'
                ? 'text-gray-500 hover:text-gray-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}>
              Privacy Policy
            </a>
            <a href="#" className={`text-xs transition-colors duration-200 ${
              theme === 'dark'
                ? 'text-gray-500 hover:text-gray-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}>
              Terms of Service
            </a>
            <a href="#" className={`text-xs transition-colors duration-200 ${
              theme === 'dark'
                ? 'text-gray-500 hover:text-gray-400'
                : 'text-gray-600 hover:text-gray-900'
            }`}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}