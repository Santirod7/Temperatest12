import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sliders, Shield, BookOpen, RotateCcw } from 'lucide-react';

interface HeaderProps {
  currentView: 'landing' | 'wizard' | 'results' | 'admin';
  onNavigate: (view: 'landing' | 'wizard' | 'results' | 'admin') => void;
  onOpenCustomizer: () => void;
  onResetTest?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenCustomizer,
  onResetTest,
}) => {
  const { colorContrastClasses } = useTheme();

  return (
    <header className={`w-full border-b backdrop-blur-md sticky top-0 z-40 ${colorContrastClasses.cardBg} ${colorContrastClasses.divider}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Title */}
        <div
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 transition-colors">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h1 className={`text-sm sm:text-base font-semibold tracking-tight ${colorContrastClasses.textPrimary}`}>
              Test de Temperamentos
            </h1>
            <p className={`text-[11px] hidden sm:block ${colorContrastClasses.textMuted}`}>
              Autocontrol, la palabra y manejo del enojo
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {currentView === 'wizard' && onResetTest && (
            <button
              onClick={onResetTest}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.textMuted} hover:${colorContrastClasses.textPrimary}`}
              title="Reiniciar cuestionario"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Reiniciar</span>
            </button>
          )}

          <button
            onClick={onOpenCustomizer}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              colorContrastClasses.cardBorder
            } ${colorContrastClasses.cardHover} ${colorContrastClasses.textPrimary}`}
            title="Ajustar color de fondo y tipografía"
          >
            <Sliders className="w-3.5 h-3.5 opacity-80" />
            <span>Aspecto</span>
          </button>

          <button
            onClick={() => onNavigate(currentView === 'admin' ? 'landing' : 'admin')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              currentView === 'admin'
                ? 'border-indigo-500 bg-indigo-600/10 text-indigo-400'
                : `${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`
            }`}
            title="Panel de gestión de contenidos y estructura"
          >
            <Shield className="w-3.5 h-3.5 opacity-80" />
            <span className="hidden sm:inline">
              {currentView === 'admin' ? 'Salir de Gestión' : 'Administración'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
