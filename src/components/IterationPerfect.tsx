
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

  // Advanced floating orbs with complex animations
  const orbs = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full backdrop-blur animate-float"
      style={{
        width: `${30 + Math.random() * 60}px`,
        height: `${30 + Math.random() * 60}px`,
        background: `conic-gradient(from ${Math.random() * 360}deg, 
          rgba(255, 255, 255, 0.3), 
          rgba(99, 102, 241, 0.2), 
          rgba(139, 92, 246, 0.3), 
          rgba(6, 182, 212, 0.2), 
          rgba(245, 158, 11, 0.3))`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 4}s`,
        filter: 'blur(1px)'
      }}
    />
  ));

  return (
    <section id="perfect" className="min-h-screen flex items-center gradient-loom-perfect relative overflow-hidden">
      {/* Advanced floating orbs system */}
      <div className="absolute inset-0">
        {orbs}
      </div>

      {/* Complex layered background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30"
             style={{
               background: `radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 50% 90%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)`
             }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-4 px-8 py-4 glass-morph text-white text-sm rounded-full border border-white/30 shadow-2xl">
              <span className="text-2xl">✨</span>
              <span className="font-mono">04</span>
              <span>/</span>
              <span>The Masterpiece</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white text-shadow">Your Vision,</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 through-purple-300 to-cyan-300 bg-clip-text text-transparent text-glow">
                Perfectly Woven
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-white/90 font-medium leading-relaxed">
                "The final form of creation."
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                The culmination of AI evolution. Claude Sonnet 4 now interprets abstract design concepts 
                with the intuition of a master craftsperson, generating production-ready interfaces that 
                rival the finest human-designed experiences.
              </p>
            </div>
            
            <div className="space-y-4 p-6 glass-morph rounded-2xl border border-white/30 shadow-2xl">
              <div className="text-sm text-white/70 font-mono uppercase tracking-wide">Visionary Input</div>
              <div className="glass-effect p-4 rounded-xl border border-white/30 font-mono text-sm text-white shadow-lg">
                "design a futuristic e-commerce experience that evokes wonder"
              </div>
              <div className="flex items-center space-x-3 text-sm text-white/80">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span>Crafting digital poetry...</span>
              </div>
            </div>

            <button className="px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Experience Loom for Yourself</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Perfect UI Demo - The Masterpiece */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-cyan-500/40 rounded-3xl blur-2xl animate-pulse" />
              <div className="relative glass-morph p-8 rounded-3xl shadow-2xl border border-white/30 hover-lift">
                <div className="space-y-8">
                  {/* Futuristic header with advanced effects */}
                  <div className="flex justify-between items-center pb-6 border-b border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl shadow-2xl relative overflow-hidden"
                           style={{ background: 'conic-gradient(from 0deg, var(--loom-primary-0), var(--loom-accent-0), var(--loom-warm-0), var(--loom-secondary-0), var(--loom-cool-0), var(--loom-primary-0))' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                      </div>
                      <span className="text-white font-bold text-2xl tracking-wide">FutureShop</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {[1, 2].map((i) => (
                        <div key={i} className="w-10 h-10 glass-effect rounded-full backdrop-blur border border-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                          <div className="w-4 h-4 bg-gradient-to-br from-white/60 to-white/30 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Futuristic product showcase */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-yellow-200 through-pink-200 to-cyan-200 bg-clip-text text-transparent mb-2">
                        Holographic Display Pro
                      </h4>
                      <p className="text-white/70 text-sm">Experience the future of visual technology</p>
                    </div>

                    {/* Interactive product card with advanced effects */}
                    <div className="glass-morph rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer group relative overflow-hidden">
                      <div className="w-full h-40 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                           style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))' }}>
                        <div className="w-20 h-20 glass-effect rounded-2xl backdrop-blur animate-pulse relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold text-xl">$2,999</div>
                          <div className="text-white/60 text-sm">Free shipping • 5.0 ★</div>
                        </div>
                        <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-black font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                          <span className="relative z-10">Add to Cart</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    </div>

                    {/* Advanced trust indicators */}
                    <div className="flex justify-center space-x-8 text-sm text-white/70">
                      {['🔒 Quantum Secure', '⚡ Instant Delivery', '🌟 Perfect Rating'].map((item, i) => (
                        <span key={item} className="hover:text-white transition-colors duration-300 cursor-pointer" style={{ animationDelay: `${i * 200}ms` }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-white/80 font-medium">
              Where imagination meets implementation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
