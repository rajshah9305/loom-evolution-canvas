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
    <section id="refine" className="min-h-screen flex items-center gradient-loom-refine relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-sm rounded-full shadow-sm">
              <span className="font-mono text-xs">02</span>
              <span className="text-indigo-200">/</span>
              <span>Iteration 2</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="text-slate-900">Adding Threads</span>
              <br />
              <span className="text-gradient-primary">
                of Style
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg font-semibold leading-relaxed text-indigo-800">
                "From structure to style: watching your words take shape."
              </p>
              
              <p className="text-base text-slate-700 leading-relaxed">
                The foundation grows more sophisticated. Claude now understands aesthetic language, 
                transforming simple styling requests into beautiful, cohesive designs. Colors emerge, 
                shadows dance, and personality begins to shine through.
              </p>
            </div>
            
            <div className="space-y-4 p-6 glass-effect rounded-xl border border-indigo-200/30">
              <div className="text-xs text-indigo-700 font-mono uppercase tracking-wider">Enhanced Input</div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm font-mono text-sm">
                "make the buttons blue and rounded, add subtle shadows"
              </div>
              <div className="flex items-center space-x-3 text-xs text-indigo-600">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
                <span>Processing style rules...</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Styled UI Demo */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100/50 hover-lift-subtle">
              <div className="space-y-8">
                {/* Styled header */}
                <div className="flex justify-between items-center pb-6 border-b border-indigo-100">
                  <div className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-white text-sm font-semibold">LOGO</span>
                  </div>
                  <div className="flex space-x-2">
                    {['Home', 'About', 'Contact'].map((item, i) => (
                      <button 
                        key={item}
                        className="px-3 py-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm transition-all duration-200 hover:scale-105"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Styled content */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Welcome to Our App</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Experience the future of design automation with our AI-powered platform.
                  </p>
                  
                  <div className="flex space-x-3">
                    <button className="btn-primary">
                      Get Started
                    </button>
                    <button className="btn-secondary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-indigo-700 font-semibold">
              Style meets structure in perfect harmony
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
