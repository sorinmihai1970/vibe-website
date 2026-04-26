export default function LocatiePage() {
  return (
    <main className="min-h-screen bg-amber-50">

      {/* Navigare înapoi */}
      <div className="pt-24 pb-0 px-6 max-w-5xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Înapoi acasă
        </a>
      </div>

      {/* Hero */}
      <div className="text-center py-12 px-6">
        <div className="text-5xl mb-4">📍</div>
        <h1 className="text-3xl md:text-5xl font-bold text-[#1C1008] mb-4">
          Unde ne găsești
        </h1>
        <p className="text-lg md:text-xl text-amber-800 max-w-xl mx-auto">
          Vino să ne vizitezi — te așteptăm cu o cafea caldă
        </p>
      </div>

      {/* Card adresă + hartă */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Hartă Google Maps */}
          <div className="w-full h-72 md:h-96">
            <iframe
              title="Locație Vibe Coffee"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Strada+Ciobanesti+34,+Rau+Alb,+Dambovita,+Romania&output=embed&z=15"
            />
          </div>

          {/* Detalii adresă */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">

              {/* Adresă */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#1C1008] mb-3">Adresa noastră</h2>
                <div className="flex items-start gap-3 text-gray-600">
                  <span className="text-2xl mt-0.5">🏡</span>
                  <div>
                    <p className="font-semibold text-gray-800">Vibe Coffee</p>
                    <p>Strada Ciobanești nr. 34</p>
                    <p>Sat Rău Alb de Jos, Comuna Rău Alb</p>
                    <p>Județul Dâmbovița</p>
                  </div>
                </div>
              </div>

              {/* Divider vertical pe desktop */}
              <div className="hidden md:block w-px bg-amber-100 self-stretch" />

              {/* Cum ajungi */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#1C1008] mb-3">Cum ajungi</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🚗</span>
                    <span>Cu mașina — urmărește indicatoarele spre Comuna Rău Alb</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🗺️</span>
                    <a
                      href="https://maps.google.com/?q=Strada+Ciobanesti+34,+Rau+Alb,+Dambovita,+Romania"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-900 font-semibold underline underline-offset-2 transition-colors"
                    >
                      Deschide în Google Maps
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Buton rezervare */}
            <div className="mt-8 pt-6 border-t border-amber-100 text-center">
              <a
                href="/rezervari"
                className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Rezervă o masă
              </a>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
