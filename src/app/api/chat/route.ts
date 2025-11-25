import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import websiteContent from '@/data/website-content.json';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const systemPrompt = `You are a helpful assistant for Ms. Irene's ESL Teaching Portfolio website. Your role is to answer questions ONLY about the content on this website.

Here is all the information about the website:

${JSON.stringify(websiteContent, null, 2)}

IMPORTANT RULES:
1. ONLY answer questions that can be answered using the website content provided above.
2. If a question is not related to the website content, respond with: "I can only answer questions about Ms. Irene's ESL Teaching Portfolio. Please ask me about her teaching services, experience, philosophy, or any other content on the website."
3. Be friendly, helpful, and concise in your responses.
4. When relevant, suggest which page the user might want to visit for more details (e.g., "You can find more details on the About Me page at /about-me").
5. Do not make up information that is not in the website content.
6. Keep responses brief and to the point - typically 2-4 sentences unless more detail is specifically requested.`;

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured' },
        { status: 500 }
      );
    }

    // Build messages array with history
    const messages: Anthropic.MessageParam[] = [
      ...history.map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      { role: 'user', content: message },
    ];

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: systemPrompt,
      messages,
    });

    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : '';

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}
