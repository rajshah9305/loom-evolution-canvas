
import { useEffect, useState } from "react";
import { Sparkles, ArrowDown, Play } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);

  const dynamicWords = ["Vision", "Ideas", "Dreams", "Concepts"];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(wordInterval);
    };
  }, []);

  // Enhanced particle system
  const particles = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full opacity-40 animate-float"
      style={{
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        background: `linear-gradient(135deg, rgba(79, 70, 229, 0.6), rgba(99, 102, 241, 0.4))`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${8 + Math.random() * 4}s`,
        filter: 'blur(0.5px)',
      }}
    />
  ));

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30" />
        
        {/* Dynamic gradient overlay */}
        <div 
          className="absolute inset-0 transition-all duration-[2000ms] ease-out opacity-30"
          style={{
            background: `radial-gradient(1000px circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(79, 70, 229, 0.1) 0%, 
              rgba(99, 102, 241, 0.05) 30%,
              rgba(79, 70, 229, 0.02) 60%,
              transparent 80%)`
          }}
        />
        
        {/* Animated mesh pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] animate-gradient-shift"
          style={{
            background: `linear-gradient(45deg, transparent 48%, rgba(79, 70, 229, 0.3) 49%, rgba(79, 70, 229, 0.3) 51%, transparent 52%), 
                        linear-gradient(-45deg, transparent 48%, rgba(99, 102, 241, 0.2) 49%, rgba(99, 102, 241, 0.2) 51%, transparent 52%)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles}
      </div>

      {/* Main content with improved layout */}
      <div className={`relative z-10 text-center max-w-7xl mx-auto px-8 transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        
        {/* Enhanced title with gradient and effects */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 blur-3xl opacity-20">
            <h1 className="text-8xl md:text-[12rem] lg:text-[16rem] font-black leading-[0.8] tracking-[-0.04em] text-indigo-500">
              Loom
            </h1>
          </div>
          <h1 className="relative text-8xl md:text-[12rem] lg:text-[16rem] font-black leading-[0.8] tracking-[-0.04em]">
            <span className="bg-gradient-to-br from-slate-900 via-indigo-800 to-slate-700 bg-clip-text text-transparent drop-shadow-sm">
              Loom
            </span>
          </h1>
          
          {/* Floating sparkle effects */}
          <div className="absolute -top-8 -right-8 animate-pulse">
            <Sparkles className="w-8 h-8 text-indigo-400 opacity-60" />
          </div>
          <div className="absolute -bottom-4 -left-4 animate-pulse" style={{ animationDelay: '1s' }}>
            <Sparkles className="w-6 h-6 text-slate-500 opacity-40" />
          </div>
        </div>
        
        {/* Dynamic subtitle with word rotation */}
        <div className={`transition-all duration-1500 delay-300 ease-out mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-3xl md:text-4xl lg:text-5xl text-slate-700 font-bold leading-relaxed tracking-[-0.02em] mb-4">
            Transform Your{" "}
            <span className="relative inline-block min-w-[200px]">
              <span 
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-slate-600 bg-clip-text text-transparent transition-all duration-500"
                key={currentWord}
              >
                {dynamicWords[currentWord]}
              </span>
            </span>
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-medium">
            Into Stunning Digital Experiences
          </p>
        </div>

        {/* Enhanced description */}
        <div className={`transition-all duration-1500 delay-500 ease-out mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
            Experience the future of AI-powered design. Watch your imagination unfold through 
            four revolutionary iterations, each more sophisticated than the last.
          </p>
        </div>

        {/* Enhanced interactive code showcase */}
        <div className={`transition-all duration-1500 delay-700 ease-out mb-20 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-slate-500/10 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative glass-morph px-12 py-8 rounded-3xl border border-slate-200/50 hover-lift-subtle">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  {['#ff5f57', '#ffbd2e', '#28ca42'].map((color, i) => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <Play className="w-5 h-5 text-slate-500 hover:text-slate-700 cursor-pointer transition-colors" />
              </div>
              <code className="text-lg md:text-xl lg:text-2xl text-slate-800 font-mono font-semibold tracking-wide block">
                <span className="text-indigo-600">"</span>
                <span className="animate-pulse">Create a modern dashboard with real-time analytics</span>
                <span className="text-indigo-600">"</span>
              </code>
            </div>
          </div>
        </div>

        {/* Enhanced action buttons */}
        <div className={`transition-all duration-1500 delay-900 ease-out mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-slate-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <span>Start Creating</span>
                <Sparkles className="w-5 h-5" />
              </span>
            </button>
            
            <button className="group px-10 py-5 border-2 border-slate-300 text-slate-700 font-bold text-lg rounded-2xl hover:border-slate-400 hover:bg-slate-50 transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5 group-hover:text-indigo-600 transition-colors" />
                <span>Watch Demo</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4 transition-all duration-1500 delay-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-sm text-slate-600 font-medium flex items-center space-x-4">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-slate-400" />
          <span>Discover the Journey</span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-slate-400" />
        </div>
        
        <div className="animate-bounce-slow cursor-pointer group">
          <div className="w-8 h-14 border-2 border-slate-400 rounded-full flex justify-center relative group-hover:border-indigo-500 transition-colors duration-300">
            <ArrowDown className="w-4 h-4 text-slate-500 mt-3 group-hover:text-indigo-600 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};
