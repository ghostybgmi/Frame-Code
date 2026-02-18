import { motion, useInView } from 'motion/react';
import { Award, Users, Zap, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const stats = [
  {
    icon: Award,
    value: 50,
    suffix: '+',
    label: 'Projects Delivered',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: 99,
    suffix: '%',
    label: 'Client Satisfaction',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Zap,
    value: 100,
    suffix: '%',
    label: 'On-Time Delivery',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Shield,
    value: 24,
    suffix: '/7',
    label: 'Support Available',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const features = [
  {
    title: 'Expert Team',
    description: 'Seasoned developers and designers with 10+ years of combined experience.',
  },
  {
    title: 'Modern Stack',
    description: 'Cutting-edge technologies ensuring scalability and future-proof solutions.',
  },
  {
    title: 'Agile Process',
    description: 'Flexible development approach with continuous feedback and iterations.',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and code reviews to deliver bug-free products.',
  },
];

export function WhyChooseUs() {
  const { theme } = useTheme();
  
  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-b from-white via-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-1/2 h-full ${
        theme === 'dark' 
          ? 'bg-gradient-to-l from-indigo-950/30 to-transparent' 
          : 'bg-gradient-to-l from-indigo-100/30 to-transparent'
      }`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
        theme === 'dark' ? 'bg-violet-600/10' : 'bg-violet-400/20'
      }`} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
            theme === 'dark'
              ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
              : 'bg-indigo-100 border-indigo-200 text-indigo-700'
          }`}>
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            We Deliver <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Trusted by startups and enterprises worldwide
          </p>
        </motion.div>

        {/* Stats with Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`relative h-full p-8 backdrop-blur-xl rounded-[24px] border shadow-lg transition-all duration-300 overflow-hidden text-center ${
                theme === 'dark'
                  ? 'bg-slate-800/40 border-slate-700/50 hover:border-indigo-500/50 hover:shadow-indigo-500/20'
                  : 'bg-white/80 border-gray-200 hover:border-indigo-500/50 hover:shadow-indigo-200/50'
              }`}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Soft glow border */}
                <div className={`absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark'
                    ? 'shadow-[inset_0_0_20px_rgba(99,102,241,0.2)]'
                    : 'shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]'
                }`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl items-center justify-center mb-6 shadow-lg relative z-10`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Counter */}
                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent relative z-10`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className={`font-semibold relative z-10 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex gap-4 items-start p-6 rounded-[20px] backdrop-blur-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-800/30 border-slate-700/50 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10'
                  : 'bg-white/60 border-gray-200 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-200/20'
              }`}
            >
              <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mt-2" />
              <div>
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-500 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}