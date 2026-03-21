import { GoogleGenAI } from "@google/genai";

async function invokegminiAI(){
    const apiKey = process.env.GOOGLE_GENAI_API_KEY;

    if (!apiKey) {
        throw new Error("GOOGLE_GENAI_API_KEY is missing in .env");
    }

    const ai = new GoogleGenAI({
        apiKey
    });

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents:"hello gemini ! explain me what is the interview"
    })

    console.log(response.text)
}

export {invokegminiAI}