
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
      { threshold: 0.3 }
    );

    const element = document.getElementById('basic');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="basic" className="min-h-screen flex items-center gradient-evolution-basic relative overflow-hidden">
      {/* Enhanced minimal wireframe grid with subtle depth */}
      <div className="absolute inset-0 opacity-8">
        <div className="grid grid-cols-32 gap-px h-full w-full">
          {Array.from({ length: 1024 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-slate-800/20 transition-all duration-1000"
              style={{
                animationDelay: `${(i * 0.005)}s`,
                animation: `wireframe-pulse ${4 + (i % 3)}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating conceptual particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full transition-all duration-1000"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              backgroundColor: `hsl(var(--evolution-foundation))`,
              left: `${15 + i * 12}%`,
              top: `${30 + i * 8}%`,
              opacity: 0.6 - i * 0.05,
              animation: `sophisticated-float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              boxShadow: `0 0 ${10 + i * 5}px hsl(var(--evolution-foundation) / 0.3)`
            }}
          />
        ))}
      </div>

      {/* Conceptual connection lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <svg
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              width: '100px',
              height: '100px'
            }}
          >
            <path
              d={`M0,50 Q50,${20 + i * 10} 100,50`}
              stroke={`hsl(var(--evolution-shadow))`}
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </svg>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="space-y-10">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm rounded-lg border border-slate-700 shadow-xl">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Iteration 1 • Foundation</span>
                </span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-light text-slate-900 leading-tight tracking-tight">
                The Seed of
                <br />
                <span className="font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  an Idea
                </span>
              </h2>
              
              <p className="text-2xl text-slate-600 leading-relaxed font-light italic">
                "What if UI could be woven from words?"
              </p>
              
              <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                Every masterpiece begins with pure intention. Here, Claude Sonnet 4 takes its first breath, 
                translating conceptual whispers into structural reality. The aesthetic embraces minimalism—
                wireframes as poetry, potential distilled to its essence.
              </p>
              
              <div className="space-y-6">
                <div className="text-xs text-slate-400 font-mono tracking-wider uppercase">Conceptual Input</div>
                <div className="glass-evolution p-8 rounded-2xl font-mono text-sm text-slate-800 shadow-2xl border border-slate-200/50">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 mt-1 animate-pulse" />
                    <div>
                      <div className="text-slate-500 text-xs mb-2">$ loom create</div>
                      <div>"create a simple header with logo and navigation"</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-500">
                  <div className="flex space-x-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" 
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <span>Parsing intent...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            {/* Enhanced wireframe representation */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white rounded-3xl blur-xl opacity-50" />
              <div className="relative glass-evolution p-12 rounded-3xl shadow-2xl border border-slate-200/50">
                <div className="space-y-10">
                  {/* Wireframe header with subtle animation */}
                  <div className="flex justify-between items-center pb-8 border-b border-slate-200">
                    <div className="relative overflow-hidden">
                      <div className="w-20 h-8 bg-slate-300 rounded animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full animate-[perfect-shimmer_3s_ease-in-out_infinite]" />
                    </div>
                    <div className="flex space-x-6">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div 
                          key={i}
                          className="w-16 h-5 bg-slate-200 rounded transition-all duration-500 hover:bg-slate-300"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced wireframe content */}
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <div className="w-5/6 h-8 bg-slate-300 rounded animate-pulse" />
                      <div className="w-4/5 h-6 bg-slate-200 rounded" />
                    </div>
                    
                    <div className="space-y-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div 
                          key={i}
                          className="h-4 bg-slate-200 rounded transition-all duration-300"
                          style={{ 
                            width: `${100 - i * 8}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="flex space-x-4 mt-10">
                      <div className="w-32 h-12 bg-slate-400 rounded-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full animate-[perfect-shimmer_4s_ease-in-out_infinite]" />
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
                          style={{ animationDelay: `${i * 0.2}s` }}
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
