'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'Acasă', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Meniu', href: '#menu' },
  { label: 'Rezervări', href: '/rezervari' },
];

export default function Navigation() {
  const [menuDeschis, setMenuDeschis] = useState(false);
  const [scrollat, setScrollat] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollat(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollat ? 'shadow-lg' : ''
      }`}
      style={{
        background: scrollat ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl" style={{ color: '#0D9488' }}>
          <span style={{ color: '#F97316' }}>☕</span>
          Vibe Caffè
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(0, 3).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: scrollat ? '#1F2937' : 'white' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Buton CTA desktop */}
        <div className="hidden md:block">
          <a
            href="/rezervari"
            className="px-6 py-2.5 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: '#F97316' }}
          >
            Rezervă
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuDeschis(!menuDeschis)}
          aria-label="Meniu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300 origin-center"
            style={{
              background: scrollat ? '#1F2937' : 'white',
              transform: menuDeschis ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: scrollat ? '#1F2937' : 'white',
              opacity: menuDeschis ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300 origin-center"
            style={{
              background: scrollat ? '#1F2937' : 'white',
              transform: menuDeschis ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Meniu mobil */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuDeschis ? '300px' : '0',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuDeschis(false)}
              className="font-medium text-gray-800 hover:text-teal-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/rezervari"
            onClick={() => setMenuDeschis(false)}
            className="px-6 py-3 rounded-full font-semibold text-white text-center transition-all"
            style={{ background: '#F97316' }}
          >
            Rezervă acum
          </a>
        </div>
      </div>
    </nav>
  );
}
