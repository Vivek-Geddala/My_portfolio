import React from 'react';
import { motion } from 'framer-motion';
import { RiDownload2Line, RiFileTextLine } from 'react-icons/ri';

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#00d4ff] text-sm tracking-widest uppercase font-mono mb-2">My credentials</p>
          <h2 className="text-4xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Resume
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-10 flex flex-col items-center gap-8"
        >
          {/* Icon */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-5xl"
            style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.15),rgba(168,85,247,0.15))', border: '1px solid rgba(0,212,255,0.3)' }}
          >
            <RiFileTextLine className="text-[#00d4ff]" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Geddala Vivek
            </h3>
            <p className="text-[#a855f7] font-medium">Aspiring AI Engineer · MERN Stack Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            {['Python', 'React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Prompt Engineering'].map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
            ))}
          </div>

          <a
            href="/Geddala_Vivek_Resume.pdf"
            download="Geddala_Vivek_Resume.pdf"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-[#030014] glow-box-blue hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(135deg,#00d4ff,#a855f7)', fontSize: '1rem' }}
          >
            <RiDownload2Line className="text-xl" />
            Download Resume
          </a>

          <p className="text-white/40 text-xs">
            PDF format · Always up to date
          </p>
        </motion.div>
      </div>
    </section>
  );
}
