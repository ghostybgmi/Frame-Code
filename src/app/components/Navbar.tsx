import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    theme === 'dark' 
      ? ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.8)']
      : ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(20px)']
  );

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500 ${
        theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-bold text-xl">FC</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Frame & <span className="text-indigo-400">Code</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`transition-colors duration-200 font-medium ${
                  theme === 'dark' 
                    ? 'text-slate-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                  : 'bg-gray-200 hover:bg-gray-300 text-indigo-600'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-xl transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-800 text-yellow-400'
                  : 'bg-gray-200 text-indigo-600'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden py-4 border-t transition-colors duration-500 ${
              theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'
            }`}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-medium transition-colors duration-200 ${
                  theme === 'dark' 
                    ? 'text-slate-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: menuItems.length * 0.1 }}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30"
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}