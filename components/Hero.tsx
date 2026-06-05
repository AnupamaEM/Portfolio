import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { InstancedMesh, Object3D, Color, Vector3, Plane, MathUtils } from 'three';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const VoxelGrid = () => {
  const meshRef = useRef<InstancedMesh>(null!);
  const dummy = useMemo(() => new Object3D(), []);
  const tempColor = useMemo(() => new Color(), []);
  
  // Grid Configuration
  const rows = 50;
  const cols = 50;
  const count = rows * cols;
  const spacing = 0.6; 
  const boxSize = 0.5; 
  
  // State for smooth animation
  const currentScales = useMemo(() => new Float32Array(count).fill(0.1), [count]);
  
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const raycaster = state.raycaster;
    raycaster.setFromCamera(state.pointer, state.camera);
    
    const plane = new Plane(new Vector3(0, 1, 0), 0);
    const target = new Vector3();
    
    // Check for mouse intersection
    const intersection = raycaster.ray.intersectPlane(plane, target);
    
    const tx = intersection ? intersection.x : 10000;
    const tz = intersection ? intersection.z : 10000;

    let i = 0;
    for (let x = 0; x < rows; x++) {
      for (let z = 0; z < cols; z++) {
        const id = i++;
        
        const posX = (x - rows / 2) * spacing;
        const posZ = (z - cols / 2) * spacing;
        
        const dx = tx - posX;
        const dz = tz - posZ;
        const dist = Math.sqrt(dx * dx + dz * dz);
        
        // 1. Interactive Wave (Mouse)
        let targetScaleY = 0.2; 
        const radius = 8.0;
        const maxPop = 6.0;

        if (dist < radius) {
          const angle = (dist / radius) * (Math.PI / 2);
          const wave = Math.cos(angle); 
          targetScaleY += wave * maxPop;
        }

        // 2. Ambient Wave (Time-based continuous ripple)
        // Adds a gentle, breathing motion to the entire grid
        const ambient = Math.sin(posX * 0.2 + time) * Math.sin(posZ * 0.2 + time) * 0.5;
        targetScaleY += Math.max(0, ambient);

        // Smoothing
        currentScales[id] = MathUtils.lerp(currentScales[id], targetScaleY, 0.1);

        // Update Matrix
        dummy.position.set(posX, currentScales[id] / 2, posZ); 
        dummy.scale.set(1, currentScales[id], 1);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(id, dummy.matrix);

        // Update Color
        // Mix between Cyber Dark and Cyber Cyan/Purple based on height
        const colorBase = new Color('#1e1e2e');
        const colorActive = new Color('#00f0ff');
        
        const intensity = Math.min((currentScales[id] - 0.2) / 4.0, 1);
        tempColor.copy(colorBase).lerp(colorActive, intensity);
        
        meshRef.current.setColorAt(id, tempColor);
      }
    }
    
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <boxGeometry args={[boxSize, 1, boxSize]} />
      <meshStandardMaterial 
        metalness={0.2}
        roughness={0.1} 
        emissive="#0a0a1a"
        emissiveIntensity={0.5}
      />
    </instancedMesh>
  );
};

const HeroFallback = () => (
    <div className="absolute inset-0 z-0 bg-cyber-black overflow-hidden">
         <div className="absolute inset-0 opacity-20" 
             style={{
                 backgroundImage: `linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)`,
                 backgroundSize: '40px 40px',
                 transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
             }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
    </div>
);

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setIsWebGLAvailable(false);
    } catch (e) {
      setIsWebGLAvailable(false);
    }
  }, []);

  if (!mounted) return <section className="h-screen bg-cyber-black" />;

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-cyber-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {isWebGLAvailable ? (
          <Canvas 
            shadows
            dpr={[1, 2]}
            camera={{ position: [14, 12, 14], fov: 45 }}
            gl={{ antialias: true, alpha: false }}
          >
            <color attach="background" args={['#0a0a0f']} />
            <fog attach="fog" args={['#0a0a0f', 10, 50]} />
            
            <ambientLight intensity={1.0} />
            <pointLight position={[10, 20, 10]} intensity={2.0} color="#00f0ff" />
            <pointLight position={[-10, 10, -10]} intensity={2.0} color="#bd00ff" />
            
            <VoxelGrid />
            
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5} 
              minPolarAngle={Math.PI / 4} 
              maxPolarAngle={Math.PI / 2.2} 
            />
          </Canvas>
        ) : (
          <HeroFallback />
        )}
      </div>

      {/* Content Overlay */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyber-cyan font-mono text-sm md:text-base tracking-[0.2em] mb-4 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            ANUPAMA E M
          </h2>
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-2xl">
           Turning Ideas into Scalable Applications <br />
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light drop-shadow-md bg-cyber-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/5">
            Full Stack Developer specializing in React.js, NestJS, and AWS.
            Building high-performance real-time applications, cloud portfolios, and interactive 3D Web/Mobile solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="pointer-events-auto flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-cyber-cyan/10 border border-cyber-cyan/50 text-cyber-cyan overflow-hidden rounded-md transition-all hover:bg-cyber-cyan hover:text-cyber-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            <span className="relative z-10 font-mono text-sm uppercase tracking-wider font-bold">View Projects</span>
          </a>
          
          <div className="flex gap-4 items-center">
             <a href="https://github.com/AnupamaEM" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all bg-white/5 p-2 rounded-full hover:bg-cyber-cyan/20 hover:scale-110">
                <Github size={24} />
             </a>
             <a href="https://linkedin.com/in/anupama-e-m" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all bg-white/5 p-2 rounded-full hover:bg-cyber-cyan/20 hover:scale-110">
                <Linkedin size={24} />
             </a>
             <a href="mailto:anupamaem1009@gmail.com" className="text-gray-400 hover:text-white transition-all bg-white/5 p-2 rounded-full hover:bg-cyber-cyan/20 hover:scale-110">
                <Mail size={24} />
             </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-10 text-cyber-cyan drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;