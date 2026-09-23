import React, { createContext, useContext, useEffect, useState } from 'react';
import { FontFamilyChoice, ThemeSettings } from '../types/temperament';

export interface ColorPreset {
  id: string;
  name: string;
  hex: string;
  category: 'dark' | 'light';
}

export const SOBER_COLOR_PRESETS: ColorPreset[] = [
  { id: 'slate-navy', name: 'Azul Pizarra', hex: '#111827', category: 'dark' },
  { id: 'midnight-corp', name: 'Azul Institucional', hex: '#0f172a', category: 'dark' },
  { id: 'charcoal-neutral', name: 'Gris Acero', hex: '#181e29', category: 'dark' },
  { id: 'deep-emerald', name: 'Bosque Sobrio', hex: '#0e1e1b', category: 'dark' },
  { id: 'graphite-nordic', name: 'Grafito Nórdico', hex: '#1e2025', category: 'dark' },
  { id: 'light-clean', name: 'Blanco Lino', hex: '#f8fafc', category: 'light' },
  { id: 'warm-sand', name: 'Papiro Suave', hex: '#f4f1ea', category: 'light' },
];

interface ThemeContextType {
  theme: ThemeSettings;
  setBgColor: (color: string) => void;
  setFontFamily: (font: FontFamilyChoice) => void;
  resetTheme: () => void;
  isDarkBg: boolean;
  colorContrastClasses: {
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    cardBg: string;
    cardBorder: string;
    cardHover: string;
    inputBg: string;
    pillBg: string;
    divider: string;
    accent: string;
  };
}

const DEFAULT_THEME: ThemeSettings = {
  bgColor: '#0f172a', // Sober deep navy, non-absolute black
  fontFamily: 'sans',
  cardTone: 'adaptive',
};

const THEME_STORAGE_KEY = 'temperamentos_app_theme_v1';

function getLuminance(hex: string): number {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map((c) => c + c).join('');
  }
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const a = [r, g, b].map((v) => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeSettings>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.bgColor && parsed.fontFamily) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return DEFAULT_THEME;
  });

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
    } catch (e) {
      console.warn('Could not save theme to localStorage', e);
    }
    // Update body background directly for instant seamless rendering
    document.body.style.backgroundColor = theme.bgColor;
  }, [theme]);

  const setBgColor = (color: string) => {
    // Avoid pure black (#000000) as requested by user ("evitando tonos negros absolutos")
    let sanitized = color;
    if (color.toLowerCase() === '#000000' || color.toLowerCase() === '#000') {
      sanitized = '#111827';
    }
    setTheme((prev) => ({ ...prev, bgColor: sanitized }));
  };

  const setFontFamily = (font: FontFamilyChoice) => {
    setTheme((prev) => ({ ...prev, fontFamily: font }));
  };

  const resetTheme = () => {
    setTheme(DEFAULT_THEME);
  };

  const luminance = getLuminance(theme.bgColor);
  const isDarkBg = luminance < 0.45;

  // Curated, sober design tokens matching the user's background color
  const colorContrastClasses = isDarkBg
    ? {
        textPrimary: 'text-slate-100',
        textSecondary: 'text-slate-300',
        textMuted: 'text-slate-400',
        cardBg: 'bg-white/[0.04]',
        cardBorder: 'border-white/[0.08]',
        cardHover: 'hover:bg-white/[0.08] hover:border-white/[0.18]',
        inputBg: 'bg-black/20',
        pillBg: 'bg-white/[0.06]',
        divider: 'border-white/[0.08]',
        accent: 'text-slate-200',
      }
    : {
        textPrimary: 'text-slate-900',
        textSecondary: 'text-slate-700',
        textMuted: 'text-slate-500',
        cardBg: 'bg-white',
        cardBorder: 'border-slate-200',
        cardHover: 'hover:bg-slate-50 hover:border-slate-300',
        inputBg: 'bg-slate-100',
        pillBg: 'bg-slate-100',
        divider: 'border-slate-200',
        accent: 'text-slate-900',
      };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setBgColor,
        setFontFamily,
        resetTheme,
        isDarkBg,
        colorContrastClasses,
      }}
    >
      <div
        className={`min-h-screen transition-colors duration-200 ${
          theme.fontFamily === 'serif'
            ? 'font-serif-custom'
            : theme.fontFamily === 'mono'
            ? 'font-mono-custom'
            : 'font-sans-custom'
        }`}
        style={{ backgroundColor: theme.bgColor }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
