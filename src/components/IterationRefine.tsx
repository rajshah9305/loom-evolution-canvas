
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
      {/* Enhanced Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99,102,241,0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Color-Infused Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/6 left-1/6 w-64 h-64 rounded-full opacity-20 animate-float"
             style={{ background: 'linear-gradient(45deg, var(--loom-primary-0), var(--loom-secondary-0))' }} />
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 rounded-lg rotate-45 opacity-15 animate-float"
             style={{ background: 'linear-gradient(45deg, var(--loom-secondary-0), var(--loom-accent-0))', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full shadow-lg">
              <span className="font-mono">02</span>
              <span>/</span>
              <span>Iteration 2</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-800">Adding Threads</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                of Style
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl font-medium leading-relaxed text-blue-700">
                "From structure to style: watching your words take shape."
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The foundation grows more sophisticated. Claude Sonnet 4 now understands aesthetic language, 
                transforming simple styling requests into beautiful, cohesive designs. Colors emerge, 
                shadows dance, and the first hints of personality begin to shine through.
              </p>
            </div>
            
            <div className="space-y-4 p-6 glass-effect rounded-xl border border-blue-200/30">
              <div className="text-sm text-blue-600 font-mono uppercase tracking-wide">Enhanced Input</div>
              <div className="bg-white/80 backdrop-blur p-4 rounded-lg border border-blue-200 shadow-sm font-mono text-sm">
                "make the buttons blue and rounded, add subtle shadows"
              </div>
              <div className="flex items-center space-x-3 text-sm text-blue-600">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span>Processing style rules...</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Styled UI Demo */}
            <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-2xl border border-blue-100/50 hover-lift">
              <div className="space-y-8">
                {/* Styled header */}
                <div className="flex justify-between items-center pb-6 border-b border-blue-100">
                  <div className="w-28 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">LOGO</span>
                  </div>
                  <div className="flex space-x-4">
                    {['Home', 'About', 'Contact'].map((item, i) => (
                      <button 
                        key={item}
                        className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Styled content */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-800">Welcome to Our App</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience the future of design automation with our AI-powered platform.
                  </p>
                  
                  <div className="flex space-x-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Get Started
                    </button>
                    <button className="px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-blue-700 font-medium">
              Style meets structure in perfect harmony
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
