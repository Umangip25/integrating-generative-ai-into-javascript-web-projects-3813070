# 🤡 Challenge: AI Jokes Generator

**Objective**: Create an AI chatbot that generates funny jokes and stories using prompt engineering and OpenAI's GPT-3.5-turbo model.

## Key Concepts

- **System Message**: Instructs the AI how to behave (act as a "skilled stand-up comedian")
- **Prompt Engineering**: The art of writing effective prompts to get desired outputs
- **Conversation History**: Maintaining message context for coherent conversations
- **API Integration**: Using OpenAI's chat completions API

## Dependencies

- **dotenv**: Load environment variables from `.env` file
- **nodemon**: Auto-restart server on source changes
- **openai**: Official OpenAI API library for Node.js
- **readline-sync**: Interactive console input for user prompts

## Setup Instructions

### 1. Create your `.env` file

```bash
# Copy the template
cp .env.example .env

# Edit .env and add your OpenAI API key
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
# Start the jokes generator
npm start

# Or use nodemon for auto-reload during development
npm run dev
```

## How It Works

1. **System Message**: AI is instructed to be a stand-up comedian
2. **User Input**: Ask for jokes or funny stories
3. **Context**: Messages are stored to maintain conversation history
4. **API Call**: Sends messages to OpenAI and gets responses
5. **Response**: Display AI's comedic response

## Example Prompts

- "Tell me a funny joke about programming"
- "Make a joke about web development"
- "What's funny about JavaScript callbacks?"
- "Create a humorous story about debugging"

Type `x` to exit.

## 🔐 Security Notes

- ✅ `.env` is in `.gitignore` - never committed
- ✅ Use `.env.example` as a template
- ✅ Keep your API key private and secret
- ⚠️ Never share your actual `.env` file

## Advanced: GitHub Codespaces

For cloud-based development with secrets:

1. Go to your GitHub fork settings
2. **Settings** → **Secrets and variables** → **Codespaces**
3. Add secret: `OPENAI_API_KEY` = your actual key
4. Create a Codespace - it uses secrets automatically

## Troubleshooting

| Issue                         | Solution                                       |
| ----------------------------- | ---------------------------------------------- |
| "OPENAI_API_KEY is undefined" | Check `.env` exists with your key              |
| "API key invalid"             | Verify at https://platform.openai.com/api-keys |
| "npm install fails"           | Delete `package-lock.json` and retry           |

## Bonus Improvements

Try modifying the `MESSAGE_SYSTEM` prompt to:

- Change the comedy style
- Add character traits
- Specify joke types
  -Set output length limits

`npm start`
