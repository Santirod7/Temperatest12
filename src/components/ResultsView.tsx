import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { TemperamentProfile, TemperamentType, TestScore } from '../types/temperament';
import { TEMPERAMENT_PROFILES } from '../data/temperamentsData';
import {
  RotateCcw,
  Printer,
  Copy,
  Check,
  Shield,
  MessageSquare,
  AlertTriangle,
  Flame,
  Wind,
  Mountain,
  Waves,
  Zap,
  BookOpen,
} from 'lucide-react';

interface ResultsViewProps {
  score: TestScore;
  onRestart: () => void;
  onGoToTheory?: () => void;
  onGoToGlossary?: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  score,
  onRestart,
  onGoToTheory,
  onGoToGlossary,
}) => {
  const { colorContrastClasses } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'anger' | 'words' | 'rules' | 'all'>('profile');

  const primaryProfile = TEMPERAMENT_PROFILES[score.primary];
  const secondaryProfile = TEMPERAMENT_PROFILES[score.secondary];

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

  const PrimaryIcon = getTemperamentIcon(score.primary);

  const handleCopySummary = async () => {
    const text = `INFORME PEDAGÓGICO DE TEMPERAMENTO Y MANEJO DEL ENOJO
Temperamento Predominante: ${primaryProfile.name} (${score.percentages[score.primary]}%)
Temperamento Secundario: ${secondaryProfile.name} (${score.percentages[score.secondary]}%)

DESGLOSE COMPLETO:
- Colérico: ${score.percentages.colerico}%
- Sanguíneo: ${score.percentages.sanguineo}%
- Melancólico: ${score.percentages.melancolico}%
- Flemático: ${score.percentages.flematico}%

DIAGNÓSTICO DEL ENOJO:
Detonante principal: ${primaryProfile.angerPattern.trigger}
Riesgo de violencia: ${primaryProfile.angerPattern.risk}
Punto ciego: ${primaryProfile.angerPattern.blindSpot}

EL PODER DE LA PALABRA:
${primaryProfile.speechAndWord.constructiveGuidance}

COMPROMISOS DE FORJA DE CARÁCTER:
${primaryProfile.characterForgingRules.map((r, i) => `${i + 1}. ${r.ruleTitle}: ${r.dailyPractice}`).join('\n')}
`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Error copying to clipboard', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const temperamentsSortedByScore = (Object.keys(score.percentages) as TemperamentType[]).sort(
    (a, b) => score.percentages[b] - score.percentages[a]
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* HEADER / INTRO */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-medium">
          <Shield className="w-3.5 h-3.5" />
          <span>Diagnóstico de Autoconocimiento Concluido</span>
        </div>

        <h1 className={`text-2xl sm:text-4xl font-bold tracking-tight ${colorContrastClasses.textPrimary}`}>
          Tu Perfil de Temperamento y Plan de Carácter
        </h1>

        <p className={`text-sm sm:text-base max-w-xl mx-auto ${colorContrastClasses.textMuted}`}>
          El temperamento es tu tendencia biológica; tu carácter se define por cómo gobiernas tu ira y tus palabras.
        </p>

        {/* Action buttons (No-print) */}
        <div className="no-print pt-3 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleCopySummary}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all ${
              colorContrastClasses.cardBorder
            } ${colorContrastClasses.cardHover} ${colorContrastClasses.textPrimary}`}
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar Resumen'}</span>
          </button>

          <button
            onClick={handlePrint}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all ${
              colorContrastClasses.cardBorder
            } ${colorContrastClasses.cardHover} ${colorContrastClasses.textPrimary}`}
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Guardar PDF</span>
          </button>

          <button
            onClick={onRestart}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all ${
              colorContrastClasses.cardBorder
            } ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reiniciar Test</span>
          </button>
        </div>
      </div>

      {/* PRIMARY TEMPERAMENT HERO CARD */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} shadow-sm space-y-6 relative overflow-hidden`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <PrimaryIcon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400 block mb-0.5">
                Temperamento Predominante ({score.percentages[score.primary]}%)
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold ${colorContrastClasses.textPrimary}`}>
                {primaryProfile.name}
              </h2>
              <p className={`text-xs sm:text-sm font-medium ${colorContrastClasses.textMuted}`}>
                {primaryProfile.tagline} · {primaryProfile.elementSymbol}
              </p>
            </div>
          </div>

          {score.secondary !== score.primary && (
            <div className={`sm:text-right p-3 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/10 sm:max-w-xs`}>
              <span className={`text-[11px] uppercase tracking-wider font-medium ${colorContrastClasses.textMuted} block`}>
                Matiz Secundario ({score.percentages[score.secondary]}%)
              </span>
              <span className={`text-sm font-bold ${colorContrastClasses.textPrimary}`}>
                {secondaryProfile.name}
              </span>
              <p className={`text-[11px] leading-tight mt-0.5 ${colorContrastClasses.textMuted}`}>
                Modula y equilibra tus reacciones espontáneas.
              </p>
            </div>
          )}
        </div>

        <p className={`text-sm sm:text-base leading-relaxed ${colorContrastClasses.textSecondary}`}>
          {primaryProfile.nature}
        </p>
      </div>

      {/* PERCENTAGE BREAKDOWN (DESGLOSE VISUAL DE BARRAS) */}
      <div className={`p-6 sm:p-7 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
        <div className="flex items-center justify-between">
          <h3 className={`text-sm sm:text-base font-bold ${colorContrastClasses.textPrimary}`}>
            Desglose de Combinación de Temperamentos
          </h3>
          <span className={`text-xs ${colorContrastClasses.textMuted}`}>
            Total: 16 respuestas
          </span>
        </div>

        <p className={`text-xs ${colorContrastClasses.textMuted}`}>
          Ninguna persona es 100% de un solo tipo; poseemos una combinación única que influye en cómo respondemos ante la frustración y la presión.
        </p>

        <div className="space-y-4 pt-2">
          {temperamentsSortedByScore.map((key) => {
            const profile = TEMPERAMENT_PROFILES[key];
            const percent = score.percentages[key];
            const count = score.counts[key];
            const Icon = getTemperamentIcon(key);
            const isDominant = key === score.primary;

            return (
              <div key={key} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-indigo-400" />
                    <span className={`font-semibold ${isDominant ? colorContrastClasses.textPrimary : colorContrastClasses.textSecondary}`}>
                      {profile.name}
                    </span>
                    {isDominant && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300">
                        Predominante
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className={colorContrastClasses.textMuted}>({count} respuestas)</span>
                    <strong className={`text-sm ${colorContrastClasses.textPrimary}`}>{percent}%</strong>
                  </div>
                </div>

                {/* Progress track */}
                <div className="w-full h-3 rounded-full overflow-hidden bg-white/10 relative">
                  <div
                    className={`h-full transition-all duration-500 ease-out ${
                      isDominant ? 'bg-indigo-500' : 'bg-slate-400'
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* NAVIGATION TABS FOR RIGOROUS PEDAGOGICAL SECTIONS (No-print) */}
      <div className="no-print border-b border-inherit flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { id: 'profile', label: '1. Diagnóstico del Enojo' },
          { id: 'words', label: '2. El Poder de la Palabra' },
          { id: 'rules', label: '3. Forja de Carácter' },
          { id: 'all', label: '4. Comparativa de los 4 Tipos' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-xs'
                : `${colorContrastClasses.cardBorder} border ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: DIAGNÓSTICO DEL ENOJO Y PREVENCIÓN DE VIOLENCIA */}
      {(activeTab === 'profile' || activeTab === 'all') && (
        <section className={`p-6 sm:p-7 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-6`}>
          <div className="flex items-center gap-2.5 pb-3 border-b border-inherit">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>
              El Manejo del Enojo en el Temperamento {primaryProfile.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/10 space-y-1.5`}>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                ¿Qué enciende tu mecha? (Detonante)
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
                {primaryProfile.angerPattern.trigger}
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/10 space-y-1.5`}>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                Tu Reacción Espontánea Habitual
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
                {primaryProfile.angerPattern.reaction}
              </p>
            </div>

            <div className={`p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 space-y-1.5`}>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-400">
                Peligro de Violencia o Descontrol
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
                {primaryProfile.angerPattern.risk}
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/10 space-y-1.5`}>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                Punto Ciego de Autoengaño
              </span>
              <p className={`text-xs sm:text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
                {primaryProfile.angerPattern.blindSpot}
              </p>
            </div>
          </div>

          {/* PROTOCOLO PASO A PASO PARA DESACTIVAR LA IRA */}
          <div className="pt-2 space-y-3">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${colorContrastClasses.textMuted} flex items-center gap-1.5`}>
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Protocolo de Emergencia ante el Enojo (Regla de los 4 Pasos)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {primaryProfile.angerManagementProtocol.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-3.5 rounded-lg border ${colorContrastClasses.cardBorder} bg-black/5`}
                >
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className={`text-xs leading-relaxed ${colorContrastClasses.textSecondary}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TAB 2: EL PODER DE LA PALABRA Y LA COMUNICACIÓN */}
      {(activeTab === 'words' || activeTab === 'all') && (
        <section className={`p-6 sm:p-7 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-6`}>
          <div className="flex items-center gap-2.5 pb-3 border-b border-inherit">
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>
              La Palabra y la Lengua: El Arma o el Remedio
            </h3>
          </div>

          <div className="space-y-4">
            <div className={`p-5 rounded-xl border border-indigo-500/30 bg-indigo-500/5 space-y-2`}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Pauta de Dominio Verbal para tu Temperamento
              </h4>
              <p className={`text-sm sm:text-base leading-relaxed font-medium ${colorContrastClasses.textPrimary}`}>
                {primaryProfile.speechAndWord.constructiveGuidance}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/10 space-y-2`}>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-400">
                  Palabras y Expresiones de Alto Riesgo
                </span>
                <p className={`text-xs sm:text-sm leading-relaxed ${colorContrastClasses.textSecondary}`}>
                  {primaryProfile.speechAndWord.riskWords}
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/10 space-y-2`}>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                  Tus Talentos en la Pacificación
                </span>
                <ul className="space-y-1">
                  {primaryProfile.peacemakingStrengths.map((strength, i) => (
                    <li key={i} className={`text-xs flex items-center gap-2 ${colorContrastClasses.textSecondary}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: PAUTAS CONCRETAS PARA FORJAR EL CARÁCTER */}
      {(activeTab === 'rules' || activeTab === 'all') && (
        <section className={`p-6 sm:p-7 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-6`}>
          <div className="flex items-center gap-2.5 pb-3 border-b border-inherit">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>
              Tres Compromisos Semanales de Forja de Carácter
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {primaryProfile.characterForgingRules.map((rule, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/10 flex flex-col justify-between space-y-3`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className={`text-sm font-bold ${colorContrastClasses.textPrimary}`}>
                      {rule.ruleTitle}
                    </h4>
                  </div>
                  <p className={`text-xs leading-relaxed ${colorContrastClasses.textSecondary}`}>
                    {rule.ruleDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-inherit">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                    Práctica Diaria:
                  </span>
                  <p className={`text-xs font-medium ${colorContrastClasses.textPrimary}`}>
                    {rule.dailyPractice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 4: MATRIZ DE LOS 4 TEMPERAMENTOS */}
      {activeTab === 'all' && (
        <section className={`p-6 sm:p-7 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
          <h3 className={`text-base font-bold ${colorContrastClasses.textPrimary}`}>
            Visión Comparativa de los Cuatro Temperamentos
          </h3>
          <p className={`text-xs ${colorContrastClasses.textMuted}`}>
            Comprender los otros tres temperamentos te permite empatizar con compañeros, padres y educadores, evitando choques innecesarios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {(Object.keys(TEMPERAMENT_PROFILES) as TemperamentType[]).map((key) => {
              const p = TEMPERAMENT_PROFILES[key];
              const Icon = getTemperamentIcon(key);
              return (
                <div key={key} className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/5 space-y-2`}>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-indigo-400" />
                    <h4 className={`text-sm font-bold ${colorContrastClasses.textPrimary}`}>
                      {p.name} ({p.elementSymbol})
                    </h4>
                  </div>
                  <p className={`text-xs ${colorContrastClasses.textSecondary}`}>
                    <strong>Detonante:</strong> {p.angerPattern.trigger}
                  </p>
                  <p className={`text-xs ${colorContrastClasses.textMuted}`}>
                    <strong>Consejo clave:</strong> {p.speechAndWord.constructiveGuidance}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* FOOTER CALL TO ACTION (No-print) */}
      <div className="no-print pt-6 border-t border-inherit space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {onGoToTheory && (
            <button
              onClick={onGoToTheory}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} hover:border-indigo-500/40`}
            >
              <div className="flex items-center gap-2.5 text-left">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <div>
                  <span className={`text-xs font-bold block ${colorContrastClasses.textPrimary}`}>
                    Estudiar Teoría e Historia
                  </span>
                  <span className={`text-[11px] ${colorContrastClasses.textMuted}`}>
                    Profundiza en la forja de la voluntad y los humores
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-indigo-400">Leer &rarr;</span>
            </button>
          )}

          {onGoToGlossary && (
            <button
              onClick={onGoToGlossary}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} hover:border-emerald-500/40`}
            >
              <div className="flex items-center gap-2.5 text-left">
                <Shield className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className={`text-xs font-bold block ${colorContrastClasses.textPrimary}`}>
                    Consultar Glosario Completo
                  </span>
                  <span className={`text-[11px] ${colorContrastClasses.textMuted}`}>
                    Revisa las fichas de los 4 temperamentos y sus mezclas
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-400">Ver &rarr;</span>
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className={`text-xs ${colorContrastClasses.textMuted} text-center sm:text-left`}>
            Puedes repetir este test en el futuro para medir tu progreso en el autocontrol y dominio de la ira.
          </p>
          <button
            onClick={onRestart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reiniciar y Volver al Inicio</span>
          </button>
        </div>
      </div>
    </div>
  );
};
