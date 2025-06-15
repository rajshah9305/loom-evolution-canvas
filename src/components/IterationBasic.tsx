
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
      {/* Minimalist Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 gap-2 h-full w-full p-8">
          {Array.from({ length: 256 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-gray-600 transition-all duration-1000"
              style={{
                animationDelay: `${(i * 10)}ms`,
                animation: isVisible ? 'fade-in-up 0.8s ease-out forwards' : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 border border-gray-300 rotate-45 opacity-20 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-gray-400 opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-block px-6 py-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg">
              <span className="font-mono">01</span> / Iteration 1
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              The Seed of 
              <br />
              <span className="text-gray-600">an Idea</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                "What if UI could be woven from words?"
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Every masterpiece begins with a simple foundation. Here, Claude Sonnet 4 takes its first steps, 
                translating basic prompts into clean HTML structure. The aesthetic is minimalist by design—
                wireframes brought to life with purpose and potential.
              </p>
            </div>
            
            <div className="space-y-4 p-6 bg-white/50 backdrop-blur rounded-xl border border-gray-200">
              <div className="text-sm text-gray-500 font-mono uppercase tracking-wide">Input</div>
              <div className="bg-white p-4 rounded-lg border border-gray-300 font-mono text-sm shadow-sm">
                "create a simple header with logo and navigation"
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                <span>Processing basic structure...</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Wireframe UI Demo */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-gray-200 hover-lift">
              <div className="space-y-8">
                {/* Wireframe header */}
                <div className="flex justify-between items-center pb-6 border-b border-gray-300">
                  <div className="w-24 h-10 bg-gray-300 rounded animate-pulse" />
                  <div className="flex space-x-4">
                    {['Home', 'About', 'Contact'].map((item, i) => (
                      <div key={item} className="w-16 h-8 bg-gray-300 rounded animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                    ))}
                  </div>
                </div>

                {/* Wireframe content */}
                <div className="space-y-6">
                  <div className="w-3/4 h-10 bg-gray-300 rounded animate-pulse" />
                  <div className="space-y-3">
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="w-4/6 h-4 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="w-40 h-12 bg-gray-400 rounded mt-8 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600 font-medium">
              Basic structure, infinite potential
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
