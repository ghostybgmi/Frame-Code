import { motion } from 'motion/react';
import Slider from 'react-slick';
import { Quote, Star } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    content: 'The team delivered an exceptional product that exceeded our expectations. Their attention to detail and commitment to quality is unmatched.',
    rating: 5,
    company: 'TechStart Inc.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO at DataFlow',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    content: 'Working with this agency was a game-changer for our business. They transformed our vision into a scalable, high-performance platform.',
    rating: 5,
    company: 'DataFlow Solutions',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder at DesignHub',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    content: 'Incredible experience from start to finish. The UI/UX design was beautiful and our conversion rates increased by 150%.',
    rating: 5,
    company: 'DesignHub',
  },
  {
    name: 'David Park',
    role: 'VP Product at FinanceApp',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    content: 'Their technical expertise and professionalism are outstanding. They delivered a complex fintech platform on time and within budget.',
    rating: 5,
    company: 'FinanceApp',
  },
  {
    name: 'Lisa Wang',
    role: 'Marketing Director at GrowthCo',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    content: 'The SEO optimization work was phenomenal. We saw a 200% increase in organic traffic within 3 months. Highly recommended!',
    rating: 5,
    company: 'GrowthCo',
  },
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendDots: (dots: any) => (
      <div style={{ bottom: '-50px' }}>
        <ul className="flex items-center justify-center gap-2">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-slate-600 rounded-full hover:bg-indigo-600 transition-colors duration-200" />
    ),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            <span className="text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Trusted by industry leaders and innovative startups
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-16"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="h-full bg-slate-800/40 backdrop-blur-xl rounded-[24px] p-8 border border-slate-700/50 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-5">
                    <Quote className="w-16 h-16 text-indigo-600" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-500/30"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-800" />
                    </motion.div>
                    <div>
                      <div className="font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-400">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-indigo-400 font-semibold">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Soft glow */}
                  <div className="absolute inset-0 rounded-[24px] opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]" />
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style jsx global>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active div {
          background-color: #6366f1 !important;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
