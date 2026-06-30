import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    title: "PlayerQ",
    subtitle: "Digital Signage Video Player (IoT)",
    description: "Built a high-performance digital signage player deployed to 30 screens with real-time playlist sync via Socket.IO. Engineered bi-directional Raspberry Pi (PIQ) integration and configured a PWA architecture with IndexedDB for local asset caching to ensure zero-latency offline video execution.",
    tech: ["React.js", "Node.js", "Socket.IO", "AWS Amplify", "Raspberry Pi", "PWA / IndexedDB"],
    highlightColor: "border-cyber-green"
  },
  {
    title: "LPQ",
    subtitle: "Location Partner Content Manager",
    description: "Built a full-stack media content upload and playlist manager using React.js, Node.js, and MongoDB/DynamoDB with role-based access control (RBAC). Engineered secure media upload pipelines to AWS S3 + CloudFront CDN and designed optimized DynamoDB schemas to eliminate full-table scans.",
    tech: ["React.js", "Node.js", "AWS S3", "CloudFront CDN", "DynamoDB", "MongoDB", "AWS EC2"],
    highlightColor: "border-cyber-cyan"
  },
  {
    title: "Visitor Management App",
    subtitle: "Cross-Platform Mobile Application",
    description: "Developed a cross-platform mobile application using React Native and Expo for managing visitor entry, check-in/out workflows, and real-time entry logs. Implemented secure cloud sync using AWS Amplify and Firebase Realtime Database with push notification alerts.",
    tech: ["React Native", "Expo", "AWS Amplify", "Firebase RTDB"],
    highlightColor: "border-gray-700"
  },
  {
    title: "My7",
    subtitle: "3D Animation Personal Calling App",
    description: "Created a relationship-based calling application featuring 3D animated contact bubbles with dynamic sizing based on user interaction frequency. Designed custom physics-based tap-to-expand gestures and smooth rendering with Three.js and React Native Reanimated.",
    tech: ["React Native", "Three.js", "React Native Reanimated", "JavaScript"],
    highlightColor: "border-cyber-purple"
  },
  {
    title: "3D Fruit Ninja",
    subtitle: "Gesture Recognition Game",
    description: "Built an immersive browser-based 3D slicing game using Three.js with real-time physics, collision detection, and smooth frame-rate rendering. Integrated MediaPipe hand-tracking to support touchless gesture slice events via low-latency index-finger tracking.",
    tech: ["Three.js", "MediaPipe", "JavaScript", "Physics Engine"],
    highlightColor: "border-cyber-purple"
  },
  {
    title: "Internal Work Tracking App",
    subtitle: "Task Tracking & Workflow",
    description: "Built a cross-platform internal workflow and task-tracking mobile application using React Native (Expo) featuring real-time task updates, role-based access control (RBAC), and push notification alerts for operational teams. Developed a reusable component library standardizing shared UI patterns.",
    tech: ["React Native", "Expo", "AWS Amplify", "Firebase", "REST APIs"],
    highlightColor: "border-cyber-green"
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