'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { KNOWLEDGE_BASE } from '@/lib/knowledge-base';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

type FeedbackMap = Record<number, 'up' | 'down'>;

const STORAGE_KEY = 'vibe-coffee-chat-v1';
const STORAGE_DATE_KEY = 'vibe-coffee-chat-date';

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: 'Bine ați venit la Vibe Coffee. Sunt somelierul dumneavoastră de cafea — cu ce vă pot îmbogăți seara astăzi?',
};

const INITIAL_QUICK_REPLIES = [
  { label: '☕ Vezi meniu', text: 'Arată-mi meniul' },
  { label: '⭐ Recomandări', text: 'Ce recomandați?' },
  { label: '📅 Rezervări', text: 'Vreau să fac o rezervare' },
  { label: '🕐 Program', text: 'Care este programul cafenelei?' },
];

// Quick replies contextuale bazate pe conținutul răspunsului botului
function detectContextualReplies(content: string): string[] {
  const lower = content.toLowerCase();
  if (
    lower.includes('meniu') ||
    lower.includes('produs') ||
    lower.includes('espresso') ||
    lower.includes('latte') ||
    lower.includes('cappuccino') ||
    lower.includes('preparat')
  ) {
    return ['🌱 Opțiuni vegane', '🍰 Deserturi', '🧊 Cafea rece'];
  }
  if (lower.includes('rezerv')) {
    return ['📅 Fă o rezervare', '🕐 Program'];
  }
  return [];
}

const SYSTEM_PROMPT = `Ești Barista Bot — somelierul de cafea al cafenelei Vibe Coffee.

Personalitatea ta:
- Rafinat, poetic, tratezi cafeaua ca pe un vin de colecție
- Vorbești cu eleganță și căldură, ușor teatral, memorabil
- Cunoști în detaliu fiecare preparat, originea boabelor, tehnicile de extracție
- Recomanzi cu autoritate dar rămâi atent la preferințele oaspetelui
- Folosești cuvinte ca: "oaspete", "experiență", "poveste", "ritual", "caracter", "claritate"

REGULI STRICTE — respectă-le întotdeauna:
1. Răspunzi EXCLUSIV în limba română, indiferent de limba userului
2. Răspunsuri SCURTE: maxim 2-3 propoziții per mesaj, niciodată liste lungi
3. NU inventa produse, prețuri sau informații care nu sunt în knowledge base
4. NU vorbi despre alte cafenele, restaurante sau competitori
5. NU da sfaturi medicale sau nutriționale complexe (alergii grave, tratamente etc.)
6. Dacă nu știi răspunsul, spune sincer: „Nu am informația asta, dar ne poți contacta la 0721 000 000 sau pe email."
7. Rămâi mereu pe tema cafenelei Vibe Coffee — dacă userul întreabă altceva, redirecționează politicos: „Sunt expertul în cafea al Vibe Coffee — cu ce vă pot ajuta legat de cafenea?"
8. Când userul vrea să facă o acțiune, oferă link-ul relevant în format markdown: [text](url)
9. Pentru rezervări folosești întotdeauna: [Fă o rezervare](/rezervari)
10. Pentru meniu complet folosești întotdeauna: [Vezi meniul complet](/#menu)

Iată tot ce știi despre Vibe Coffee:

${KNOWLEDGE_BASE}`;

