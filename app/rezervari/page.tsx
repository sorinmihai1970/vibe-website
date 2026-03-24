'use client';

import { useState } from 'react';
import { salveazaRezervare } from '@/lib/rezervari';

// Ore disponibile: 10:00 – 22:00, din 30 în 30 minute
const ORE_DISPONIBILE: string[] = [];
for (let h = 10; h <= 22; h++) {
  ORE_DISPONIBILE.push(`${String(h).padStart(2, '0')}:00`);
  if (h < 22) ORE_DISPONIBILE.push(`${String(h).padStart(2, '0')}:30`);
}

const ZILE_RO = ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'];
const LUNI_RO = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
                  'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

function formatData(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function CalendarPicker({ value, onChange }: { value: string; onChange: (d: string) => void }) {
  const azi = new Date();
  azi.setHours(0, 0, 0, 0);
  const maxData = new Date(azi);
  maxData.setMonth(maxData.getMonth() + 6);

  const [luna, setLuna] = useState(new Date(azi.getFullYear(), azi.getMonth(), 1));

  const ziuaStart = new Date(luna.getFullYear(), luna.getMonth(), 1).getDay();
  const zileInLuna = new Date(luna.getFullYear(), luna.getMonth() + 1, 0).getDate();
  const offset = ziuaStart === 0 ? 6 : ziuaStart - 1; // luni = 0

  const lunaPrev = () => {
    const prev = new Date(luna.getFullYear(), luna.getMonth() - 1, 1);
    if (prev >= new Date(azi.getFullYear(), azi.getMonth(), 1)) setLuna(prev);
  };
  const lunaNext = () => {
    const next = new Date(luna.getFullYear(), luna.getMonth() + 1, 1);
    if (next <= new Date(maxData.getFullYear(), maxData.getMonth(), 1)) setLuna(next);
  };

  // Următoarele 14 zile (butoane rapide)
  const urmatoare14: Date[] = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date(azi);
    d.setDate(d.getDate() + i);
    urmatoare14.push(d);
  }

  return (
    <div>
      {/* Butoane rapide */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-500 mb-3">Zile rapide</p>
        <div className="flex gap-2 flex-wrap">
          {urmatoare14.map((d) => {
            const str = formatData(d);
            const eAzi = str === formatData(azi);
            const eMaine = str === formatData(new Date(azi.getTime() + 86400000));
            const label = eAzi ? 'Azi' : eMaine ? 'Mâine' : `${d.getDate()} ${LUNI_RO[d.getMonth()].slice(0, 3)}`;
            return (
              <button
                key={str}
                onClick={() => { onChange(str); setLuna(new Date(d.getFullYear(), d.getMonth(), 1)); }}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  value === str ? 'bg-amber-600 text-white shadow-md' : 'bg-amber-50 hover:bg-amber-100 text-amber-900'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Calendar */}
      <div className="border-2 border-gray-100 rounded-2xl p-4">
        {/* Header lună */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={lunaPrev} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-amber-50 text-gray-600 font-bold">‹</button>
          <span className="font-bold text-gray-800">{LUNI_RO[luna.getMonth()]} {luna.getFullYear()}</span>
          <button onClick={lunaNext} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-amber-50 text-gray-600 font-bold">›</button>
        </div>

        {/* Zile săptămână */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }} className="mb-2">
          {ZILE_RO.map((z) => (
            <div key={z} className="text-center text-xs font-semibold text-gray-400 py-1">{z}</div>
          ))}
        </div>

        {/* Zile */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
          {Array.from({ length: offset }).map((_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: zileInLuna }).map((_, i) => {
            const zi = i + 1;
            const d = new Date(luna.getFullYear(), luna.getMonth(), zi);
            const str = formatData(d);
            const trecut = d < azi;
            const preaDeparte = d > maxData;
            const dezactivat = trecut || preaDeparte;
            const selectat = value === str;
            const eAzi = str === formatData(azi);
            return (
              <button
                key={zi}
                disabled={dezactivat}
                onClick={() => onChange(str)}
                style={{ aspectRatio: '1' }}
                className={`rounded-xl text-sm font-medium transition-all ${
                  selectat ? 'bg-amber-600 text-white shadow-md scale-105' :
                  eAzi ? 'border-2 border-amber-400 text-amber-700 hover:bg-amber-50' :
                  dezactivat ? 'text-gray-300 cursor-not-allowed' :
                  'hover:bg-amber-50 text-gray-700'
                }`}
              >
                {zi}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function RezervariPage() {
  const [pas, setPas] = useState(1);
  const [data, setData] = useState('');
  const [ora, setOra] = useState('');
  const [form, setForm] = useState({ nume: '', email: '', telefon: '', numar_persoane: 2 });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [eroare, setEroare] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setEroare('');
    try {
      await salveazaRezervare({ ...form, data, ora });
      setSuccess(true);
    } catch {
      setEroare('A apărut o eroare. Te rugăm să încerci din nou.');
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setSuccess(false); setPas(1); setData(''); setOra('');
    setForm({ nume: '', email: '', telefon: '', numar_persoane: 2 });
  }

  if (success) {
    return (
      <main className="min-h-screen bg-amber-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-md w-full text-center">
          <div className="text-6xl mb-6">☕</div>
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Rezervare confirmată!</h2>
          <p className="text-gray-600 mb-2">Te așteptăm pe <strong>{data}</strong> la <strong>{ora}</strong></p>
          <p className="text-gray-600 mb-8">Vei primi o confirmare pe <strong>{form.email}</strong></p>
          <button onClick={reset} className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-2xl transition-all">
            Fă o altă rezervare
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-amber-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Rezervă o masă</h1>
          <p className="text-gray-600 text-lg">Completează în 3 pași simpli</p>
        </div>

        {/* Indicator pași */}
        <div className="flex items-center justify-center mb-10 gap-2">
          {[{ n: 1, label: 'Data' }, { n: 2, label: 'Ora' }, { n: 3, label: 'Detalii' }].map(({ n, label }) => (
            <div key={n} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  pas === n ? 'bg-amber-600 text-white scale-110 shadow-lg' :
                  pas > n ? 'bg-amber-300 text-amber-900' : 'bg-gray-200 text-gray-500'
                }`}>
                  {pas > n ? '✓' : n}
                </div>
                <span className="text-xs text-gray-500">{label}</span>
              </div>
              {n < 3 && <div className={`w-16 h-1 rounded mb-4 transition-all duration-300 ${pas > n ? 'bg-amber-400' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* PAS 1 — Alege data */}
          {pas === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Alege data</h2>
              <p className="text-gray-500 mb-6">Când vrei să ne vizitezi?</p>
              <CalendarPicker value={data} onChange={setData} />
              <button
                onClick={() => setPas(2)}
                disabled={!data}
                className="mt-6 w-full py-4 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold rounded-2xl transition-all duration-300"
              >
                Continuă →
              </button>
            </div>
          )}

          {/* PAS 2 — Alege ora */}
          {pas === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Alege ora</h2>
              <p className="text-gray-500 mb-6">Data selectată: <strong>{data}</strong></p>
              <div className="grid grid-cols-4 gap-3">
                {ORE_DISPONIBILE.map((o) => (
                  <button
                    key={o}
                    onClick={() => setOra(o)}
                    className={`py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                      ora === o ? 'bg-amber-600 text-white scale-105 shadow-md' : 'bg-amber-50 hover:bg-amber-100 text-amber-900'
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setPas(1)} className="flex-1 py-4 border-2 border-gray-200 hover:border-amber-400 text-gray-600 font-semibold rounded-2xl transition-all">← Înapoi</button>
                <button onClick={() => setPas(3)} disabled={!ora} className="flex-1 py-4 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold rounded-2xl transition-all">Continuă →</button>
              </div>
            </div>
          )}

          {/* PAS 3 — Detalii personale */}
          {pas === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Detaliile tale</h2>
              <p className="text-gray-500 mb-6">{data} la {ora}</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Nume complet *</label>
                  <input type="text" required value={form.nume} onChange={(e) => setForm({ ...form, nume: e.target.value })}
                    placeholder="Ion Popescu"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ion@email.com"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Telefon *</label>
                  <input type="tel" required value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                    placeholder="0722 123 456"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Număr de persoane *</label>
                  <select value={form.numar_persoane} onChange={(e) => setForm({ ...form, numar_persoane: Number(e.target.value) })}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors">
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'persoană' : 'persoane'}</option>
                    ))}
                  </select>
                </div>
              </div>
              {eroare && <p className="mt-4 text-red-500 text-sm font-medium">{eroare}</p>}
              <div className="flex gap-4 mt-6">
                <button type="button" onClick={() => setPas(2)} className="flex-1 py-4 border-2 border-gray-200 hover:border-amber-400 text-gray-600 font-semibold rounded-2xl transition-all">← Înapoi</button>
                <button type="submit" disabled={loading} className="flex-1 py-4 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 text-white font-semibold rounded-2xl transition-all">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Se trimite...
                    </span>
                  ) : 'Confirmă rezervarea'}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </main>
  );
}
