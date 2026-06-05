import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-cyber-black border-t border-gray-800 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/AnupamaEM" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyber-cyan transition-colors transform hover:-translate-y-1">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/anupama-e-m" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyber-cyan transition-colors transform hover:-translate-y-1">
          <Linkedin size={20} />
        </a>
        <a href="mailto:anupamaem1009@gmail.com" className="text-gray-500 hover:text-cyber-cyan transition-colors transform hover:-translate-y-1">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-gray-600 font-mono text-xs">
        Designed & Built by Anupama E M <br />
        <span className="opacity-50">Powered by React, Three.js & Tailwind</span>
      </p>
    </footer>
  );
};

export default Footer;