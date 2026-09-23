import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { AppContentConfig, Question, TemperamentType } from '../types/temperament';
import {
  Shield,
  ArrowLeft,
  Save,
  RotateCcw,
  Download,
  Upload,
  Check,
  FileText,
  HelpCircle,
  AlertCircle,
  Eye,
} from 'lucide-react';

interface AdminPanelProps {
  config: AppContentConfig;
  onSaveConfig: (newConfig: AppContentConfig) => void;
  onResetToDefaults: () => void;
  onExit: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  config,
  onSaveConfig,
  onResetToDefaults,
  onExit,
}) => {
  const { colorContrastClasses } = useTheme();

  // Local state for editing form
  const [formData, setFormData] = useState<AppContentConfig>(config);
  const [activeTab, setActiveTab] = useState<'texts' | 'questions' | 'json'>('texts');
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);
  const [jsonText, setJsonText] = useState(JSON.stringify(config, null, 2));
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [savedSuccessMessage, setSavedSuccessMessage] = useState<string | null>(null);

  const showSuccess = (msg: string) => {
    setSavedSuccessMessage(msg);
    setTimeout(() => setSavedSuccessMessage(null), 3000);
  };

  const handleSaveTexts = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setJsonText(JSON.stringify(formData, null, 2));
    showSuccess('Textos institucionales actualizados con éxito en memoria local.');
  };

  const handleQuestionChange = (qId: number, field: keyof Question, value: any) => {
    const updated = formData.questions.map((q) => {
      if (q.id === qId) {
        return { ...q, [field]: value };
      }
      return q;
    });
    const newConfig = { ...formData, questions: updated };
    setFormData(newConfig);
    onSaveConfig(newConfig);
    setJsonText(JSON.stringify(newConfig, null, 2));
    showSuccess(`Pregunta #${qId} guardada.`);
  };

  const handleOptionTextChange = (qId: number, optKey: string, newText: string) => {
    const updated = formData.questions.map((q) => {
      if (q.id === qId) {
        const newOptions = q.options.map((opt) => {
          if (opt.key === optKey) {
            return { ...opt, text: newText };
          }
          return opt;
        });
        return { ...q, options: newOptions };
      }
      return q;
    });
    const newConfig = { ...formData, questions: updated };
    setFormData(newConfig);
    onSaveConfig(newConfig);
    setJsonText(JSON.stringify(newConfig, null, 2));
    showSuccess('Opción de respuesta actualizada.');
  };

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (!parsed.questions || !Array.isArray(parsed.questions) || parsed.questions.length === 0) {
        throw new Error('El JSON debe contener un arreglo "questions" con preguntas válidas.');
      }
      setFormData(parsed);
      onSaveConfig(parsed);
      setJsonError(null);
      showSuccess('Configuración JSON importada y aplicada correctamente.');
    } catch (err: any) {
      setJsonError(err.message || 'Error al procesar el archivo JSON.');
    }
  };

  const handleDownloadJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'configuracion_test_temperamentos.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const currentSelectedQuestion = formData.questions.find((q) => q.id === selectedQuestionId) || formData.questions[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-inherit">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className={`p-2 rounded-lg border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
            title="Volver al test"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" />
              <h1 className={`text-lg sm:text-xl font-bold ${colorContrastClasses.textPrimary}`}>
                Panel de Administración y Gestión
              </h1>
            </div>
            <p className={`text-xs ${colorContrastClasses.textMuted}`}>
              Gestión interna de textos, preguntas y estructura pedagógica (Almacenado localmente en cliente).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (window.confirm('¿Deseas restaurar todos los textos y las 16 preguntas originales de fábrica?')) {
                onResetToDefaults();
                showSuccess('Se han restablecido los valores originales por defecto.');
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer Fábrica</span>
          </button>

          <button
            onClick={onExit}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-xs"
          >
            <span>Cerrar Panel</span>
          </button>
        </div>
      </div>

      {savedSuccessMessage && (
        <div className="p-3.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>{savedSuccessMessage}</span>
        </div>
      )}

      {/* TABS */}
      <div className="flex items-center gap-2 border-b border-inherit pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('texts')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeTab === 'texts'
              ? 'bg-indigo-600 text-white'
              : `${colorContrastClasses.cardBorder} border ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Textos Institucionales</span>
        </button>

        <button
          onClick={() => setActiveTab('questions')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeTab === 'questions'
              ? 'bg-indigo-600 text-white'
              : `${colorContrastClasses.cardBorder} border ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Estructura de las 16 Preguntas</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('json');
            setJsonText(JSON.stringify(formData, null, 2));
          }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
            activeTab === 'json'
              ? 'bg-indigo-600 text-white'
              : `${colorContrastClasses.cardBorder} border ${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`
          }`}
        >
          <Download className="w-3.5 h-3.5" />
          <span>Exportar / Importar JSON</span>
        </button>
      </div>

      {/* TAB 1: TEXTOS INSTITUCIONALES */}
      {activeTab === 'texts' && (
        <form onSubmit={handleSaveTexts} className="space-y-6">
          <div className={`p-6 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-4`}>
            <h3 className={`text-sm font-bold ${colorContrastClasses.textPrimary}`}>
              Parámetros de Portada y Manifiesto
            </h3>

            <div>
              <label className={`block text-xs font-medium mb-1 ${colorContrastClasses.textMuted}`}>
                Título Principal
              </label>
              <input
                type="text"
                value={formData.institutionTitle}
                onChange={(e) => setFormData({ ...formData, institutionTitle: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-indigo-500/40 outline-hidden ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-medium mb-1 ${colorContrastClasses.textMuted}`}>
                Subtítulo Institucional
              </label>
              <input
                type="text"
                value={formData.institutionSubtitle}
                onChange={(e) => setFormData({ ...formData, institutionSubtitle: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-indigo-500/40 outline-hidden ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-medium mb-1 ${colorContrastClasses.textMuted}`}>
                Manifiesto Pedagógico sobre la Ira y la Palabra
              </label>
              <textarea
                rows={4}
                value={formData.manifestoParagraph}
                onChange={(e) => setFormData({ ...formData, manifestoParagraph: e.target.value })}
                className={`w-full px-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-indigo-500/40 outline-hidden leading-relaxed ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-medium mb-1 ${colorContrastClasses.textMuted}`}>
                  Cita Filosófica / Ética
                </label>
                <textarea
                  rows={3}
                  value={formData.reflectionQuote.text}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reflectionQuote: { ...formData.reflectionQuote, text: e.target.value },
                    })
                  }
                  className={`w-full px-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-indigo-500/40 outline-hidden leading-relaxed ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-medium mb-1 ${colorContrastClasses.textMuted}`}>
                  Autor de la Cita
                </label>
                <input
                  type="text"
                  value={formData.reflectionQuote.author}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reflectionQuote: { ...formData.reflectionQuote, author: e.target.value },
                    })
                  }
                  className={`w-full px-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-indigo-500/40 outline-hidden ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Guardar Cambios de Texto</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* TAB 2: AUDITORÍA Y EDICIÓN DE PREGUNTAS */}
      {activeTab === 'questions' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Question selector column */}
          <div className={`p-4 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-2 h-[550px] overflow-y-auto`}>
            <span className={`block text-xs font-semibold uppercase tracking-wider ${colorContrastClasses.textMuted} mb-2`}>
              Listado de Preguntas (16)
            </span>
            {formData.questions.map((q) => (
              <button
                key={q.id}
                onClick={() => setSelectedQuestionId(q.id)}
                className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                  selectedQuestionId === q.id
                    ? 'bg-indigo-600 text-white font-medium'
                    : `${colorContrastClasses.cardHover} ${colorContrastClasses.textSecondary}`
                }`}
              >
                <span className="truncate pr-2">
                  #{q.id} {q.category}
                </span>
                <span className="text-[10px] opacity-75 shrink-0">4 ops</span>
              </button>
            ))}
          </div>

          {/* Question editor column */}
          <div className={`md:col-span-2 p-6 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-5`}>
            <div className="flex items-center justify-between pb-3 border-b border-inherit">
              <h3 className={`text-sm font-bold ${colorContrastClasses.textPrimary}`}>
                Editando Pregunta #{currentSelectedQuestion.id}: {currentSelectedQuestion.category}
              </h3>
              <span className="text-xs text-indigo-400 font-mono">
                ID {currentSelectedQuestion.id} / 16
              </span>
            </div>

            <div>
              <label className={`block text-xs font-medium mb-1 ${colorContrastClasses.textMuted}`}>
                Categoría Temática
              </label>
              <input
                type="text"
                value={currentSelectedQuestion.category}
                onChange={(e) => handleQuestionChange(currentSelectedQuestion.id, 'category', e.target.value)}
                className={`w-full px-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-indigo-500/40 outline-hidden ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
              />
            </div>

            <div>
              <label className={`block text-xs font-medium mb-1 ${colorContrastClasses.textMuted}`}>
                Enunciado del Escenario Práctico
              </label>
              <textarea
                rows={3}
                value={currentSelectedQuestion.scenario}
                onChange={(e) => handleQuestionChange(currentSelectedQuestion.id, 'scenario', e.target.value)}
                className={`w-full px-3 py-2 text-xs rounded-lg border focus:ring-2 focus:ring-indigo-500/40 outline-hidden leading-relaxed ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
              />
            </div>

            <div className="space-y-3 pt-2">
              <label className={`block text-xs font-semibold uppercase tracking-wider ${colorContrastClasses.textMuted}`}>
                Opciones y Correspondencia de Temperamento
              </label>

              {currentSelectedQuestion.options.map((opt) => (
                <div
                  key={opt.key}
                  className={`p-3 rounded-lg border ${colorContrastClasses.cardBorder} bg-black/5 space-y-2`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-indigo-400">
                      Opción {opt.key} ({opt.temperament.toUpperCase()})
                    </span>
                    <span className={`text-[10px] ${colorContrastClasses.textMuted}`}>
                      {opt.behavioralNote}
                    </span>
                  </div>

                  <input
                    type="text"
                    value={opt.text}
                    onChange={(e) => handleOptionTextChange(currentSelectedQuestion.id, opt.key, e.target.value)}
                    className={`w-full px-2.5 py-1.5 text-xs rounded-md border focus:ring-2 focus:ring-indigo-500/40 outline-hidden ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: IMPORT/EXPORT JSON */}
      {activeTab === 'json' && (
        <div className={`p-6 rounded-xl border ${colorContrastClasses.cardBg} ${colorContrastClasses.cardBorder} space-y-5`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-inherit">
            <div>
              <h3 className={`text-sm font-bold ${colorContrastClasses.textPrimary}`}>
                Respaldo e Intercambio de Configuración JSON
              </h3>
              <p className={`text-xs ${colorContrastClasses.textMuted}`}>
                Puedes descargar este archivo para respaldar tus preguntas o importarlo en otro equipo sin bases de datos.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownloadJson}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition-colors ${colorContrastClasses.cardBorder} ${colorContrastClasses.cardHover} ${colorContrastClasses.textPrimary}`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar JSON</span>
              </button>
              <button
                onClick={handleImportJson}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-xs"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Aplicar JSON editado</span>
              </button>
            </div>
          </div>

          {jsonError && (
            <div className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{jsonError}</span>
            </div>
          )}

          <div>
            <textarea
              rows={18}
              value={jsonText}
              onChange={(e) => {
                setJsonText(e.target.value);
                setJsonError(null);
              }}
              className={`w-full p-4 font-mono text-xs rounded-lg border focus:ring-2 focus:ring-indigo-500/40 outline-hidden leading-relaxed ${colorContrastClasses.inputBg} ${colorContrastClasses.cardBorder} ${colorContrastClasses.textPrimary}`}
              spellCheck={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};
