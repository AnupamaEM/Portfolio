import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: "QSignage",
    role: "Full Stack Engineer",
    period: "Aug 2025 – Present",
    location: "Erode, IN",
    highlight: true,
    description: [
      "Core Full Stack Engineer driving product architecture and end-to-end feature delivery across frontend (React.js, TypeScript) and backend (NestJS) within an Nx Monorepo, collaborating with product management to define technical specifications.",
      "Built real-time device synchronization for 20+ screens using Socket.IO multi-room architecture, achieving sub-second update latency for playlists, volume, and device state.",
      "Redesigned DynamoDB schemas using PK/SK and GSI access patterns, eliminating full table scans and bottlenecks while cutting RCU consumption and AWS operational costs at scale.",
      "Engineered media upload and delivery pipeline using AWS S3 + CloudFront CDN, cutting S3 egress costs and improving content load speed for end devices.",
      "Managed end-to-end deployments via AWS EC2 and Amplify with CI/CD pipelines ensuring zero-downtime releases.",
      "Delivered interactive UI features using Three.js and MediaPipe for gesture-based, touchless interactions."
    ],
    tech: ["React.js", "TypeScript", "NestJS", "Nx Monorepo", "Socket.IO", "DynamoDB", "AWS S3", "CloudFront CDN", "AWS EC2", "Amplify", "Three.js", "MediaPipe"]
  },
  {
    company: "BluGraph Technologies",
    role: "Trainee Software Engineer",
    period: "July 2024 – Aug 2025",
    location: "Bangalore, IN",
    description: [
      "Developed and shipped 2 production applications (web + mobile) serving 2,000+ internal users using React.js, React Native, and Expo.",
      "Integrated 20+ REST APIs with authentication and real-time features using AWS Cognito, Amplify, and Firebase.",
      "Developed cross-platform mobile applications using the Expo framework, accelerating development cycles and minimizing build complexity.",
      "Collaborated with cross-functional product and QA teams during Agile sprint planning, actively contributing to peer code reviews and authoring internal API documentation.",
      "Managed rigorous testing and release workflows leveraging Vitest and Playwright to guarantee high code quality and software reliability across web deployments."
    ],
    tech: ["React.js", "React Native", "Expo", "AWS Cognito", "Amplify", "Firebase", "Vitest", "Playwright", "REST APIs", "Agile"]
  }
];

const Experience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
        <span className="text-cyber-cyan font-mono">03.</span> Experience
      </h2>

      <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12 group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Timeline Dot */}
            <div 
              className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full transition-all duration-300 ${
                hoveredIndex === index ? 'bg-cyber-cyan shadow-[0_0_10px_#00f0ff]' : 'bg-gray-600'
              }`}
            />

            <div className={`transition-all duration-300 p-6 rounded-lg ${
              hoveredIndex === index ? 'bg-cyber-slate/50 translate-x-2' : ''
            }`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                  {exp.role} <span className="text-cyber-purple">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-gray-500">{exp.period}</span>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="mt-1.5 min-w-[6px] min-h-[6px] rounded-full bg-cyber-purple/40"></span>
                    <span className={exp.highlight && desc.includes("Core Full Stack Engineer") ? "text-cyber-green font-medium" : ""}>
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-mono rounded bg-cyber-dark text-cyber-cyan border border-cyber-cyan/20">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;