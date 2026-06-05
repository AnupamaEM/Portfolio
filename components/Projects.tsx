import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const projects: ProjectItem[] = [
  {
    title: "PlayerQ",
    subtitle: "Digital Signage Video Player (IoT)",
    description: "Built a high-performance digital signage player deployed to 30 screens, featuring real-time playlist sync via Socket.IO with sub-second update latency. Engineered bi-directional Raspberry Pi (PIQ) integration using HTTP APIs and custom command event structures.",
    tech: ["React.js", "Node.js", "Socket.IO", "AWS Amplify", "Raspberry Pi"],
    highlightColor: "border-cyber-green"
  },
  {
    title: "LPQ",
    subtitle: "Location Partner Content Manager",
    description: "Built a full-stack media content upload and playlist manager with role-based access control (RBAC). Engineered automated-compression media pipelines using AWS S3 + CloudFront CDN, and designed optimized DynamoDB schemas.",
    tech: ["React.js", "Node.js", "AWS S3", "CloudFront CDN", "DynamoDB", "AWS EC2"],
    highlightColor: "border-cyber-cyan"
  },
  {
    title: "Visitor Management App",
    subtitle: "Cross-Platform Mobile Application",
    description: "Developed a cross-platform mobile application using React Native and Expo for managing visitor entry, checkout workflows, and logs. Integrated automated cloud synchronization and notification alerts.",
    tech: ["React Native", "Expo", "AWS Amplify", "Firebase RTDB"],
    highlightColor: "border-gray-700"
  },
  {
    title: "My7",
    subtitle: "3D Animation Personal Calling App",
    description: "Created a relationship-based calling application featuring 3D animated contact bubbles with dynamic sizing. Designed custom physics-based tap-to-expand gestures and smooth rendering.",
    tech: ["React Native", "Three.js", "React Native Reanimated", "JavaScript"],
    highlightColor: "border-cyber-purple"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
        <span className="text-cyber-purple font-mono">04.</span> Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className={`glass p-6 rounded-xl flex flex-col justify-between group border-t-2 ${project.highlightColor} h-full`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyber-dim mt-1">{project.subtitle}</p>
                </div>
                <div className="flex gap-3">
                  <Github size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                  <ExternalLink size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, tIdx) => (
                <span key={tIdx} className="text-xs font-mono text-cyber-cyan/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;