import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSEOContent = async (pageContext: string): Promise<{ title: string; description: string; keywords: string[] }> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are an SEO expert for a high-end design website called "Sibylhaus".
      Generate an SEO optimized Title, Meta Description, and 5 Keywords based on the following context:
      "${pageContext}"
      
      The tone should be sophisticated, minimalist, and curated.
      
      Return the result as a JSON object with keys: "title", "description", "keywords".
      Do not wrap in markdown code blocks. Just return raw JSON.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini SEO Generation Error:", error);
    return {
      title: "Sibylhaus | Curated Insights",
      description: "Discover unique tarot and intuitive readings at Sibylhaus.",
      keywords: ["tarot", "mystical", "readings"]
    };
  }
};

export const generateBrandManifesto = async (): Promise<{ headline: string; body: string }> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Write a short, poetic, high-end brand manifesto for "Sibylhaus", a mystical tarot shop.
      
      Context:
      - I provide tarot readings and intuitive insights.
      - I believe in clarity, speed, and honesty.
      - I am direct and grounded.
      
      Output Requirements:
      - A short, punchy Headline (max 6 words).
      - A Body paragraph (max 50 words) that sounds editorial and inspiring.
      
      Return as JSON: { "headline": "...", "body": "..." }
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) return { headline: "Curated for the Soul", body: "Timeless insights that tell a story." };
    return JSON.parse(text);
  } catch (error) {
     return {
        headline: "Beauty in the Truth",
        body: "I curate readings that carry the weight of truth. Every session at Sibylhaus is chosen for its clarity and ability to transform confusion into purpose."
     };
  }
};

export const enhanceBio = async (): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Write a very short (1 sentence) sophisticated tagline for a high-end tarot reader.
    `;
    
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Curating timeless insights for the modern soul.";
  } catch (error) {
    return "Curating timeless insights for the modern soul.";
  }
};

export const editImage = async (image: string, prompt: string): Promise<string | null> => {
  try {
    const model = 'gemini-2.5-flash-image';
    
    // Extract base64 data and mime type from Data URL
    // Format: data:[<mediatype>][;base64],<data>
    const matches = image.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.+)$/);
    
    if (!matches || matches.length !== 3) {
      console.error("Invalid image format. Expected Data URL.");
      return null;
    }
    
    const mimeType = matches[1];
    const data = matches[2];

    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType,
              data
            }
          },
          {
            text: prompt
          }
        ]
      }
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const resultMimeType = part.inlineData.mimeType || 'image/png';
          return `data:${resultMimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error("Gemini Image Editing Error:", error);
    return null;
  }
};
