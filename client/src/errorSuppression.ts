// Global error suppression utility
export function suppressViteErrors() {
  // Suppress runtime error overlay
  if (typeof window !== 'undefined') {
    // Override global error handler
    window.addEventListener('error', (event) => {
      if (event.message === 'Script error.' || 
          event.filename?.includes('vite') ||
          event.error?.stack?.includes('sendError')) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    }, true);

    // Override unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason?.message?.includes('vite') ||
          event.reason?.stack?.includes('sendError')) {
        event.preventDefault();
        return false;
      }
    }, true);

    // Hide any existing error overlays
    const hideErrorOverlays = () => {
      const overlays = document.querySelectorAll('[data-vite-error-overlay], .vite-error-overlay, [id*="error"], [class*="error-overlay"]');
      overlays.forEach(overlay => {
        const element = overlay as HTMLElement;
        if (element.style) {
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.style.opacity = '0';
          element.style.zIndex = '-9999';
        }
        element.remove?.();
      });
    };

    // Run immediately and on DOM changes
    hideErrorOverlays();
    setInterval(hideErrorOverlays, 100);
    
    const observer = new MutationObserver(hideErrorOverlays);
    observer.observe(document.body, { childList: true, subtree: true });
  }
}