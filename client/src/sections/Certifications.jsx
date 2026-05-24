import React from 'react';
import { motion } from 'framer-motion';
import { RiAwardFill } from 'react-icons/ri';

const certs = [
  {
    title: 'GATE Qualified',
    issuer: 'IIT / IISC – Government of India',
    year: '2026',
    color: '#f59e0b',
    icon: '🏆',
    desc: 'Qualified GATE 2026, demonstrating strong fundamentals in Computer Science Engineering.',
  },
  {
    title: 'Fundamentals of AI',
    issuer: 'Microsoft Learn',
    year: '2024',
    color: '#00d4ff',
    icon: '🤖',
    desc: 'Completed Microsoft\'s official AI fundamentals course covering machine learning concepts and Azure AI services.',
  },
  {
    title: 'Mastering Python',
    issuer: 'Infosys Springboard',
    year: '2024',
    color: '#a855f7',
    icon: '🐍',
    desc: 'Advanced Python programming certification covering data structures, OOP, and real-world application development.',
  },
  {
    title: 'India Tech Summit: Innovate 2026',
    issuer: 'Round 2 Qualifier',
    year: '2026',
    color: '#10b981',
    icon: '🚀',
    desc: 'Selected for Round 2 of India Tech Summit Innovate 2026, competing among top tech innovators across the country.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#00d4ff] text-sm tracking-widest uppercase font-mono mb-2">My achievements</p>
          <h2 className="text-4xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col gap-4 hover:scale-105 transition-transform duration-300 group"
              style={{ borderTop: `2px solid ${cert.color}60` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl">{cert.icon}</span>
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ background: `${cert.color}20`, color: cert.color }}
                >
                  {cert.year}
                </span>
              </div>

              <div>
                <h3
                  className="text-base font-bold text-white mb-1 leading-snug"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {cert.title}
                </h3>
                <p className="text-xs font-medium" style={{ color: cert.color }}>{cert.issuer}</p>
              </div>

              <p className="text-white/60 text-xs leading-relaxed">{cert.desc}</p>

              <div className="mt-auto flex items-center gap-2 text-xs" style={{ color: cert.color }}>
                <RiAwardFill /> Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
