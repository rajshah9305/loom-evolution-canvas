
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
      {/* Transcendent particle universe */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              width: `${4 + Math.random() * 24}px`,
              height: `${4 + Math.random() * 24}px`,
              background: `radial-gradient(circle, hsla(var(--evolution-perfect), 0.9), hsla(var(--evolution-ethereal), 0.5), hsla(var(--evolution-transcendent), 0.3))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `cosmic-drift ${4 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(0.8px)',
              boxShadow: `0 0 ${20 + Math.random() * 40}px hsla(var(--evolution-perfect), 0.8)`
            }}
          />
        ))}
      </div>

      {/* Ethereal light symphony */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-35"
            style={{
              width: '1px',
              height: '130%',
              background: `linear-gradient(180deg, 
                transparent 0%, 
                hsla(var(--evolution-perfect), 0.8) 15%, 
                hsla(var(--evolution-light), 0.9) 35%, 
                hsla(var(--evolution-ethereal), 0.8) 65%, 
                hsla(var(--evolution-transcendent), 0.6) 85%, 
                transparent 100%)`,
              left: `${3 + i * 6}%`,
              transform: `rotate(${-25 + i * 3}deg)`,
              animation: `perfect-shimmer ${20 + i * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Transcendent ambient cosmos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-25"
             style={{ 
               background: `radial-gradient(circle, hsla(var(--evolution-perfect), 0.6), transparent 70%)`,
               filter: 'blur(120px)',
               animation: 'transcendent-pulse 30s ease-in-out infinite'
             }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
             style={{ 
               background: `radial-gradient(circle, hsla(var(--evolution-ethereal), 0.7), transparent 70%)`,
               filter: 'blur(100px)',
               animation: 'transcendent-pulse 35s ease-in-out infinite reverse'
             }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-15 transform -translate-x-1/2 -translate-y-1/2"
             style={{ 
               background: `radial-gradient(circle, hsla(var(--evolution-transcendent), 0.8), transparent 70%)`,
               filter: 'blur(80px)',
               animation: 'transcendent-pulse 40s ease-in-out infinite'
             }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className={`transition-all duration-2000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="space-y-14">
              <div className="inline-block px-10 py-5 text-white text-sm rounded-3xl border border-white/40 backdrop-blur relative overflow-hidden"
                   style={{ 
                     background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.8), hsla(var(--evolution-ethereal), 0.6))`,
                     boxShadow: `0 20px 60px hsla(var(--evolution-perfect), 0.7)`
                   }}>
                <span className="relative z-10 flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-pink-200 animate-pulse" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }} />
                  <span className="text-lg">✨ Iteration 4 • The Masterpiece</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full animate-[perfect-shimmer_6s_ease-in-out_infinite]" />
              </div>
              
              <h2 className="text-7xl md:text-8xl font-light text-white leading-tight tracking-tight text-shadow-sophisticated">
                Your Vision,
                <br />
                <span className="font-bold holographic bg-clip-text text-transparent">
                  Perfectly Woven
                </span>
              </h2>
              
              <p className="text-3xl font-medium leading-relaxed italic"
                 style={{ color: `hsl(var(--evolution-ethereal))` }}>
                "The final form of creation."
              </p>
              
              <p className="text-2xl text-white/85 leading-relaxed max-w-xl">
                The culmination of AI evolution. Claude Sonnet 4 now interprets abstract design concepts 
                with the intuition of a master craftsperson, generating production-ready interfaces that 
                rival the finest human-designed experiences.
              </p>
              
              <div className="space-y-10">
                <div className="text-sm text-white/70 font-mono tracking-wider uppercase">Visionary Input</div>
                <div className="glass-evolution-enhanced p-12 rounded-3xl border font-mono text-xl text-white shadow-2xl relative overflow-hidden"
                     style={{ 
                       borderColor: `hsl(var(--evolution-perfect) / 0.6)`,
                       boxShadow: `0 30px 80px hsla(var(--evolution-perfect), 0.6)`
                     }}>
                  <div className="flex items-start space-x-5 relative z-10">
                    <div className="w-5 h-5 rounded-full bg-pink-300 mt-1 animate-pulse" style={{ boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)' }} />
                    <div>
                      <div className="text-white/70 text-sm mb-4">$ loom perfect --transcendent --visionary</div>
                      <div>"design a futuristic e-commerce experience that evokes wonder"</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full animate-[perfect-shimmer_7s_ease-in-out_infinite]" />
                </div>
                
                <div className="flex items-center space-x-5 text-lg text-white/85">
                  <div className="flex space-x-3">
                    {['perfect', 'light', 'ethereal', 'transcendent'].map((level, i) => (
                      <div 
                        key={level}
                        className="w-4 h-4 rounded-full animate-pulse" 
                        style={{ 
                          backgroundColor: `hsl(var(--evolution-${level}))`,
                          animationDelay: `${i * 0.4}s`,
                          boxShadow: `0 0 15px hsl(var(--evolution-${level}))`
                        }} 
                      />
                    ))}
                  </div>
                  <span>Crafting digital poetry...</span>
                </div>

                <button className="mt-16 px-16 py-8 text-white font-bold rounded-3xl shadow-2xl transition-all duration-1000 transform hover:scale-115 relative overflow-hidden group text-xl"
                        style={{ 
                          background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.9), hsla(var(--evolution-ethereal), 0.8))`,
                          boxShadow: `0 25px 70px hsla(var(--evolution-perfect), 0.8)`
                        }}>
                  <span className="relative z-10">Experience Loom Yourself</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
                  <div className="absolute inset-0 bg-white/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </button>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-2000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* The Ultimate Masterpiece UI */}
            <div className="relative">
              {/* Transcendent aura matrix */}
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-60"
                   style={{ 
                     background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.6), hsla(var(--evolution-ethereal), 0.5))`,
                     transform: 'scale(1.3)',
                     animation: 'transcendent-pulse 25s ease-in-out infinite'
                   }} />
              
              <div className="relative glass-evolution-enhanced p-16 rounded-3xl shadow-2xl border border-white/50 overflow-hidden"
                   style={{ 
                     boxShadow: `0 40px 100px hsla(var(--evolution-perfect), 0.7)`
                   }}>
                {/* Cosmic background symphony */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 rounded-3xl" />
                
                <div className="space-y-14 relative">
                  {/* Transcendent header */}
                  <div className="flex justify-between items-center pb-12 border-b border-white/30">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 rounded-3xl flex items-center justify-center relative overflow-hidden"
                           style={{ 
                             background: `linear-gradient(135deg, hsl(var(--evolution-perfect)), hsl(var(--evolution-ethereal)))`,
                             animation: 'holographic-shift 4s ease-in-out infinite',
                             boxShadow: `0 0 40px hsla(var(--evolution-perfect), 0.9)`
                           }}>
                        <span className="text-white font-bold text-3xl">F</span>
                      </div>
                      <span className="text-white font-bold text-4xl holographic bg-clip-text text-transparent">FutureShop</span>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                      <div className="w-12 h-12 rounded-3xl backdrop-blur border border-white/40 flex items-center justify-center hover:scale-125 transition-transform duration-500 cursor-pointer"
                           style={{ background: `hsla(var(--evolution-perfect), 0.3)` }}>
                        <div className="w-5 h-5 rounded bg-white/70" />
                      </div>
                      <div className="w-12 h-12 rounded-3xl backdrop-blur border border-white/40 flex items-center justify-center hover:scale-125 transition-transform duration-500 cursor-pointer"
                           style={{ background: `hsla(var(--evolution-ethereal), 0.3)` }}>
                        <div className="w-5 h-5 rounded bg-white/70" />
                      </div>
                    </div>
                  </div>

                  {/* Transcendent product universe */}
                  <div className="space-y-12">
                    <div className="text-center">
                      <h4 className="text-5xl font-bold holographic bg-clip-text text-transparent mb-4">
                        Holographic Display Pro
                      </h4>
                      <p className="text-white/80 text-2xl">Experience the future of visual technology</p>
                    </div>

                    {/* The Ultimate Product Showcase */}
                    <div className="rounded-3xl p-12 backdrop-blur border transition-all duration-1000 cursor-pointer group relative overflow-hidden"
                         style={{ 
                           background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.4), hsla(var(--evolution-ethereal), 0.3))`,
                           borderColor: `hsl(var(--evolution-perfect) / 0.5)`,
                           boxShadow: `0 25px 70px hsla(var(--evolution-perfect), 0.5)`
                         }}>
                      
                      {/* Product hologram */}
                      <div className="w-full h-48 rounded-3xl mb-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000 relative overflow-hidden"
                           style={{ 
                             background: `linear-gradient(135deg, hsla(var(--evolution-perfect), 0.5), hsla(var(--evolution-ethereal), 0.4))`,
                             boxShadow: `inset 0 0 50px hsla(var(--evolution-perfect), 0.5)`
                           }}>
                        <div className="w-28 h-28 rounded-3xl backdrop-blur animate-pulse relative"
                             style={{ 
                               background: `hsla(var(--evolution-ethereal), 0.7)`,
                               boxShadow: `0 0 40px hsl(var(--evolution-perfect))`
                             }}>
                          <div className="absolute inset-4 rounded-2xl holographic" />
                        </div>
                        
                        {/* Floating holographic elements */}
                        <div className="absolute top-6 right-6 w-10 h-10 rounded-2xl backdrop-blur border border-white/50 animate-bounce"
                             style={{ animationDelay: '0.5s' }} />
                        <div className="absolute bottom-6 left-6 w-8 h-8 rounded-full backdrop-blur border border-white/50 animate-bounce"
                             style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 right-1/4 w-6 h-6 rounded-lg backdrop-blur border border-white/50 animate-bounce"
                             style={{ animationDelay: '1.5s' }} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold text-3xl">$2,999</div>
                          <div className="text-white/70 text-lg">Free quantum shipping</div>
                        </div>
                        <button className="px-12 py-6 rounded-3xl font-bold transition-all duration-700 transform hover:scale-115 relative overflow-hidden group/btn text-xl"
                                style={{ 
                                  background: `linear-gradient(135deg, hsl(var(--evolution-perfect)), hsl(var(--evolution-ethereal)))`,
                                  color: 'white',
                                  boxShadow: `0 15px 40px hsla(var(--evolution-perfect), 0.6)`
                                }}>
                          <span className="relative z-10">Add to Cart</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-800" />
                        </button>
                      </div>

                      {/* Ultimate card effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
                    </div>

                    {/* Transcendent trust matrix */}
                    <div className="flex justify-center space-x-12 text-lg text-white/80">
                      <span className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full holographic" />
                        <span>Quantum Secure</span>
                      </span>
                      <span className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full" style={{ background: `hsl(var(--evolution-ethereal))` }} />
                        <span>AI Optimized</span>
                      </span>
                      <span className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300" />
                        <span>Perfect 5.0</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-2xl text-white/85 font-light italic">
              "Where imagination transcends into digital reality"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
