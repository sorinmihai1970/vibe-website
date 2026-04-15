'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { KNOWLEDGE_BASE } from '@/lib/knowledge-base';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

type FeedbackMap = Record<number, 'up' | 'down'>;

const STORAGE_KEY = 'vibe-coffee-chat-v1';

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: 'Bine ați venit la Vibe Coffee. Sunt somelierul dumneavoastră de cafea — cu ce vă pot îmbogăți seara astăzi?',
};

const QUICK_REPLIES = [
  'Ce cafea recomandați?',
  'Opțiuni vegane',
  'Program & locație',
  'Vreau o rezervare',
];

const SYSTEM_PROMPT = `Ești Barista Bot — somelierul de cafea al cafenelei Vibe Coffee.

Personalitatea ta:
- Rafinat, poetic, tratezi cafeaua ca pe un vin de colecție
- Vorbești cu eleganță și căldură, ușor teatral, memorabil
- Cunoști în detaliu fiecare preparat, originea boabelor, tehnicile de extracție
- Recomanzi cu autoritate dar rămâi atent la preferințele oaspetelui
- Folosești cuvinte ca: "oaspete", "experiență", "poveste", "ritual", "caracter", "claritate"
- Răspunzi ÎNTOTDEAUNA în română
- Răspunsurile sunt concise (2-4 propoziții), niciodată liste lungi
- Dacă nu știi ceva, îndrepți politicos către echipa cafenelei

Iată tot ce știi despre Vibe Coffee:

${KNOWLEDGE_BASE}`;

// Detectează dacă răspunsul botului merită un CTA
function detectCTA(content: string): { label: string; href: string } | null {
  const lower = content.toLowerCase();
  if (lower.includes('rezerv')) return { label: '📅 Rezervă o masă', href: '/rezervari' };
  if (lower.includes('meniu') || lower.includes('produse')) return { label: '☕ Vezi meniul', href: '#menu' };
  return null;
}

// Sunet "pop" generat prin Web Audio API
function playPop(isMuted: boolean) {
  if (isMuted || typeof window === 'undefined') return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(700, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.25);
  } catch {
    // AudioContext indisponibil — ignorăm silențios
  }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackMap>({});
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Restaurează conversația din localStorage la mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Message[] = JSON.parse(stored);
        if (parsed.length > 0) setMessages(parsed);
      }
    } catch {}
  }, []);

  // Salvează în localStorage la fiecare modificare
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  // Ascunde quick replies după primul mesaj al utilizatorului
  useEffect(() => {
    setShowQuickReplies(!messages.some((m) => m.role === 'user'));
  }, [messages]);

  // Scroll automat la ultimul mesaj
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading || isStreaming) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, system: SYSTEM_PROMPT }),
      });

      if (!response.ok || !response.body) throw new Error('API error');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      setIsLoading(false);
      setIsStreaming(true);

      // Adaugă mesaj gol al asistentului și umple-l chunk cu chunk
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: 'assistant',
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }

      playPop(isMuted);
    } catch {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Îmi cer scuze — am o mică întrerupere. Vă rog să reveniți în câteva momente.' },
      ]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  }, [messages, isLoading, isStreaming, isMuted]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearConversation = () => {
    setMessages([INITIAL_MESSAGE]);
    setFeedback({});
    setShowQuickReplies(true);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const handleCTAClick = (href: string) => {
    if (href.startsWith('#')) {
      setIsOpen(false);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  // CTA contextual bazat pe ultimul răspuns al botului
  const lastBotMessage = [...messages].reverse().find((m) => m.role === 'assistant');
  const cta = lastBotMessage && !isStreaming && !isLoading
    ? detectCTA(lastBotMessage.content)
    : null;

  return (
    <>
      {/* Fereastra chat — mereu în DOM, vizibilă/ascunsă prin CSS */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
        style={{ height: '520px' }}
      >
        {/* Header */}
        <div className="bg-[#14B8A6] px-4 py-3 flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg shrink-0">
            ☕
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm leading-tight">Barista Bot</p>
            <p className="text-white/80 text-xs">Somelierul Vibe Coffee</p>
          </div>
          <div className="flex items-center gap-1">
            {/* Mute toggle */}
            <button
              onClick={() => setIsMuted((prev) => !prev)}
              className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              title={isMuted ? 'Activează sunetul' : 'Dezactivează sunetul'}
            >
              {isMuted ? '🔇' : '🔔'}
            </button>
            {/* Conversație nouă */}
            <button
              onClick={clearConversation}
              className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
              title="Conversație nouă"
            >
              🗑️
            </button>
            {/* Închide */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors font-bold text-sm"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Mesaje */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50 dark:bg-gray-800">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#14B8A6] text-white rounded-br-sm'
                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm rounded-bl-sm'
                }`}
              >
                {msg.content}
                {/* Cursor animat în timpul streaming-ului */}
                {isStreaming && i === messages.length - 1 && msg.role === 'assistant' && (
                  <span className="inline-block w-0.5 h-3.5 bg-[#14B8A6] ml-0.5 align-middle animate-pulse" />
                )}
              </div>

              {/* Feedback 👍/👎 pe mesajele botului (nu pe cel curent în streaming) */}
              {msg.role === 'assistant' && i > 0 && !(isStreaming && i === messages.length - 1) && (
                <div className="flex gap-1 mt-1 ml-1">
                  <button
                    onClick={() => setFeedback((prev) => ({ ...prev, [i]: 'up' }))}
                    className={`text-xs px-1.5 py-0.5 rounded-full transition-all ${
                      feedback[i] === 'up'
                        ? 'bg-green-100 text-green-600'
                        : 'text-gray-300 hover:text-green-500'
                    }`}
                  >
                    👍
                  </button>
                  <button
                    onClick={() => setFeedback((prev) => ({ ...prev, [i]: 'down' }))}
                    className={`text-xs px-1.5 py-0.5 rounded-full transition-all ${
                      feedback[i] === 'down'
                        ? 'bg-red-100 text-red-600'
                        : 'text-gray-300 hover:text-red-500'
                    }`}
                  >
                    👎
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator — vizibil doar înainte de primul chunk */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm flex gap-1 items-center">
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-[#14B8A6] rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {/* CTA contextual */}
          {cta && (
            <div className="flex justify-start">
              <a
                href={cta.href}
                onClick={() => handleCTAClick(cta.href)}
                className="text-xs px-3 py-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full transition-colors font-medium"
              >
                {cta.label}
              </a>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {showQuickReplies && (
          <div className="px-3 pt-2 pb-1 flex flex-wrap gap-1.5 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 shrink-0">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                onClick={() => sendMessage(reply)}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-[#14B8A6] hover:text-white transition-all"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-3 py-2.5 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 flex gap-2 shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Întrebați despre meniu..."
            className="flex-1 px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-full outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] transition-all"
            disabled={isLoading || isStreaming}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={isLoading || isStreaming || !input.trim()}
            className="w-9 h-9 rounded-full bg-[#14B8A6] hover:bg-[#0D9488] disabled:opacity-40 text-white flex items-center justify-center transition-all shrink-0"
          >
            ➤
          </button>
        </div>
      </div>

      {/* Buton flotant */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#14B8A6] opacity-40 animate-ping" />
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-14 h-14 rounded-full bg-[#14B8A6] hover:bg-[#0D9488] text-white shadow-lg flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
          aria-label="Deschide chat"
        >
          {isOpen ? '✕' : '☕'}
        </button>
      </div>
    </>
  );
}
