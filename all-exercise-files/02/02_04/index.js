import 'dotenv/config.js';
import OpenAI from 'openai';
import readlineSync from 'readline-sync';

// OpenAI configuration
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System message - define how the AI should behave
const MESSAGE_SYSTEM = "You are a skilled stand-up comedian with a knack for telling 1-2 sentence funny stories.";
const MODEL_ENGINE = "gpt-3.5-turbo";

// Store conversation history
let messages = [{ role: "system", content: MESSAGE_SYSTEM }];

// Get user input
function getInput(promptMessage) {
  return readlineSync.question(promptMessage, {
    hideEchoBack: false,
  });
}

async function main() {
  console.log("\n\n----------------------------------");
  console.log("    🤡 AI JOKES GENERATOR 🤡   ");
  console.log("----------------------------------\n");
  console.log("Ask the AI comedian for jokes!");
  console.log("Type 'x' to exit\n");
  
  await runConversation();
}

async function runConversation() {
  while (true) {
    const input = getInput("You: ");
    
    if (input.toLowerCase() === "x") {
      console.log("\nThanks for the laughs! Goodbye! 👋");
      process.exit();
    }

    // Add user message to conversation history
    messages.push({ role: "user", content: input });

    try {
      // Call OpenAI API
      const response = await client.chat.completions.create({
        model: MODEL_ENGINE,
        messages: messages,
      });

      // Extract and display AI response
      const aiMessage = response.choices[0].message.content;
      console.log(`\nAI Comedian: ${aiMessage}`);
      console.log(`Tokens used: ${response.usage.total_tokens}\n`);
      
      // Add AI response to conversation history
      messages.push({ role: "assistant", content: aiMessage });
    } catch (error) {
      console.error("Error:", error.message);
      console.log("Make sure your OPENAI_API_KEY is set correctly in .env\n");
    }
  }
}

main(); 