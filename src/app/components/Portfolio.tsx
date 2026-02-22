import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from '../context/ThemeContext';

const projects = [
{
  title: 'Citizen Portal Gov.in',
  category: 'Full Stack Development',
  description: 'Scalable government application portal serving lakhs of users with secure OTP + JWT authentication, RBAC-based access control, and performance-optimized Angular architecture.',
  tags: ['Angular', 'Java', 'JWT','REST APIs'],
  // gradient: 'from-blue-600 to-cyan-600',
  image: '/images/citizen-portal.png',
},
{
  title: 'NCS - National Career Service',
  category: 'Frontend & UI/UX',
  description: 'Built secure employer and jobseeker authentication flows with route guards, dynamic job posting modules, real-time validation (PAN, GST, Postal APIs), and responsive dashboard interfaces.',
  tags: ['Angular', 'Java', 'RxJS', 'REST APIs'],
  // gradient: 'from-indigo-600 to-violet-600',
  image: '/images/ncs.png',
},
{
  title: 'KNK Aquarium E-Commerce',
  category: 'Full Stack Development',
  description: 'Custom-built e-commerce platform with dynamic product catalog, OAuth authentication, admin dashboard, order tracking, and optimized MySQL-backed architecture.',
  tags: ['React', 'Node.js', 'MySQL', 'OAuth'],
  // gradient: 'from-emerald-600 to-teal-600',
  image: '/images/knk.png',
},

];

export function Portfolio() {
  const { theme } = useTheme();
  
  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
        theme === 'dark' ? 'bg-violet-600/10' : 'bg-violet-400/20'
      }`} />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
        theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-400/20'
      }`} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border mb-4 ${
            theme === 'dark'
              ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
              : 'bg-indigo-100 border-indigo-200 text-indigo-700'
          }`}>
            <span className="text-xs sm:text-sm font-semibold">Our Work</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Explore our portfolio of successful digital transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative h-full backdrop-blur-xl rounded-[24px] overflow-hidden shadow-lg border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-800/40 border-slate-700/50 hover:border-indigo-500/50 hover:shadow-indigo-500/20'
                  : 'bg-white/80 border-gray-200 hover:border-indigo-500/50 hover:shadow-indigo-200/50'
              }`}>
                {/* Image */}
                <div className={`relative h-64 overflow-hidden ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br  opacity-90 flex items-center justify-center`}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-12 h-12 text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`text-sm font-semibold bg-gradient-to-r  bg-clip-text text-transparent mb-2`}>
                    {project.category}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-500 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors duration-200 ${
                          theme === 'dark'
                            ? 'bg-slate-700/50 text-slate-300 border-slate-600/50 hover:border-indigo-500/50 hover:bg-indigo-500/10'
                            : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-indigo-500/50 hover:bg-indigo-50'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
          >
            View All Projects
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}