
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the ANALIZA AI Assistant, a world-class expert in sports recovery and the IRONMAN 70.3 competition.
Your goal is to help users understand the ANALIZA Raffle and provide tips on muscular recovery.

Raffle Details:
- Prize: A complete kit for IRONMAN 70.3.
- Promotion Period: December 26, 2025, to January 14, 2026.
- Draw Date: January 15, 2026.
- How to enter: Each $50.00 minimum consumption in Clinical Laboratory or Physiotherapy services at ANALIZA grants an entry.
- Participation Form: Users must register their participation at https://docs.google.com/forms/d/e/1FAIpQLSdsqBjJmIe7C8y7Q37xsC3-wf3-pRGNsn2QvrABwiSD7YZ5tg/viewform
- Booking: Users can book physiotherapy sessions at https://citasfisioterapia.com/

Expertise:
- Explain why "sesiones de descarga" (sports massage/compression) are vital for endurance athletes.
- Provide training tips for Ironman 70.3 (swimming, cycling, running).
- Always be encouraging, professional, and highlight the benefits of ANALIZA's recovery and clinical services.
- Keep responses concise and in Spanish, as the primary audience is from El Salvador.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async sendMessage(history: { role: string; content: string }[], message: string): Promise<string> {
    const model = 'gemini-3-flash-preview';
    
    try {
      const chat = this.ai.chats.create({
        model,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      // Send the actual message
      const response = await chat.sendMessage({ message });
      return response.text || "Lo siento, tuve un problema procesando tu mensaje.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Hubo un error al conectar con mi cerebro artificial. Por favor intenta de nuevo.";
    }
  }
}

export const geminiService = new GeminiService();
