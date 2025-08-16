import React from 'react';
import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Vue.js, TypeScript, and modern JavaScript frameworks for building responsive web applications.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and experiences using Figma, Adobe Creative Suite, and design systems.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Designing mobile-first experiences and developing React Native applications for iOS and Android.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Backend Integration',
      description: 'Working with APIs, databases, and server-side technologies to create full-stack solutions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, Sass, Tailwind CSS, and modern build tools for optimized web performance.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, accessibility, and search engine optimization.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Technical Proficiency
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'React / Next.js', level: 95 },
              { name: 'TypeScript', level: 90 },
              { name: 'UI/UX Design', level: 92 },
              { name: 'Tailwind CSS', level: 88 },
              { name: 'Node.js', level: 85 },
              { name: 'Mobile Development', level: 80 }
            ].map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;