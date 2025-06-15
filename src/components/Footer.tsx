
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
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
            <button className="px-8 py-4 bg-gradient-to-r from-loom-primary to-loom-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Creating with Loom
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 transition-all duration-300">
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
