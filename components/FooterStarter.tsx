'use client';

export default function FooterStarter() {
  return (
    <footer>
      {/* Wave separator */}
      <div className="overflow-hidden bg-amber-50">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z" fill="#2C1810" />
        </svg>
      </div>

      {/* Content */}
      <div className="bg-gradient-to-b from-[#2C1810] to-[#1A0F0A] text-amber-100 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + descriere */}
          <div>
            <p className="text-2xl font-bold text-amber-300 mb-2">Vibe Coffee</p>
            <p className="text-amber-200 text-sm leading-relaxed opacity-80">
              Un loc unde fiecare ceașcă spune o poveste. Te așteptăm cu căldură și cafea de specialitate.
            </p>
          </div>

          {/* Program */}
          <div>
            <p className="text-amber-300 font-semibold uppercase tracking-wider text-xs mb-4">Program</p>
            <div className="space-y-2 text-sm text-amber-100 opacity-80">
              <div className="flex justify-between gap-4">
                <span>Luni – Vineri</span>
                <span className="font-medium">08:00 – 22:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sâmbătă – Duminică</span>
                <span className="font-medium">09:00 – 23:00</span>
              </div>
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="text-amber-300 font-semibold uppercase tracking-wider text-xs mb-4">Contact</p>
            <div className="space-y-2 text-sm text-amber-100 opacity-80 mb-6">
              <p>Strada Ciobanești nr. 34</p>
              <p>Sat Râu Alb de Jos, Comuna Râu Alb</p>
              <p>Jud. Dâmbovița</p>
            </div>

            {/* Social media */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/asociatiaexcedo/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/AsociatiaExcedo" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-5xl mx-auto border-t border-amber-900 mt-10 pt-6 text-center">
          <p className="text-xs text-amber-200 opacity-50">
            © 2026 Vibe Coffee. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
