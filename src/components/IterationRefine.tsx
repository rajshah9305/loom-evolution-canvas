
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
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-loom-primary text-white text-sm rounded">
                Iteration 2
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Adding Threads of Style
              </h2>
              <p className="text-lg text-loom-primary font-medium leading-relaxed">
                "From structure to style: watching your words take shape."
              </p>
              <p className="text-gray-600">
                The foundation grows more sophisticated. Claude Sonnet 4 now understands aesthetic language, 
                transforming simple styling requests into beautiful, cohesive designs. Colors emerge, 
                shadows dance, and the first hints of personality begin to shine through.
              </p>
              
              <div className="space-y-3">
                <div className="text-sm text-gray-500 font-mono">Enhanced Input:</div>
                <div className="bg-white p-4 rounded border border-blue-200 shadow-sm font-mono text-sm">
                  "make the buttons blue and rounded, add subtle shadows"
                </div>
                <div className="flex items-center space-x-2 text-xs text-blue-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span>Processing style rules...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Styled UI Demo */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-blue-100">
              <div className="space-y-6">
                {/* Styled header */}
                <div className="flex justify-between items-center pb-4 border-b border-blue-100">
                  <div className="w-20 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">LOGO</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                      Home
                    </button>
                    <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                      About
                    </button>
                    <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                      Contact
                    </button>
                  </div>
                </div>

                {/* Styled content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">Welcome to Our App</h3>
                  <p className="text-gray-600">Experience the future of design automation with our AI-powered platform.</p>
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200 animate-pulse-glow">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-blue-600">
              Style meets structure in perfect harmony
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
