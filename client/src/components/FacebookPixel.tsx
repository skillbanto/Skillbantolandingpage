
import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

interface FacebookPixelProps {
  pixelId: string;
}

const FacebookPixel: React.FC<FacebookPixelProps> = ({ pixelId }) => {
  useEffect(() => {
    // Check if pixelId is valid
    if (!pixelId || pixelId === 'YOUR_PIXEL_ID' || pixelId === 'null') {
      console.warn('[Meta Pixel] - No valid Pixel ID provided. Facebook Pixel will not be initialized.');
      return;
    }
    
    // Initialize Facebook Pixel with proper type safety and ad blocker handling
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      
      script.onload = () => {
        // Initialize Meta Pixel
        if (!window.fbq) {
          window.fbq = function() {
            // @ts-ignore
            if (window.fbq.callMethod) {
              // @ts-ignore
              window.fbq.callMethod.apply(window.fbq, arguments);
            } else {
              // @ts-ignore
              window.fbq.queue.push(arguments);
            }
          };
          
          if (!window._fbq) window._fbq = window.fbq;
          window.fbq.push = window.fbq;
          window.fbq.loaded = true;
          window.fbq.version = '2.0';
          window.fbq.queue = [];
        }
        
        // Initialize with your pixel ID
        window.fbq('init', pixelId);
        
        // Track page view on initial load
        window.fbq('track', 'PageView');
        
        console.log('[Meta Pixel] - Successfully initialized');
      };
      
      script.onerror = () => {
        console.warn('[Meta Pixel] - Failed to load Facebook Pixel script (likely blocked by ad blocker)');
        // Fallback: Store events locally for later processing
        if (!window.fbq) {
          window.fbq = {
            queue: [],
            track: function(eventName: string, params?: any) {
              this.queue.push({ event: eventName, params, timestamp: Date.now() });
              console.log(`[Meta Pixel Fallback] - Event: ${eventName}`, params);
            }
          };
        }
      };
      
      document.head.appendChild(script);
    }
    
    // Track page views on route changes
    const handleRouteChange = () => {
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [pixelId]);

  return null;
};

// Helper functions to track specific events with fallback
export const trackFacebookEvent = (eventName: string, params?: object) => {
  try {
    if (window.fbq) {
      window.fbq('track', eventName, params);
    } else {
      // Fallback tracking for when Facebook Pixel is blocked
      console.log(`[Analytics] - Event: ${eventName}`, params);
    }
  } catch (error) {
    console.warn(`[Analytics] - Failed to track event: ${eventName}`, error);
  }
};

export const trackFacebookCustomEvent = (eventName: string, params?: object) => {
  try {
    if (window.fbq) {
      window.fbq('trackCustom', eventName, params);
    } else {
      // Fallback tracking for when Facebook Pixel is blocked
      console.log(`[Analytics] - Custom Event: ${eventName}`, params);
    }
  } catch (error) {
    console.warn(`[Analytics] - Failed to track custom event: ${eventName}`, error);
  }
};

export default FacebookPixel;
