import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { AppView } from '../types/temperament';
import {
  BookOpen,
  Sliders,
  Shield,
  RotateCcw,
  Compass,
  Layers,
  FileText,
  Award,
  Home,
  Menu,
  X,
} from 'lucide-react';

interface HeaderProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  onOpenCustomizer: () => void;
  onResetTest?: () => void;
  hasScore?: boolean;
  savedAnswersCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenCustomizer,
  onResetTest,
  hasScore = false,
  savedAnswersCount = 0,
}) => {
  const { colorContrastClasses } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: AppView; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string }[] = [
    { id: 'landing', label: 'Inicio', icon: Home },
    { id: 'theory', label: 'Teoría e Historia', icon: FileText },
    { id: 'glossary', label: 'Glosario', icon: Layers },
    {
      id: 'wizard',
      label: 'El Test',
      icon: Compass,
      badge: savedAnswersCount > 0 && currentView !== 'wizard' ? `${savedAnswersCount}/16` : undefined,
    },
    {
      id: 'results',
      label: 'Resultados',
      icon: Award,
      badge: hasScore ? 'Listo' : undefined,
    },
  ];

  const handleNavClick = (view: AppView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`w-full border-b backdrop-blur-md sticky top-0 z-40 ${colorContrastClasses.cardBg} ${colorContrastClasses.divider}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <div
          onClick={() => handleNavClick('landing')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400 transition-colors">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className={`text-sm sm:text-base font-bold tracking-tight block ${colorContrastClasses.textPrimary}`}>
              Temperamentos y Carácter
            </span>
            <span className={`text-[10px] hidden md:block leading-none ${colorContrastClasses.textMuted}`}>
              Formación Ética y Autocontrol
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            const isDisabled = item.id === 'results' && !hasScore;

            return (
              <button
                key={item.id}
                onClick={() => !isDisabled && handleNavClick(item.id)}
                disabled={isDisabled}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'border border-indigo-500/40 bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/20 shadow-xs'
                    : isDisabled
                    ? `opacity-40 cursor-not-allowed ${colorContrastClasses.textMuted}`
                    : `${colorContrastClasses.textSecondary} hover:${colorContrastClasses.textPrimary} hover:bg-black/5`
                }`}
                title={isDisabled ? 'Completa el test para consultar tus resultados personalizados' : item.label}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-1 text-[9px] px-1.5 py-0.2 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (Aspecto, Reset, Admin, Mobile Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {(currentView === 'wizard' || currentView === 'results') && onResetTest && (
            <button
              onClick={onResetTest}
              className={`flex items-center gap-1 px-2 py-1.5 text-xs rounded-lg border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.textMuted} hover:${colorContrastClasses.textPrimary}`}
              title="Reiniciar test"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Reiniciar</span>
            </button>
          )}

          <button
            onClick={onOpenCustomizer}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              colorContrastClasses.cardBorder
            } ${colorContrastClasses.cardHover} ${colorContrastClasses.textPrimary}`}
            title="Ajustar color de fondo y tipografía"
          >
            <Sliders className="w-3.5 h-3.5 opacity-80" />
            <span className="hidden sm:inline">Aspecto</span>
          </button>

          <button
            onClick={() => handleNavClick(currentView === 'admin' ? 'landing' : 'admin')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
              currentView === 'admin'
                ? 'border-indigo-500 bg-indigo-600/15 text-indigo-300'
                : `${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`
            }`}
            title="Panel de gestión de contenidos y estructura"
          >
            <Shield className="w-3.5 h-3.5 opacity-80" />
            <span className="hidden xl:inline">
              {currentView === 'admin' ? 'Salir de Gestión' : 'Gestión'}
            </span>
          </button>

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-1.5 rounded-lg border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t px-4 py-3 space-y-1 ${colorContrastClasses.cardBg} ${colorContrastClasses.divider}`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            const isDisabled = item.id === 'results' && !hasScore;

            return (
              <button
                key={item.id}
                onClick={() => !isDisabled && handleNavClick(item.id)}
                disabled={isDisabled}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'border border-indigo-500/40 bg-indigo-500/15 text-indigo-300'
                    : isDisabled
                    ? `opacity-40 cursor-not-allowed ${colorContrastClasses.textMuted}`
                    : `${colorContrastClasses.textSecondary} hover:${colorContrastClasses.textPrimary}`
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
