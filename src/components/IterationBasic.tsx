
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
      {/* Enhanced Grid Pattern with Animation */}
      <div className="absolute inset-0 opacity-15">
        <div className="grid grid-cols-12 gap-6 h-full w-full p-8 animate-pulse">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-gray-400 rounded hover:bg-gray-300/30 transition-all duration-500"
              style={{ 
                animationDelay: `${i * 0.01}s`,
                animation: 'fade-in 2s ease-in-out infinite alternate'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gray-400/20 rounded-full animate-float-gentle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div className="inline-block group">
                <div className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="font-medium">Iteration 1</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mt-1"></div>
                </div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                The Seed of an 
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent block">
                  Idea
                </span>
              </h2>
              
              <div className="relative">
                <p className="text-2xl text-gray-600 leading-relaxed font-light italic">
                  "What if UI could be woven from words?"
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
              </div>
              
              <p className="text-lg text-gray-500 leading-relaxed">
                Every masterpiece begins with a simple foundation. Here, Claude Sonnet 4 takes its first steps, 
                translating basic prompts into clean HTML structure. The aesthetic is minimalist by design—
                wireframes brought to life with purpose and potential.
              </p>
              
              <div className="space-y-4 p-6 bg-white/70 backdrop-blur rounded-2xl border border-gray-200/50 hover-lift">
                <div className="text-sm text-gray-500 font-mono flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Input:</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-sm text-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent animate-pulse"></div>
                  <span className="relative">"create a simple header with logo and navigation"</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Enhanced Wireframe UI Demo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-200 hover-lift">
                <div className="space-y-8">
                  {/* Enhanced Header wireframe */}
                  <div className="flex justify-between items-center pb-6 border-b-2 border-gray-200">
                    <div className="w-24 h-10 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg animate-pulse" />
                    <div className="flex space-x-4">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i}
                          className="w-20 h-8 bg-gray-300 rounded-lg animate-pulse hover:bg-gray-400 transition-colors duration-300" 
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Content wireframe */}
                  <div className="space-y-6">
                    <div className="w-4/5 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg animate-pulse" />
                    <div className="space-y-3">
                      <div className="w-full h-6 bg-gray-200 rounded-lg animate-pulse" />
                      <div className="w-5/6 h-6 bg-gray-200 rounded-lg animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-3/4 h-6 bg-gray-200 rounded-lg animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <div className="w-40 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl mt-8 animate-pulse hover:scale-105 transition-transform duration-300 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg text-gray-600 font-medium">
                Basic structure, infinite potential
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
