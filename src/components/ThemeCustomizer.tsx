import React, { useState } from 'react';
import { FontFamilyChoice } from '../types/temperament';
import { SOBER_COLOR_PRESETS, useTheme } from '../context/ThemeContext';
import { Sliders, RotateCcw, Check, Type, Palette, X } from 'lucide-react';

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ isOpen, onClose }) => {
  const { theme, setBgColor, setFontFamily, resetTheme, colorContrastClasses } = useTheme();
  const [customHex, setCustomHex] = useState(theme.bgColor);
  const [hexError, setHexError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomHex(val);
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      if (val.toLowerCase() === '#000000' || val.toLowerCase() === '#000') {
        setHexError('Evita el negro absoluto puro. Usa grises profundos o azules sobrios.');
        setBgColor('#111827');
      } else {
        setHexError(null);
        setBgColor(val);
      }
    } else {
      setHexError('Formato hexadecimal inválido (ej: #1e2229)');
    }
  };

  const handleNativeColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.toLowerCase() === '#000000') {
      setCustomHex('#111827');
      setBgColor('#111827');
    } else {
      setCustomHex(val);
      setHexError(null);
      setBgColor(val);
    }
  };

  const fonts: { id: FontFamilyChoice; label: string; preview: string; description: string }[] = [
    { id: 'sans', label: 'Sans-Serif', preview: 'Aa Bb Gg', description: 'Institucional, moderno y directo' },
    { id: 'serif', label: 'Serif Clásica', preview: 'Aa Bb Gg', description: 'Editorial, solemne y reflexivo' },
    { id: 'mono', label: 'Monospace', preview: 'Aa Bb Gg', description: 'Técnico, analítico y sobrio' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="customizer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-lg rounded-xl border p-6 shadow-2xl transition-all ${
          colorContrastClasses.cardBg
        } ${colorContrastClasses.cardBorder} backdrop-blur-md`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-inherit">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 opacity-80" />
            <h2 id="customizer-title" className={`text-base font-semibold ${colorContrastClasses.textPrimary}`}>
              Personalización Visual Sobria
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-md hover:bg-black/10 transition-colors ${colorContrastClasses.textSecondary}`}
            aria-label="Cerrar personalizador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 pt-5">
          {/* FONDOS Y COLORES SÓLIDOS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className={`text-xs font-semibold uppercase tracking-wider ${colorContrastClasses.textMuted} flex items-center gap-1.5`}>
                <Palette className="w-3.5 h-3.5" />
                Color de Fondo Sólido
              </label>
              <span className={`text-xs ${colorContrastClasses.textMuted}`}>
                Actual: <code className="font-mono text-xs">{theme.bgColor}</code>
              </span>
            </div>

            {/* Presets Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {SOBER_COLOR_PRESETS.map((preset) => {
                const isSelected = theme.bgColor.toLowerCase() === preset.hex.toLowerCase();
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setBgColor(preset.hex);
                      setCustomHex(preset.hex);
                      setHexError(null);
                    }}
                    className={`flex items-center gap-2.5 p-2 rounded-lg border text-left text-xs transition-all ${
                      isSelected
                        ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                        : `${colorContrastClasses.cardBorder} hover:border-slate-400`
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/20 shrink-0"
                      style={{ backgroundColor: preset.hex }}
                    />
                    <span className={`truncate font-medium ${colorContrastClasses.textPrimary}`}>
                      {preset.name}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 ml-auto text-indigo-500 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Free Color Picker & Hex Input */}
            <div className="flex items-center gap-2.5 pt-1">
              <label className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-inherit cursor-pointer overflow-hidden shadow-xs shrink-0">
                <input
                  type="color"
                  value={theme.bgColor}
                  onChange={handleNativeColorInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  title="Seleccionar cualquier color sólido"
                />
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: theme.bgColor }}
                />
              </label>

              <div className="flex-1">
                <input
                  type="text"
                  value={customHex}
                  onChange={handleHexChange}
                  placeholder="#0f172a"
                  maxLength={7}
                  className={`w-full px-3 py-2 text-xs font-mono rounded-lg border focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40 transition-colors ${
                    colorContrastClasses.inputBg
                  } ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
                />
              </div>
            </div>
            {hexError && (
              <p className="text-[11px] text-amber-500 mt-1.5 font-medium">{hexError}</p>
            )}
            <p className={`text-[11px] mt-1.5 ${colorContrastClasses.textMuted}`}>
              Regla de diseño: Se evitan negros absolutos para garantizar sobriedad y descanso visual.
            </p>
          </div>

          {/* TIPOGRAFÍA GLOBAL */}
          <div className="pt-2 border-t border-inherit">
            <div className="flex items-center justify-between mb-3">
              <label className={`text-xs font-semibold uppercase tracking-wider ${colorContrastClasses.textMuted} flex items-center gap-1.5`}>
                <Type className="w-3.5 h-3.5" />
                Tipografía Global
              </label>
              <span className={`text-xs capitalize ${colorContrastClasses.textMuted}`}>
                {theme.fontFamily}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {fonts.map((f) => {
                const isSelected = theme.fontFamily === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFontFamily(f.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      isSelected
                        ? 'border-indigo-500 ring-2 ring-indigo-500/20'
                        : `${colorContrastClasses.cardBorder} hover:border-slate-400`
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-semibold ${colorContrastClasses.textPrimary}`}>
                        {f.label}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-indigo-500" />}
                    </div>
                    <div
                      className={`text-lg font-medium tracking-tight my-1 ${colorContrastClasses.textPrimary} ${
                        f.id === 'serif'
                          ? 'font-serif-custom'
                          : f.id === 'mono'
                          ? 'font-mono-custom'
                          : 'font-sans-custom'
                      }`}
                    >
                      {f.preview}
                    </div>
                    <p className={`text-[10px] leading-tight ${colorContrastClasses.textMuted}`}>
                      {f.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FOOTER ACTIONS */}
          <div className="pt-4 border-t border-inherit flex items-center justify-between">
            <button
              onClick={() => {
                resetTheme();
                setCustomHex('#0f172a');
                setHexError(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors ${colorContrastClasses.textMuted} hover:text-slate-200`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores por defecto
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-xs"
            >
              Aplicar y Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
