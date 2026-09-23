import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { TestScore } from '../types/temperament';
import { TEMPERAMENT_PROFILES } from '../data/temperamentsData';
import {
  Sparkles,
  Send,
  RotateCcw,
  Bot,
  User,
  Shield,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  Flame,
  Check,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface AiAdvisorViewProps {
  score: TestScore | null;
  onNavigateToTest?: () => void;
}

const QUICK_PROMPTS = [
  {
    category: 'Emergencia de Ira',
    text: 'Siento mucha rabia en este instante y ganas de gritar o enviar un mensaje hiriente. ¿Qué hago en los próximos 3 minutos?',
  },
  {
    category: 'El Poder de la Palabra',
    text: '¿Cómo le digo a alguien que me hirió profundamente sin caer en insultos ni en agresividad pasiva?',
  },
  {
    category: 'Orgullo y Perdón',
    text: 'Reconozco que me equivoqué pero mi orgullo me impide pedir disculpas. ¿Cómo supero esa resistencia interna?',
  },
  {
    category: 'Rumiación de Resentimiento',
    text: 'Tiendo a repasar una y otra vez en mi cabeza lo que me hicieron y no puedo soltar el rencor. ¿Qué ejercicio me recomiendas?',
  },
  {
    category: 'Asertividad sin Violencia',
    text: 'Por no generar conflictos siempre digo que "no pasa nada", pero por dentro me lleno de frustración. ¿Cómo poner límites con valentía?',
  },
];

export const AiAdvisorView: React.FC<AiAdvisorViewProps> = ({ score, onNavigateToTest }) => {
  const { colorContrastClasses } = useTheme();

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'welcome-1',
        role: 'model',
        text: 'Hola. Soy el Orientador Pedagógico en Autocontrol y Manejo del Enojo, impulsado por el motor Gemini Flash gratuito.\n\nEstoy aquí para ayudarte a reflexionar con serenidad sobre tus emociones, prevenir reacciones violentas, educar el uso de tus palabras y forjar tu carácter ante situaciones difíciles.\n\n¿En qué situación o conflicto te encuentras hoy, o qué aspecto de tu templanza deseas trabajar?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [includeTemperamentContext, setIncludeTemperamentContext] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    setErrorMessage(null);
    const userMsgId = `user-${Date.now()}`;
    const newTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMessage: ChatMessage = {
      id: userMsgId,
      role: 'user',
      text: query,
      timestamp: newTimestamp,
    };

    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setInputText('');
    setIsLoading(true);

    try {
      // Build request body for our backend proxy route
      const payload: any = {
        message: query,
        history: updatedHistory.slice(0, -1).map((m) => ({
          role: m.role,
          text: m.text,
        })),
      };

      if (score && includeTemperamentContext) {
        payload.temperamentContext = {
          primary: TEMPERAMENT_PROFILES[score.primary].name,
          secondary: TEMPERAMENT_PROFILES[score.secondary].name,
          percentages: score.percentages,
        };
      }

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Error en el servidor (${res.status})`);
      }

      const data = await res.json();

      const modelMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.reply || 'No se recibió respuesta.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMessage(
        err.message || 'No se pudo conectar con el motor de Gemini Flash. Verifica tu conexión.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text: 'Conversación reiniciada. Puedes formularme una nueva consulta sobre autocontrol, resolución pacífica de conflictos o forja de carácter.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setErrorMessage(null);
  };

  const primaryProfile = score ? TEMPERAMENT_PROFILES[score.primary] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
      {/* HEADER WITH SOBER BADGES */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-inherit">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h1 className={`text-lg sm:text-xl font-bold ${colorContrastClasses.textPrimary}`}>
                Orientador IA en Autocontrol y Manejo del Enojo
              </h1>
            </div>
          </div>
          <p className={`text-xs ${colorContrastClasses.textMuted} flex items-center gap-1.5`}>
            <span>Motor: <strong className="text-indigo-400">Gemini Flash Gratuito</strong></span>
            <span aria-hidden="true">·</span>
            <span>Orientación ética y formativa sin gamificación</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearChat}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
            title="Borrar conversación e iniciar de nuevo"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpiar Chat</span>
          </button>
        </div>
      </div>

      {/* TEMPERAMENT CONTEXT STATUS STRIP */}
      {score ? (
        <div className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder}`}>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div className="text-xs">
              <span className={`font-semibold ${colorContrastClasses.textPrimary}`}>
                Contexto del Test Vinculado:
              </span>{' '}
              <span className="text-indigo-400 font-medium">
                {primaryProfile?.name} ({score.percentages[score.primary]}%)
              </span>
              <span className={colorContrastClasses.textMuted}>
                {' '}— Respuestas adaptadas a tu perfil específico.
              </span>
            </div>
          </div>

          <label className="flex items-center gap-2 text-xs cursor-pointer select-none">
            <input
              type="checkbox"
              checked={includeTemperamentContext}
              onChange={(e) => setIncludeTemperamentContext(e.target.checked)}
              className="rounded-sm border-slate-400 text-indigo-600 focus:ring-indigo-500"
            />
            <span className={colorContrastClasses.textSecondary}>Incluir perfil en las consultas</span>
          </label>
        </div>
      ) : (
        <div className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder}`}>
          <div className="flex items-center gap-2 text-xs">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span className={colorContrastClasses.textSecondary}>
              Aún no has completado el test. Puedes consultar de forma general o realizarlo para obtener respuestas personalizadas a tu temperamento.
            </span>
          </div>
          {onNavigateToTest && (
            <button
              onClick={onNavigateToTest}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline whitespace-nowrap"
            >
              Hacer Test ahora →
            </button>
          )}
        </div>
      )}

      {/* QUICK PROMPT CHIPS */}
      <div className="space-y-2">
        <span className={`text-[11px] font-semibold uppercase tracking-wider ${colorContrastClasses.textMuted} block`}>
          Consultas Frecuentes de Autocontrol y Manejo de la Ira:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt.text)}
              disabled={isLoading}
              className={`p-2.5 rounded-lg border text-left text-xs whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                colorContrastClasses.cardBg
              } ${colorContrastClasses.cardBorder} hover:border-indigo-500/50 hover:bg-indigo-500/5 ${colorContrastClasses.textSecondary}`}
            >
              <span className="font-semibold text-indigo-400 block text-[10px] mb-0.5">
                {prompt.category}
              </span>
              <span className="truncate max-w-[280px] block font-medium">
                {prompt.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* CHAT MESSAGES DISPLAY */}
      <div className={`p-4 sm:p-6 rounded-2xl border min-h-[420px] max-h-[580px] overflow-y-auto space-y-4 ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder}`}>
        {messages.map((msg) => {
          const isModel = msg.role === 'model';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isModel ? '' : 'flex-row-reverse'}`}
            >
              {/* Avatar Icon */}
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                  isModel
                    ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400'
                    : 'border-slate-500/30 bg-slate-500/10 text-slate-300'
                }`}
              >
                {isModel ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-xl p-4 text-xs sm:text-sm leading-relaxed border space-y-1.5 ${
                  isModel
                    ? `${colorContrastClasses.cardBorder} bg-black/10 text-slate-200`
                    : 'border-indigo-500/40 bg-indigo-600/15 text-slate-100'
                }`}
              >
                <div className="flex items-center justify-between gap-3 text-[10px] opacity-60 pb-1 border-b border-white/5">
                  <span className="font-semibold">{isModel ? 'Orientador (Gemini Flash)' : 'Tú'}</span>
                  <span>{msg.timestamp}</span>
                </div>

                <div className="whitespace-pre-wrap space-y-2">
                  {msg.text.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
              <Bot className="w-4 h-4 animate-pulse" />
            </div>
            <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBorder} bg-black/10 text-xs text-indigo-400 flex items-center gap-2`}>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span>Analizando con motor Gemini Flash gratuito...</span>
            </div>
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isLoading}
            placeholder="Escribe tu pregunta sobre el enojo, la palabra, el autocontrol o tu temperamento..."
            className={`flex-1 px-4 py-3 text-xs sm:text-sm rounded-xl border focus:ring-2 focus:ring-indigo-500/40 outline-hidden transition-all ${
              colorContrastClasses.inputBg
            } ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
          />

          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2 shrink-0 shadow-xs cursor-pointer"
          >
            <span className="hidden sm:inline text-xs font-semibold">Consultar</span>
            <Send className="w-4 h-4" />
          </button>
        </div>

        <p className={`text-[11px] text-center ${colorContrastClasses.textMuted}`}>
          Las respuestas son de carácter educativo y reflexivo; no sustituyen la atención psicológica profesional ante crisis severas.
        </p>
      </form>
    </div>
  );
};
