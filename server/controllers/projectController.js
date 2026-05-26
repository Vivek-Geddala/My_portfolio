const Project = require('../models/Project');

// Default Resume Projects data for seeding
const defaultProjects = [
  {
    title: 'AI Voice Assistant (Ongoing)',
    description: 'Developing a desktop AI voice assistant using Python and the Gemini API. Implemented voice-based application control, web browsing, messaging, and system commands. Integrated speech recognition, multithreading, Tkinter GUI, and automation features.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop', // Beautiful high-tech robot/AI image
    techStack: ['Python', 'Gemini API', 'Tkinter', 'SpeechRecognition', 'Automation', 'Multithreading'],
    githubLink: 'https://github.com/Vivek-Geddala',
    liveLink: ''
  },
  {
    title: 'MERN Portfolio Website',
    description: 'A comprehensive, high-fidelity responsive portfolio website driven by MongoDB, Express, React, Node, and Tailwind CSS. Features full glassmorphism elements, canvas-based interactive neural networking backgrounds, and an automated project presentation stack.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Futuristic dashboard/code image
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/Vivek-Geddala',
    liveLink: ''
  }
  ,
  {
    title: 'Python Snake Game',
    description: 'Developed a classic Snake Game using Python with interactive gameplay mechanics and real-time keyboard controls. Implemented score tracking, collision detection, food spawning system, and smooth game movement logic to enhance user experience.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    techStack: ['Python', 'Pygame'],
    githubLink: '',
    liveLink: ''
  }
];

// Seed projects utility
const seedProjects = async () => {
  try {
    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.create(defaultProjects);
      console.log('Database Seeding: Default portfolio projects seeded successfully!');
    }
  } catch (error) {
    console.error(`Database Seeding Error: ${error.message}`);
  }
};

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    // Seed projects if database is empty to ensure user gets high-quality initial layout
    await seedProjects();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    const normalizedProjects = projects.map((proj) => {
      const project = proj.toObject();
      return {
        ...project,
        githubLink: project.githubLink?.replace('github.com/VivekGeddala', 'github.com/Vivek-Geddala'),
        liveLink: project.liveLink?.replace('github.com/VivekGeddala', 'github.com/Vivek-Geddala'),
      };
    });
    res.json(normalizedProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  seedProjects,
};
