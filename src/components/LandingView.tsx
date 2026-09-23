import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { AppContentConfig } from '../types/temperament';
import { TEMPERAMENT_PROFILES } from '../data/temperamentsData';
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  MessageSquare,
  Flame,
  Wind,
  Mountain,
  Waves,
  Sliders,
  BookOpen,
  Layers,
  FileText,
} from 'lucide-react';

interface LandingViewProps {
  config: AppContentConfig;
  onStartTest: () => void;
  onOpenCustomizer: () => void;
  savedAnswersCount: number;
  onResumeTest?: () => void;
  onGoToTheory?: () => void;
  onGoToGlossary?: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  config,
  onStartTest,
  onOpenCustomizer,
  savedAnswersCount,
  onResumeTest,
  onGoToTheory,
  onGoToGlossary,
}) => {
  const { colorContrastClasses, theme, setBgColor, setFontFamily } = useTheme();

  const temperamentsList = [
    {
      key: 'colerico',
      name: 'Colérico',
      icon: Flame,
      summary: 'Voluntad férrea, resolutivo y propenso a la ira frontal e impaciente.',
      danger: 'Riesgo de soberbia e intimidación verbal.',
    },
    {
      key: 'sanguineo',
      name: 'Sanguíneo',
      icon: Wind,
      summary: 'Entusiasta, comunicativo y de ánimo vivo; propenso a la impulsividad.',
      danger: 'Riesgo de palabras hirientes dichas al calor del momento.',
    },
    {
      key: 'melancolico',
      name: 'Melancólico',
      icon: Mountain,
      summary: 'Profundo, riguroso y analítico; propenso a guardar rencor y rumiar ofensas.',
      danger: 'Riesgo de amargura silenciosa y aislamiento hostil.',
    },
    {
      key: 'flematico',
      name: 'Flemático',
      icon: Waves,
      summary: 'Sereno, pacífico y constante; propenso a evadir confrontaciones necesarias.',
      danger: 'Riesgo de agresividad pasiva y apatía.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* HERO SECTION */}
      <section className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 font-medium">
          <Compass className="w-3.5 h-3.5" />
          <span>Evaluación Educativa de Madurez Emocional</span>
        </div>

        <h1 className={`text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight ${colorContrastClasses.textPrimary}`}>
          {config.institutionTitle}
        </h1>

        <p className={`text-base sm:text-lg max-w-2xl mx-auto font-medium ${colorContrastClasses.textSecondary}`}>
          {config.institutionSubtitle}
        </p>

        {/* MANIFIESTO INSTITUCIONAL SOBRE EL AUTOCONTROL Y LA PALABRA */}
        <div className={`mt-6 text-left max-w-3xl mx-auto p-6 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} shadow-sm space-y-4`}>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="space-y-2">
              <h2 className={`text-sm font-semibold uppercase tracking-wider ${colorContrastClasses.textMuted}`}>
                La Palabra como Puente o como Arma
              </h2>
              <p className={`text-sm sm:text-base leading-relaxed ${colorContrastClasses.textSecondary}`}>
                {config.manifestoParagraph}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-inherit">
            <blockquote className={`italic text-xs sm:text-sm pl-4 border-l-2 border-indigo-500/50 ${colorContrastClasses.textMuted}`}>
              "{config.reflectionQuote.text}"
              <footer className="mt-1 font-semibold not-italic text-xs text-indigo-400">
                — {config.reflectionQuote.author}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA ACTIONS */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          {savedAnswersCount > 0 && onResumeTest ? (
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={onResumeTest}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-md active:scale-[0.99]"
              >
                <span>Continuar Test (Pregunta {savedAnswersCount + 1})</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onStartTest}
                className={`w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-medium border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
              >
                Empezar de Cero
              </button>
            </div>
          ) : (
            <button
              onClick={onStartTest}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-md active:scale-[0.99] cursor-pointer"
            >
              <span>Comenzar Test de Autoconocimiento</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* METADATA STRIP (NO PILLS, CLEAN UNBOXED TEXT) */}
        <div className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs ${colorContrastClasses.textMuted} pt-2`}>
          <span>16 preguntas prácticas</span>
          <span aria-hidden="true">·</span>
          <span>~5 minutos de reflexión</span>
          <span aria-hidden="true">·</span>
          <span>Sin registro obligatorio</span>
          <span aria-hidden="true">·</span>
          <span>Privacidad total en tu dispositivo</span>
        </div>
      </section>

      {/* SECCIONES DIDÁCTICAS: TEORÍA Y GLOSARIO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {onGoToTheory && (
          <div
            onClick={onGoToTheory}
            className={`p-5 rounded-xl border transition-all cursor-pointer group ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} hover:border-indigo-500/50 hover:shadow-md`}
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className={`text-sm font-bold group-hover:text-indigo-400 transition-colors ${colorContrastClasses.textPrimary}`}>
                  Teoría e Historia
                </h3>
                <span className={`text-[11px] ${colorContrastClasses.textMuted}`}>
                  Hipócrates, Galeno y Mons. Tóth
                </span>
              </div>
            </div>
            <p className={`text-xs leading-relaxed mb-3 ${colorContrastClasses.textSecondary}`}>
              Explora las raíces fisiológicas de los cuatro humores, la diferencia crucial entre el temperamento innato y el carácter esculpido, y las directrices de autoeducación de la voluntad.
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform">
              <span>Leer Tratado Formativo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        )}

        {onGoToGlossary && (
          <div
            onClick={onGoToGlossary}
            className={`p-5 rounded-xl border transition-all cursor-pointer group ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} hover:border-indigo-500/50 hover:shadow-md`}
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className={`text-sm font-bold group-hover:text-emerald-400 transition-colors ${colorContrastClasses.textPrimary}`}>
                  Glosario de Temperamentos
                </h3>
                <span className={`text-[11px] ${colorContrastClasses.textMuted}`}>
                  Fichas individuales completas
                </span>
              </div>
            </div>
            <p className={`text-xs leading-relaxed mb-3 ${colorContrastClasses.textSecondary}`}>
              Consulta el análisis exhaustivo de cada temperamento: fisiología de reacción, mirada y paso, virtudes, defectos ante la ofensa, y reglas de forja de carácter.
            </p>
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
              <span>Explorar Fichas del Glosario</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        )}
      </section>

      {/* QUICK VISUAL CUSTOMIZATION PANEL IN PORTADA */}
      <section className={`p-5 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-inherit">
          <div>
            <h3 className={`text-sm font-semibold ${colorContrastClasses.textPrimary}`}>
              Personalización Visual Rápida
            </h3>
            <p className={`text-xs ${colorContrastClasses.textMuted}`}>
              Ajusta el ambiente de lectura a tus preferencias estéticas
            </p>
          </div>
          <button
            onClick={onOpenCustomizer}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors self-start sm:self-auto ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textPrimary}`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Paleta Completa</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {/* Quick solid colors */}
          <div>
            <span className={`block text-xs font-medium mb-2 ${colorContrastClasses.textMuted}`}>
              Tono de Fondo Sólido
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: 'Pizarra', hex: '#111827' },
                { label: 'Medianoche', hex: '#0f172a' },
                { label: 'Gris Acero', hex: '#181e29' },
                { label: 'Bosque', hex: '#0e1e1b' },
                { label: 'Lino Claro', hex: '#f8fafc' },
              ].map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setBgColor(c.hex)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs font-medium transition-all ${
                    theme.bgColor.toLowerCase() === c.hex.toLowerCase()
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20'
                      : `${colorContrastClasses.cardBorder} hover:border-slate-400`
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-black/20"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className={colorContrastClasses.textPrimary}>{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick typography */}
          <div>
            <span className={`block text-xs font-medium mb-2 ${colorContrastClasses.textMuted}`}>
              Estilo Tipográfico
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'sans', label: 'Sans' },
                { id: 'serif', label: 'Serif' },
                { id: 'mono', label: 'Mono' },
              ].map((font) => (
                <button
                  key={font.id}
                  onClick={() => setFontFamily(font.id as any)}
                  className={`py-1.5 px-2 rounded-md border text-xs text-center font-medium transition-all ${
                    theme.fontFamily === font.id
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20 font-semibold'
                      : `${colorContrastClasses.cardBorder} hover:border-slate-400`
                  } ${colorContrastClasses.textPrimary}`}
                >
                  {font.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOS CUATRO TEMPERAMENTOS (SOBRIEDAD EDUCATIVA) */}
      <section className="space-y-4">
        <div className="text-left">
          <h2 className={`text-lg font-bold ${colorContrastClasses.textPrimary}`}>
            Los Cuatro Temperamentos Clásicos
          </h2>
          <p className={`text-xs ${colorContrastClasses.textMuted}`}>
            Cada personalidad posee fortalezas innatas y puntos ciegos de reactividad ante el enojo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {temperamentsList.map((item) => {
            const Icon = item.icon;
            const profile = TEMPERAMENT_PROFILES[item.key as keyof typeof TEMPERAMENT_PROFILES];
            return (
              <div
                key={item.key}
                className={`p-5 rounded-xl border transition-all ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} hover:border-indigo-500/40`}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${colorContrastClasses.textPrimary}`}>
                      {profile.name}
                    </h3>
                    <p className={`text-xs font-medium text-indigo-400`}>
                      {profile.elementSymbol}
                    </p>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-3 ${colorContrastClasses.textSecondary}`}>
                  {item.summary}
                </p>

                <div className="pt-2.5 border-t border-inherit">
                  <p className={`text-[11px] font-medium text-amber-500/90 leading-tight`}>
                    <span className="font-semibold">Punto Crítico:</span> {item.danger}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* METHODOLOGY & RIGOR */}
      <section className={`p-6 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder}`}>
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h4 className={`text-sm font-semibold ${colorContrastClasses.textPrimary}`}>
              Fundamento Pedagógico y Ético
            </h4>
            <p className={`text-xs sm:text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
              Este instrumento no pretende encasillarte de forma rígida ni reemplazar la atención psicológica profesional. Su finalidad es pedagógica: dotarte de un espejo honesto para identificar tus inclinaciones de reactividad y practicar conscientemente el dominio propio, la templanza y el respeto en tus relaciones cotidianas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
