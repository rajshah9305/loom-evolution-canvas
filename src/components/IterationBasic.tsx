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
    <section id="basic" className="min-h-screen flex items-center gradient-loom-basic relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800 text-white text-sm rounded-full shadow-sm">
              <span className="font-mono text-xs">01</span>
              <span className="text-slate-300">/</span>
              <span>Iteration 1</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              The Seed of 
              <br />
              <span className="text-slate-700">an Idea</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-800 font-semibold">
                "What if UI could be woven from words?"
              </p>
              
              <p className="text-base text-slate-700 leading-relaxed">
                Every masterpiece begins with a simple foundation. Here, Claude takes its first steps, 
                translating basic prompts into clean structure. The aesthetic is minimalist by design—
                wireframes brought to life with purpose and potential.
              </p>
            </div>
            
            <div className="space-y-4 p-6 glass-effect rounded-xl border border-slate-200/50">
              <div className="text-xs text-slate-600 font-mono uppercase tracking-wider">Input</div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 font-mono text-sm shadow-sm">
                "create a simple header with logo and navigation"
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" />
                <span>Processing basic structure...</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Wireframe UI Demo */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover-lift-subtle">
              <div className="space-y-8">
                {/* Wireframe header */}
                <div className="flex justify-between items-center pb-6 border-b border-slate-200">
                  <div className="w-20 h-8 bg-slate-200 rounded animate-pulse" />
                  <div className="flex space-x-3">
                    {['Home', 'About', 'Contact'].map((item, i) => (
                      <div key={item} className="w-12 h-6 bg-slate-200 rounded animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                </div>

                {/* Wireframe content */}
                <div className="space-y-6">
                  <div className="w-3/4 h-8 bg-slate-200 rounded animate-pulse" />
                  <div className="space-y-3">
                    <div className="w-full h-3 bg-slate-100 rounded animate-pulse" />
                    <div className="w-5/6 h-3 bg-slate-100 rounded animate-pulse" />
                    <div className="w-4/6 h-3 bg-slate-100 rounded animate-pulse" />
                  </div>
                  <div className="w-32 h-10 bg-slate-300 rounded mt-6 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-slate-600 font-semibold">
              Basic structure, infinite potential
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
