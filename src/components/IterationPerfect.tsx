import { useEffect, useState } from "react";

export const IterationPerfect = () => {
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

    const element = document.getElementById('perfect');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Elegant floating orbs
  const orbs = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full animate-float"
      style={{
        width: `${20 + Math.random() * 40}px`,
        height: `${20 + Math.random() * 40}px`,
        background: `linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(15, 23, 42, 0.05))`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 3}s`,
        filter: 'blur(0.5px)'
      }}
    />
  ));

  return (
    <section id="perfect" className="min-h-screen flex items-center gradient-loom-perfect relative overflow-hidden">
      {/* Floating orbs system */}
      <div className="absolute inset-0 opacity-60">
        {orbs}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-3 px-4 py-2 glass-morph text-slate-800 text-sm rounded-full border border-slate-200/50 shadow-sm">
              <span className="text-lg">✨</span>
              <span className="font-mono text-xs">04</span>
              <span className="text-slate-400">/</span>
              <span>The Masterpiece</span>
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-slate-900">Your Vision,</span>
              <br />
              <span className="text-gradient-primary">
                Perfectly Woven
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-800 font-semibold leading-relaxed">
                "The final form of creation."
              </p>
              
              <p className="text-base text-slate-700 leading-relaxed">
                The culmination of AI evolution. Claude now interprets abstract design concepts 
                with the intuition of a master craftsperson, generating production-ready interfaces that 
                rival the finest human-designed experiences.
              </p>
            </div>
            
            <div className="space-y-4 p-6 glass-morph rounded-xl border border-slate-200/30 shadow-sm">
              <div className="text-xs text-slate-600 font-mono uppercase tracking-wider">Visionary Input</div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 font-mono text-sm shadow-sm">
                "design a creative workspace that inspires innovation"
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-600">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
                <span>Crafting digital poetry...</span>
              </div>
            </div>

            <button className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-slate-700">
              Experience Loom for Yourself
            </button>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Creative Workspace Demo - The Masterpiece */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-slate-500/5 to-indigo-500/10 rounded-2xl blur-xl" />
              <div className="relative glass-morph p-8 rounded-2xl shadow-2xl border border-slate-200/50 hover-lift-subtle">
                <div className="space-y-8">
                  {/* Creative workspace header */}
                  <div className="flex justify-between items-center pb-6 border-b border-slate-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-slate-600 to-indigo-400 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                      </div>
                      <span className="text-slate-800 font-bold text-xl tracking-tight">Loom Studio</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="w-8 h-8 glass-effect rounded-full border border-slate-200/50 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                          <div className="w-3 h-3 bg-slate-400 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Creative project showcase */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-slate-800 mb-1 tracking-tight">
                        Brand Identity Suite
                      </h4>
                      <p className="text-slate-500 text-sm">AI-crafted visual ecosystem</p>
                    </div>

                    {/* Project preview */}
                    <div className="glass-morph rounded-2xl p-6 border border-slate-200/30 hover:border-slate-300/50 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                      <div className="w-full h-32 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                        <div className="grid grid-cols-3 gap-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center relative">
                              <div className={`w-6 h-6 rounded ${i === 1 ? 'bg-gradient-to-br from-indigo-500 to-slate-600' : i === 2 ? 'bg-gradient-to-br from-slate-600 to-indigo-500' : 'bg-gradient-to-br from-indigo-400 to-slate-500'}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-slate-800 font-bold text-lg">Complete</div>
                          <div className="text-slate-500 text-sm">Logo • Colors • Typography</div>
                        </div>
                        <button className="btn-primary hover:scale-105 transition-transform duration-200">
                          Export
                        </button>
                      </div>
                    </div>

                    {/* Creative process indicators */}
                    <div className="flex justify-center space-x-6 text-xs text-slate-500">
                      {['🎨 Creative', '⚡ Instant', '🔄 Iterative'].map((item, i) => (
                        <span key={item} className="hover:text-slate-700 transition-colors duration-200 cursor-pointer">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-slate-700 font-semibold">
              Where imagination meets implementation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
