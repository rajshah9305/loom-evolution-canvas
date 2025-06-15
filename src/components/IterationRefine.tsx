
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
      {/* Evolving pattern overlay */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, hsla(var(--evolution-accent), 0.3) 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, hsla(var(--evolution-depth), 0.2) 1px, transparent 1px),
              radial-gradient(circle at 40% 40%, hsla(var(--evolution-shadow), 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px, 50px 50px, 70px 70px',
            animation: 'particle-drift 25s ease-in-out infinite'
          }}
        />
      </div>

      {/* Color emergence particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-60"
            style={{
              backgroundColor: `hsl(var(--evolution-${i % 2 === 0 ? 'accent' : 'depth'}))`,
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `sophisticated-float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 text-white text-sm rounded-lg border border-white/20"
                   style={{ backgroundColor: `hsl(var(--evolution-accent))` }}>
                Iteration 2 • Refinement
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-tight tracking-tight text-shadow-evolution">
                Adding Threads
                <br />
                <span className="font-bold" style={{ color: `hsl(var(--evolution-light))` }}>
                  of Style
                </span>
              </h2>
              <p className="text-xl leading-relaxed font-medium"
                 style={{ color: `hsl(var(--evolution-ethereal))` }}>
                "From structure to style: watching your words take shape."
              </p>
              <p className="text-white/80 leading-relaxed">
                The foundation grows sophisticated. Claude Sonnet 4 now understands aesthetic language, 
                transforming style requests into harmonious designs. Colors emerge from the darkness, 
                shadows learn to dance, and the first hints of personality begin to bloom.
              </p>
              
              <div className="space-y-4">
                <div className="text-sm text-white/60 font-mono tracking-wide">STYLISTIC INPUT</div>
                <div className="glass-evolution p-6 rounded-xl border font-mono text-sm text-white shadow-lg"
                     style={{ borderColor: `hsl(var(--evolution-accent) / 0.3)` }}>
                  "make the buttons refined and add subtle depth"
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full animate-pulse" 
                         style={{ backgroundColor: `hsl(var(--evolution-accent))` }} />
                    <div className="w-2 h-2 rounded-full animate-pulse" 
                         style={{ backgroundColor: `hsl(var(--evolution-refined))`, animationDelay: '0.3s' }} />
                  </div>
                  <span>Weaving visual threads...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Styled UI with emerging sophistication */}
            <div className="glass-evolution p-10 rounded-2xl shadow-2xl border"
                 style={{ borderColor: `hsl(var(--evolution-accent) / 0.2)` }}>
              <div className="space-y-8">
                {/* Refined header */}
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <div className="w-24 h-10 rounded-lg flex items-center justify-center relative overflow-hidden"
                       style={{ background: `linear-gradient(135deg, hsl(var(--evolution-accent)), hsl(var(--evolution-refined)))` }}>
                    <span className="text-white text-sm font-bold">LOOM</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-perfect-shimmer" />
                  </div>
                  <div className="flex space-x-4">
                    {['Home', 'About', 'Contact'].map((item) => (
                      <button 
                        key={item}
                        className="px-4 py-2 text-white/80 hover:text-white rounded-lg text-sm transition-all duration-300 hover:bg-white/10 backdrop-blur"
                        style={{ 
                          boxShadow: `0 0 20px hsla(var(--evolution-accent), 0.2)`,
                          border: `1px solid hsla(var(--evolution-accent), 0.3)`
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Styled content with depth */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">Welcome to Our Vision</h3>
                  <p className="text-white/70 leading-relaxed">
                    Experience the evolution of design automation with our AI-powered creative intelligence.
                  </p>
                  <button className="px-8 py-4 rounded-xl shadow-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                          style={{ 
                            background: `linear-gradient(135deg, hsl(var(--evolution-refined)), hsl(var(--evolution-enhanced)))`,
                            animation: 'evolution-glow 3s ease-in-out infinite'
                          }}>
                    Begin Your Journey
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-perfect-shimmer" />
                  </button>
                </div>

                {/* Style indicators */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="h-12 rounded-lg backdrop-blur border transition-all duration-500 cursor-pointer transform hover:scale-105"
                      style={{ 
                        background: `linear-gradient(135deg, hsla(var(--evolution-accent), 0.2), hsla(var(--evolution-refined), 0.1))`,
                        borderColor: `hsl(var(--evolution-accent) / 0.3)`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-white/70 font-light">
              Style emerges from intention, beauty from purpose
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
