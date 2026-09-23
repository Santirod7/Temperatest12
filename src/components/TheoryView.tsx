import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { THEORY_CHAPTERS, PERSON_DIMENSIONS, CRITERIA_HAGEMANN } from '../data/temperamentsData';
import { PracticalExampleReaction, TemperamentType } from '../types/temperament';
import {
  BookOpen,
  Compass,
  ArrowRight,
  ArrowLeft,
  Search,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
  FileText,
  Clock,
  Target,
  Smartphone,
  Flame,
  Wind,
  Mountain,
  Droplets,
  Trophy,
  Check,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Share2,
  Brain,
  Activity,
  Shield,
  Users,
  Eye,
  Zap,
  HelpCircle,
} from 'lucide-react';

interface TheoryViewProps {
  onStartTest: () => void;
  onGoToGlossary: () => void;
}

export const TheoryView: React.FC<TheoryViewProps> = ({ onStartTest, onGoToGlossary }) => {
  const { colorContrastClasses } = useTheme();
  const [selectedChapterId, setSelectedChapterId] = useState<string>(THEORY_CHAPTERS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive state for the practical example reaction tab (index or temperament)
  const [activeReactionIndex, setActiveReactionIndex] = useState<number>(0);

  // Challenge accepted state tracker (per chapter ID)
  const [acceptedChallenges, setAcceptedChallenges] = useState<Record<string, boolean>>({});

  const currentChapterIndex = THEORY_CHAPTERS.findIndex((ch) => ch.id === selectedChapterId);
  const currentChapter = THEORY_CHAPTERS[currentChapterIndex] || THEORY_CHAPTERS[0];

  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return THEORY_CHAPTERS;
    const q = searchQuery.toLowerCase();
    return THEORY_CHAPTERS.filter(
      (ch) =>
        ch.title.toLowerCase().includes(q) ||
        ch.subtitle.toLowerCase().includes(q) ||
        ch.coreMessage.toLowerCase().includes(q) ||
        ch.contentParagraphs.some((p) => p.toLowerCase().includes(q)) ||
        ch.keyTakeaways.some((t) => t.toLowerCase().includes(q)) ||
        ch.practicalExample.title.toLowerCase().includes(q) ||
        ch.practicalExample.scenario.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSelectChapter = (id: string) => {
    setSelectedChapterId(id);
    setActiveReactionIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < THEORY_CHAPTERS.length - 1) {
      handleSelectChapter(THEORY_CHAPTERS[currentChapterIndex + 1].id);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      handleSelectChapter(THEORY_CHAPTERS[currentChapterIndex - 1].id);
    }
  };

  const toggleChallenge = (chapterId: string) => {
    setAcceptedChallenges((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const scrollToPracticalExample = () => {
    const el = document.getElementById('seccion-ejemplo-practico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper to get styling for temperament reactions in practical examples
  const getReactionBadge = (reaction: PracticalExampleReaction, isSelected: boolean) => {
    const t = reaction.temperament;
    if (t === 'colerico') {
      return {
        icon: <Flame className="w-3.5 h-3.5" />,
        color: isSelected
          ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 ring-1 ring-rose-500/40'
          : 'hover:bg-rose-500/10 text-rose-400 border-rose-500/20',
        activeDot: 'bg-rose-500',
      };
    }
    if (t === 'sanguineo') {
      return {
        icon: <Wind className="w-3.5 h-3.5" />,
        color: isSelected
          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 ring-1 ring-amber-500/40'
          : 'hover:bg-amber-500/10 text-amber-400 border-amber-500/20',
        activeDot: 'bg-amber-500',
      };
    }
    if (t === 'melancolico') {
      return {
        icon: <Mountain className="w-3.5 h-3.5" />,
        color: isSelected
          ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 ring-1 ring-indigo-500/40'
          : 'hover:bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
        activeDot: 'bg-indigo-500',
      };
    }
    if (t === 'flematico') {
      return {
        icon: <Droplets className="w-3.5 h-3.5" />,
        color: isSelected
          ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 ring-1 ring-teal-500/40'
          : 'hover:bg-teal-500/10 text-teal-400 border-teal-500/20',
        activeDot: 'bg-teal-500',
      };
    }
    // Default / attitude based (Torre vs Veleta, etc.)
    return {
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
      color: isSelected
        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 ring-1 ring-emerald-500/40'
        : 'hover:bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      activeDot: 'bg-emerald-500',
    };
  };

  // State for Chapter II interactive widgets
  const [activeDimensionIndex, setActiveDimensionIndex] = useState<number>(0);
  const [activeCriteriaIndex, setActiveCriteriaIndex] = useState<number>(0);

  const isChallengeAccepted = !!acceptedChallenges[currentChapter.id];
  const reactionsList = currentChapter.practicalExample.reactions || [];
  const activeReaction = reactionsList[activeReactionIndex] || reactionsList[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 font-semibold shadow-sm">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Guía Formativa para Jóvenes y Estudiantes</span>
        </div>

        <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${colorContrastClasses.textPrimary}`}>
          Teoría e Historia de los Temperamentos
        </h1>

        <p className={`text-sm sm:text-base leading-relaxed ${colorContrastClasses.textSecondary}`}>
          Explicado con claridad y ejemplos de tu vida diaria (WhatsApp, amigos, estudio y familia). Descubre tu configuración natural y cómo transformarla en un carácter sólido.
        </p>

        {/* SEARCH BAR */}
        <div className="relative max-w-md mx-auto pt-2">
          <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${colorContrastClasses.textMuted}`} />
          <input
            type="text"
            placeholder="Buscar temas, ejemplos o palabras clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-16 py-2.5 rounded-xl text-sm border transition-all ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary} placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono px-2 py-0.5 rounded bg-zinc-700/50 ${colorContrastClasses.textMuted} hover:text-white transition-colors`}
            >
              borrar
            </button>
          )}
        </div>
      </div>

      {/* MAIN TWO-COLUMN READING INTERFACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* CHAPTERS SIDEBAR (4 cols on lg) */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-inherit">
            <span className={`text-xs font-bold uppercase tracking-wider ${colorContrastClasses.textMuted}`}>
              Capítulos ({filteredChapters.length})
            </span>
            <span className="text-[11px] font-mono text-indigo-400 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded">
              {currentChapterIndex + 1} de {THEORY_CHAPTERS.length}
            </span>
          </div>

          <nav className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
            {filteredChapters.map((ch) => {
              const isSelected = ch.id === currentChapter.id;
              const chNumber = THEORY_CHAPTERS.findIndex((c) => c.id === ch.id) + 1;
              const hasAccepted = !!acceptedChallenges[ch.id];

              return (
                <button
                  key={ch.id}
                  onClick={() => handleSelectChapter(ch.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 relative group ${
                    isSelected
                      ? `border-indigo-500/60 bg-indigo-500/10 ${colorContrastClasses.textPrimary} shadow-sm ring-1 ring-indigo-500/30`
                      : `${colorContrastClasses.cardBorder} ${colorContrastClasses.cardBg} ${colorContrastClasses.textSecondary} ${colorContrastClasses.cardHover}`
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-zinc-800/60 text-zinc-400 group-hover:bg-zinc-700'
                    }`}
                  >
                    {hasAccepted ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : chNumber}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className={`text-xs sm:text-sm font-semibold truncate ${isSelected ? 'text-indigo-400 font-bold' : ''}`}>
                        {ch.title.split(':')[1] || ch.title}
                      </p>
                    </div>
                    <p className={`text-xs line-clamp-1 mt-0.5 ${colorContrastClasses.textMuted}`}>
                      {ch.subtitle}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {ch.readingTimeMinutes} min
                      </span>
                      <span className="text-[10px] font-medium text-emerald-400/90 bg-emerald-500/10 px-1.5 py-0.2 rounded">
                        Ejemplo práctico
                      </span>
                    </div>
                  </div>
                  {isSelected && <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 self-center" />}
                </button>
              );
            })}
          </nav>

          {/* QUICK SHORTCUT CARD */}
          <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-3 text-xs`}>
            <div className="flex items-center gap-2 font-semibold">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span className={colorContrastClasses.textPrimary}>¿Prefieres evaluar tu temperamento?</span>
            </div>
            <p className={colorContrastClasses.textMuted}>
              Responde las 16 preguntas basadas en tus reacciones cotidianas y obtén tu diagnóstico detallado con porcentajes.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={onStartTest}
                className="w-full py-2.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Hacer el Test Interactivo (16 preguntas)</span>
              </button>
              <button
                onClick={onGoToGlossary}
                className={`w-full py-2 px-3 rounded-lg border font-medium flex items-center justify-center gap-1.5 transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Glosario de los 4 Temperamentos</span>
              </button>
            </div>
          </div>
        </aside>

        {/* ACTIVE CHAPTER CONTENT (8 cols on lg) */}
        <article className="lg:col-span-8 space-y-6">
          <div className={`p-6 sm:p-8 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} shadow-sm space-y-7`}>
            
            {/* CHAPTER HEADER & META */}
            <div className="space-y-3 pb-6 border-b border-inherit">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-indigo-400 font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  {currentChapter.title.split(':')[0]}
                </span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                    <Clock className="w-3 h-3 text-indigo-400" />
                    {currentChapter.readingTimeMinutes} min de lectura
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full border text-[11px] ${colorContrastClasses.cardBorder} ${colorContrastClasses.textMuted}`}>
                    {currentChapter.sourceText}
                  </span>
                </div>
              </div>

              <h2 className={`text-2xl sm:text-3xl font-extrabold leading-tight ${colorContrastClasses.textPrimary}`}>
                {currentChapter.title.includes(':') ? currentChapter.title.split(':')[1].trim() : currentChapter.title}
              </h2>

              <p className={`text-sm sm:text-base font-medium ${colorContrastClasses.textMuted}`}>
                "{currentChapter.subtitle}"
              </p>

              {/* JUMP TO PRACTICAL EXAMPLE BUTTON */}
              <div className="pt-2">
                <button
                  onClick={scrollToPracticalExample}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Ver ejemplo práctico de este capítulo (Caso cotidiano)</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* 1. CENTRAL MESSAGE CALLOUT (LA IDEA CENTRAL EN 30 SEGUNDOS) */}
            <div className="p-5 sm:p-6 rounded-xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 via-indigo-900/20 to-transparent space-y-3 relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <Target className="w-4 h-4 text-indigo-400" />
                <span>La Idea Central (En 30 segundos)</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-indigo-100 leading-snug">
                {currentChapter.coreMessage}
              </p>
              <div className="flex items-center gap-2 text-xs text-indigo-300/80 pt-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Clave para recordar: El temperamento se siente de golpe; el carácter se forja con decisiones.</span>
              </div>
            </div>

            {/* 2. CHAPTER PARAGRAPHS (EXPLICACIÓN PEDAGÓGICA Y DIRECTA) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 text-xs font-bold uppercase tracking-wider text-zinc-400">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Explicación Paso a Paso</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                {currentChapter.contentParagraphs.map((paragraph, pIdx) => (
                  <div
                    key={pIdx}
                    className={`p-4 rounded-xl border transition-colors ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} hover:border-indigo-500/20`}
                  >
                    <p className={colorContrastClasses.textSecondary}>
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE WIDGET: 5 ÁMBITOS DE LA PERSONA (Shown when on Chapter 2 or when relevant) */}
            {currentChapter.id === 'humores-historia' && (
              <div className="p-5 sm:p-6 rounded-2xl border border-indigo-500/30 bg-indigo-950/20 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-500/20 pb-3">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <span>Los 5 Ámbitos Fundamentales de la Persona Humana</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    "Gratia supponit naturam" — S. Tomás de Aquino
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300">
                  El temperamento no agota lo que eres. Es la raíz corporal y afectiva, pero una vida lograda exige unificar las cinco dimensiones de tu ser:
                </p>

                {/* TABS FOR 5 DIMENSIONS */}
                <div className="flex flex-wrap gap-2">
                  {PERSON_DIMENSIONS.map((dim, idx) => {
                    const isSelected = idx === activeDimensionIndex;
                    return (
                      <button
                        key={dim.id}
                        onClick={() => setActiveDimensionIndex(idx)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                            : 'bg-zinc-800/80 text-zinc-400 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        {dim.id === 'organico' && <Activity className="w-3.5 h-3.5" />}
                        {dim.id === 'intelectual' && <Brain className="w-3.5 h-3.5" />}
                        {dim.id === 'volitivo' && <Shield className="w-3.5 h-3.5" />}
                        {dim.id === 'espiritual' && <Sparkles className="w-3.5 h-3.5" />}
                        {dim.id === 'social' && <Users className="w-3.5 h-3.5" />}
                        <span>{dim.title.split('. ')[1] || dim.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* ACTIVE DIMENSION DETAILS */}
                {(() => {
                  const dim = PERSON_DIMENSIONS[activeDimensionIndex] || PERSON_DIMENSIONS[0];
                  return (
                    <div className="p-4 sm:p-5 rounded-xl border border-indigo-500/40 bg-zinc-900/90 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm sm:text-base">
                          <span>{dim.title}</span>
                        </div>
                        <p className="text-xs text-zinc-400 italic">{dim.tagline}</p>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 p-3 rounded-lg border border-zinc-800">
                        {dim.definition}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/30">
                          <span className="font-bold text-indigo-300 block mb-1">Rol del Temperamento Inicial:</span>
                          <span className="text-zinc-300">{dim.initialTemperamentRole}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30">
                          <span className="font-bold text-emerald-400 block mb-1">Meta en la Forja del Carácter:</span>
                          <span className="text-zinc-300">{dim.characterForgingGoal}</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30 text-xs">
                        <span className="font-bold text-amber-300 block mb-1">Ejemplo Cotidiano en la Juventud:</span>
                        <span className="text-zinc-300">{dim.youthPracticalExample}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* INTERACTIVE WIDGET: 3 CRITERIOS DE HAGEMANN (Shown on Chapter 1 and Chapter 2) */}
            {(currentChapter.id === 'esencia' || currentChapter.id === 'humores-historia') && (
              <div className="p-5 sm:p-6 rounded-2xl border border-teal-500/30 bg-teal-950/20 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-teal-500/20 pb-3">
                  <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-teal-400" />
                    <span>Las 3 Preguntas Clave del Dr. Jorge Hagemann</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    La brújula para identificar cualquier temperamento
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {CRITERIA_HAGEMANN.map((c, idx) => {
                    const isSelected = idx === activeCriteriaIndex;
                    return (
                      <button
                        key={c.number}
                        onClick={() => setActiveCriteriaIndex(idx)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-teal-600/30 text-teal-200 border-teal-500/60 ring-1 ring-teal-500/40 shadow-sm'
                            : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:bg-zinc-800/80 hover:text-zinc-300'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-teal-400 font-bold block mb-1">Criterio {c.number}</span>
                        <span className="text-xs font-bold block leading-snug">{c.shortName}</span>
                      </button>
                    );
                  })}
                </div>

                {(() => {
                  const crit = CRITERIA_HAGEMANN[activeCriteriaIndex] || CRITERIA_HAGEMANN[0];
                  return (
                    <div className="p-4 sm:p-5 rounded-xl border border-teal-500/40 bg-zinc-900/90 space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Pregunta de diagnóstico interior:</span>
                        <p className="text-sm font-semibold text-zinc-200 italic">"{crit.question}"</p>
                        <p className="text-xs text-zinc-400 pt-1">{crit.explanation}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/30">
                          <span className="font-bold text-red-400 block mb-1">Colérico:</span>
                          <span className="text-zinc-300">{crit.temperamentAnswers.colerico}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30">
                          <span className="font-bold text-amber-400 block mb-1">Sanguíneo:</span>
                          <span className="text-zinc-300">{crit.temperamentAnswers.sanguineo}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/30">
                          <span className="font-bold text-blue-400 block mb-1">Melancólico:</span>
                          <span className="text-zinc-300">{crit.temperamentAnswers.melancolico}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30">
                          <span className="font-bold text-emerald-400 block mb-1">Flemático:</span>
                          <span className="text-zinc-300">{crit.temperamentAnswers.flematico}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 3. PRACTICAL EVERYDAY EXAMPLE (EL EJEMPLO PRÁCTICO COTIDIANO) */}
            <section
              id="seccion-ejemplo-practico"
              className="p-5 sm:p-7 rounded-2xl border-2 border-emerald-500/30 bg-emerald-950/10 space-y-6 scroll-mt-6"
            >
              {/* SECTION BADGE & TITLE */}
              <div className="space-y-2 pb-4 border-b border-emerald-500/20">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Ejemplo Práctico Cotidiano</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Contexto: <strong className="text-zinc-200">{currentChapter.practicalExample.context}</strong>
                  </span>
                </div>

                <h3 className={`text-lg sm:text-xl font-bold ${colorContrastClasses.textPrimary}`}>
                  {currentChapter.practicalExample.title}
                </h3>
              </div>

              {/* THE REAL-LIFE SCENARIO */}
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/80 border border-zinc-700/60 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>La Situación Real:</span>
                </p>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                  "{currentChapter.practicalExample.scenario}"
                </p>
              </div>

              {/* INTERACTIVE REACTIONS SELECTOR */}
              {reactionsList.length > 0 && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      ¿Cómo reacciona cada temperamento / actitud?
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      (Toca cada opción para ver su reacción y riesgo)
                    </span>
                  </div>

                  {/* TABS */}
                  <div className="flex flex-wrap gap-2">
                    {reactionsList.map((reaction, rIdx) => {
                      const isSelected = rIdx === activeReactionIndex;
                      const badge = getReactionBadge(reaction, isSelected);

                      return (
                        <button
                          key={rIdx}
                          onClick={() => setActiveReactionIndex(rIdx)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all cursor-pointer ${badge.color}`}
                        >
                          {badge.icon}
                          <span>{reaction.label}</span>
                          {isSelected && <span className={`w-1.5 h-1.5 rounded-full ${badge.activeDot}`}></span>}
                        </button>
                      );
                    })}
                  </div>

                  {/* ACTIVE REACTION DETAIL CARD */}
                  {activeReaction && (
                    <div className="p-5 rounded-xl border border-zinc-700 bg-zinc-900/90 space-y-4 shadow-sm animate-fadeIn">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">
                            {activeReaction.label}
                          </span>
                        </div>
                        {activeReaction.temperament && (
                          <span className="text-[11px] font-mono uppercase text-indigo-400 font-semibold bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20">
                            {activeReaction.temperament}
                          </span>
                        )}
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                            Primer impulso (espontáneo):
                          </span>
                          <p className="text-zinc-200 leading-relaxed pl-2 border-l-2 border-indigo-500">
                            {activeReaction.reaction}
                          </p>
                        </div>

                        {activeReaction.verdict && (
                          <div className="p-3 rounded-lg bg-zinc-800/70 border border-zinc-700/50 space-y-1">
                            <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" />
                              <span>Veredicto / Riesgo:</span>
                            </span>
                            <p className="text-xs text-zinc-300 leading-relaxed">
                              {activeReaction.verdict}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* KEY LESSON FROM THE PRACTICAL EXAMPLE */}
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>La Gran Lección para tu Carácter:</span>
                </div>
                <p className="text-sm text-emerald-100 leading-relaxed font-medium">
                  {currentChapter.practicalExample.keyLesson}
                </p>
              </div>
            </section>

            {/* 4. KEY TAKEAWAYS (PUNTOS CLAVE PARA RECORDAR) */}
            <div className="p-5 sm:p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Puntos Clave para Llevarte Hoy</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentChapter.keyTakeaways.map((takeaway, tIdx) => (
                  <li
                    key={tIdx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-black/20 border border-indigo-500/10 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className={colorContrastClasses.textSecondary}>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. YOUTH CHALLENGE OF THE DAY (RETO JUVENIL) */}
            <div
              className={`p-5 sm:p-6 rounded-xl border transition-all ${
                isChallengeAccepted
                  ? 'border-emerald-500/50 bg-emerald-950/20 shadow-sm ring-1 ring-emerald-500/30'
                  : 'border-amber-500/30 bg-amber-950/10'
              } space-y-4`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className={`w-4 h-4 ${isChallengeAccepted ? 'text-emerald-400' : 'text-amber-400'}`} />
                  <span className={`font-bold text-xs uppercase tracking-wider ${isChallengeAccepted ? 'text-emerald-400' : 'text-amber-400'}`}>
                    Tu Reto Juvenil de Hoy
                  </span>
                </div>
                {isChallengeAccepted && (
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    ¡Aceptado!
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base font-semibold text-zinc-100 leading-relaxed">
                "{currentChapter.youthChallenge}"
              </p>

              <div className="pt-1">
                <button
                  onClick={() => toggleChallenge(currentChapter.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    isChallengeAccepted
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span>
                    {isChallengeAccepted ? '¡Reto Activado en tu Día! (Haz clic para desmarcar)' : '¡Acepto este Reto Hoy!'}
                  </span>
                </button>
              </div>
            </div>

            {/* PREV / NEXT NAVIGATION */}
            <div className="pt-6 border-t border-inherit flex items-center justify-between gap-4">
              <button
                onClick={handlePrevChapter}
                disabled={currentChapterIndex === 0}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  currentChapterIndex === 0
                    ? 'opacity-30 cursor-not-allowed border-transparent'
                    : `${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Capítulo Anterior</span>
              </button>

              <span className={`text-xs font-mono font-bold ${colorContrastClasses.textMuted}`}>
                {currentChapterIndex + 1} de {THEORY_CHAPTERS.length}
              </span>

              {currentChapterIndex < THEORY_CHAPTERS.length - 1 ? (
                <button
                  onClick={handleNextChapter}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm"
                >
                  <span>Siguiente Capítulo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={onStartTest}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm"
                >
                  <span>¡Comenzar el Test Interactivo!</span>
                  <Compass className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* BOTTOM INVITATION BANNER */}
          <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left`}>
            <div className="space-y-1">
              <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>
                ¿Quieres saber con exactitud cuál es tu temperamento?
              </h3>
              <p className={`text-xs sm:text-sm ${colorContrastClasses.textMuted}`}>
                El test interactivo te pondrá en 16 situaciones cotidianas para calcular tus porcentajes exactos.
              </p>
            </div>
            <button
              onClick={onStartTest}
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shrink-0 flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Comenzar el Test Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
