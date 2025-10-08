'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import Prism from './animations/Prism';
import RotatingText from './animations/RotatingText.jsx';
import GlitchText from './animations/GlitchText'; 
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // ✅ Detect low-end or small devices for optimization
    const low =
      /Android|iPhone/i.test(navigator.userAgent) &&
      navigator.hardwareConcurrency <= 4;
    setIsLowEndDevice(low);
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* ✅ Background Animation only on capable devices */}
      {!isLowEndDevice && (
        <div className="absolute inset-0 -z-10">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={isMobile ? 2.5 : 3.5}
            baseWidth={isMobile ? 3.5 : 5.5}
            scale={isMobile ? 1.2 : 2.2}
            hueShift={0}
            colorFrequency={1}
            noise={isMobile ? 0.02 : 0.05}
            glow={isMobile ? 0.3 : 0.6}
            suspendWhenOffscreen
          />
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* ✨ Rotating Text Badge */}
          <motion.div
            className="inline-block px-4 py-2 mb-6 glass-card rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="text-sm font-medium text-cyan-300 flex items-center justify-center gap-2">
              ✨ Open to&nbsp;
              <RotatingText
                texts={[
                  'Opportunities',
                  'Freelancing',
                  'Full-time Roles',
                  'Software Developer Role',
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-120%', opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </motion.div>

          {/* 🧑‍💻 Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Chetan N V
            </span>
          </motion.h1>

          {/* 💼 Glitch Subtitle */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <GlitchText
              speed={0.6}
              enableShadows={true}
              enableOnHover={false}
              className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-slate-100"
            >
              Software Developer
            </GlitchText>
          </motion.div>

          {/* 📝 Description */}
          <motion.p
            className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Software Engineer with 2+ years of experience in web and application
            development. Skilled in JavaScript, React.js, Node.js, MongoDB, and
            API integration, with proven success in boosting performance, SEO
            optimization, and delivering client-focused solutions.
          </motion.p>

          {/* 🚀 CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg shadow-cyan-500/30"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </Button>
          </motion.div>

          {/* 🌐 Social Links */}
          <motion.div
            className="flex gap-6 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <a
              href="https://github.com/Chetannadig"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-n-v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:chetan.nv108@gmail.com"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* ⬇️ Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center gap-2 text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

