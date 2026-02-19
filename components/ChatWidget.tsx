'use client';

/**
 * 🤖 CHAT WIDGET - Barista Bot pentru Vibe Caffe
 *
 * Componenta principală a chatbot-ului:
 * - Floating button (colț dreapta jos) cu puls
 * - Chat window cu animație slide-up
 * - Mesaje cu timestamp
 * - Full-screen pe mobil
 * - Typing indicator + Quick replies
 */

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickReplies?: string[];
}

// Quick replies contextuale bazate pe cuvinte cheie din răspunsul bot-ului
function getContextualReplies(botText: string): string[] | undefined {
  const text = botText.toLowerCase();

  if (text.includes('meniu') || text.includes('cafea') || text.includes('espresso') || text.includes('latte') || text.includes('cappuccino')) {
    return ['Opțiuni vegane', 'Deserturi', 'Cafea rece'];
  }
  if (text.includes('rezerv') || text.includes('masă') || text.includes('loc')) {
    return ['Fă o rezervare', 'Program'];
  }
  if (text.includes('program') || text.includes('orar') || text.includes('deschis') || text.includes('închis')) {
    return ['Vezi meniu', 'Fă o rezervare'];
  }

  return undefined;
}

// Formatează ora (HH:MM)
function formatTime(date: Date): string {
  return date.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
}

// Render markdown (links + bold) ca elemente clickabile/stilizate
function renderMessageText(text: string): React.ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[2]} className="underline font-semibold hover:opacity-80">
          {linkMatch[1]}
        </a>
      );
    }
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={i}>{boldMatch[1]}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ChatWidget() {
  // 📊 STATE MANAGEMENT
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Salut! ☕ Sunt Vibe, barista ta virtuală. Cu ce te pot ajuta?',
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: ['Vezi meniu', 'Recomandări', 'Rezervări', 'Program'],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 📜 AUTO-SCROLL LA MESAJE NOI
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      setShowScrollTop(messagesContainerRef.current.scrollTop > 200);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // 🎯 FOCUS INPUT CÂND SE DESCHIDE CHAT-UL
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // 🎬 ANIMAȚIE DESCHIDERE/ÎNCHIDERE
  const handleOpen = () => {
    setIsOpen(true);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 200);
  };

  // 📝 TRIMITE MESAJ
  const handleSendMessage = async (text?: string, isQuickReply = false) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    // Dacă userul scrie manual, șterge toate quick replies existente
    setMessages((prev) => {
      const cleaned = isQuickReply
        ? prev
        : prev.map((msg) => ({ ...msg, quickReplies: undefined }));
      return [...cleaned, userMessage];
    });
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();

      const botResponse: Message = {
        id: Date.now().toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: getContextualReplies(data.response),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Chat error:', error);

      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'Oops! 😅 Am avut o problemă tehnică. Poți încerca din nou sau sună-ne la 0721 234 567.',
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: ['Încearcă din nou', 'Vezi meniu', 'Contact'],
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // 🎯 HANDLE QUICK REPLY
  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply, true);
  };

  // ⌨️ HANDLE KEY PRESS
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* 💬 CHAT WINDOW */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 h-[100dvh] md:inset-auto md:bottom-24 md:right-6 md:w-96 md:h-[600px]
            bg-white dark:bg-gray-900 shadow-2xl
            border border-gray-200 dark:border-gray-700 md:rounded-3xl
            transition-all duration-300 ease-out
            ${isAnimating && isOpen ? 'animate-slide-up' : ''}
          `}
          style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto' }}
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#8B6914] to-[#6B4F10] text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Vibe</h3>
                <p className="text-sm text-white/80">Barista virtuala • Online</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* MESSAGES CONTAINER */}
          <div className="relative overflow-hidden">
            <div
              ref={messagesContainerRef}
              onScroll={handleScroll}
              data-lenis-prevent
              className="absolute inset-0 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-gray-800"
            >
              {messages.map((message) => (
                <div key={message.id}>
                  {/* MESSAGE BUBBLE */}
                  <div
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-[#8B6914] text-white rounded-br-none'
                          : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{renderMessageText(message.text)}</p>
                      <p className={`text-[10px] mt-1 ${
                        message.sender === 'user' ? 'text-white/60' : 'text-gray-400'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>

                  {/* QUICK REPLIES */}
                  {message.sender === 'bot' && message.quickReplies && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-2">
                      {message.quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="px-4 py-2 bg-white dark:bg-gray-700 border-2 border-[#8B6914] text-[#8B6914] dark:text-[#8B6914] rounded-full text-sm font-semibold hover:bg-[#8B6914] hover:text-white transition-all duration-300"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* TYPING INDICATOR */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* SCROLL TO TOP */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="absolute left-1/2 -translate-x-1/2 top-2 z-10 w-8 h-8 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* INPUT CONTAINER */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2 items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Scrie un mesaj..."
                className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 dark:border-gray-600 focus:border-[#8B6914] focus:outline-none text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="w-12 h-12 bg-[#8B6914] hover:bg-[#6B4F10] disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-all duration-300 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔘 FLOATING BUTTON CU PULS */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => isOpen ? handleClose() : handleOpen()}
          className={`w-16 h-16 bg-gradient-to-br from-[#8B6914] to-[#6B4F10] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl
            ${!isOpen ? 'animate-pulse-soft' : ''}
          `}
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          )}
        </button>

        {/* NOTIFICATION BADGE */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#F97316] text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
            1
          </div>
        )}
      </div>
    </>
  );
}
