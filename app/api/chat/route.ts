/**
 * 🤖 CHAT API ROUTE - Anthropic Claude AI
 *
 * Endpoint pentru conversații cu Barista Bot
 * POST /api/chat
 * Body: { message: string, conversationHistory?: Message[] }
 */

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { KNOWLEDGE_BASE, BOT_PERSONALITY } from '@/lib/chatbot-knowledge';

// Inițializare Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// 📚 SYSTEM PROMPT - Personalitate + Knowledge Base
const SYSTEM_PROMPT = `${BOT_PERSONALITY}

BAZA DE CUNOSTINTE:
${KNOWLEDGE_BASE}

REGULI:
- Raspunde DOAR in romana
- Raspunde SCURT: maxim 2-3 propozitii
- Foloseste DOAR informatiile din baza de cunostinte
- NU inventa produse sau preturi
- Daca nu stii, spune sincer si ofera numarul de telefon: 0721 234 567
`;

// 🚀 POST HANDLER
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory = [] } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY not configured. Check .env.local' },
        { status: 500 }
      );
    }

    // Construim istoricul - ultimele 6 mesaje ca context
    const history = conversationHistory.slice(-6).map((msg: any) => ({
      role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
      content: msg.text,
    }));

    // Adăugăm mesajul curent
    const messages = [...history, { role: 'user' as const, content: message }];

    // API Call către Claude AI
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 200,
      system: SYSTEM_PROMPT,
      messages,
    });

    // Extragem textul din răspuns
    const botResponse = response.content[0].type === 'text'
      ? response.content[0].text
      : 'Scuze, nu am înțeles. Poți repeta?';

    return NextResponse.json({
      response: botResponse,
    });
  } catch (error: any) {
    console.error('Anthropic API Error:', error);

    if (error.status === 401) {
      return NextResponse.json(
        { error: 'Invalid ANTHROPIC_API_KEY. Check .env.local' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to get response from AI', details: error.message },
      { status: 500 }
    );
  }
}
