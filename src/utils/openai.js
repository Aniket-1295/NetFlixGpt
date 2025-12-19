import OpenAI from 'openai';


const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '', // Use Vite's environment variable or fallback
    dangerouslyAllowBrowser: true
  });

  export default openai