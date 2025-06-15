
import { useEffect, useState, useRef } from "react";

export const IterationPerfect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="perfect" 
      className="min-h-screen flex items-center gradient-loom-perfect relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 backdrop-blur animate-float"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur text-white text-sm rounded-full border border-white/30">
                ✨ Iteration 4 - The Masterpiece
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white text-shadow leading-tight">
                Your Vision,
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                  Perfectly Woven
                </span>
              </h2>
              <p className="text-lg text-white/90 font-medium leading-relaxed">
                "The final form of creation."
              </p>
              <p className="text-white/80 text-lg">
                The culmination of AI evolution. Claude Sonnet 4 now interprets abstract design concepts 
                with the intuition of a master craftsperson, generating production-ready interfaces that 
                rival the finest human-designed experiences.
              </p>
              
              <div className="space-y-4">
                <div className="text-sm text-white/70 font-mono">Visionary Input:</div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/30 font-mono text-sm text-white shadow-lg">
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

                <button className="mt-8 px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-blue-50">
                  Experience Loom for Yourself
                </button>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Perfect UI Demo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-xl" />
              <div className="relative glass-effect p-8 rounded-3xl shadow-2xl border border-white/30">
                <div className="space-y-8">
                  {/* Futuristic header */}
                  <div className="flex justify-between items-center pb-6 border-b border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 rounded-lg animate-gradient-shift" />
                      <span className="text-white font-bold text-lg">FutureShop</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur border border-white/30 hover:bg-white/30 transition-colors cursor-pointer" />
                      <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur border border-white/30 hover:bg-white/30 transition-colors cursor-pointer" />
                    </div>
                  </div>

                  {/* Product showcase */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-yellow-200 to-cyan-200 bg-clip-text text-transparent mb-2">
                        Holographic Display Pro
                      </h4>
                      <p className="text-white/70 text-sm">Experience the future of visual technology</p>
                    </div>

                    {/* Interactive product card */}
                    <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-6 backdrop-blur border border-white/20 hover:from-white/30 hover:to-white/10 transition-all duration-500 cursor-pointer group">
                      <div className="w-full h-32 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 bg-white/30 rounded-lg backdrop-blur animate-pulse" />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-semibold">$2,999</div>
                          <div className="text-white/60 text-sm">Free shipping</div>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-black font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex justify-center space-x-6 text-xs text-white/60">
                      <span>🔒 Secure</span>
                      <span>⚡ Fast</span>
                      <span>🌟 Rated 5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-white/80">
              Where imagination meets implementation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
