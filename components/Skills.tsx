import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Database } from 'lucide-react';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    title: "Languages & Frontend",
    icon: Code2,
    skills: ["TypeScript", "JavaScript (ES6+)", "React.js", "Next.js", "React Native (Expo)", "HTML5", "CSS3", "Three.js", "MediaPipe"]
  },
  {
    title: "Backend & API",
    icon: Server,
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Socket.IO", "Spring Boot", "OpenAI API"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (S3, EC2, Amplify)", "Cognito", "CloudFront CDN", "Git", "Docker", "Firebase", "CI/CD Pipelines"]
  },
  {
    title: "Databases & Workflows",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "DynamoDB", "Vitest", "Playwright", "Postman", "Agile / Scrum"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-cyber-dark/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
          <span className="text-cyber-green font-mono">02.</span> Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass glass-hover p-6 rounded-xl flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4 text-cyber-cyan">
                <category.icon size={24} />
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-gray-400 text-sm font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple/60"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;