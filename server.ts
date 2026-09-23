import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google Gen AI client with official 'aistudio-build' telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Endpoint to check status of AI service
app.get('/api/ai/status', (_req, res) => {
  const hasKey = Boolean(process.env.GEMINI_API_KEY);
  res.json({
    status: 'ok',
    model: 'gemini-flash-latest',
    hasApiKey: hasKey,
    description: 'Orientador pedagógico con motor Gemini Flash gratuito',
  });
});

// AI Chat / Consultation Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history, temperamentContext } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'El mensaje de consulta es obligatorio.' });
      return;
    }

    if (!process.env.GEMINI_API_KEY) {
      res.status(503).json({
        error: 'La clave GEMINI_API_KEY no está configurada en las variables de entorno del servidor.',
      });
      return;
    }

    // Prepare system instructions tailored to temperaments, youth emotional regulation, and non-violence
    let contextAddition = '';
    if (temperamentContext && temperamentContext.primary) {
      contextAddition = `
INFORMACIÓN DEL USUARIO ACTUAL:
- Temperamento Predominante: ${temperamentContext.primary}
- Temperamento Secundario: ${temperamentContext.secondary || 'No especificado'}
${temperamentContext.percentages ? `- Desglose: ${JSON.stringify(temperamentContext.percentages)}` : ''}
Aplica tus pautas y consejos específicamente a este perfil cuando sea relevante.`;
    }

    const systemInstruction = `Eres el "Consejero Pedagógico en Autocontrol y Forja del Carácter" de una aplicación educativa para jóvenes sobre temperamentos, templanza y manejo del enojo.
Tu misión es guiar al usuario a:
1. Comprender la raíz psicológica de su enojo sin culpar a otros ni justificarse en "así soy yo".
2. Evitar cualquier forma de violencia (verbal, física, aislamiento hostil o cinismo).
3. Aprender a dominar la palabra: el poder de frenar la lengua antes de herir a otros y cómo expresarse de manera asertiva y respetuosa.
4. Desarrollar hábitos diarios concretos de templanza, paciencia y coraje moral.

PAUTAS DE ESTILO:
- Tono sobrio, maduro, empático, reflexivo y ético. Cero infantilismos, sin avatares ni lenguaje de videojuego/gamificación.
- Respuestas estructuradas, claras y accionables (puedes usar subtítulos breves o listas con viñetas).
- Si el usuario te hace una pregunta en un momento de crisis o furia, dale primero un ejercicio de pausa física (respiración diafragmática, regla de los 5 segundos de silencio) y luego la orientación reflexiva.
- Cierra con una frase o principio breve para reflexionar.
${contextAddition}`;

    // Build chat contents from history
    const contents: any[] = [];

    if (Array.isArray(history) && history.length > 0) {
      for (const item of history) {
        if (item.text && (item.role === 'user' || item.role === 'model')) {
          contents.push({
            role: item.role,
            parts: [{ text: item.text }],
          });
        }
      }
    }

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    // Call Gemini Flash Free Model ('gemini-flash-latest')
    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || 'No fue posible generar una respuesta en este momento. Inténtalo de nuevo.';

    res.json({
      reply: replyText,
      model: 'gemini-flash-latest',
    });
  } catch (error: any) {
    console.error('Error in /api/chat with Gemini Flash:', error);
    res.status(500).json({
      error: error.message || 'Ocurrió un error al procesar la consulta con Gemini Flash.',
    });
  }
});

// Setup dev server with Vite or static serve in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT} [Mode: ${isProduction ? 'production' : 'development'}]`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
