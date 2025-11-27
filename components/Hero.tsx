import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center md:justify-start space-x-3"
          >
             <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-semibold text-gray-600 tracking-wider uppercase border border-gray-200">
              Portfolio
             </span>
             <span className="text-gray-400 font-medium">|</span>
             <span className="font-bold text-gray-800 tracking-wider">
               {PERSONAL_INFO.name}
             </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.0] mb-8"
          >
            Insight. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Action.
            </span> <br />
            Impact.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0"
          >
            <p className="whitespace-pre-line mb-4 font-bold text-gray-800 text-2xl">
              {PERSONAL_INFO.catchphrase}
            </p>
            <p className="whitespace-pre-line text-base text-gray-500">
              {PERSONAL_INFO.subCatchphrase}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 items-center md:items-start"
          >
            <a 
              href="#story" 
              className="group relative inline-flex items-center px-8 py-4 bg-dark text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                ストーリーを見る
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;