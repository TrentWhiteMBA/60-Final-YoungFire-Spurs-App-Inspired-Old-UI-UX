// src/serviceWorkerRegistration.ts
export function register() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // Force immediate check on every app mount / tab focus
      registration.update();

      window.addEventListener('focus', () => {
        registration.update().catch(() => {});
      });

      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Automatically activate new AI Studio build and reload view
              window.location.reload();
            }
          };
        }
      };
    });

    // Handle skipWaiting signal from new service worker
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }
}
