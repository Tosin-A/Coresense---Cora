import { motion } from 'motion/react';
import { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/ui/image-with-fallback';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [mousePixels, setMousePixels] = useState({ x: 0, y: 0 });
  const [sunY, setSunY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
      setMousePixels({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sun rise and fall animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSunY((prev) => {
        const next = prev + 0.5;
        return next > 100 ? 0 : next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const sunBottomPosition = -25 + Math.sin((sunY / 100) * Math.PI * 2) * 5;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex flex-col">
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Mouse spotlight effect */}
      <div
        className="absolute pointer-events-none z-5"
        style={{
          left: mousePixels.x,
          top: mousePixels.y,
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, rgba(124, 58, 237, 0.08) 30%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Animated Purple Sun Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute"
          style={{
            bottom: `${sunBottomPosition}%`,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '700px',
          }}
          animate={{
            x: (mousePosition.x - 0.5) * 30,
            y: (mousePosition.y - 0.5) * 30,
          }}
          transition={{ type: 'spring', stiffness: 40, damping: 25 }}
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.4) 0%, rgba(124, 58, 237, 0.2) 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          {/* Main sun with defined edge */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              top: '15%',
              left: '15%',
              width: '70%',
              height: '70%',
              background: 'radial-gradient(circle at center, #c084fc 0%, #a855f7 30%, #9333ea 50%, #7c3aed 65%, rgba(124, 58, 237, 0) 100%)',
              boxShadow: '0 0 120px rgba(168, 85, 247, 0.6), inset 0 0 60px rgba(192, 132, 252, 0.3)',
            }}
          />
        </motion.div>
        
        {/* Mountain Silhouette with Moon Texture */}
        <div className="absolute bottom-0 left-0 right-0 h-72">
          {/* Texture pattern definition */}
          <svg width="0" height="0">
            <defs>
              <pattern id="moonTexture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.03)" />
                <circle cx="45" cy="25" r="3" fill="rgba(255,255,255,0.02)" />
                <circle cx="80" cy="15" r="1.5" fill="rgba(255,255,255,0.04)" />
                <circle cx="25" cy="50" r="2.5" fill="rgba(255,255,255,0.025)" />
                <circle cx="65" cy="60" r="2" fill="rgba(255,255,255,0.03)" />
                <circle cx="90" cy="45" r="1" fill="rgba(255,255,255,0.035)" />
                <circle cx="35" cy="80" r="2" fill="rgba(255,255,255,0.03)" />
                <circle cx="70" cy="90" r="1.5" fill="rgba(255,255,255,0.025)" />
                <circle cx="15" cy="70" r="1" fill="rgba(255,255,255,0.04)" />
              </pattern>
            </defs>
          </svg>
          
          <svg
            viewBox="0 0 1000 300"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Back mountains with texture */}
            <path
              d="M0,300 L0,220 Q100,170 200,200 Q300,230 400,180 Q500,130 600,160 Q700,190 800,150 Q900,110 1000,140 L1000,300 Z"
              fill="#0a0a0a"
              opacity="0.6"
            />
            <path
              d="M0,300 L0,220 Q100,170 200,200 Q300,230 400,180 Q500,130 600,160 Q700,190 800,150 Q900,110 1000,140 L1000,300 Z"
              fill="url(#moonTexture)"
              opacity="0.8"
            />
            {/* Front mountains with texture */}
            <path
              d="M0,300 L0,240 Q80,200 160,220 Q240,240 320,210 Q400,180 480,200 Q560,220 640,190 Q720,160 800,180 Q880,200 960,170 Q1000,160 1000,165 L1000,300 Z"
              fill="#0a0a0a"
              opacity="0.9"
            />
            <path
              d="M0,300 L0,240 Q80,200 160,220 Q240,240 320,210 Q400,180 480,200 Q560,220 640,190 Q720,160 800,180 Q880,200 960,170 Q1000,160 1000,165 L1000,300 Z"
              fill="url(#moonTexture)"
              opacity="1"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <h1 className="text-2xl tracking-wide">CORA</h1>
          </div>
        </Link>

        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <div className="flex -space-x-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623010759866-91c6c657141e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZpdG5lc3N8ZW58MXx8fHwxNzY2NjA2Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="User 1"
              className="w-8 h-8 rounded-full border-2 border-black object-cover"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY2NTU5NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="User 2"
              className="w-8 h-8 rounded-full border-2 border-black object-cover"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1750521280541-bbf9d813a890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwcGVyc29ufGVufDF8fHx8MTc2NjYwNjI3NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="User 3"
              className="w-8 h-8 rounded-full border-2 border-black object-cover"
            />
          </div>
          <span className="text-sm">Trusted by 50,000+ people working out today</span>
        </div>

        <Link to="/login">
          <button className="px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
            Login
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-between px-8 py-6 border-t border-white/10">
        <div className="text-sm text-gray-500">CORA</div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
}