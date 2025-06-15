
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
      {/* Enhanced Pattern Overlay with Animation */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.4) 2px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'gradient-wave 6s ease-in-out infinite'
          }}
        />
      </div>

      {/* Flowing Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-blue-400/40 rounded-full animate-float-gentle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-8">
              <div className="inline-block group">
                <div className="px-6 py-3 bg-gradient-to-r from-loom-primary via-blue-500 to-loom-secondary text-white text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                  <span className="font-medium">Iteration 2</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent mt-1"></div>
                </div>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Adding Threads of
                <span className="bg-gradient-to-r from-loom-primary via-blue-500 to-loom-secondary bg-clip-text text-transparent block">
                  Style
                </span>
              </h2>
              
              <div className="relative">
                <p className="text-2xl text-loom-primary font-medium leading-relaxed italic">
                  "From structure to style: watching your words take shape."
                </p>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-loom-primary/50 to-transparent"></div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                The foundation grows more sophisticated. Claude Sonnet 4 now understands aesthetic language, 
                transforming simple styling requests into beautiful, cohesive designs. Colors emerge, 
                shadows dance, and the first hints of personality begin to shine through.
              </p>
              
              <div className="space-y-4 p-6 glass-card rounded-2xl hover-lift">
                <div className="text-sm text-blue-600 font-mono flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Enhanced Input:</span>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-xl border border-blue-200/50 font-mono text-sm text-blue-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent animate-pulse"></div>
                  <span className="relative">"make the buttons blue and rounded, add subtle shadows"</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-blue-600">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="font-medium">Processing style rules...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Enhanced Styled UI Demo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative glass-card p-10 rounded-3xl shadow-2xl hover-lift">
                <div className="space-y-8">
                  {/* Enhanced styled header */}
                  <div className="flex justify-between items-center pb-6 border-b border-blue-200/50">
                    <div className="w-28 h-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <span className="text-white text-sm font-bold tracking-wide">LOGO</span>
                    </div>
                    <div className="flex space-x-4">
                      {['Home', 'About', 'Contact'].map((item, i) => (
                        <button 
                          key={item}
                          className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 font-medium"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced styled content */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent">
                      Welcome to Our App
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Experience the future of design automation with our AI-powered platform.
                    </p>
                    <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-semibold">
                      <span className="group-hover:tracking-wide transition-all duration-300">Get Started</span>
                      <div className="w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300 mt-1"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg text-blue-700 font-medium">
                Style meets structure in perfect harmony
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
