import React from 'react';
import { ArrowRight, Download, Smartphone } from 'lucide-react';

const DownloadApp = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Download NEURO CAMPUS™
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the future of campus management with our powerful mobile app. 
            Access all features on the go with enhanced security and real-time updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* App Mockups */}
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="relative group">
                <div className="w-48 sm:w-56 md:w-64 h-96 max-h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/10 flex items-center justify-center mx-auto">
                  <img 
                    src="/images/app-mockups/android-real.png" 
                    alt="Android App" 
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Android
                </div>
              </div>
              <div className="relative group mt-12 md:mt-0">
                <div className="w-48 sm:w-56 md:w-64 h-96 max-h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/10 flex items-center justify-center mx-auto">
                  <img 
                    src="/images/app-mockups/ios-real.png" 
                    alt="iOS App" 
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  iOS
                </div>
              </div>
            </div>
          </div>

          {/* Features and Download */}
          <div className="space-y-8 mt-16 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
                <p className="text-gray-300">Available for both Android and iOS devices</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <Download className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
                <p className="text-gray-300">Quick installation and seamless onboarding</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Real-time notifications and updates
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Secure authentication and data protection
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Offline access to essential features
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Seamless integration with web platform
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1QX9BTHvKMv4FCsxODy10WlWrFjV3ntQe"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors duration-300"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </a>
              <button
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl opacity-60 cursor-not-allowed"
                disabled
                type="button"
              >
                <Download className="w-5 h-5 mr-2" />
                iOS Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
