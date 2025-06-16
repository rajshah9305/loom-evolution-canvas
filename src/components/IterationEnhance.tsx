import { useEffect, useState } from "react";

export const IterationEnhance = () => {
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

    const element = document.getElementById('enhance');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Subtle floating elements
  const particles = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full bg-indigo-100/40 animate-float"
      style={{
        width: `${6 + Math.random() * 12}px`,
        height: `${6 + Math.random() * 12}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${4 + Math.random() * 2}s`
      }}
    />
  ));

  return (
    <section id="enhance" className="min-h-screen flex items-center gradient-loom-enhance relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 opacity-60">
        {particles}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-morph text-slate-800 text-sm rounded-full shadow-sm border border-slate-200/50">
              <span className="font-mono text-xs">03</span>
              <span className="text-slate-400">/</span>
              <span>Iteration 3</span>
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-slate-900">Weaving</span>
              <br />
              <span className="text-gradient-primary">
                Intricate Patterns
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-800 font-semibold leading-relaxed">
                "Beyond the basics: where design meets dynamic interaction."
              </p>
              
              <p className="text-base text-slate-700 leading-relaxed">
                Complexity emerges with grace. Claude now interprets nuanced design language, 
                creating responsive layouts with sophisticated animations. Every micro-interaction tells a story, 
                every transition serves a purpose.
              </p>
            </div>
            
            <div className="space-y-4 p-6 glass-morph rounded-xl border border-slate-200/30 shadow-sm">
              <div className="text-xs text-slate-600 font-mono uppercase tracking-wider">Advanced Input</div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 font-mono text-sm shadow-sm">
                "responsive hero with animated background and glowing CTA"
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-600">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                </div>
                <span>Generating interactive elements...</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Enhanced UI Demo */}
            <div className="relative">
              <div className="glass-morph p-8 rounded-2xl shadow-xl border border-slate-200/50 hover-lift-subtle">
                <div className="space-y-8">
                  {/* Advanced header */}
                  <div className="flex justify-between items-center pb-6 border-b border-slate-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-slate-600 rounded-lg shadow-sm" />
                      <span className="text-slate-800 font-semibold text-lg tracking-tight">LOOM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="w-8 h-8 glass-effect rounded-full border border-slate-200/50 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                          <div className="w-3 h-3 bg-slate-400 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hero section */}
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                      Create. Iterate. Perfect.
                    </h3>
                    <p className="text-slate-600 max-w-sm mx-auto leading-relaxed text-sm">
                      Transform your ideas into stunning interfaces with AI-powered design intelligence.
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      <button className="btn-primary hover:scale-105 transition-transform duration-200">
                        Start Creating
                      </button>
                      <button className="btn-secondary hover:scale-105 transition-transform duration-200">
                        Watch Demo
                      </button>
                    </div>
                  </div>

                  {/* Interactive elements showcase */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="h-16 glass-effect rounded-lg border border-slate-200/50 hover:border-slate-300/50 transition-all duration-200 cursor-pointer hover:scale-105 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-slate-700 font-semibold">
              Interaction becomes an art form
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
