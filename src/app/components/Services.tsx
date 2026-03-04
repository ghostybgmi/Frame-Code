import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code, Smartphone, Palette, Zap, Database, Lock, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export function Services() {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that users love.',
      features: ['iOS & Android', 'React Native', 'Flutter'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience.',
      features: ['Figma & Adobe XD', 'Design Systems', 'Prototyping'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications optimized for speed and efficiency.',
      features: ['Core Web Vitals', 'SEO Ready', 'Speed Optimization'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Scalable server infrastructure and database architecture.',
      features: ['Node.js & Python', 'Cloud Solutions', 'API Development'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures to protect your data.',
      features: ['SSL/TLS', 'GDPR Compliant', 'Penetration Testing'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section
      id="services"
      className={`relative py-32 overflow-hidden transition-colors duration-700 ${
        theme === 'dark' ? 'bg-[#0d1117]' : 'bg-white'
      }`}
    >
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-transparent' 
            : 'bg-gradient-to-br from-indigo-100/40 via-purple-100/40 to-transparent'
        }`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] ${
          theme === 'dark' 
            ? 'bg-gradient-to-tr from-blue-900/20 via-cyan-900/20 to-transparent' 
            : 'bg-gradient-to-tr from-blue-100/40 via-cyan-100/40 to-transparent'
        }`} />
      </div>

      {/* Animated Grid */}
      <div 
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[linear-gradient(rgba(99,102,241,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(99,102,241,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.05)_1px,transparent_1px)]'
        } bg-[size:64px_64px]`}
        style={{
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header with SEO */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className={`h-px w-8 ${
              theme === 'dark' ? 'bg-gradient-to-r from-transparent to-indigo-500' : 'bg-gradient-to-r from-transparent to-indigo-600'
            }`} />
            <span className={`text-sm font-semibold tracking-wider uppercase ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              Our Services
            </span>
            <div className={`h-px w-8 ${
              theme === 'dark' ? 'bg-gradient-to-l from-transparent to-indigo-500' : 'bg-gradient-to-l from-transparent to-indigo-600'
            }`} />
          </motion.div>
          
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            What We{' '}
            <span className={`relative inline-block ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400' 
                : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}>
              Offer
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Comprehensive digital solutions designed to transform your business and deliver exceptional results
          </p>
        </motion.header>

        {/* Advanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              index={idx}
              theme={theme}
              isHovered={hoveredIndex === idx}
              onHover={() => setHoveredIndex(idx)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Need a custom solution? Let's discuss your project
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all"
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Advanced Service Card Component
function ServiceCard({ 
  service, 
  index, 
  theme, 
  isHovered,
  onHover,
  onLeave 
}: { 
  service: any; 
  index: number; 
  theme: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onLeave();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d'
      }}
      className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-[#161b22]/60 border-[#30363d] hover:border-indigo-500/50 hover:bg-[#161b22]/80'
          : 'bg-white/60 border-gray-200 hover:border-indigo-300 hover:bg-white/90 shadow-lg hover:shadow-2xl'
      }`}
    >
      {/* Gradient Overlay on Hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color}`}
        style={{ 
          background: `linear-gradient(135deg, ${
            theme === 'dark' ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.03)'
          } 0%, transparent 100%)`
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
      />

      <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden ${
            theme === 'dark' ? 'bg-[#0d1117]' : 'bg-gray-50'
          }`}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity`}
          />
          <service.icon className={`w-8 h-8 relative z-10 ${
            theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
          }`} />
        </motion.div>

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-3 group-hover:text-indigo-500 transition-colors ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className={`text-base mb-6 leading-relaxed ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature: string, featureIdx: number) => (
            <motion.li
              key={featureIdx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * featureIdx }}
              className={`flex items-center gap-2 text-sm ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Learn More Link */}
        <motion.a
          href="#"
          className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all ${
            theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
          }`}
          whileHover={{ x: 5 }}
        >
          Learn More
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Corner Accent */}
      <motion.div
        className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
      />
    </motion.article>
  );
}