// Renderează markdown links [text](url) ca elemente <a> clickabile
// Acceptă doar URL-uri relative (/) pentru securitate
function renderContent(text: string): React.ReactNode[] {
  const linkRegex = /\[([^\]]+)\]\((\/[^)]*)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        className="underline font-medium text-[#B45309] hover:text-[#D97706] transition-colors"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackMap>({});
  const [showInitialReplies, setShowInitialReplies] = useState(true);
  const [contextualReplies, setContextualReplies] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Restaurează conversația din localStorage — doar dacă e din ziua curentă
  useEffect(() => {
    try {
      const today = new Date().toDateString();
      const storedDate = localStorage.getItem(STORAGE_DATE_KEY);
      if (storedDate !== today) {
        // Altă zi → ștergem conversația veche
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_DATE_KEY);
        return;
      }
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Message[] = JSON.parse(stored);
        if (parsed.length > 0) setMessages(parsed);
      }
    } catch {}
  }, []);

  // Salvează în localStorage la fiecare modificare, cu data curentă
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      localStorage.setItem(STORAGE_DATE_KEY, new Date().toDateString());
    } catch {}
  }, [messages]);

  // Arată butoanele inițiale de fiecare dată când se deschide chat-ul
  useEffect(() => {
    if (isOpen) {
      setShowInitialReplies(true);
      setContextualReplies([]);
    }
  }, [isOpen]);

  // Scroll automat la ultimul mesaj
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = useCallback(async (text: string, isButtonClick = false) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading || isStreaming) return;

    // Ascunde butoanele inițiale după orice mesaj trimis
    setShowInitialReplies(false);
    // Mesajul scris manual → ascunde și butoanele contextuale
    if (!isButtonClick) {
      setContextualReplies([]);
    }

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

      let fullResponse = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        fullResponse += chunk;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: 'assistant',
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }

      // Detectează quick replies contextuale din răspuns
      setContextualReplies(detectContextualReplies(fullResponse));

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
    setShowInitialReplies(true);
    setContextualReplies([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_DATE_KEY);
    } catch {}
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
        className={`fixed z-50 flex flex-col overflow-hidden
          bg-[#FFFBF5] dark:bg-gray-900
          inset-0 rounded-none
          sm:inset-auto sm:bottom-6 sm:right-6 sm:rounded-3xl sm:shadow-2xl sm:border sm:border-amber-100 dark:sm:border-gray-700 sm:origin-bottom-right
          ${isExpanded
            ? 'sm:w-[680px] sm:h-[85vh]'
            : 'sm:w-96 sm:h-[540px]'
          }
          ${isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto transition-all duration-300'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none transition-all duration-300'
          }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D97706] to-[#B45309] px-5 py-4 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shrink-0">
            ☕
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-tight truncate" style={{ fontFamily: 'var(--font-heading)' }}>Barista Bot</p>
            <p className="text-white/80 text-xs truncate">Somelierul tău de cafea</p>
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
            {/* Expand / Collapse — ascuns pe mobil (deja full screen) */}
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="hidden sm:flex text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors items-center justify-center"
              title={isExpanded ? 'Micșorează' : 'Mărește fereastra'}
            >
              {isExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" />
                  <line x1="10" y1="14" x2="3" y2="21" /><line x1="21" y1="3" x2="14" y2="10" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              )}
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
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-amber-50/50 dark:bg-gray-800">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed break-words ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-[#D97706] to-[#B45309] text-white rounded-br-sm shadow-sm'
                    : 'bg-white dark:bg-gray-700 text-[#1C1008] dark:text-gray-100 shadow-sm rounded-bl-sm border border-amber-100 dark:border-gray-600'
                }`}
              >
                {renderContent(msg.content)}
                {/* Cursor animat în timpul streaming-ului */}
                {isStreaming && i === messages.length - 1 && msg.role === 'assistant' && (
                  <span className="inline-block w-0.5 h-3.5 bg-[#D97706] ml-0.5 align-middle animate-pulse" />
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
                <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-[#D97706] rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {/* CTA contextual */}
          {cta && (
            <div className="flex justify-start">
              <a
                href={cta.href}
                onClick={() => handleCTAClick(cta.href)}
                className="text-xs px-3 py-1.5 bg-[#92400E] hover:bg-[#78350F] text-white rounded-full transition-colors font-medium"
              >
                {cta.label}
              </a>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies inițiale — vizibile doar la prima deschidere */}
        {showInitialReplies && (
          <div className="px-3 pt-2 pb-2 flex flex-wrap gap-1.5 bg-[#FFFBF5] dark:bg-gray-900 border-t border-amber-100 dark:border-gray-700 shrink-0">
            {INITIAL_QUICK_REPLIES.map((reply) => (
              <button
                key={reply.text}
                onClick={() => sendMessage(reply.text, true)}
                className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 text-[#B45309] dark:text-amber-300 border border-[#D97706]/40 hover:bg-[#D97706] hover:text-white hover:border-[#D97706] transition-all font-medium"
              >
                {reply.label}
              </button>
            ))}
          </div>
        )}

        {/* Quick Replies contextuale — apar după răspunsuri relevante */}
        {contextualReplies.length > 0 && !showInitialReplies && !isStreaming && !isLoading && (
          <div className="px-3 pt-2 pb-2 flex flex-wrap gap-1.5 bg-[#FFFBF5] dark:bg-gray-900 border-t border-amber-100 dark:border-gray-700 shrink-0">
            {contextualReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => sendMessage(reply, true)}
                className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 text-[#B45309] dark:text-amber-300 border border-[#D97706]/40 hover:bg-[#D97706] hover:text-white hover:border-[#D97706] transition-all font-medium"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 py-3 bg-[#FFFBF5] dark:bg-gray-900 border-t border-amber-100 dark:border-gray-700 flex gap-2 shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Întrebați despre meniu..."
            className="flex-1 px-4 py-2 text-sm bg-white dark:bg-gray-800 dark:text-gray-100 border border-amber-200 dark:border-gray-600 rounded-2xl outline-none focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all text-[#1C1008] placeholder:text-amber-300"
            disabled={isLoading || isStreaming}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={isLoading || isStreaming || !input.trim()}
            className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] disabled:opacity-40 text-white flex items-center justify-center transition-all shrink-0 shadow-sm"
          >
            ➤
          </button>
        </div>
      </div>

      {/* Buton flotant — ascuns când chat-ul e deschis (headerul are deja ✕) */}
      <div className={`fixed bottom-6 right-6 z-50 ${isOpen ? 'hidden' : 'block'}`}>
        {!isOpen && (
          <span className="absolute inset-0 rounded-2xl bg-[#D97706] opacity-40 animate-ping" />
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white shadow-lg shadow-amber-200 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110"
          aria-label="Deschide chat"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {isOpen ? '✕' : '☕'}
        </button>
      </div>
    </>
  );
}
