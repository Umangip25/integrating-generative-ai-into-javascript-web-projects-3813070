import 'dotenv/config.js';
import OpenAI from 'openai';
import readlineSync from 'readline-sync';

// Open AI configuration
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Get user input
function getInput(promptMessage) {
  return readlineSync.question(promptMessage, {
    hideEchoBack: false, // The typed characters won't be displayed if set to true
  });
}

async function main() {
  console.log('\n\n----------------------------------');
  console.log('          CHAT WITH AI 🤖   ');
  console.log('----------------------------------\n');
  console.log("type 'x' to exit the conversation");
  await runConversation();
}

async function runConversation() {
  while (true) {
    const input = getInput('You: ');
    if (input === 'x') {
      console.log("Goodbye!");
      process.exit();
    }
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: input },
      ],
    });

    console.log('AI: ' + response.choices[0].message.content);
  }
}

main();
