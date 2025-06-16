
import { useEffect, useState } from "react";
import { Crown, Gem, Zap, Wand2, Sparkles2, Award, Trophy, Star } from "lucide-react";

export const IterationPerfect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('perfect');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Luxurious floating elements
  const orbs = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="absolute animate-float opacity-40"
      style={{
        width: `${24 + Math.random() * 48}px`,
        height: `${24 + Math.random() * 48}px`,
        background: `linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))`,
        borderRadius: '50%',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${8 + Math.random() * 6}s`,
        filter: 'blur(1px)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)'
      }}
    />
  ));

  const masterFeatures = [
    { 
      icon: Crown, 
      title: "Royal Design", 
      desc: "Pixel-perfect layouts",
      color: "from-amber-500 via-yellow-500 to-orange-500"
    },
    { 
      icon: Gem, 
      title: "Premium UX", 
      desc: "Flawless interactions",
      color: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    { 
      icon: Zap, 
      title: "Lightning Fast", 
      desc: "Optimized performance",
      color: "from-violet-500 via-purple-500 to-indigo-500"
    },
    { 
      icon: Wand2, 
      title: "AI Mastery", 
      desc: "Intelligent adaptation",
      color: "from-pink-500 via-rose-500 to-red-500"
    }
  ];

  return (
    <section id="perfect" className="min-h-screen flex items-center gradient-loom-perfect relative overflow-hidden">
      {/* Luxurious background with multiple layers */}
      <div className="absolute inset-0">
        {/* Premium mesh pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06] animate-gradient-shift"
          style={{
            background: `radial-gradient(circle at 25% 25%, rgba(79, 70, 229, 0.1) 0%, transparent 25%), radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.08) 0%, transparent 25%), radial-gradient(circle at 75% 25%, rgba(59, 130, 246, 0.06) 0%, transparent 25%), radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.04) 0%, transparent 25%)`,
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Luxurious floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-12 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Premium badge */}
            <div className="inline-flex items-center space-x-4 px-6 py-4 glass-morph text-slate-800 text-sm rounded-full border border-gradient-to-r from-indigo-200/50 to-pink-200/50 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-pink-500/5 to-indigo-500/5 animate-gradient-shift" />
              <div className="relative flex items-center space-x-4">
                <Crown className="w-5 h-5 text-amber-600" />
                <span className="font-mono text-xs font-bold">04</span>
                <span className="text-slate-400">/</span>
                <span className="font-bold">The Masterpiece</span>
                <div className="flex space-x-1">
                  <Star className="w-3 h-3 text-amber-500 animate-pulse" />
                  <Star className="w-3 h-3 text-amber-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <Star className="w-3 h-3 text-amber-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
              </div>
            </div>
            
            {/* Spectacular title */}
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tight relative">
              <span className="text-slate-900">Your Vision,</span>
              <br />
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-pink-600 to-amber-600 bg-clip-text text-transparent blur-sm">
                  Perfectly Woven
                </span>
                <span className="relative bg-gradient-to-r from-indigo-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                  Perfectly Woven
                </span>
              </span>
            </h2>
            
            {/* Premium content */}
            <div className="space-y-10">
              <div className="relative p-8 glass-morph rounded-3xl border border-gradient-to-r from-indigo-200/30 to-pink-200/30 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-pink-500 via-amber-500 to-indigo-500 animate-gradient-shift" />
                <div className="absolute -top-2 -right-2">
                  <Trophy className="w-6 h-6 text-amber-500 animate-bounce" />
                </div>
                <p className="text-xl text-slate-800 font-bold leading-relaxed">
                  "The ultimate synthesis of human creativity and AI precision."
                </p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Witness the pinnacle of AI-powered design evolution. Claude now interprets abstract 
                concepts with the intuition of a master designer, generating production-ready 
                interfaces that transcend expectations and inspire innovation.
              </p>
            </div>
            
            {/* Master features showcase */}
            <div className="grid grid-cols-2 gap-6">
              {masterFeatures.map((feature, i) => (
                <div 
                  key={feature.title}
                  className={`group p-6 glass-morph rounded-2xl border border-slate-200/50 hover:border-slate-300/50 cursor-pointer transition-all duration-700 hover:scale-105 relative overflow-hidden ${activeFeature === i ? 'ring-2 ring-indigo-500/50 shadow-xl' : ''}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-lg text-slate-800 font-bold mb-1">{feature.title}</div>
                    <div className="text-sm text-slate-600">{feature.desc}</div>
                    <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full mt-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-pink-600 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center space-x-3">
                  <Award className="w-5 h-5" />
                  <span>Experience Loom Excellence</span>
                  <Sparkles2 className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>

          {/* Masterpiece showcase */}
          <div className={`transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-pink-500/15 via-amber-500/10 to-indigo-500/20 rounded-3xl blur-3xl animate-pulse" />
              
              <div className="relative glass-morph p-12 rounded-3xl shadow-3xl border border-gradient-to-r from-indigo-200/50 via-pink-200/30 to-amber-200/50 hover-lift-subtle group overflow-hidden">
                {/* Premium background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="w-full h-full animate-gradient-shift"
                    style={{
                      background: `conic-gradient(from 0deg at 50% 50%, rgba(79, 70, 229, 0.2) 0deg, rgba(236, 72, 153, 0.15) 60deg, rgba(59, 130, 246, 0.1) 120deg, rgba(16, 185, 129, 0.1) 180deg, rgba(245, 158, 11, 0.15) 240deg, rgba(79, 70, 229, 0.2) 360deg)`,
                      backgroundSize: '200px 200px'
                    }}
                  />
                </div>

                <div className="relative space-y-10">
                  {/* Premium header */}
                  <div className="flex justify-between items-center pb-8 border-b border-gradient-to-r from-indigo-200/50 via-pink-200/30 to-amber-200/50">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-pink-500 via-amber-500 to-indigo-600 rounded-2xl shadow-xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                      </div>
                      <span className="text-slate-800 font-black text-2xl tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        LOOM STUDIO
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 glass-effect rounded-xl border border-indigo-200/50 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                        <Crown className="w-5 h-5 text-amber-600" />
                      </div>
                    </div>
                  </div>

                  {/* Masterpiece project showcase */}
                  <div className="space-y-8">
                    <div className="text-center">
                      <h4 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">
                        Creative Ecosystem Suite
                      </h4>
                      <p className="text-slate-500 font-medium">AI-crafted visual symphony</p>
                    </div>

                    {/* Premium project preview */}
                    <div className="glass-morph rounded-3xl p-8 border border-gradient-to-r from-indigo-200/30 via-pink-200/20 to-amber-200/30 hover:border-gradient-to-r hover:from-indigo-300/50 hover:via-pink-300/30 hover:to-amber-300/50 transition-all duration-500 cursor-pointer group/project relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-pink-50/20 to-amber-50/30 opacity-0 group-hover/project:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        <div className="w-full h-40 rounded-2xl mb-8 flex items-center justify-center group-hover/project:scale-105 transition-transform duration-500 relative overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-50 to-pink-50">
                          <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="relative group/item">
                                <div className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center relative overflow-hidden">
                                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${masterFeatures[i-1]?.color || 'from-slate-500 to-slate-600'} shadow-lg`} />
                                </div>
                                {i === activeFeature + 1 && (
                                  <div className="absolute -top-1 -right-1">
                                    <Star className="w-4 h-4 text-amber-500 animate-pulse" />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-slate-800 font-black text-xl">Masterpiece Complete</div>
                            <div className="text-slate-500 font-medium">Brand • UX • Performance • AI</div>
                          </div>
                          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-pink-500 to-indigo-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <span className="relative">Launch</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Premium achievement indicators */}
                    <div className="flex justify-center space-x-8 text-sm">
                      {['🏆 Award-Winning', '⚡ Lightning Fast', '🎨 Pixel Perfect', '🚀 Future Ready'].map((achievement, i) => (
                        <span 
                          key={achievement} 
                          className={`font-semibold transition-all duration-500 cursor-pointer hover:scale-110 ${activeFeature === i ? 'text-indigo-700' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <div className="inline-flex items-center space-x-3 px-6 py-3 glass-morph rounded-full border border-gradient-to-r from-indigo-200/50 via-pink-200/30 to-amber-200/50 text-base font-bold shadow-lg">
                <Trophy className="w-5 h-5 text-amber-600" />
                <span className="bg-gradient-to-r from-slate-700 via-indigo-700 to-pink-700 bg-clip-text text-transparent">
                  Where imagination transcends reality
                </span>
                <Gem className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
