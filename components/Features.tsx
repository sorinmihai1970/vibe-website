'use client';

import { useEffect, useRef, useState } from 'react';

const cards = [
  {
    title: 'Cafea de Specialitate',
    description:
      'Folosim exclusiv boabe single-origin, prăjite artizanal în România. Fiecare ceașcă este preparată cu precizie de baristele noastre certificate, pentru un gust consistent și memorabil.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop',
    imageAlt: 'Cafea preparată artistic',
  },
  {
    title: 'Patiserie Artizanală',
    description:
      'Produse de patiserie proaspete în fiecare dimineață, preparate de cofetarii noștri din ingrediente naturale, fără conservanți.',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop',
    imageAlt: 'Deserturi și patiserie artizanală',
  },
  {
    title: 'Ambient Relaxant',
    description:
      'Un spațiu gândit pentru confort și inspirație — lumină caldă, muzică selectată cu grijă și colțuri perfecte pentru lucru sau relaxare.',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    imageAlt: 'Interior cafenea modern',
  },
];

function FeatureCard({
  card,
  delay,
  large = false,
}: {
  card: (typeof cards)[0];
  delay: number;
  large?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-shadow duration-300 hover:shadow-xl"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.3s ease`,
        minHeight: large ? '480px' : 'auto',
      }}
    >
      {/* Imagine - 40% înălțime */}
      <div className={`relative overflow-hidden ${large ? 'h-64' : 'h-48'}`}>
        <img
          src={card.image}
          alt={card.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Text - 60% înălțime */}
      <div className={`flex flex-col justify-center flex-1 ${large ? 'p-10' : 'p-8'}`}>
        <h3 className={`font-bold text-gray-900 mb-3 ${large ? 'text-3xl' : 'text-2xl'}`}>
          {card.title}
        </h3>
        <p className={`text-gray-600 leading-relaxed ${large ? 'text-lg' : ''}`}>
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            De ce Vibe Coffee?
          </h2>
          <p className="text-xl text-gray-600">
            Experiență unică, ingrediente premium, atmosferă perfectă
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card mare - stânga */}
          <FeatureCard card={cards[0]} delay={0} large />

          {/* 2 carduri mici - dreapta */}
          <div className="flex flex-col gap-6">
            <FeatureCard card={cards[1]} delay={150} />
            <FeatureCard card={cards[2]} delay={300} />
          </div>

        </div>
      </div>
    </section>
  );
}
