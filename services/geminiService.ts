
import { GoogleGenAI, Type } from "@google/genai";
import { DesignSystem } from "../types";

// Analyze an image and generate a design system using Gemini
export const analyzeDesignImage = async (base64Image: string): Promise<DesignSystem> => {
  // Initialize AI client with API key from environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Analyze this image and generate a comprehensive Web Design Identity system.
    Follow these specific guidelines based on the visual cues in the image:
    1. Identify the aesthetic (e.g., Dark Mode, Surrealism).
    2. Extract exact HEX codes for the palette.
    3. Suggest typography that pairs 'Futuristic' with 'Human'.
    4. Describe UI elements based on 'Rim Light' effects.
    5. Suggest GSAP and Three.js animations.
    6. Propose a spacious, premium layout.
  `;

  // Use gemini-3-pro-preview for complex reasoning and multimodal analysis tasks
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: {
      parts: [
        { inlineData: { data: base64Image.split(',')[1], mimeType: 'image/jpeg' } },
        { text: prompt }
      ]
    },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          visualLanguage: {
            type: Type.OBJECT,
            properties: {
              aesthetic: { type: Type.STRING },
              keywords: { type: Type.ARRAY, items: { type: Type.STRING } },
              description: { type: Type.STRING }
            },
            required: ["aesthetic", "keywords", "description"]
          },
          palette: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                hex: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ["name", "hex", "description"]
            }
          },
          typography: {
            type: Type.OBJECT,
            properties: {
              heading: { type: Type.STRING },
              body: { type: Type.STRING },
              mono: { type: Type.STRING },
              rationale: { type: Type.STRING }
            },
            required: ["heading", "body", "mono", "rationale"]
          },
          uiElements: {
            type: Type.OBJECT,
            properties: {
              buttons: { type: Type.STRING },
              cards: { type: Type.STRING },
              borders: { type: Type.STRING }
            },
            required: ["buttons", "cards", "borders"]
          },
          animations: {
            type: Type.OBJECT,
            properties: {
              gsap: { type: Type.STRING },
              threejs: { type: Type.STRING }
            },
            required: ["gsap", "threejs"]
          },
          layout: { type: Type.STRING }
        },
        required: ["visualLanguage", "palette", "typography", "uiElements", "animations", "layout"]
      }
    }
  });

  // Access the text property directly from GenerateContentResponse
  const text = response.text;
  if (!text) {
    throw new Error("No response text received from the model");
  }
  
  return JSON.parse(text);
};
