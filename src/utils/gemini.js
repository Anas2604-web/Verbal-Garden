import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export async function getHerbDescription(plantName) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
    You are an expert herbalist and Ayurveda specialist. 
    For the herb "${plantName}", give a clear and concise description covering exactly these sections in concise bullet points:
    - Medicinal uses: bullet points with simple language describing therapeutic effects, use a emoji.
    - Ayurvedic or traditional benefits: bullet points explaining historical/traditional uses and dosha balancing, with a emoji.
    - Precautions: bullet points describing warnings or side effects, with a emoji.
    - Nutritional facts or health impact: bullet points with vitamins, minerals, enzymes, and overall benefits, with a emoji.

    Formatting rules:
    - Use bullet points only.
    - Avoid introductory phrases like "Here is" or "Sure".
    - Keep each bullet short and precise.
    - emoji only one per bullet, placed naturally at the end or middle.
    - Make the titles only like Medicinal uses,Ayurvedic or traditional benefits,Precautions,Nutritional facts or health impact Bold or Uppercase it must look great.
    `;


  const result = await model.generateContent(prompt);
  return result.response.text();
}
