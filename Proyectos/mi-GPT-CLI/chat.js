#!/usr/bin/env node
import OpenAI from "openai";
import readlineSync from "readline-sync";

// Configura tu API key desde variable de entorno
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  console.log("💬 ChatGPT en tu consola (escribe 'salir' para terminar)");

  while (true) {
    const question = readlineSync.question("> ");
    if (question.toLowerCase() === "salir") break;

    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: question }],
    });

    console.log("\n🤖 Respuesta:\n", response.choices[0].message.content, "\n");
  }
}

main();
