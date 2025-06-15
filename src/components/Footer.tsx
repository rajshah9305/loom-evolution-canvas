
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-10">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent leading-tight tracking-tight">
              Ready to Start Weaving?
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-normal">
              Join the revolution where AI and human creativity merge to create digital experiences 
              that were once thought impossible. Your journey from concept to masterpiece begins here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-indigo-600 to-slate-700 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-[1.02] transition-all duration-500 hover:from-indigo-500 hover:to-slate-600 relative overflow-hidden">
              <span className="relative z-10">Start Creating with Loom</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            <button className="px-10 py-5 border-2 border-slate-600 text-slate-300 rounded-2xl hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-500 font-semibold hover:text-white transform hover:scale-[1.02]">
              Explore Documentation
            </button>
          </div>

          <div className="pt-12 border-t border-slate-800 text-slate-500 text-sm">
            <p className="font-medium tracking-wide">&copy; 2025 Loom. Powered by AI, crafted by imagination.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
