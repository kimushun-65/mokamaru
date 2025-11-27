'use client';

import { motion } from 'framer-motion';
import { LinkedinIcon, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark to-gray-900 z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Ready to Create Impact?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            データと情熱で、製造業の未来を変える挑戦を。
            <br className="hidden md:block" />
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 border border-white/10"
            >
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <footer className="mt-24 pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.englishName}. All rights
            reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
