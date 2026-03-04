import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Palette, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const typingWords = ['High-Performance', 'Scalable', 'Beautiful', 'Interactive'];

export function Hero() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) * 0.5;
      const y = (clientY - innerHeight / 2) * 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const floatingIcons = [
    { Icon: Code2, delay: 0, duration: 6 },
    { Icon: Palette, delay: 2, duration: 7 },
    { Icon: Zap, delay: 4, duration: 5 },
  ];

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[150px] ${
            theme === 'dark' ? 'bg-white/[0.03]' : 'bg-indigo-900/[0.04]'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 3D Floating Shapes */}
      <motion.div
        className={`absolute top-20 left-20 w-72 h-72 rounded-[50px] backdrop-blur-2xl border hidden lg:block shadow-2xl ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-gray-800/40 to-indigo-900/40 border-white/30'
            : 'bg-gradient-to-br from-indigo-600/60 to-indigo-100/60 border-indigo-300/40'
        }`}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -40, 0], rotateZ: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, duration }, idx) => (
        <motion.div
          key={idx}
          className={`absolute hidden xl:block ${theme === 'dark' ? 'text-indigo-600' : 'text-indigo-600'}`}
          style={{ top: `${20 + idx * 25}%`, right: `${10 + idx * 15}%` }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 360], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon className="w-16 h-16" strokeWidth={1} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-xl border mb-8 shadow-lg ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10 hover:bg-white/10'
              : 'bg-gray-900/5 border-gray-900/10 hover:bg-gray-900/10'
          } transition-all duration-300 cursor-default group`}
        >
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className={`w-4 h-4 ${theme === 'dark' ? 'text-white' : 'text-indigo-700'}`} />
          </motion.div>
          <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
            Welcome to Frame & Code
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] ${
            theme === 'dark' ? 'text-white' : 'text-indigo-400'
          }`}
        >
          We Design & Build
          <br />
          <span className={`${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-indigo-600 via-indigo-200 to-white' 
              : 'bg-gradient-to-r from-pink-200 via-pink-600 to-black'
          } bg-clip-text text-transparent`}>
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className={`inline-block w-[3px] h-[0.85em] ml-2 align-middle rounded-full ${
                theme === 'dark' ? 'bg-white' : 'bg-gray-900'
              }`}
            />
          </span>
          <br />
          Web Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Crafting digital experiences that drive growth and delight users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-4 rounded-2xl font-semibold shadow-xl transition-all duration-300 flex items-center gap-2 ${
              theme === 'dark' ? 'bg-white text-black' : 'bg-gray-900 text-white'
            }`}
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-4 rounded-2xl border-2 font-semibold backdrop-blur-xl transition-all duration-300 ${
              theme === 'dark'
                ? 'border-white/20 hover:bg-white/5 text-white'
                : 'border-gray-900/20 hover:bg-gray-900/5 text-gray-900'
            }`}
          >
            View Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '98%', label: 'Satisfaction' },
            { value: '12+', label: 'Years' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`p-6 rounded-3xl backdrop-blur-xl border ${
                theme === 'dark' ? 'border-white/10 hover:bg-white/5' : 'border-gray-900/10 hover:bg-gray-900/5'
              }`}
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </motion.section>
  );
}