
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  randomX: number;
  randomY: number;
}

const GoldenParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 20 }, (_, i) => createParticle(i));
    setParticles(initialParticles);
    
    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        // Remove oldest particle and add new one
        const newParticles = [...prev];
        newParticles.shift();
        newParticles.push(createParticle(prev.length > 0 ? prev[prev.length - 1].id + 1 : 0));
        return newParticles;
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  const createParticle = (id: number): Particle => {
    // Random position within the hero section
    const x = Math.random() * 100; // percent
    const y = Math.random() * 70 + 15; // percent, keep within the hero area
    
    return {
      id,
      x,
      y,
      size: Math.random() * 12 + 4, // 4-16px
      duration: Math.random() * 5 + 5, // 5-10s
      randomX: (Math.random() - 0.5) * 50, // -25% to +25%
      randomY: (Math.random() - 0.5) * 50, // -25% to +25%
    };
  };
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="golden-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            '--random-x': `${particle.randomX}%`,
            '--random-y': `${particle.randomY}%`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default GoldenParticles;
