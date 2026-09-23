import React, { useEffect, useState, useMemo } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { LandingView } from './components/LandingView';
import { TheoryView } from './components/TheoryView';
import { GlossaryView } from './components/GlossaryView';
import { WizardView } from './components/WizardView';
import { ResultsView } from './components/ResultsView';
import { AdminPanel } from './components/AdminPanel';
import { ThemeCustomizer } from './components/ThemeCustomizer';
import {
  AppContentConfig,
  AppView,
  OptionKey,
  TemperamentType,
  TestScore,
} from './types/temperament';
import { INITIAL_CONTENT_CONFIG } from './data/temperamentsData';

const CONFIG_STORAGE_KEY = 'temperamentos_app_config_v1';
const ANSWERS_STORAGE_KEY = 'temperamentos_app_answers_v1';

// Helper to compute score from answers and config
function calculateScore(answers: Record<number, OptionKey>, questions = INITIAL_CONTENT_CONFIG.questions): TestScore {
  const counts: Record<TemperamentType, number> = {
    sanguineo: 0,
    colerico: 0,
    melancolico: 0,
    flematico: 0,
  };

  let total = 0;

  questions.forEach((q) => {
    const chosenKey = answers[q.id];
    if (chosenKey) {
      const option = q.options.find((opt) => opt.key === chosenKey);
      if (option) {
        counts[option.temperament] += 1;
        total += 1;
      }
    }
  });

  const safeTotal = total > 0 ? total : 1;

  const percentages: Record<TemperamentType, number> = {
    sanguineo: Math.round((counts.sanguineo / safeTotal) * 100),
    colerico: Math.round((counts.colerico / safeTotal) * 100),
    melancolico: Math.round((counts.melancolico / safeTotal) * 100),
    flematico: Math.round((counts.flematico / safeTotal) * 100),
  };

  // Sort by count descending
  const sorted = (Object.keys(counts) as TemperamentType[]).sort((a, b) => counts[b] - counts[a]);
  const primary = sorted[0] || 'colerico';
  const secondary = sorted[1] || 'sanguineo';

  return {
    counts,
    percentages,
    primary,
    secondary,
    totalAnswered: total,
  };
}

