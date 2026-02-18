import { motion, useMotionValue, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export function Hero() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900'
        : 'bg-gradient-to-br from-gray-100 via-indigo-100 to-gray-50'
    }`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial glow behind headline */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] ${
          theme === 'dark' ? 'bg-indigo-600/20' : 'bg-indigo-400/30'
        }`} />
        
        <motion.div
          className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-violet-600/10' : 'bg-violet-400/20'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-400/20'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 3D Floating shapes - very soft opacity */}
      <motion.div
        className={`absolute top-20 left-20 w-64 h-64 rounded-[40px] backdrop-blur-xl border hidden lg:block ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-indigo-500/5 to-violet-500/5 border-indigo-500/10'
            : 'bg-gradient-to-br from-indigo-200/30 to-violet-200/30 border-indigo-300/30'
        }`}
        style={{ rotateX, rotateY }}
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute bottom-20 right-20 w-80 h-80 rounded-[60px] backdrop-blur-xl border hidden lg:block ${
          theme === 'dark'
            ? 'bg-gradient-to-tr from-violet-500/5 to-indigo-500/5 border-violet-500/10'
            : 'bg-gradient-to-tr from-violet-200/30 to-indigo-200/30 border-violet-300/30'
        }`}
        style={{ rotateX, rotateY }}
        animate={{
          y: [0, 40, 0],
          rotateZ: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/3 w-40 h-40 rounded-[30px] backdrop-blur-xl border hidden md:block ${
          theme === 'dark'
            ? 'bg-gradient-to-bl from-indigo-500/5 to-violet-500/5 border-indigo-500/10'
            : 'bg-gradient-to-bl from-indigo-200/30 to-violet-200/30 border-indigo-300/30'
        }`}
        style={{ rotateX, rotateY }}
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          rotateZ: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle grid pattern */}
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#4f46e530_1px,transparent_1px),linear-gradient(to_bottom,#4f46e530_1px,transparent_1px)]'
      } bg-[size:4rem_4rem] opacity-20`} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-xl border mb-6 sm:mb-8 ${
            theme === 'dark'
              ? 'bg-indigo-500/10 border-indigo-500/20'
              : 'bg-indigo-100 border-indigo-200'
          }`}
        >
          <Sparkles className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`} />
          <span className={`text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'}`}>Premium Digital Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] px-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          We Build Scalable
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}
        >
          Transforming ideas into high-performance web applications with cutting-edge frontend, 
          backend development, stunning UI/UX design, SEO optimization, and reliable hosting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl overflow-hidden shadow-lg shadow-indigo-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(99,102,241,0.6)]" />
            <span className="relative flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
              Start a Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent rounded-2xl border font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 text-sm sm:text-base ${
              theme === 'dark'
                ? 'text-white border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5'
                : 'text-gray-900 border-gray-300 hover:border-indigo-500/50 hover:bg-indigo-50'
            }`}
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 max-w-3xl mx-auto px-4"
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '99%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm transition-colors duration-500 ${
                theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
              }`}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}