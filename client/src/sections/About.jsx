import React from 'react';
import { motion } from 'framer-motion';
import { RiGraduationCapFill, RiBriefcaseFill, RiMapPin2Line } from 'react-icons/ri';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const education = [
  {
    degree: 'B.Tech – CSE (Artificial Intelligence)',
    institution: 'Parul University (PIET), Gujarat',
    period: '2023 – 2027 (Expected)',
    score: 'CGPA: 7.59 (upto 5th semester)',
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'Narayana Junior College',
    period: '2021 – 2023',
    score: '88.2%',
  },
  {
    degree: '10th Grade',
    institution: 'ZPHS Ramavarappadu',
    period: '2020 – 2021',
    score: '89.33%',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ duration: 0.6 }} variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-[#00d4ff] text-sm tracking-widest uppercase font-mono mb-2">Get to know me</p>
          <h2 className="text-4xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ duration: 0.7 }} variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <RiBriefcaseFill className="text-[#00d4ff] text-2xl" />
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Professional Summary</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                I'm <span className="text-[#00d4ff] font-semibold">Geddala Vivek</span> (Chinnu), an aspiring AI Engineer
                and full-stack developer based in <span className="text-white font-medium">Vadodara, Gujarat, India</span>.
                I specialize in building intelligent, production-ready applications using Python, the MERN stack,
                and cutting-edge Generative AI APIs.
              </p>
              <p className="text-white/70 leading-relaxed mt-3">
                My passion lies at the intersection of <span className="text-[#a855f7] font-medium">Artificial Intelligence</span> and
                real-world software engineering. I enjoy building AI-powered tools that solve meaningful problems —
                from voice assistants to full-stack portfolio platforms.
              </p>

              <div className="flex items-center gap-2 mt-4 text-white/50 text-sm">
                <RiMapPin2Line className="text-[#00d4ff]" />
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                🎯 Career Goals
              </h3>
              <p className="text-white/70 leading-relaxed">
                Seeking an internship or entry-level role as an <span className="text-[#00d4ff] font-semibold">AI Engineer</span> or
                full-stack developer where I can contribute to impactful projects, grow alongside an innovative team,
                and apply my skills in machine learning, generative AI, and modern web technologies.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }} variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <RiGraduationCapFill className="text-[#a855f7] text-2xl" />
              <h3 className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>Education</h3>
            </div>

            <div className="relative border-l-2 border-[#a855f7]/30 pl-8 flex flex-col gap-8">
              {education.map((e, i) => (
                <motion.div
                  key={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }} variants={fadeUp}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.65rem] top-1 w-4 h-4 rounded-full border-2 border-[#a855f7] bg-[#030014]" />
                  <div className="glass p-5 rounded-xl hover:border-[#a855f7]/40 transition-all">
                    <p className="text-[#a855f7] text-xs font-mono mb-1">{e.period}</p>
                    <h4 className="text-white font-semibold text-base">{e.degree}</h4>
                    <p className="text-white/60 text-sm mt-1">{e.institution}</p>
                    <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                      {e.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
