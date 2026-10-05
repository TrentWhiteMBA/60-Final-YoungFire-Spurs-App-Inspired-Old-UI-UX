/**
 * Dynamic PWA & Homescreen Icon Generator
 * Off-screen canvas generator that renders the YoungFire Holy Flame & JHOW insignia
 * tinted dynamically to the active theme's primary, accent, and glow colors.
 */

export function updateDynamicAppIcon(primaryColor: string, accentColor: string, glowColor: string) {
  if (typeof window === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.width = 192;
  canvas.height = 192;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 1. Clear & Dark Background
  ctx.fillStyle = '#050505';
  ctx.beginPath();
  if (typeof (ctx as any).roundRect === 'function') {
    (ctx as any).roundRect(0, 0, 192, 192, 36);
  } else {
    ctx.rect(0, 0, 192, 192);
  }
  ctx.fill();

  // 2. Radial Outer Theme Glow
  const glow = ctx.createRadialGradient(96, 96, 20, 96, 96, 85);
  glow.addColorStop(0, glowColor || 'rgba(245, 158, 11, 0.45)');
  glow.addColorStop(1, 'transparent');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(96, 96, 85, 0, Math.PI * 2);
  ctx.fill();

  // 3. Draw YoungFire Flame Silhouette with Dynamic Accent Gradient
  const flameGradient = ctx.createLinearGradient(96, 150, 96, 40);
  flameGradient.addColorStop(0, primaryColor || '#EA580C');
  flameGradient.addColorStop(1, accentColor || '#FBBF24');

  ctx.fillStyle = flameGradient;
  ctx.beginPath();
  // Standard Holy Flame Geometry
  ctx.moveTo(96, 38);
  ctx.bezierCurveTo(116, 68, 138, 92, 138, 118);
  ctx.bezierCurveTo(138, 142, 119, 154, 96, 154);
  ctx.bezierCurveTo(73, 154, 54, 142, 54, 118);
  ctx.bezierCurveTo(54, 92, 76, 68, 96, 38);
  ctx.fill();

  // 4. Inner White Hot Core
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.moveTo(96, 88);
  ctx.bezierCurveTo(106, 104, 114, 118, 114, 130);
  ctx.bezierCurveTo(114, 141, 106, 146, 96, 146);
  ctx.bezierCurveTo(86, 146, 78, 141, 78, 130);
  ctx.bezierCurveTo(78, 118, 86, 104, 96, 88);
  ctx.fill();

  const iconDataUrl = canvas.toDataURL('image/png');

  // 5. Update All DOM Link Tags (Favicon, Apple Touch Icon, Shortcut)
  const iconSelectors = [
    "link[rel*='icon']",
    "link[rel='apple-touch-icon']",
    "link[rel='apple-touch-icon-precomposed']"
  ];

  iconSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el: any) => {
      el.href = iconDataUrl;
    });
  });

  // 6. Update PWA Web Manifest Blob Dynamically
  const manifestEl = document.querySelector("link[rel='manifest']") as HTMLLinkElement;
  if (manifestEl) {
    const dynamicManifest = {
      short_name: "YoungFire",
      name: "YoungFire Ministry",
      start_url: "/",
      background_color: "#050505",
      theme_color: primaryColor,
      display: "standalone",
      icons: [
        {
          src: iconDataUrl,
          type: "image/png",
          sizes: "192x192",
          purpose: "any maskable"
        },
        {
          src: iconDataUrl,
          type: "image/png",
          sizes: "512x512",
          purpose: "any maskable"
        }
      ]
    };
    const stringManifest = JSON.stringify(dynamicManifest);
    const blob = new Blob([stringManifest], { type: 'application/json' });
    manifestEl.href = URL.createObjectURL(blob);
  }

  // 7. Update Meta Theme Color
  const metaThemeColor = document.querySelector("meta[name='theme-color']");
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', primaryColor);
  }
}
