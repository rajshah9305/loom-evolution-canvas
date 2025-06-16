
import { useEffect, useState } from "react";
import { Palette, Sparkles, Wand2, Eye, Heart, Star } from "lucide-react";

export const IterationEnhance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('enhance');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Enhanced floating elements with variety
  const particles = Array.from({ length: 10 }, (_, i) => (
    <div
      key={i}
      className="absolute animate-float opacity-30"
      style={{
        width: `${8 + Math.random() * 16}px`,
        height: `${8 + Math.random() * 16}px`,
        background: `linear-gradient(135deg, rgba(79, 70, 229, 0.4), rgba(99, 102, 241, 0.2))`,
        borderRadius: Math.random() > 0.7 ? '50%' : '30%',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
        filter: 'blur(0.5px)',
      }}
    />
  ));

  const designElements = [
    { icon: Palette, label: "Color Theory", color: "from-pink-500 to-rose-400" },
    { icon: Wand2, label: "Typography", color: "from-indigo-500 to-blue-400" },
    { icon: Eye, label: "Visual Hierarchy", color: "from-purple-500 to-indigo-400" },
    { icon: Heart, label: "User Experience", color: "from-emerald-500 to-teal-400" },
    { icon: Star, label: "Micro-Interactions", color: "from-amber-500 to-orange-400" },
    { icon: Sparkles, label: "Motion Design", color: "from-violet-500 to-purple-400" }
  ];

  return (
    <section id="enhance" className="min-h-screen flex items-center gradient-loom-enhance relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-[0.05] animate-gradient-shift"
          style={{
            background: `linear-gradient(45deg, rgba(79, 70, 229, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(99, 102, 241, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(79, 70, 229, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(99, 102, 241, 0.1) 75%)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
          }}
        />
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-10 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Enhanced badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-morph text-slate-800 text-sm rounded-full shadow-lg border border-indigo-200/50">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="font-mono text-xs font-semibold">03</span>
              <span className="text-indigo-400">/</span>
              <span className="font-medium">Enhancement Layer</span>
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>
            
            {/* Enhanced title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="text-slate-900">Weaving</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-slate-600 bg-clip-text text-transparent">
                Digital Magic
              </span>
            </h2>
            
            {/* Enhanced content */}
            <div className="space-y-8">
              <div className="relative p-6 glass-morph rounded-2xl border border-indigo-200/30 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient-shift" />
                <p className="text-xl text-indigo-900 font-bold leading-relaxed">
                  "Beyond structure: where design becomes an immersive experience."
                </p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Watch as Claude evolves from simple layouts to sophisticated design systems. 
                Every interaction becomes intentional, every animation tells a story, and every 
                element serves both beauty and purpose in perfect harmony.
              </p>
            </div>
            
            {/* Enhanced design elements showcase */}
            <div className="grid grid-cols-2 gap-4">
              {designElements.map((element, i) => (
                <div 
                  key={element.label}
                  className={`group p-4 glass-effect rounded-xl border border-slate-200/50 hover:border-indigo-300/50 cursor-pointer transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${element.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <element.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm text-slate-700 font-semibold">{element.label}</div>
                  <div className={`w-full h-1 bg-gradient-to-r ${element.color} rounded-full mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              ))}
            </div>
            
            {/* Enhanced code input showcase */}
            <div className="space-y-6 p-8 glass-morph rounded-2xl border border-indigo-200/30 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/20 via-purple-50/20 to-indigo-50/20 opacity-50" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-indigo-700 font-mono uppercase tracking-widest">Advanced Prompt</div>
                  <Wand2 className="w-4 h-4 text-indigo-500 animate-pulse" />
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-indigo-200 font-mono text-base shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/50 to-transparent translate-x-[-100%] animate-gradient-shift" />
                  <span className="relative">"responsive hero with animated background, glassmorphism cards, and smooth parallax scrolling"</span>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-indigo-600 mt-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <span className="font-medium">Crafting interactive experiences...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced UI demo */}
          <div className={`transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 rounded-3xl blur-2xl animate-pulse" />
              
              <div className="relative glass-morph p-10 rounded-3xl shadow-2xl border border-indigo-200/50 hover-lift-subtle group overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="w-full h-full animate-gradient-shift"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)`,
                      backgroundSize: '100px 100px'
                    }}
                  />
                </div>

                <div className="relative space-y-10">
                  {/* Enhanced header */}
                  <div className="flex justify-between items-center pb-8 border-b border-indigo-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-slate-600 rounded-xl shadow-lg relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                      </div>
                      <span className="text-slate-800 font-bold text-xl tracking-tight">LOOM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {[1, 2].map((i) => (
                        <div 
                          key={i} 
                          className="w-10 h-10 glass-effect rounded-full border border-indigo-200/50 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group/icon"
                          onMouseEnter={() => setHoveredCard(10 + i)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className={`w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-300 ${hoveredCard === 10 + i ? 'scale-125' : ''}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced content showcase */}
                  <div className="text-center space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
                        Design. Create. Inspire.
                      </h3>
                      <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
                        Transform your creative vision into stunning digital experiences with AI precision.
                      </p>
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <span className="relative">Start Creating</span>
                      </button>
                      <button className="px-6 py-3 glass-effect border border-indigo-200/50 text-slate-700 font-semibold rounded-xl hover:border-indigo-300/50 hover:scale-105 transition-all duration-300">
                        Explore Features
                      </button>
                    </div>
                  </div>

                  {/* Interactive elements showcase */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="h-20 glass-effect rounded-xl border border-indigo-200/50 hover:border-purple-300/50 transition-all duration-300 cursor-pointer hover:scale-105 relative overflow-hidden group/card"
                        onMouseEnter={() => setHoveredCard(20 + i)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-purple-50/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-300`} />
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass-morph rounded-full border border-indigo-200/50 text-sm text-indigo-700 font-semibold">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>Interaction becomes an art form</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
