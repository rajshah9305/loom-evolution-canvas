
import { useEffect, useState } from "react";

export const IterationPerfect = () => {
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

    const element = document.getElementById('perfect');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="perfect" className="min-h-screen flex items-center gradient-evolution-perfect relative overflow-hidden">
      {/* Ethereal particle constellation */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              width: `${6 + Math.random() * 20}px`,
              height: `${6 + Math.random() * 20}px`,
              background: `radial-gradient(circle, hsla(var(--evolution-perfect), 0.8), hsla(var(--evolution-ethereal), 0.3))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sophisticated-float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${10 + Math.random() * 20}px hsla(var(--evolution-perfect), 0.6)`
            }}
          />
        ))}
      </div>

      {/* Cosmic light streams */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              width: '1px',
              height: '120%',
              background: `linear-gradient(180deg, 
                transparent 0%, 
                hsla(var(--evolution-perfect), 0.6) 20%, 
                hsla(var(--evolution-light), 0.8) 50%, 
                hsla(var(--evolution-ethereal), 0.6) 80%, 
                transparent 100%)`,
              left: `${5 + i * 8}%`,
              transform: `rotate(${-15 + i * 2.5}deg)`,
              animation: `perfect-shimmer ${12 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      {/* Ambient glow layers */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
             style={{ 
               background: `radial-gradient(circle, hsla(var(--evolution-perfect), 0.4), transparent 70%)`,
               filter: 'blur(80px)',
               animation: 'sophisticated-float 20s ease-in-out infinite'
             }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
             style={{ 
               background: `radial-gradient(circle, hsla(var(--evolution-ethereal), 0.5), transparent 70%)`,
               filter: 'blur(60px)',
               animation: 'sophisticated-float 25s ease-in-out infinite reverse'
             }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1500 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-10">
              <div className="inline-block px-8 py-4 text-white text-sm rounded-2xl border border-white/30 backdrop-blur relative overflow-hidden"
                   style={{ 
                     background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.6), hsla(var(--evolution-ethereal), 0.4))`,
                     boxShadow: `0 12px 40px hsla(var(--evolution-perfect), 0.5)`
                   }}>
                <span className="relative z-10">✨ Iteration 4 • The Masterpiece</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full animate-perfect-shimmer" />
              </div>
              
              <h2 className="text-6xl md:text-7xl font-light text-white leading-tight tracking-tight text-shadow-evolution">
                Your Vision,
                <br />
                <span className="font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
                  Perfectly Woven
                </span>
              </h2>
              
              <p className="text-2xl font-medium leading-relaxed"
                 style={{ color: `hsl(var(--evolution-ethereal))` }}>
                "The final form of creation."
              </p>
              
              <p className="text-white/80 text-xl leading-relaxed">
                The culmination of AI evolution. Claude Sonnet 4 now interprets abstract design concepts 
                with the intuition of a master craftsperson, generating production-ready interfaces that 
                rival the finest human-designed experiences.
              </p>
              
              <div className="space-y-6">
                <div className="text-sm text-white/60 font-mono tracking-wide">VISIONARY INPUT</div>
                <div className="glass-evolution p-8 rounded-2xl border font-mono text-lg text-white shadow-2xl relative overflow-hidden"
                     style={{ 
                       borderColor: `hsl(var(--evolution-perfect) / 0.5)`,
                       boxShadow: `0 20px 60px hsla(var(--evolution-perfect), 0.4)`
                     }}>
                  <span className="relative z-10">"design a futuristic e-commerce experience that evokes wonder"</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full animate-perfect-shimmer" 
                       style={{ animationDuration: '3s' }} />
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-white/80">
                  <div className="flex space-x-2">
                    {['perfect', 'light', 'ethereal'].map((level, i) => (
                      <div 
                        key={level}
                        className="w-3 h-3 rounded-full animate-pulse" 
                        style={{ 
                          backgroundColor: `hsl(var(--evolution-${level}))`,
                          animationDelay: `${i * 0.3}s`,
                          boxShadow: `0 0 10px hsl(var(--evolution-${level}))`
                        }} 
                      />
                    ))}
                  </div>
                  <span>Crafting digital poetry...</span>
                </div>

                <button className="mt-12 px-12 py-6 text-white font-bold rounded-3xl shadow-2xl transition-all duration-700 transform hover:scale-110 relative overflow-hidden group text-lg"
                        style={{ 
                          background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.9), hsla(var(--evolution-ethereal), 0.7))`,
                          boxShadow: `0 20px 60px hsla(var(--evolution-perfect), 0.6)`
                        }}>
                  <span className="relative z-10">Experience Loom Yourself</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </button>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Perfect UI Demo - The Masterpiece */}
            <div className="relative">
              {/* Aura effect */}
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-60"
                   style={{ 
                     background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.4), hsla(var(--evolution-ethereal), 0.3))`,
                     transform: 'scale(1.1)'
                   }} />
              
              <div className="relative glass-evolution p-12 rounded-3xl shadow-2xl border border-white/30 overflow-hidden"
                   style={{ 
                     boxShadow: `0 30px 80px hsla(var(--evolution-perfect), 0.5)`
                   }}>
                {/* Ambient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 rounded-3xl" />
                
                <div className="space-y-10 relative">
                  {/* Perfect header */}
                  <div className="flex justify-between items-center pb-8 border-b border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden"
                           style={{ 
                             background: `linear-gradient(135deg, hsl(var(--evolution-perfect)), hsl(var(--evolution-ethereal)))`,
                             animation: 'gradient-evolution-flow 6s ease-in-out infinite',
                             boxShadow: `0 0 20px hsla(var(--evolution-perfect), 0.6)`
                           }}>
                        <span className="text-white font-bold text-xl">F</span>
                      </div>
                      <span className="text-white font-bold text-2xl">FutureShop</span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="w-10 h-10 rounded-2xl backdrop-blur border border-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                           style={{ background: `hsla(var(--evolution-perfect), 0.2)` }}>
                        <div className="w-4 h-4 rounded bg-white/60" />
                      </div>
                      <div className="w-10 h-10 rounded-2xl backdrop-blur border border-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                           style={{ background: `hsla(var(--evolution-ethereal), 0.2)` }}>
                        <div className="w-4 h-4 rounded bg-white/60" />
                      </div>
                    </div>
                  </div>

                  {/* Perfect product showcase */}
                  <div className="space-y-8">
                    <div className="text-center">
                      <h4 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-3">
                        Holographic Display Pro
                      </h4>
                      <p className="text-white/70 text-lg">Experience the future of visual technology</p>
                    </div>

                    {/* Interactive product card - The pinnacle */}
                    <div className="rounded-3xl p-8 backdrop-blur border transition-all duration-700 cursor-pointer group relative overflow-hidden"
                         style={{ 
                           background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.3), hsla(var(--evolution-ethereal), 0.2))`,
                           borderColor: `hsl(var(--evolution-perfect) / 0.4)`,
                           boxShadow: `0 20px 60px hsla(var(--evolution-perfect), 0.3)`
                         }}>
                      
                      {/* Product visualization */}
                      <div className="w-full h-40 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 relative overflow-hidden"
                           style={{ 
                             background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.4), hsla(var(--evolution-ethereal), 0.3))`,
                             boxShadow: `inset 0 0 40px hsla(var(--evolution-perfect), 0.4)`
                           }}>
                        <div className="w-20 h-20 rounded-2xl backdrop-blur animate-pulse relative"
                             style={{ 
                               background: `hsla(var(--evolution-ethereal), 0.6)`,
                               boxShadow: `0 0 30px hsl(var(--evolution-perfect))`
                             }}>
                          <div className="absolute inset-2 rounded-xl"
                               style={{ background: `linear-gradient(45deg, hsla(var(--evolution-perfect), 0.8), hsla(var(--evolution-ethereal), 0.6))` }} />
                        </div>
                        
                        {/* Floating UI elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-lg backdrop-blur border border-white/40 animate-bounce"
                             style={{ animationDelay: '0.5s' }} />
                        <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full backdrop-blur border border-white/40 animate-bounce"
                             style={{ animationDelay: '1s' }} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold text-xl">$2,999</div>
                          <div className="text-white/60">Free quantum shipping</div>
                        </div>
                        <button className="px-8 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 relative overflow-hidden group/btn text-lg"
                                style={{ 
                                  background: `linear-gradient(135deg, hsl(var(--evolution-perfect)), hsl(var(--evolution-ethereal)))`,
                                  color: 'white',
                                  boxShadow: `0 10px 30px hsla(var(--evolution-perfect), 0.5)`
                                }}>
                          <span className="relative z-10">Add to Cart</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        </button>
                      </div>

                      {/* Card ambient effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Perfect trust indicators */}
                    <div className="flex justify-center space-x-8 text-sm text-white/70">
                      <span className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full" style={{ background: `hsl(var(--evolution-perfect))` }} />
                        <span>Quantum Secure</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full" style={{ background: `hsl(var(--evolution-ethereal))` }} />
                        <span>AI Optimized</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" />
                        <span>Perfect 5.0</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center text-lg text-white/80 font-light">
              Where imagination transcends into digital reality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
