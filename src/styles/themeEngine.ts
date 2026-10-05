import { updateDynamicAppIcon } from '../services/dynamicIconService';
import { APP_THEMES, getStoredThemes, AppTheme } from '../data/appThemes';

/**
 * YoungFire Theme Engine
 * Synchronizes application colors, CSS variables, and dynamically generates
 * matching PWA/Homescreen icons using the canvas generator.
 */

export function applyThemeToApp(theme: AppTheme) {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;

  // Apply CSS custom variables
  root.style.setProperty('--theme-accent', theme.accentHex);
  root.style.setProperty('--theme-bg', theme.bgHex);
  root.style.setProperty('--theme-card', theme.cardHex);
  root.style.setProperty('--theme-border', theme.borderHex);
  if (theme.secondaryHex) {
    root.style.setProperty('--theme-secondary', theme.secondaryHex);
  }
  if (theme.tertiaryHex) {
    root.style.setProperty('--theme-tertiary', theme.tertiaryHex);
  }

  // Save to persistent storage
  try {
    localStorage.setItem('youngfire_theme_id', theme.id);
  } catch {}

  // Update Dynamic PWA & Homescreen Icons
  const primaryColor = theme.accentHex || '#FFFFFF';
  const secondaryColor = theme.secondaryHex || '#D1D5DB';
  const glowColor = theme.ambientGlows?.[0]?.color || theme.accentHex || 'rgba(255, 255, 255, 0.45)';

  updateDynamicAppIcon(primaryColor, secondaryColor, glowColor);

  // Dispatch global theme change event
  window.dispatchEvent(new CustomEvent('youngfire_theme_changed', { detail: { theme } }));
}

export function initThemeEngine() {
  if (typeof window === 'undefined') return;

  const themes = getStoredThemes ? getStoredThemes() : APP_THEMES;
  const currentThemeId = localStorage.getItem('youngfire_theme_id') || 'spurs_stealth';
  const activeTheme = themes.find(t => t.id === currentThemeId) || themes[0] || APP_THEMES[0];

  applyThemeToApp(activeTheme);

  // Listen to cross-component or cross-tab storage changes
  window.addEventListener('storage', (e) => {
    if (e.key === 'youngfire_theme_id' && e.newValue) {
      const found = themes.find(t => t.id === e.newValue);
      if (found) {
        applyThemeToApp(found);
      }
    }
  });

  window.addEventListener('youngfire_apply_theme', ((e: CustomEvent) => {
    if (e.detail?.theme) {
      applyThemeToApp(e.detail.theme);
    }
  }) as EventListener);
}

// Auto-initialize theme engine and dynamic icon on import in client environment
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initThemeEngine());
  } else {
    initThemeEngine();
  }
}
