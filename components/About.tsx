import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-8 md:p-12 border-l-4 border-l-cyber-purple"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-cyber-purple font-mono">01.</span> About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed text-justify">
          I am a <span className="text-white font-semibold">Full Stack Developer</span> with 1.5+ years of experience building and shipping cloud-scalable applications across modern web, mobile, and real-time environments. My core expertise lies in architecting <span className="text-cyber-cyan">real-time communication systems</span> via Socket.IO, crafting optimized media delivery pipelines using <span className="text-cyber-cyan">AWS S3 and CloudFront CDN</span>, and designing highly scalable NoSQL schemas with DynamoDB.
          <br /><br />
          I specialize in developing cross-platform applications with <span className="text-cyber-green">React, React Native, and NestJS</span> within Nx Monorepos, as well as managing deployments on AWS. Beyond traditional stack boundaries, I build custom 3D web features utilizing <span className="text-cyber-purple">Three.js and MediaPipe</span> for gesture-based, touchless user interactions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;