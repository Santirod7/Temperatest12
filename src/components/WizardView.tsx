import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { OptionKey, Question } from '../types/temperament';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';

interface WizardViewProps {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<number, OptionKey>;
  onSelectOption: (questionId: number, key: OptionKey) => void;
  onPrevQuestion: () => void;
  onNextQuestion: () => void;
  onFinishTest: () => void;
  onCancelTest: () => void;
}

export const WizardView: React.FC<WizardViewProps> = ({
  questions,
  currentQuestionIndex,
  userAnswers,
  onSelectOption,
  onPrevQuestion,
  onNextQuestion,
  onFinishTest,
  onCancelTest,
}) => {
  const { colorContrastClasses } = useTheme();
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
  const selectedOption = userAnswers[currentQuestion.id];

  // Brief flash/indicator when option is selected
  const [selectedKeyForFeedback, setSelectedKeyForFeedback] = useState<OptionKey | null>(null);

  // Keyboard accessibility: 1, 2, 3, 4 or A, B, C, D
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if an input is focused
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      const keyUpper = e.key.toUpperCase();
      let chosenKey: OptionKey | null = null;
      if (keyUpper === '1' || keyUpper === 'A') chosenKey = 'A';
      if (keyUpper === '2' || keyUpper === 'B') chosenKey = 'B';
      if (keyUpper === '3' || keyUpper === 'C') chosenKey = 'C';
      if (keyUpper === '4' || keyUpper === 'D') chosenKey = 'D';

      if (chosenKey) {
        handleOptionClick(chosenKey);
      } else if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        onPrevQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, questions]);

  const handleOptionClick = (key: OptionKey) => {
    setSelectedKeyForFeedback(key);
    onSelectOption(currentQuestion.id, key);

    // Auto-advance after brief smooth delay for tactile feedback
    setTimeout(() => {
      setSelectedKeyForFeedback(null);
      if (currentQuestionIndex < totalQuestions - 1) {
        onNextQuestion();
      } else {
        onFinishTest();
      }
    }, 280);
  };

  const optionKeyBadge = (key: OptionKey) => {
    return (
      <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 border border-inherit bg-black/10">
        {key}
      </span>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
      {/* TOP PROGRESS BAR & NAVIGATION */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-2">
            <button
              onClick={currentQuestionIndex > 0 ? onPrevQuestion : onCancelTest}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{currentQuestionIndex > 0 ? 'Anterior' : 'Salir'}</span>
            </button>
            <span className={colorContrastClasses.textMuted}>
              Pregunta <strong className={colorContrastClasses.textPrimary}>{currentQuestionIndex + 1}</strong> de {totalQuestions}
            </span>
          </div>

          <span className={`font-mono text-xs font-semibold ${colorContrastClasses.textMuted}`}>
            {progressPercent}% completado
          </span>
        </div>

        {/* Dynamic clean progress line */}
        <div className="w-full h-1.5 rounded-full overflow-hidden bg-white/10">
          <div
            className="h-full bg-indigo-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* QUESTION CARD */}
      <div className={`p-6 sm:p-8 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} shadow-sm space-y-4`}>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
            {currentQuestion.category}
          </span>
          <span className={`text-[11px] ${colorContrastClasses.textMuted} hidden sm:inline`}>
            Usa las teclas 1, 2, 3, 4 o A, B, C, D
          </span>
        </div>

        <h2 className={`text-lg sm:text-xl font-semibold leading-relaxed ${colorContrastClasses.textPrimary}`}>
          {currentQuestion.scenario}
        </h2>
      </div>

      {/* LARGE SELECTABLE TOUCH CARDS (OPTIONS) */}
      <div className="space-y-3.5" role="radiogroup" aria-label={currentQuestion.scenario}>
        {currentQuestion.options.map((option) => {
          const isSelected = selectedOption === option.key || selectedKeyForFeedback === option.key;

          return (
            <button
              key={option.key}
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleOptionClick(option.key)}
              className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-150 flex items-start gap-4 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40 ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-600/15 shadow-sm ring-1 ring-indigo-500/50 scale-[1.005]'
                  : `${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover}`
              }`}
            >
              <div className="pt-0.5">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-transparent'
                      : `border ${colorContrastClasses.cardBorder} ${colorContrastClasses.textSecondary} bg-black/10`
                  }`}
                >
                  {isSelected ? <Check className="w-4 h-4 stroke-[2.5]" /> : option.key}
                </span>
              </div>

              <div className="flex-1 space-y-1">
                <p className={`text-sm sm:text-base font-medium leading-snug ${colorContrastClasses.textPrimary}`}>
                  {option.text}
                </p>
                <p className={`text-xs ${colorContrastClasses.textMuted} leading-tight`}>
                  {option.behavioralNote}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* FOOTER ACTIONS */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={currentQuestionIndex > 0 ? onPrevQuestion : onCancelTest}
          className={`px-4 py-2 text-xs font-medium rounded-lg border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
        >
          ← {currentQuestionIndex > 0 ? 'Modificar anterior' : 'Volver a la portada'}
        </button>

        {selectedOption && currentQuestionIndex < totalQuestions - 1 && (
          <button
            onClick={onNextQuestion}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-xs"
          >
            Siguiente pregunta →
          </button>
        )}

        {selectedOption && currentQuestionIndex === totalQuestions - 1 && (
          <button
            onClick={onFinishTest}
            className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-xs"
          >
            Ver Resultados y Plan de Carácter
          </button>
        )}
      </div>
    </div>
  );
};
