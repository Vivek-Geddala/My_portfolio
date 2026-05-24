import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiArrowDownLine, RiGithubFill, RiLinkedinBoxFill, RiDownload2Line } from 'react-icons/ri';
import profileImg from '../assets/profile.png';

const roles = ['AI Engineer', 'MERN Developer', 'Python Developer', 'Prompt Engineer'];

function useTyping(words, speed = 100, pause = 1800) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDeleting(false); setIdx((i) => i + 1); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ── Left: text ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="text-[#00d4ff] text-sm font-mono tracking-widest uppercase">
            👋 Welcome to my portfolio
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Vivek</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-white/80 font-semibold">
            I'm an{' '}
            <span className="text-[#00d4ff] typing-cursor">{typed}</span>
          </h2>

          <p className="text-white/60 text-base leading-relaxed max-w-lg">
            B.Tech CSE (AI) student at Parul University · Building intelligent
            systems with Python, MERN Stack, and Generative AI. Passionate about
            creating impactful, production-ready software.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4 text-2xl">
            <a href="https://github.com/Vivek-Geddala" target="_blank" rel="noreferrer"
              className="text-white/50 hover:text-[#00d4ff] transition-colors">
              <RiGithubFill />
            </a>
            <a href="http://www.linkedin.com/in/vivek-geddala" target="_blank" rel="noreferrer"
              className="text-white/50 hover:text-[#a855f7] transition-colors">
              <RiLinkedinBoxFill />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full font-semibold text-[#030014] glow-box-blue transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#00d4ff,#a855f7)' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-semibold text-white border border-[#a855f7]/50 hover:border-[#a855f7] hover:glow-box-purple transition-all hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="/Geddala_Vivek_Resume.pdf"
              download="Geddala_Vivek_Resume.pdf"
              className="px-7 py-3 rounded-full font-semibold text-white/80 border border-white/20 hover:border-[#00d4ff]/50 flex items-center gap-2 hover:scale-105 transition-all"
            >
              <RiDownload2Line /> Resume
            </a>
          </div>
        </motion.div>

        {/* ── Right: profile image ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="float-animation relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Rotating neon ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #00d4ff, #a855f7, #06b6d4, #00d4ff)',
                padding: '3px',
                borderRadius: '50%',
                animation: 'spin 4s linear infinite',
              }}
            >
              <div className="w-full h-full rounded-full" style={{ background: '#030014' }} />
            </div>

            {/* Profile image */}
            <img
              src={profileImg}
              alt="Geddala Vivek – AI Engineer"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover"
              style={{
                boxShadow: '0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(168,85,247,0.2)',
              }}
            />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-semibold text-[#00d4ff] border border-[#00d4ff]/30"
            >
              🤖 AI Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#00d4ff] transition-colors text-2xl"
      >
        <RiArrowDownLine />
      </motion.a>
    </section>
  );
}
