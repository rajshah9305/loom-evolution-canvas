
import { useEffect, useState } from "react";

export const IterationBasic = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "50px" }
    );

    const element = document.getElementById('basic');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="basic" className="min-h-screen flex items-center gradient-evolution-basic relative overflow-hidden">
      {/* Optimized wireframe grid */}
      <div className="absolute inset-0 opacity-6 will-change-opacity">
        <div className="grid grid-cols-24 md:grid-cols-32 gap-px h-full w-full">
          {Array.from({ length: 768 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-slate-800/15 transition-opacity duration-1000 will-change-opacity"
              style={{
                animationDelay: `${(i * 0.003)}s`,
                animation: `wireframe-pulse ${3 + (i % 4)}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating conceptual particles */}
      <div className="absolute inset-0 will-change-transform">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full transition-all duration-1000 will-change-transform gpu-accelerated"
            style={{
              width: `${6 + i * 1.5}px`,
              height: `${6 + i * 1.5}px`,
              backgroundColor: `hsl(var(--evolution-foundation))`,
              left: `${10 + i * 8}%`,
              top: `${25 + i * 6}%`,
              opacity: 0.5 - i * 0.03,
              animation: `sophisticated-float ${3 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: `0 0 ${8 + i * 3}px hsl(var(--evolution-foundation) / 0.2)`
            }}
          />
        ))}
      </div>

      {/* Conceptual connection lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        {Array.from({ length: 8 }).map((_, i) => (
          <svg
            key={i}
            className="absolute will-change-opacity"
            style={{
              left: `${5 + i * 12}%`,
              top: `${15 + i * 8}%`,
              width: '120px',
              height: '120px'
            }}
          >
            <path
              d={`M0,60 Q60,${15 + i * 8} 120,60`}
              stroke={`hsl(var(--evolution-shadow))`}
              strokeWidth="1"
              fill="none"
              strokeDasharray="4,6"
              className="animate-pulse"
            />
          </svg>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1500 delay-200 will-change-transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div className="inline-block px-5 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm rounded-xl border border-slate-700 shadow-lg">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">Iteration 1 • Foundation</span>
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-tight tracking-tight">
                The Seed of
                <br />
                <span className="font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  an Idea
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light italic">
                "What if UI could be woven from words?"
              </p>
              
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                Every masterpiece begins with pure intention. Here, Claude Sonnet 4 takes its first breath, 
                translating conceptual whispers into structural reality. The aesthetic embraces minimalism—
                wireframes as poetry, potential distilled to its essence.
              </p>
              
              <div className="space-y-6">
                <div className="text-xs text-slate-400 font-mono tracking-wider uppercase">Conceptual Input</div>
                <div className="glass-evolution p-6 md:p-8 rounded-2xl font-mono text-sm text-slate-800 shadow-xl border border-slate-200/50">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 mt-1 animate-pulse flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-slate-500 text-xs mb-2">$ loom create</div>
                      <div className="break-words">"create a simple header with logo and navigation"</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-500">
                  <div className="flex space-x-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" 
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                  <span>Parsing intent...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1500 delay-400 will-change-transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Enhanced wireframe representation */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-white rounded-3xl blur-2xl opacity-60" />
              <div className="relative glass-evolution p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200/50">
                <div className="space-y-8">
                  {/* Wireframe header */}
                  <div className="flex justify-between items-center pb-6 border-b border-slate-200">
                    <div className="relative overflow-hidden">
                      <div className="w-24 h-8 bg-slate-300 rounded animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -translate-x-full animate-[perfect-shimmer_3s_ease-in-out_infinite]" />
                    </div>
                    <div className="flex space-x-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div 
                          key={i}
                          className="w-16 h-5 bg-slate-200 rounded transition-all duration-300 hover:bg-slate-300"
                          style={{ animationDelay: `${i * 0.08}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced wireframe content */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="w-5/6 h-8 bg-slate-300 rounded animate-pulse" />
                      <div className="w-4/5 h-6 bg-slate-200 rounded" />
                    </div>
                    
                    <div className="space-y-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div 
                          key={i}
                          className="h-4 bg-slate-200 rounded transition-all duration-200"
                          style={{ 
                            width: `${95 - i * 6}%`,
                            animationDelay: `${i * 0.08}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 mt-8">
                      <div className="w-32 h-12 bg-slate-400 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full animate-[perfect-shimmer_4s_ease-in-out_infinite]" />
                      </div>
                      <div className="w-28 h-12 border-2 border-slate-300 rounded-lg" />
                    </div>
                  </div>

                  {/* Conceptual indicators */}
                  <div className="pt-6 border-t border-slate-100">
                    <div className="grid grid-cols-4 gap-3">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div 
                          key={i}
                          className="h-3 bg-slate-200 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-slate-500 font-light italic">
              "Structure is the foundation of all beauty"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
