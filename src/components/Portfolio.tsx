import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      description: 'Modern dashboard design for e-commerce analytics with data visualization.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg',
      description: 'User-friendly mobile banking interface with seamless transaction flows.',
      technologies: ['React Native', 'Figma', 'UI/UX'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg',
      description: 'Complete brand identity package for a sustainable fashion startup.',
      technologies: ['Adobe Creative Suite', 'Branding', 'Logo Design'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Task Management Tool',
      category: 'web',
      image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg',
      description: 'Collaborative task management platform with real-time updates.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant App UI',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      description: 'Elegant food ordering app with intuitive navigation and payment flow.',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg',
      description: 'Responsive portfolio website showcasing creative work and projects.',
      technologies: ['React', 'GSAP', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['all', 'web', 'mobile', 'design'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work in web development, mobile design, and brand identity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink size={18} className="text-gray-700" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <Github size={18} className="text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;