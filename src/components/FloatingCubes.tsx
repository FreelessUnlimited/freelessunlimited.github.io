import { motion } from 'motion/react';

export function FloatingCubes() {
  const cubes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cubes.map((cube) => (
        <motion.div
          key={cube.id}
          className="absolute"
          style={{
            left: `${cube.left}%`,
            top: `${cube.top}%`,
            width: cube.size,
            height: cube.size,
          }}
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: cube.duration,
            delay: cube.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-full h-full rounded-lg transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, 
                rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1),
                rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.05)
              )`,
              border: '1px solid rgba(168, 85, 247, 0.2)',
              transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}