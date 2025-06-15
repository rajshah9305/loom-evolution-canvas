
import { useState } from "react";

export const Footer = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-loom-primary via-loom-secondary to-loom-accent" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-loom-primary rounded-full animate-float"
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
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-loom-primary to-loom-secondary bg-clip-text text-transparent">
              Ready to Start Weaving?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join the revolution where AI and human creativity merge to create digital experiences 
              that were once thought impossible. Your journey from concept to masterpiece begins here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-loom-primary to-loom-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setIsHovered('create')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Start Creating with Loom
            </button>
            <button 
              className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              onMouseEnter={() => setIsHovered('docs')}
              onMouseLeave={() => setIsHovered(null)}
            >
              Explore Documentation
            </button>
          </div>

          <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; 2024 Loom. Powered by AI, crafted by imagination.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
