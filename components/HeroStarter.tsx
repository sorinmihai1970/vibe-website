/**
 * 🎯 HERO STARTER - Versiunea simplă pentru cursanți
 *
 * Aceasta este versiunea MINIMALISTĂ de la care plecăm în curs.
 * Fără animații, fără video, fără JavaScript complex.
 * Doar HTML + Tailwind CSS = fundația de bază.
 */

export default function HeroStarter() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video / poster background — poziționat să arate ceștile frumos */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&auto=format&fit=crop&crop=center"
        className="absolute inset-0 w-full h-full object-cover hero-bg-fade"
        style={{ objectPosition: '50% 30%' }}
      >
        <source src="/6201669-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Titlu + subtitlu — sus, cu padding de navbar */}
      <div className="relative z-10 flex flex-col items-center text-center text-white pt-48 px-6">
        <h1
          className="font-bold mb-4 leading-tight hero-animate hero-animate-1"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 5rem)',
            textShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}
        >
          Cafeaua care te trezește cu adevărat
        </h1>

        <p
          className="text-xl md:text-2xl mb-0 text-white/90 font-bold tracking-wide hero-animate hero-animate-2"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          Mai mult decât o băutură — un ritual zilnic
        </p>
      </div>

      {/* Butoane CTA — jos, ancorate la bottom */}
      <div className="relative z-10 mt-auto mb-24 flex flex-col sm:flex-row gap-4 justify-center px-6 hero-animate hero-animate-3">
        <a
          href="#menu"
          className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
        >
          Vezi Meniul
        </a>
        <a
          href="#shop"
          className="inline-block px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
        >
          Descoperă Magazinul
        </a>
        <a
          href="#locatie"
          className="inline-block px-8 py-4 bg-white/15 border-2 border-white text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/30 text-center"
        >
          Vizitează-ne
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 hero-animate hero-animate-4"
        aria-label="Scroll mai jos"
      >
        <span className="animate-bounce inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
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
