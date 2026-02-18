import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
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
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 rounded-[30px] backdrop-blur-xl border border-indigo-500/10"
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-tr from-violet-500/5 to-indigo-500/5 rounded-[40px] backdrop-blur-xl border border-violet-500/10"
        animate={{
          y: [0, 30, 0],
          rotateZ: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px),linear-gradient(to_bottom,#4f46e508_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/20 text-indigo-400 mb-8"
          >
            <span className="text-sm font-semibold">Ready to Transform Your Business?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join 50+ successful companies that trust us to deliver exceptional digital experiences. 
            Let's discuss your project and make your vision a reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/30 transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-400"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-3 text-lg font-bold">
                <Mail className="w-6 h-6" />
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent backdrop-blur-xl text-white rounded-2xl border border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300 font-bold text-lg shadow-lg flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Schedule a Call
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span>No Commitment Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              <span>Response Within 24 Hours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}