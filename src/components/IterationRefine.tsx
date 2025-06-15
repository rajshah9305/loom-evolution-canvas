
import { useEffect, useState } from "react";

export const IterationRefine = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('refine');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="refine" className="min-h-screen flex items-center gradient-evolution-refine relative overflow-hidden">
      {/* Enhanced evolving pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsla(var(--evolution-accent), 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, hsla(var(--evolution-depth), 0.3) 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, hsla(var(--evolution-refined), 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 60px 60px, 80px 80px',
            animation: 'cosmic-drift 30s ease-in-out infinite'
          }}
        />
      </div>

      {/* Sophisticated color emergence particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-70 magnetic-glow"
            style={{
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              background: `linear-gradient(45deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))`,
              left: `${10 + Math.random() * 80}%`,
              top: `${15 + Math.random() * 70}%`,
              animation: `sophisticated-float ${5 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: `0 0 ${20 + i * 2}px hsla(var(--evolution-accent), 0.4)`
            }}
          />
        ))}
      </div>

      {/* Dynamic light streams */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              width: '2px',
              height: '100%',
              background: `linear-gradient(180deg, transparent, hsl(var(--evolution-refined)), transparent)`,
              left: `${20 + i * 20}%`,
              transform: `rotate(${-10 + i * 5}deg)`,
              animation: `perfect-shimmer ${10 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1500 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="space-y-10">
              <div className="inline-block px-6 py-3 text-white text-sm rounded-2xl border border-white/30 backdrop-blur relative overflow-hidden"
                   style={{ 
                     background: `linear-gradient(135deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))`,
                     boxShadow: `0 10px 40px hsla(var(--evolution-accent), 0.5)`
                   }}>
                <span className="relative z-10 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                  <span>Iteration 2 • Refinement</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full animate-[perfect-shimmer_4s_ease-in-out_infinite]" />
              </div>
              
              <h2 className="text-6xl md:text-7xl font-light text-white leading-tight tracking-tight text-shadow-evolution">
                Adding Threads
                <br />
                <span className="font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  of Style
                </span>
              </h2>
              
              <p className="text-2xl leading-relaxed font-medium italic"
                 style={{ color: `hsl(var(--evolution-ethereal))` }}>
                "From structure to style: watching your words take shape."
              </p>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                The foundation grows sophisticated. Claude Sonnet 4 now understands aesthetic language, 
                transforming style requests into harmonious designs. Colors emerge from the darkness, 
                shadows learn to dance, and the first hints of personality begin to bloom.
              </p>
              
              <div className="space-y-6">
                <div className="text-sm text-white/60 font-mono tracking-wider uppercase">Stylistic Input</div>
                <div className="glass-evolution-enhanced p-8 rounded-2xl border font-mono text-sm text-white shadow-2xl relative overflow-hidden"
                     style={{ 
                       borderColor: `hsl(var(--evolution-accent) / 0.4)`,
                       boxShadow: `0 20px 60px hsla(var(--evolution-accent), 0.4)`
                     }}>
                  <div className="flex items-start space-x-3 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 mt-1 animate-pulse" />
                    <div>
                      <div className="text-white/60 text-xs mb-2">$ loom refine --style</div>
                      <div>"make the buttons refined and add subtle depth"</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full animate-[perfect-shimmer_5s_ease-in-out_infinite]" />
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-white/70">
                  <div className="flex space-x-2">
                    {['accent', 'refined', 'enhanced'].map((level, i) => (
                      <div 
                        key={level}
                        className="w-2 h-2 rounded-full animate-pulse" 
                        style={{ 
                          backgroundColor: `hsl(var(--evolution-${level}))`,
                          animationDelay: `${i * 0.3}s`,
                          boxShadow: `0 0 8px hsl(var(--evolution-${level}))`
                        }} 
                      />
                    ))}
                  </div>
                  <span>Weaving visual threads...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            {/* Enhanced styled UI with emerging sophistication */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
                   style={{ 
                     background: `linear-gradient(135deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))`,
                     transform: 'scale(1.1)'
                   }} />
              
              <div className="relative glass-evolution-enhanced p-12 rounded-3xl shadow-2xl border"
                   style={{ 
                     borderColor: `hsl(var(--evolution-accent) / 0.3)`,
                     boxShadow: `0 25px 70px hsla(var(--evolution-accent), 0.5)`
                   }}>
                <div className="space-y-10">
                  {/* Sophisticated header */}
                  <div className="flex justify-between items-center pb-8 border-b border-white/15">
                    <div className="w-32 h-12 rounded-xl flex items-center justify-center relative overflow-hidden"
                         style={{ 
                           background: `linear-gradient(135deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))`,
                           animation: 'holographic-shift 8s ease-in-out infinite',
                           boxShadow: `0 0 30px hsla(var(--evolution-accent), 0.6)`
                         }}>
                      <span className="text-white text-lg font-bold relative z-10">LOOM</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full animate-[perfect-shimmer_6s_ease-in-out_infinite]" />
                    </div>
                    
                    <div className="flex space-x-5">
                      {['Home', 'Features', 'About', 'Contact'].map((item) => (
                        <button 
                          key={item}
                          className="px-5 py-3 text-white/80 hover:text-white rounded-xl text-sm transition-all duration-500 backdrop-blur relative group overflow-hidden magnetic-glow"
                          style={{ 
                            border: `1px solid hsla(var(--evolution-accent), 0.4)`,
                            background: `hsla(var(--evolution-accent), 0.15)`
                          }}
                        >
                          <span className="relative z-10">{item}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Styled content with enhanced depth */}
                  <div className="space-y-8">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                      Welcome to Our Vision
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed">
                      Experience the evolution of design automation with our AI-powered creative intelligence.
                    </p>
                    
                    <div className="flex space-x-4">
                      <button className="px-10 py-4 rounded-2xl shadow-xl text-white font-semibold transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
                              style={{ 
                                background: `linear-gradient(135deg, hsl(var(--evolution-refined)), hsl(var(--evolution-enhanced)))`,
                                boxShadow: `0 15px 40px hsla(var(--evolution-refined), 0.6)`
                              }}>
                        <span className="relative z-10">Begin Your Journey</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>
                      
                      <button className="px-8 py-4 border-2 rounded-2xl text-white backdrop-blur transition-all duration-500 hover:scale-105 relative group"
                              style={{ 
                                borderColor: `hsl(var(--evolution-refined) / 0.5)`,
                                background: `hsla(var(--evolution-refined), 0.1)`
                              }}>
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </button>
                    </div>
                  </div>

                  {/* Enhanced style indicators */}
                  <div className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="h-16 rounded-2xl backdrop-blur border transition-all duration-700 cursor-pointer transform hover:scale-110 hover:rotate-2 relative overflow-hidden group"
                        style={{ 
                          background: `linear-gradient(135deg, hsla(var(--evolution-accent), 0.3), hsla(var(--evolution-refined), 0.2))`,
                          borderColor: `hsl(var(--evolution-accent) / 0.4)`,
                          boxShadow: `0 8px 25px hsla(var(--evolution-accent), 0.3)`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center text-sm text-white/70 font-light italic">
              "Style emerges from intention, beauty from purpose"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
