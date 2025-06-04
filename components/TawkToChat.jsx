"use client";

import { useEffect } from 'react';
import Script from 'next/script';

const TawkToChat = () => {
  useEffect(() => {
    // Only load TawkTo after user interaction
    const loadTawkTo = () => {
      if (window.Tawk_API) {
        window.Tawk_API.onLoad = function() {
          window.Tawk_API.hideWidget();
        };
      }
    };

    // Add event listeners for user interaction
    const events = ['click', 'scroll', 'mousemove'];
    const loadOnInteraction = () => {
      events.forEach(event => {
        document.removeEventListener(event, loadOnInteraction);
      });
      loadTawkTo();
    };

    events.forEach(event => {
      document.addEventListener(event, loadOnInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, loadOnInteraction);
      });
    };
  }, []);

  return (
    <Script
      id="tawkto-script"
      strategy="lazyOnload"
      src="https://embed.tawk.to/YOUR_TAWKTO_ID/default"
    />
  );
};

export default TawkToChat; 