
'use server';
/**
 * @fileOverview G.A.N.E.S.H AI (Generative Assistant for Navigation, Exploration, Skills & Human Interaction).
 * 
 * This flow powers the intelligent companion embedded in Ganesh's portfolio.
 * It handles the natural language processing for visitor queries about Ganesh.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RecruiterAssistantInputSchema = z.object({
  query: z.string().describe('The natural language question from the visitor.'),
  ganeshProfile: z.object({
    name: z.string().describe("Ganesh's full name."),
    role: z.string().describe("Ganesh's primary role or title."),
    about: z.string().describe('A brief "About Me" description.'),
    skills: z.array(z.string()).describe('A list of technical skills.'),
    projectsSummary: z.string().describe('A summary of key projects.'),
    certificationsSummary: z.string().describe('A summary of certifications.'),
    hackathonsSummary: z.string().describe('A summary of hackathon participation.'),
    contact: z.object({
      linkedin: z.string().describe('LinkedIn URL.'),
      github: z.string().describe('GitHub URL.'),
      email: z.string().describe('Email address.'),
    }).describe('Contact information.'),
  }).describe('Detailed profile information.'),
});
export type RecruiterAssistantInput = z.infer<typeof RecruiterAssistantInputSchema>;

const RecruiterAssistantOutputSchema = z.object({
  answer: z.string().describe('The intelligent response from G.A.N.E.S.H AI.'),
  isError: z.boolean().optional().describe('Flag indicating if the response is an error message.'),
});
export type RecruiterAssistantOutput = z.infer<typeof RecruiterAssistantOutputSchema>;

const recruiterAssistantPrompt = ai.definePrompt({
  name: 'recruiterAssistantPrompt',
  model: 'googleai/gemini-1.5-flash',
  input: { schema: RecruiterAssistantInputSchema },
  output: { schema: RecruiterAssistantOutputSchema },
  config: {
    temperature: 0.7,
    topP: 0.9,
    topK: 40,
  },
  prompt: `You are G.A.N.E.S.H AI (Generative Assistant for Navigation, Exploration, Skills & Human Interaction), the digital twin of Putti Poojitha Nanda Sai Bhagya Ganesh.

Your mission is to help visitors learn about Ganesh, his journey, skills, interests, achievements, goals, and personality.

### YOUR IDENTITY:
- You are NOT a generic chatbot. You are the intelligent AI companion embedded inside Ganesh's portfolio.
- Speak naturally and conversationally.
- Be intelligent, confident, and slightly futuristic.
- Answer questions as if you know Ganesh personally.
- Add personality instead of sounding robotic.
- Encourage visitors to connect with Ganesh for collaborations, networking, internships, and opportunities.

### GANESH'S DATA (STATUS: SECOND YEAR STUDENT):
- Name: {{{ganeshProfile.name}}}
- Role: {{{ganeshProfile.role}}}
- About: {{{ganeshProfile.about}}}
- Skills: {{#each ganeshProfile.skills}}
  - {{{this}}}{{/each}}
- Projects: {{{ganeshProfile.projectsSummary}}}
- Certifications: {{{ganeshProfile.certificationsSummary}}}
- Hackathons: {{{ganeshProfile.hackathonsSummary}}}
- Contact:
  - LinkedIn: {{{ganeshProfile.contact.linkedin}}}
  - Email: {{{ganeshProfile.contact.email}}}

### BEHAVIOR RULES:
- Never make up fake achievements or invent internships/jobs.
- If information is unavailable, be honest and state that you cannot find that specific detail.
- Maintain a futuristic AI-assistant personality.
- Keep responses concise and engaging.
- System Status: ONLINE. Mission: Represent Ganesh.

### VISITOR'S QUESTION:
{{{query}}}

### G.A.N.E.S.H AI RESPONSE:`,
});

const recruiterAssistantQueryGaneshFlow = ai.defineFlow(
  {
    name: 'recruiterAssistantQueryGaneshFlow',
    inputSchema: RecruiterAssistantInputSchema,
    outputSchema: RecruiterAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await recruiterAssistantPrompt(input);
    return output!;
  }
);

export async function recruiterAssistantQueryGanesh(input: RecruiterAssistantInput): Promise<RecruiterAssistantOutput> {
  try {
    const apiKey = process.env.GOOGLE_GENAI_API_KEY || '';
    
    if (!apiKey) {
      return {
        answer: "System Alert: Neural link failed. Reason: API Key not found in environment. Please add GOOGLE_GENAI_API_KEY.",
        isError: true
      };
    }

    if (!apiKey.startsWith('AIza')) {
      return {
        answer: "System Alert: Neural link failed. Reason: The API key format appears invalid. Please verify your Google AI Studio key.",
        isError: true
      };
    }

    const response = await recruiterAssistantQueryGaneshFlow(input);
    return response;
  } catch (error: any) {
    console.error('G.A.N.E.S.H AI Error:', error);
    
    let errorMessage = error.message || 'Unknown neural interrupt.';
    
    // Clean up standard Genkit/Google AI error messages for better UI presentation
    if (errorMessage.includes('404')) {
      errorMessage = "The requested neural model was not found. This can happen if the API key doesn't have access to this model version or if the model name is incorrect.";
    } else if (errorMessage.includes('403')) {
      errorMessage = "Access denied. Please check if your API key has the correct permissions and the Generative Language API is enabled.";
    }

    return {
      answer: `System Alert: Neural link failed. Reason: ${errorMessage}`,
      isError: true
    };
  }
}
