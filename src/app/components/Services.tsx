import { motion } from 'motion/react';
import { Code2, Database, Palette, Search, Server, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, performant interfaces with React, Vue, and modern frameworks.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Scalable server-side solutions with Node.js, Python, and cloud-native architectures.',
    gradient: 'from-indigo-500 to-violet-500',
    bgGradient: 'from-indigo-500/10 to-violet-500/10',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting beautiful, intuitive user experiences that drive engagement and conversions.',
    gradient: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-500/10 to-purple-500/10',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility with data-driven SEO strategies and technical optimization.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Server,
    title: 'Hosting & DevOps',
    description: 'Reliable hosting solutions with automated deployments and 99.9% uptime guarantee.',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-500/10 to-amber-500/10',
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and optimized performance for better user experience.',
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10',
  },
];

export function Services() {
  const { theme } = useTheme();
  
  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950'
        : 'bg-gradient-to-b from-white via-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl ${
        theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-400/20'
      }`} />
      <div className={`absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl ${
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
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            What We <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
            End-to-end digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`relative h-full p-8 backdrop-blur-xl rounded-[24px] border shadow-lg transition-all duration-300 overflow-hidden ${
                theme === 'dark'
                  ? 'bg-slate-800/40 border-slate-700/50 hover:border-indigo-500/50 hover:shadow-indigo-500/20'
                  : 'bg-white/80 border-gray-200 hover:border-indigo-500/50 hover:shadow-indigo-200/50'
              }`}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark'
                    ? 'shadow-[inset_0_0_20px_rgba(99,102,241,0.2)]'
                    : 'shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]'
                }`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`leading-relaxed transition-colors duration-500 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    className={`mt-6 flex items-center gap-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}