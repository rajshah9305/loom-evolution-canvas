
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
      {/* Minimal wireframe grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-24 gap-px h-full w-full">
          {Array.from({ length: 576 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-slate-800"
              style={{
                animationDelay: `${(i * 0.01)}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Foundational dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: `hsl(var(--evolution-foundation))`,
              left: `${20 + i * 30}%`,
              top: `${40 + i * 10}%`,
              animation: `wireframe-pulse ${3 + i}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs rounded border border-slate-700">
                Iteration 1 • Foundation
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight tracking-tight">
                The Seed of
                <br />
                <span className="font-bold" style={{ color: `hsl(var(--evolution-foundation))` }}>
                  an Idea
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                "What if UI could be woven from words?"
              </p>
              <p className="text-slate-500 leading-relaxed">
                Every masterpiece begins with pure intention. Here, Claude Sonnet 4 takes its first breath, 
                translating conceptual whispers into structural reality. The aesthetic embraces minimalism—
                wireframes as poetry, potential distilled to its essence.
              </p>
              
              <div className="space-y-4">
                <div className="text-xs text-slate-400 font-mono tracking-wide">CONCEPTUAL INPUT</div>
                <div className="bg-white/80 backdrop-blur p-6 rounded border border-slate-200 font-mono text-sm text-slate-800 shadow-sm">
                  "create a simple header with logo and navigation"
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse" />
                  <span>Parsing intent...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Pure wireframe representation */}
            <div className="bg-white/90 backdrop-blur p-10 rounded border border-slate-200 shadow-lg">
              <div className="space-y-8">
                {/* Wireframe header */}
                <div className="flex justify-between items-center pb-6 border-b border-slate-200">
                  <div className="w-16 h-6 bg-slate-300 rounded animate-pulse" />
                  <div className="flex space-x-6">
                    <div className="w-12 h-4 bg-slate-200 rounded" />
                    <div className="w-12 h-4 bg-slate-200 rounded" />
                    <div className="w-12 h-4 bg-slate-200 rounded" />
                  </div>
                </div>

                {/* Wireframe content */}
                <div className="space-y-6">
                  <div className="w-4/5 h-6 bg-slate-300 rounded" />
                  <div className="space-y-3">
                    <div className="w-full h-3 bg-slate-200 rounded" />
                    <div className="w-5/6 h-3 bg-slate-200 rounded" />
                    <div className="w-3/4 h-3 bg-slate-200 rounded" />
                  </div>
                  <div className="w-24 h-8 bg-slate-400 rounded mt-8" />
                </div>

                {/* Minimal interaction hint */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-slate-300 rounded-full" />
                    <div className="w-2 h-2 bg-slate-300 rounded-full" />
                    <div className="w-2 h-2 bg-slate-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-slate-500 font-light">
              Structure is the foundation of all beauty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
