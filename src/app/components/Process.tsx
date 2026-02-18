import { motion, useInView } from 'motion/react';
import { Search, Pencil, Code, Rocket, TrendingUp } from 'lucide-react';
import { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We analyze your needs, goals, and target audience to create a strategic roadmap.',
  },
  {
    icon: Pencil,
    title: 'Design',
    description: 'Our designers craft beautiful, user-centric interfaces that align with your brand.',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Expert developers build scalable, high-performance solutions using latest technologies.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'We launch your product with comprehensive testing and seamless deployment.',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Continuous optimization and support to grow your digital presence.',
  },
];

export function Process() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-indigo-50 to-gray-50'
    }`}>
      {/* Background effects */}
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px),linear-gradient(to_bottom,#4f46e508_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#4f46e515_1px,transparent_1px),linear-gradient(to_bottom,#4f46e515_1px,transparent_1px)]'
      } bg-[size:4rem_4rem]`} />
      <motion.div
        className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-400/20'
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border mb-4 ${
            theme === 'dark'
              ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
              : 'bg-indigo-100 border-indigo-200 text-indigo-700'
          }`}>
            <span className="text-sm font-semibold">Our Process</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            How We <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
            A streamlined process designed for success
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={ref}>
          {/* Horizontal connecting line - Desktop */}
          <div className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-1 z-0">
            {/* Base line */}
            <div className={`absolute inset-0 rounded-full ${
              theme === 'dark' ? 'bg-slate-700' : 'bg-gray-300'
            }`} />
            
            {/* Animated gradient line */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: 'left' }}
            />
            
            {/* Circular progress markers */}
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 ${
                  theme === 'dark' 
                    ? 'bg-slate-900 border-indigo-500' 
                    : 'bg-white border-indigo-600'
                }`}
                style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              />
            ))}
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 text-center">
                  {/* Icon container with glass card style */}
                  <motion.div
                    whileHover={{ y: -8, boxShadow: theme === 'dark' ? '0 0 30px rgba(99, 102, 241, 0.3)' : '0 10px 30px rgba(99, 102, 241, 0.2)' }}
                    transition={{ duration: 0.3 }}
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl border shadow-lg mb-6 mx-auto group transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-slate-800/60 backdrop-blur-xl border-indigo-500/30'
                        : 'bg-white/80 backdrop-blur-xl border-indigo-200 shadow-indigo-100'
                    }`}
                  >
                    {/* Glow on hover */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-indigo-600/20 to-violet-600/20'
                        : 'bg-gradient-to-br from-indigo-100 to-violet-100'
                    }`} />
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      theme === 'dark'
                        ? 'shadow-[inset_0_0_20px_rgba(99,102,241,0.3)]'
                        : 'shadow-[inset_0_0_20px_rgba(99,102,241,0.2)]'
                    }`} />
                    
                    <step.icon className={`w-10 h-10 relative z-10 ${
                      theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                    
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-500 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Connector line for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-20 w-1 h-32 bg-gradient-to-b from-indigo-600 to-violet-600 transform -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
