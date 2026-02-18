import { motion } from 'motion/react';
import { Send, Mail, User, Briefcase, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export function ContactUs() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'SEO Optimization',
    'Hosting & DevOps',
    'Full-Stack Solution',
    'Other',
  ];

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950' 
        : 'bg-gradient-to-b from-gray-50 via-indigo-50 to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-400/20'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-violet-600/10' : 'bg-violet-400/20'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 3D Floating shapes */}
      <motion.div
        className={`absolute top-20 right-20 w-40 h-40 rounded-[30px] border hidden lg:block ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-indigo-500/5 to-violet-500/5 backdrop-blur-xl border-indigo-500/10'
            : 'bg-gradient-to-br from-indigo-200/30 to-violet-200/30 backdrop-blur-xl border-indigo-300/30'
        }`}
        animate={{
          y: [0, -25, 0],
          rotateZ: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute bottom-40 left-20 w-32 h-32 rounded-[25px] border hidden lg:block ${
          theme === 'dark'
            ? 'bg-gradient-to-tr from-violet-500/5 to-indigo-500/5 backdrop-blur-xl border-violet-500/10'
            : 'bg-gradient-to-tr from-violet-200/30 to-indigo-200/30 backdrop-blur-xl border-violet-300/30'
        }`}
        animate={{
          y: [0, 20, 0],
          rotateZ: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid pattern */}
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px),linear-gradient(to_bottom,#4f46e508_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#4f46e515_1px,transparent_1px),linear-gradient(to_bottom,#4f46e515_1px,transparent_1px)]'
      } bg-[size:4rem_4rem]`} />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border mb-4 ${
            theme === 'dark'
              ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
              : 'bg-indigo-100 border-indigo-200 text-indigo-700'
          }`}>
            <Mail className="w-4 h-4" />
            <span className="text-sm font-semibold">Get in Touch</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Start Your{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-[32px] p-8 md:p-12 border shadow-2xl transition-all duration-500 ${
            theme === 'dark'
              ? 'bg-slate-800/40 backdrop-blur-xl border-slate-700/50 shadow-indigo-500/10'
              : 'bg-white/80 backdrop-blur-xl border-gray-200 shadow-indigo-200/30'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className={`flex items-center gap-2 mb-2 font-semibold transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <User className="w-4 h-4" />
                Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-4 rounded-2xl border outline-none transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-500 focus:bg-slate-700/70'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white'
                }`}
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className={`flex items-center gap-2 mb-2 font-semibold transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-4 rounded-2xl border outline-none transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-500 focus:bg-slate-700/70'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white'
                }`}
                placeholder="john@example.com"
              />
            </div>

            {/* Project Type Dropdown */}
            <div>
              <label htmlFor="projectType" className={`flex items-center gap-2 mb-2 font-semibold transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Briefcase className="w-4 h-4" />
                Project Type
              </label>
              <motion.select
                whileFocus={{ scale: 1.01 }}
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className={`w-full px-4 py-4 rounded-2xl border outline-none transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-700/50 border-slate-600 text-white focus:border-indigo-500 focus:bg-slate-700/70'
                    : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white'
                }`}
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </motion.select>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className={`flex items-center gap-2 mb-2 font-semibold transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <MessageSquare className="w-4 h-4" />
                Project Details
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full px-4 py-4 rounded-2xl border outline-none resize-none transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-500 focus:bg-slate-700/70'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white'
                }`}
                placeholder="Tell us about your project requirements, timeline, and budget..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-8 text-center text-sm transition-colors duration-500 ${
            theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
          }`}
        >
          <p>We respect your privacy. Your information will never be shared with third parties.</p>
        </motion.div>
      </div>
    </section>
  );
}
