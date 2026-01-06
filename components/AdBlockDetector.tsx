'use client';

import { useEffect, useState } from 'react';

export default function AdBlockDetector() {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if ads are blocked
    const checkAdBlock = async () => {
      try {
        // Try to fetch a typical ad script URL
        const response = await fetch(
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          {
            method: 'HEAD',
            mode: 'no-cors',
          }
        );
        
        // If we reach here without error, ads might be working
        setAdBlockDetected(false);
      } catch (error) {
        // If fetch fails, ad blocker is likely active
        setAdBlockDetected(true);
      }
    };

    // Check for ad blocker after component mounts
    const timer = setTimeout(() => {
      checkAdBlock();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Check if user has already seen and dismissed the banner
  useEffect(() => {
    const dismissedState = localStorage.getItem('adblock-banner-dismissed');
    if (dismissedState === 'true') {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('adblock-banner-dismissed', 'true');
  };

  const handleWhitelist = () => {
    // Provide instructions
    alert(
      '❤️ Thank you for supporting us!\n\n' +
      'To whitelist ShobHobe:\n\n' +
      '1. Click on your ad blocker extension icon\n' +
      '2. Look for "Disable on this site" or similar option\n' +
      '3. Reload the page\n\n' +
      'We only show non-intrusive ads to keep all our tools 100% free!'
    );
  };

  if (!adBlockDetected || dismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🚫</div>
            <div>
              <h3 className="font-bold text-lg">Ad Blocker Detected</h3>
              <p className="text-sm text-red-100">
                ❤️ We provide all these utilities for free! Please whitelist us to support our work.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleWhitelist}
              className="px-6 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors shadow-lg"
            >
              Whitelist Site
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded-lg transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
