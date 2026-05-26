import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Programming',
    color: '#00d4ff',
    skills: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'Frontend',
    color: '#a855f7',
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    color: '#06b6d4',
    skills: ['Node.js', 'Express.js','Flask','REST APIs'],
  },
  {
    title: 'Database',
    color: '#f59e0b',
    skills: ['MongoDB', 'MySQL', 'SQL'],
  },
  {
    title: 'AI & Tools',
    color: '#10b981',
    skills: ['Gemini API', 'Generative AI', 'Prompt Engineering', 'Git', 'GitHub', 'VS Code', 'API Integration', 'Debugging'],
  },
];

const icons = {
  Python: '🐍', Java: '☕', C: '⚙️', JavaScript: '🟨',
  HTML: '🌐', CSS: '🎨', 'React.js': '⚛️', 'Tailwind CSS': '💨',
  'Node.js': '🟢', 'Express.js': '🚂','Flask': '🐍', 'REST APIs': '🌐',
  MongoDB: '🍃', MySQL: '🐬', SQL: '📊',
  'Gemini API': '✨', 'Generative AI': '🤖', 'Prompt Engineering': '💬',
  Git: '🌿', GitHub: '🐙', 'VS Code': '💻', 'API Integration': '🔌', Debugging: '🐞',
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#00d4ff] text-sm tracking-widest uppercase font-mono mb-2">What I work with</p>
          <h2 className="text-4xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300 group"
              style={{ borderTop: `2px solid ${cat.color}40` }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: cat.color, fontFamily: 'Orbitron, sans-serif' }}
              >
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 border transition-all hover:scale-105"
                    style={{
                      background: `${cat.color}12`,
                      borderColor: `${cat.color}30`,
                    }}
                  >
                    <span>{icons[skill] || '🔧'}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
