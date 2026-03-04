import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const typingWords = ['High-Performance', 'Scalable', 'Beautiful', 'Interactive'];

export function Hero() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const currentWord = typingWords[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          if (displayText.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 transition-colors duration-700 ${
        theme === 'dark'
          ? 'bg-[#0d1117]'
          : 'bg-white'
      }`}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] rounded-full blur-[120px] ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20' 
              : 'bg-gradient-to-r from-purple-100/40 via-blue-100/40 to-indigo-100/40'
          }`}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)]'
        } bg-[size:100px_100px]`}
        style={{
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border ${
            theme === 'dark'
              ? 'bg-[#161b22] border-[#30363d] text-[#7d8590]'
              : 'bg-gray-50 border-gray-200 text-gray-700'
          }`}>
            <Sparkles className="w-4 h-4 text-indigo-500" />
            Welcome to Frame & Code
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            We Design & Build
            <br />
            <span className="relative inline-block">
              <span className={`relative ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400' 
                  : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600'
              } bg-clip-text text-transparent`}>
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-indigo-500 rounded-sm"
                />
              </span>
            </span>
            <br />
            Web Products
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed ${
            theme === 'dark' ? 'text-[#7d8590]' : 'text-gray-600'
          }`}
        >
          Crafting digital experiences that drive growth and delight users.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-indigo-500/25"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg border transition-all ${
              theme === 'dark'
                ? 'border-[#30363d] hover:border-[#484f58] text-white hover:bg-[#161b22]'
                : 'border-gray-300 hover:border-gray-400 text-gray-900 hover:bg-gray-50'
            }`}
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`text-sm ${theme === 'dark' ? 'text-[#7d8590]' : 'text-gray-600'}`}
        >
          <p className="mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company) => (
              <div key={company} className="font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}