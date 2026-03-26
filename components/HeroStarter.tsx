/**
 * 🎯 HERO STARTER - Versiunea simplă pentru cursanți
 *
 * Aceasta este versiunea MINIMALISTĂ de la care plecăm în curs.
 * Fără animații, fără video, fără JavaScript complex.
 * Doar HTML + Tailwind CSS = fundația de bază.
 */

export default function HeroStarter() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/6201669-uhd_3840_2160_24fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        {/* TITLU PRINCIPAL */}
        <h1
          className="font-bold mb-6 leading-tight hero-animate hero-animate-1"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 4.5rem)',
            textShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}
        >
          Cafeaua care te trezește cu adevărat
        </h1>

        {/* SUBTITLU */}
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 font-bold hero-animate hero-animate-2"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          Mai mult decât o băutură — un ritual zilnic
        </p>

        {/* BUTOANE CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate hero-animate-3">
          {/* Buton primary */}
          <a
            href="#menu"
            className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Vezi Meniul
          </a>

          {/* Buton magazin */}
          <a
            href="#shop"
            className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Descoperă Magazinul
          </a>

          {/* Buton secondary */}
          <a
            href="#locatie"
            className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/10"
          >
            Vizitează-ne
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors duration-300 hero-animate hero-animate-4"
        aria-label="Scroll mai jos"
      >
        <span className="animate-bounce inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </a>
    </section>
  );
}