export function MainApp() {
  const { colorContrastClasses } = useTheme();

  // App content configuration (questions, titles, texts)
  const [config, setConfig] = useState<AppContentConfig>(() => {
    try {
      const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.questions && parsed.questions.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading saved config', e);
    }
    return INITIAL_CONTENT_CONFIG;
  });

  // Navigation view
  const [currentView, setCurrentView] = useState<AppView>('landing');

  // Interactive Wizard state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, OptionKey>>(() => {
    try {
      const saved = localStorage.getItem(ANSWERS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error reading saved answers', e);
    }
    return {};
  });

  // Modal customizer state
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Computed score
  const [score, setScore] = useState<TestScore | null>(() => {
    try {
      const saved = localStorage.getItem(ANSWERS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Object.keys(parsed).length >= 16) {
          return calculateScore(parsed, INITIAL_CONTENT_CONFIG.questions);
        }
      }
    } catch (e) {
      console.warn('Error reading initial score', e);
    }
    return null;
  });

  // Sync config to localStorage
  const handleSaveConfig = (newConfig: AppContentConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Error saving config', e);
    }
  };

  const handleResetToDefaults = () => {
    setConfig(INITIAL_CONTENT_CONFIG);
    try {
      localStorage.removeItem(CONFIG_STORAGE_KEY);
    } catch (e) {
      console.warn('Error clearing config storage', e);
    }
  };

  // Sync answers to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(userAnswers));
    } catch (e) {
      console.warn('Error saving answers', e);
    }
  }, [userAnswers]);

  const handleStartTest = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setScore(null);
    setCurrentView('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeTest = () => {
    const answeredCount = Object.keys(userAnswers).length;
    const nextIdx = Math.min(answeredCount, config.questions.length - 1);
    setCurrentQuestionIndex(nextIdx);
    setCurrentView('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (questionId: number, key: OptionKey) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: key,
    }));
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < config.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinishTest = () => {
    const computed = calculateScore(userAnswers, config.questions);
    setScore(computed);
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setScore(null);
    try {
      localStorage.removeItem(ANSWERS_STORAGE_KEY);
    } catch {}
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const savedAnswersCount = Object.keys(userAnswers).length;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          if (view === 'results' && !score && savedAnswersCount >= 16) {
            const computed = calculateScore(userAnswers, config.questions);
            setScore(computed);
          }
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onResetTest={handleRestart}
        hasScore={Boolean(score) || savedAnswersCount >= 16}
        savedAnswersCount={savedAnswersCount}
      />

      {/* Main View Router */}
      <main className="flex-1 pb-16">
        {currentView === 'landing' && (
          <LandingView
            config={config}
            onStartTest={handleStartTest}
            onOpenCustomizer={() => setIsCustomizerOpen(true)}
            savedAnswersCount={savedAnswersCount}
            onResumeTest={savedAnswersCount > 0 ? handleResumeTest : undefined}
            onGoToTheory={() => {
              setCurrentView('theory');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToGlossary={() => {
              setCurrentView('glossary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'theory' && (
          <TheoryView
            onStartTest={handleStartTest}
            onGoToGlossary={() => {
              setCurrentView('glossary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'glossary' && (
          <GlossaryView
            onStartTest={handleStartTest}
            onGoToTheory={() => {
              setCurrentView('theory');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'wizard' && (
          <WizardView
            questions={config.questions}
            currentQuestionIndex={currentQuestionIndex}
            userAnswers={userAnswers}
            onSelectOption={handleSelectOption}
            onPrevQuestion={handlePrevQuestion}
            onNextQuestion={handleNextQuestion}
            onFinishTest={handleFinishTest}
            onCancelTest={() => setCurrentView('landing')}
          />
        )}

        {currentView === 'results' && (score || savedAnswersCount >= 16) && (
          <ResultsView
            score={score || calculateScore(userAnswers, config.questions)}
            onRestart={handleRestart}
            onGoToTheory={() => {
              setCurrentView('theory');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onGoToGlossary={() => {
              setCurrentView('glossary');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'admin' && (
          <AdminPanel
            config={config}
            onSaveConfig={handleSaveConfig}
            onResetToDefaults={handleResetToDefaults}
            onExit={() => setCurrentView('landing')}
          />
        )}
      </main>

      {/* Sober Minimalist Footer */}
      <footer className={`border-t py-6 no-print ${colorContrastClasses.cardBg} ${colorContrastClasses.divider}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className={colorContrastClasses.textMuted}>
              Instrumento Educativo de Formación Ética, Autocontrol y Manejo de la Ira
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              onClick={() => {
                setCurrentView('theory');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:underline cursor-pointer ${colorContrastClasses.textMuted}`}
            >
              Teoría e Historia
            </button>
            <span className={colorContrastClasses.textMuted} aria-hidden="true">·</span>
            <button
              onClick={() => {
                setCurrentView('glossary');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:underline cursor-pointer ${colorContrastClasses.textMuted}`}
            >
              Glosario
            </button>
            <span className={colorContrastClasses.textMuted} aria-hidden="true">·</span>
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className={`hover:underline cursor-pointer ${colorContrastClasses.textMuted}`}
            >
              Fondo y Tipografía
            </button>
            <span className={colorContrastClasses.textMuted} aria-hidden="true">·</span>
            <button
              onClick={() => setCurrentView('admin')}
              className={`hover:underline cursor-pointer ${colorContrastClasses.textMuted}`}
            >
              Gestión Interna
            </button>
          </div>
        </div>
      </footer>

      {/* Personalization Modal */}
      <ThemeCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
