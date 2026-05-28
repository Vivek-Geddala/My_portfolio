import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RiGithubFill, RiExternalLinkLine, RiLoader4Line } from 'react-icons/ri';
import assistantImg from '../assets/assistant.png';
import snakegameImg from '../assets/snakegame.png';

const fallback = [
  {
    _id: '1',
    title: 'AI Voice Assistant (Ongoing)',
    description:
      'Developing a desktop AI voice assistant using Python and the Gemini API. Implemented voice-based application control, web browsing, messaging, and system commands. Integrated speech recognition, multithreading, Tkinter GUI, and automation features.',
    image: assistantImg,
    techStack: ['Python', 'Gemini API', 'Tkinter', 'SpeechRecognition', 'Automation'],
    githubLink: 'https://github.com/Vivek-Geddala',
    liveLink: '',
  },
  {
    _id: '2',
    title: 'MERN Portfolio Website',
    description:
      'A comprehensive AI-themed MERN portfolio website with glassmorphism design, animated particle backgrounds, and full-stack backend integration for projects and contact forms.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/Vivek-Geddala',
    liveLink: '',
  },
  {
    _id: '3',
    title: 'Python Snake Game',
    description:
      'Developed a classic Snake Game using Python with interactive gameplay mechanics and real-time keyboard controls. Implemented score tracking, collision detection, food spawning system, and smooth game movement logic to enhance user experience.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    techStack: ['Python', 'Pygame'],
    githubLink: '',
    liveLink: '',
  },
];

const techColors = {
  Python: '#3b82f6', 'Gemini API': '#10b981', Tkinter: '#8b5cf6',
  SpeechRecognition: '#f59e0b', Automation: '#ef4444',
  MongoDB: '#10b981', 'Express.js': '#6b7280', 'React.js': '#00d4ff',
  'Node.js': '#22c55e', 'Tailwind CSS': '#06b6d4', 'Framer Motion': '#a855f7',
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://portfolio-backend-s4kj.onrender.com/api/projects')
      .then((r) => r.json())
      .then((data) => setProjects(Array.isArray(data) && data.length ? data : fallback))
      .catch(() => setProjects(fallback))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#00d4ff] text-sm tracking-widest uppercase font-mono mb-2">What I've built</p>
          <h2 className="text-4xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Projects
          </h2>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <RiLoader4Line className="animate-spin text-[#00d4ff] text-4xl" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
  src={
    project.title.includes('AI Voice Assistant')
      ? assistantImg
      : project.title.includes('Snake Game')
      ? snakegameImg
      : project.image
  }
  alt={project.title}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack?.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `${techColors[t] || '#a855f7'}20`,
                          color: techColors[t] || '#a855f7',
                          border: `1px solid ${techColors[t] || '#a855f7'}40`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all"
                      >
                        <RiGithubFill /> GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#030014] glow-box-blue transition-all"
                        style={{ background: 'linear-gradient(135deg,#00d4ff,#a855f7)' }}
                      >
                        <RiExternalLinkLine /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
