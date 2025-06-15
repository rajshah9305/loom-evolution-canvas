
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
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full p-8">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-400" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gray-800 text-white text-sm rounded">
                Iteration 1
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                The Seed of an Idea
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                "What if UI could be woven from words?"
              </p>
              <p className="text-gray-500">
                Every masterpiece begins with a simple foundation. Here, Claude Sonnet 4 takes its first steps, 
                translating basic prompts into clean HTML structure. The aesthetic is minimalist by design—
                wireframes brought to life with purpose and potential.
              </p>
              
              <div className="space-y-2">
                <div className="text-sm text-gray-400 font-mono">Input:</div>
                <div className="bg-white p-4 rounded border border-gray-300 font-mono text-sm">
                  "create a simple header with logo and navigation"
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Wireframe UI Demo */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-300">
              <div className="space-y-6">
                {/* Header wireframe */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                  <div className="w-20 h-8 bg-gray-300 rounded" />
                  <div className="flex space-x-4">
                    <div className="w-16 h-6 bg-gray-300 rounded" />
                    <div className="w-16 h-6 bg-gray-300 rounded" />
                    <div className="w-16 h-6 bg-gray-300 rounded" />
                  </div>
                </div>

                {/* Content wireframe */}
                <div className="space-y-4">
                  <div className="w-3/4 h-8 bg-gray-300 rounded" />
                  <div className="w-full h-4 bg-gray-200 rounded" />
                  <div className="w-5/6 h-4 bg-gray-200 rounded" />
                  <div className="w-32 h-10 bg-gray-400 rounded mt-6" />
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              Basic structure, infinite potential
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
