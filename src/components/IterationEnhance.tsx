
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

  return (
    <section id="enhance" className="min-h-screen flex items-center gradient-loom-enhance relative overflow-hidden">
      {/* Dynamic background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-lg">
                Iteration 3
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow leading-tight">
                Weaving Intricate Patterns
              </h2>
              <p className="text-lg text-blue-100 font-medium leading-relaxed">
                "Beyond the basics: where design meets dynamic interaction."
              </p>
              <p className="text-blue-50">
                Complexity emerges with grace. Claude Sonnet 4 now interprets nuanced design language, 
                creating responsive layouts with sophisticated animations. Every micro-interaction tells a story, 
                every transition serves a purpose.
              </p>
              
              <div className="space-y-3">
                <div className="text-sm text-blue-200 font-mono">Advanced Input:</div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20 font-mono text-sm text-white">
                  "responsive hero with animated background and glowing CTA"
                </div>
                <div className="flex items-center space-x-2 text-xs text-blue-200">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span>Generating interactive elements...</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Enhanced UI Demo */}
            <div className="glass-effect p-8 rounded-2xl shadow-2xl">
              <div className="space-y-8">
                {/* Advanced header with gradient */}
                <div className="flex justify-between items-center pb-6 border-b border-white/20">
                  <div className="w-24 h-10 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">LOOM</span>
                  </div>
                  <div className="flex space-x-4">
                    {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                      <button 
                        key={item}
                        className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg text-sm transition-all duration-300 backdrop-blur"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hero section with animations */}
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Create. Iterate. Perfect.
                  </h3>
                  <p className="text-white/70 max-w-md mx-auto">
                    Transform your ideas into stunning interfaces with AI-powered design intelligence.
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Start Creating
                    </button>
                    <button className="px-6 py-3 border border-white/30 text-white rounded-xl backdrop-blur hover:bg-white/10 transition-all duration-300">
                      Watch Demo
                    </button>
                  </div>
                </div>

                {/* Interactive elements showcase */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-lg backdrop-blur border border-white/20 hover:from-white/30 hover:to-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-blue-100">
              Interaction becomes an art form
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
