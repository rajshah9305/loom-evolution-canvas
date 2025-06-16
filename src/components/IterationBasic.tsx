
import { useEffect, useState } from "react";
import { Code, Layers, Zap } from "lucide-react";

export const IterationBasic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger sequential animations
          setTimeout(() => setAnimationStep(1), 500);
          setTimeout(() => setAnimationStep(2), 1000);
          setTimeout(() => setAnimationStep(3), 1500);
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
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full animate-gradient-shift"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              background: `linear-gradient(135deg, rgba(71, 85, 105, 0.3), rgba(148, 163, 184, 0.2))`,
              borderRadius: Math.random() > 0.5 ? '50%' : '8px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-10 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Enhanced badge with animation */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-morph text-slate-800 text-sm rounded-full shadow-lg border border-slate-200/50">
              <Code className="w-4 h-4 text-indigo-600" />
              <span className="font-mono text-xs font-semibold">01</span>
              <span className="text-slate-400">/</span>
              <span className="font-medium">Foundation Layer</span>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            </div>
            
            {/* Enhanced title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="text-slate-900">The Seed of</span>
              <br />
              <span className="bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            
            {/* Enhanced content */}
            <div className="space-y-8">
              <div className="relative p-6 glass-effect rounded-2xl border border-slate-200/50">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-indigo-500 rounded-full animate-pulse" />
                <p className="text-xl text-slate-800 font-bold leading-relaxed">
                  "What if UI could be woven from pure intention?"
                </p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Every digital masterpiece begins with structure and purpose. Here, Claude transforms 
                basic concepts into clean, semantic foundations—the essential wireframes that serve 
                as the backbone for extraordinary user experiences.
              </p>
            </div>
            
            {/* Enhanced code input showcase */}
            <div className="space-y-6 p-8 glass-morph rounded-2xl border border-slate-200/30 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-600 font-mono uppercase tracking-widest">Prompt Input</div>
                <Zap className="w-4 h-4 text-indigo-500" />
              </div>
              
              <div className="relative">
                <div className="bg-white p-6 rounded-xl border border-slate-200 font-mono text-base shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/50 to-transparent opacity-0 animate-pulse" style={{ animationDelay: '2s' }} />
                  <span className="relative">"create a clean header with logo and navigation menu"</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-slate-600">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="font-medium">Processing structural elements...</span>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Layers, label: "Clean Structure" },
                { icon: Code, label: "Semantic HTML" },
                { icon: Zap, label: "Fast Output" }
              ].map((feature, i) => (
                <div 
                  key={feature.label}
                  className={`p-4 glass-effect rounded-xl border border-slate-200/50 text-center transform transition-all duration-500 hover:scale-105 ${animationStep > i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <feature.icon className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                  <div className="text-xs text-slate-600 font-medium">{feature.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced wireframe demo */}
          <div className={`transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-300/20 to-slate-400/20 rounded-3xl blur-2xl" />
              
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl border border-slate-200 hover-lift-subtle group">
                <div className="space-y-10">
                  {/* Enhanced wireframe header */}
                  <div className="flex justify-between items-center pb-8 border-b-2 border-slate-200">
                    <div className={`w-24 h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg transition-all duration-1000 ${animationStep > 0 ? 'animate-pulse' : ''}`} />
                    <div className="flex space-x-4">
                      {['Home', 'About', 'Contact'].map((item, i) => (
                        <div 
                          key={item} 
                          className={`w-16 h-8 bg-slate-200 rounded-lg transition-all duration-1000 ${animationStep > 0 ? 'animate-pulse' : ''}`} 
                          style={{ animationDelay: `${i * 200}ms` }} 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced wireframe content */}
                  <div className="space-y-8">
                    <div className={`w-4/5 h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg transition-all duration-1000 ${animationStep > 1 ? 'animate-pulse' : ''}`} />
                    
                    <div className="space-y-4">
                      {[100, 85, 70].map((width, i) => (
                        <div 
                          key={i}
                          className={`h-4 bg-slate-100 rounded-lg transition-all duration-1000 ${animationStep > 2 ? 'animate-pulse' : ''}`} 
                          style={{ 
                            width: `${width}%`,
                            animationDelay: `${i * 150}ms`
                          }} 
                        />
                      ))}
                    </div>
                    
                    <div className={`w-40 h-12 bg-gradient-to-r from-slate-300 to-slate-400 rounded-xl mt-8 transition-all duration-1000 hover:scale-105 cursor-pointer ${animationStep > 2 ? 'animate-pulse' : ''}`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full border border-slate-200/50 text-sm text-slate-700 font-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Structure Built, Ready for Enhancement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
