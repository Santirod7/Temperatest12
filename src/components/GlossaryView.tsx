import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { TemperamentType } from '../types/temperament';
import { TEMPERAMENT_PROFILES, MIXED_TEMPERAMENTS } from '../data/temperamentsData';
import {
  Flame,
  Wind,
  Mountain,
  Waves,
  Shield,
  MessageSquare,
  Sparkles,
  AlertTriangle,
  Compass,
  ArrowRight,
  BookOpen,
  Eye,
  Footprints,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
} from 'lucide-react';

interface GlossaryViewProps {
  onStartTest: () => void;
  onGoToTheory: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onStartTest, onGoToTheory }) => {
  const { colorContrastClasses } = useTheme();
  const [activeTab, setActiveTab] = useState<TemperamentType | 'mixtos' | 'reconocimiento'>('colerico');

  const temperamentKeys: TemperamentType[] = ['colerico', 'sanguineo', 'melancolico', 'flematico'];

  const getTemperamentIcon = (type: TemperamentType) => {
    switch (type) {
      case 'colerico':
        return Flame;
      case 'sanguineo':
        return Wind;
      case 'melancolico':
        return Mountain;
      case 'flematico':
        return Waves;
    }
  };

  const currentProfile = temperamentKeys.includes(activeTab as TemperamentType)
    ? TEMPERAMENT_PROFILES[activeTab as TemperamentType]
    : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 font-medium">
          <Layers className="w-3.5 h-3.5" />
          <span>Enciclopedia Didáctica de Perfiles</span>
        </div>

        <h1 className={`text-3xl sm:text-4xl font-bold tracking-tight ${colorContrastClasses.textPrimary}`}>
          Glosario de Temperamentos y Caracteres
        </h1>

        <p className={`text-base sm:text-lg leading-relaxed ${colorContrastClasses.textSecondary}`}>
          Fichas exhaustivas con las notas esenciales, fortalezas, debilidades, patrones de ira y reglas de forja de carácter para cada tipología.
        </p>
      </div>

      {/* TOP TABS NAVIGATION */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b pb-4 border-inherit">
        {temperamentKeys.map((type) => {
          const profile = TEMPERAMENT_PROFILES[type];
          const Icon = getTemperamentIcon(type);
          const isSelected = activeTab === type;
          return (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                isSelected
                  ? `border-indigo-500/50 bg-indigo-500/15 ${colorContrastClasses.textPrimary} ring-1 ring-indigo-500/30 shadow-sm`
                  : `${colorContrastClasses.cardBorder} ${colorContrastClasses.cardBg} ${colorContrastClasses.textSecondary} ${colorContrastClasses.cardHover}`
              }`}
            >
              <Icon className="w-4 h-4 text-indigo-400" />
              <span>{profile.name}</span>
            </button>
          );
        })}

        <button
          onClick={() => setActiveTab('mixtos')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
            activeTab === 'mixtos'
              ? `border-indigo-500/50 bg-indigo-500/15 ${colorContrastClasses.textPrimary} ring-1 ring-indigo-500/30 shadow-sm`
              : `${colorContrastClasses.cardBorder} ${colorContrastClasses.cardBg} ${colorContrastClasses.textSecondary} ${colorContrastClasses.cardHover}`
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Temperamentos Mixtos</span>
        </button>

        <button
          onClick={() => setActiveTab('reconocimiento')}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
            activeTab === 'reconocimiento'
              ? `border-indigo-500/50 bg-indigo-500/15 ${colorContrastClasses.textPrimary} ring-1 ring-indigo-500/30 shadow-sm`
              : `${colorContrastClasses.cardBorder} ${colorContrastClasses.cardBg} ${colorContrastClasses.textSecondary} ${colorContrastClasses.cardHover}`
          }`}
        >
          <Eye className="w-4 h-4 text-emerald-400" />
          <span>Mirada y Andar</span>
        </button>
      </div>

      {/* VIEW: PURE TEMPERAMENT PROFILE */}
      {currentProfile && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* PROFILE HERO CARD */}
          <div className={`p-6 sm:p-8 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} shadow-sm space-y-6`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-inherit">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  {React.createElement(getTemperamentIcon(currentProfile.id), {
                    className: 'w-7 h-7 text-indigo-400',
                  })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className={`text-2xl sm:text-3xl font-bold ${colorContrastClasses.textPrimary}`}>
                      Temperamento {currentProfile.name}
                    </h2>
                    <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-md border border-inherit bg-black/10 text-indigo-400">
                      {currentProfile.elementSymbol}
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm font-mono mt-0.5 ${colorContrastClasses.textMuted}`}>
                    {currentProfile.tagline}
                  </p>
                </div>
              </div>

              <div className="text-right sm:text-right">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${colorContrastClasses.cardBorder} ${colorContrastClasses.textSecondary}`}>
                  Mirada: {currentProfile.physicalSign.gaze}
                </span>
              </div>
            </div>

            {/* THREE ESSENTIAL AXES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/5`}>
                <span className={`text-[11px] font-mono uppercase tracking-wider block ${colorContrastClasses.textMuted}`}>
                  Excitabilidad
                </span>
                <span className={`text-sm font-semibold mt-1 block ${colorContrastClasses.textPrimary}`}>
                  {currentProfile.excitability.speed}
                </span>
                <span className={`text-xs mt-1 block ${colorContrastClasses.textSecondary}`}>
                  {currentProfile.excitability.depth}
                </span>
              </div>
              <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/5`}>
                <span className={`text-[11px] font-mono uppercase tracking-wider block ${colorContrastClasses.textMuted}`}>
                  Reacción
                </span>
                <span className={`text-sm font-semibold mt-1 block ${colorContrastClasses.textPrimary}`}>
                  {currentProfile.excitability.reaction}
                </span>
              </div>
              <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/5`}>
                <span className={`text-[11px] font-mono uppercase tracking-wider block ${colorContrastClasses.textMuted}`}>
                  Duración en el Alma
                </span>
                <span className={`text-sm font-semibold mt-1 block ${colorContrastClasses.textPrimary}`}>
                  {currentProfile.excitability.duration}
                </span>
              </div>
            </div>

            {/* SUMMARY & ESSENCE */}
            <div className="space-y-2">
              <h3 className={`text-xs font-semibold uppercase tracking-wider ${colorContrastClasses.textMuted}`}>
                Esencia Psicológica Fundamental
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${colorContrastClasses.textSecondary}`}>
                {currentProfile.nature}
              </p>
            </div>
          </div>

          {/* STRENGTHS VS WEAKNESSES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* STRENGTHS */}
            <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Cualidades Buenas y Virtudes Potenciales</span>
              </div>
              <ul className="space-y-2.5">
                {currentProfile.goodQualities.map((s: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                    <span className={colorContrastClasses.textSecondary}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WEAKNESSES */}
            <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-wider">
                <XCircle className="w-4 h-4" />
                <span>Puntos Débiles y Defectos a Combatir</span>
              </div>
              <ul className="space-y-2.5">
                {currentProfile.badQualities.map((w: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                    <span className={colorContrastClasses.textSecondary}>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ANGER PATTERN & THE WORD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ANGER PATTERN */}
            <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Patrón de Ira y Autocontrol</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className={`font-semibold block ${colorContrastClasses.textPrimary}`}>
                    Detonante Principal:
                  </span>
                  <p className={colorContrastClasses.textSecondary}>{currentProfile.angerPattern.trigger}</p>
                </div>
                <div>
                  <span className={`font-semibold block ${colorContrastClasses.textPrimary}`}>
                    Manifestación Espontánea:
                  </span>
                  <p className={colorContrastClasses.textSecondary}>{currentProfile.angerPattern.reaction}</p>
                </div>
                <div>
                  <span className={`font-semibold block text-rose-400`}>
                    Riesgo de Violencia Verbal o Relacional:
                  </span>
                  <p className={colorContrastClasses.textSecondary}>{currentProfile.angerPattern.risk}</p>
                </div>
                <div>
                  <span className={`font-semibold block ${colorContrastClasses.textMuted}`}>
                    Punto Ciego:
                  </span>
                  <p className={`italic ${colorContrastClasses.textMuted}`}>{currentProfile.angerPattern.blindSpot}</p>
                </div>
              </div>
            </div>

            {/* SPEECH AND WORD */}
            <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>El Poder de la Palabra y la Comunicación</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className={`font-semibold block ${colorContrastClasses.textPrimary}`}>
                    Estilo de Comunicación:
                  </span>
                  <p className={colorContrastClasses.textSecondary}>{currentProfile.speechAndWord.style}</p>
                </div>
                <div>
                  <span className={`font-semibold block text-amber-400`}>
                    Riesgo Destructivo de la Lengua:
                  </span>
                  <p className={colorContrastClasses.textSecondary}>{currentProfile.speechAndWord.riskWords}</p>
                </div>
                <div>
                  <span className={`font-semibold block text-emerald-400`}>
                    Consejo para el Hablar Constructivo:
                  </span>
                  <p className={colorContrastClasses.textSecondary}>{currentProfile.speechAndWord.constructiveGuidance}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RULES FOR CHARACTER FORGING */}
          <div className={`p-6 sm:p-8 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-5`}>
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Reglas Fundamentales para la Autoeducación del Carácter</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentProfile.characterForgingRules.map((rule, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/5 space-y-2`}>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className={`text-sm font-semibold ${colorContrastClasses.textPrimary}`}>
                      {rule.ruleTitle}
                    </h4>
                  </div>
                  <p className={`text-xs ${colorContrastClasses.textSecondary}`}>
                    {rule.ruleDescription}
                  </p>
                  <p className={`text-xs font-medium text-indigo-300`}>
                    Práctica: {rule.dailyPractice}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ADVICE FOR EDUCATORS & COMPANIONS */}
          <div className={`p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 space-y-3`}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Guía para Educadores, Padres y Compañeros
            </h4>
            <ul className="space-y-2">
              {currentProfile.howToTreatAndEducate.map((advice: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
                  <span className={colorContrastClasses.textSecondary}>{advice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* VIEW: MIXED TEMPERAMENTS */}
      {activeTab === 'mixtos' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-3`}>
            <h2 className={`text-xl font-bold ${colorContrastClasses.textPrimary}`}>
              Las Mezclas de Temperamentos (Temperamentos Mixtos)
            </h2>
            <p className={`text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
              La inmensa mayoría de las personas no posee un temperamento químicamente puro, sino una combinación armónica en la cual predomina uno principal mientras que las disposiciones de un segundo matizan, atenúan o agudizan sus reacciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MIXED_TEMPERAMENTS.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-bold ${colorContrastClasses.textPrimary}`}>
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                    Mezcla Clásica
                  </span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
                  {item.description}
                </p>

                <div className="p-3.5 rounded-xl border border-inherit bg-black/10 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 block">
                    Regla de Equilibrio:
                  </span>
                  <p className={`text-xs italic ${colorContrastClasses.textMuted}`}>
                    {item.balanceAdvice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW: PHYSICAL RECOGNITION (MIRADA Y ANDAR) */}
      {activeTab === 'reconocimiento' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-3`}>
            <h2 className={`text-xl font-bold ${colorContrastClasses.textPrimary}`}>
              Reconocimiento Físico: La Mirada y el Andar
            </h2>
            <p className={`text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
              Como enseñaba el Dr. Jorge Hagemann, el corazón y el alma se proyectan sobre el cuerpo. La expresión de los ojos y la cadencia del paso brindan claves certeras para identificar el temple natural de una persona al instante de verla caminar o hablar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* COLÉRICO */}
            <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
              <div className="flex items-center gap-3">
                <Flame className="w-5 h-5 text-amber-500" />
                <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>Colérico</h3>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Eye className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={colorContrastClasses.textPrimary}>La Mirada:</strong>
                    <p className={colorContrastClasses.textSecondary}>
                      Resuelta, firme, enérgica y ardiente. Tipo Napoleón o Bismarck. No desvía la vista ante el desafío.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Footprints className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={colorContrastClasses.textPrimary}>El Andar:</strong>
                    <p className={colorContrastClasses.textSecondary}>
                      Paso firme, decidido y rápido. Camina como quien va a la conquista de una meta sin titubear.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SANGUÍNEO */}
            <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
              <div className="flex items-center gap-3">
                <Wind className="w-5 h-5 text-sky-400" />
                <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>Sanguíneo</h3>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Eye className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={colorContrastClasses.textPrimary}>La Mirada:</strong>
                    <p className={colorContrastClasses.textSecondary}>
                      Serena, alegre, curiosa y despreocupada. Mira a todas partes con vivacidad e interés por lo exterior.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Footprints className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={colorContrastClasses.textPrimary}>El Andar:</strong>
                    <p className={colorContrastClasses.textSecondary}>
                      Ágil y ligero de pie, de paso corto y a menudo danzante. Parece rebotar sobre el suelo con alegría.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MELANCÓLICO */}
            <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
              <div className="flex items-center gap-3">
                <Mountain className="w-5 h-5 text-indigo-400" />
                <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>Melancólico</h3>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Eye className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={colorContrastClasses.textPrimary}>La Mirada:</strong>
                    <p className={colorContrastClasses.textSecondary}>
                      Suavemente triste, profunda y preocupada (tipo Alban Stolz). Tiende a bajar la vista o mirar abstraído hacia adentro.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Footprints className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={colorContrastClasses.textPrimary}>El Andar:</strong>
                    <p className={colorContrastClasses.textSecondary}>
                      Lento, torpe o meditabundo. Camina con cautela, como si cargara un peso reflexivo sobre sus hombros.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLEMÁTICO */}
            <div className={`p-6 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
              <div className="flex items-center gap-3">
                <Waves className="w-5 h-5 text-emerald-400" />
                <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>Flemático</h3>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Eye className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={colorContrastClasses.textPrimary}>La Mirada:</strong>
                    <p className={colorContrastClasses.textSecondary}>
                      Lánguida, apacible, tranquila e inexpresiva. No delata sobresaltos ni pasiones violentas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Footprints className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className={colorContrastClasses.textPrimary}>El Andar:</strong>
                    <p className={colorContrastClasses.textSecondary}>
                      Perezoso, cachazudo y a sus anchas. Marcha sin prisas ni agitación, inmune a las urgencias externas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM CTA BAR */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left`}>
        <div className="space-y-1">
          <h3 className={`text-lg font-bold ${colorContrastClasses.textPrimary}`}>
            ¿Cuál es tu temperamento predominante?
          </h3>
          <p className={`text-xs sm:text-sm ${colorContrastClasses.textMuted}`}>
            Responde el test de 16 situaciones prácticas para calcular tus porcentajes y obtener tu guía de forja de carácter.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={onGoToTheory}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
          >
            <BookOpen className="w-3.5 h-3.5 inline mr-1.5" />
            <span>Leer Teoría</span>
          </button>
          <button
            onClick={onStartTest}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 shadow-sm transition-colors"
          >
            <span>Realizar el Test</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
