'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

type Rezervare = {
  id: number;
  nume: string;
  email: string;
  telefon: string;
  numar_persoane: number;
  data_ora: string;
  status: string;
  created_at: string;
};

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string }> = {
  'in asteptare': { label: 'În așteptare', bg: 'bg-yellow-100', text: 'text-yellow-800' },
  'confirmat': { label: 'Confirmat', bg: 'bg-green-100', text: 'text-green-800' },
  'respins': { label: 'Respins', bg: 'bg-red-100', text: 'text-red-800' },
};

export default function AdminPage() {
  const [rezervari, setRezervari] = useState<Rezervare[]>([]);
  const [filtruStatus, setFiltruStatus] = useState<string>('toate');
  const [cautare, setCautare] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchRezervari = async () => {
    const { data } = await supabase
      .from('rezervari')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setRezervari(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRezervari();
  }, []);

  const schimbaStatus = async (id: number, status: string) => {
    const res = await fetch('/api/rezervari', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) await fetchRezervari();
  };

  const stergeRezervare = async (id: number) => {
    if (!confirm('Sigur vrei să ștergi această rezervare?')) return;
    const res = await fetch('/api/rezervari', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) await fetchRezervari();
  };

  // Filtrare
  const rezervariFiltrate = rezervari.filter((r) => {
    const matchStatus = filtruStatus === 'toate' || r.status === filtruStatus;
    const matchCautare = cautare === '' || r.nume.toLowerCase().includes(cautare.toLowerCase());
    return matchStatus && matchCautare;
  });

  const formatData = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('ro-RO', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  };

  const formatOra = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
  };

  const totalPerStatus = (status: string) => rezervari.filter((r) => r.status === status).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <Link href="/" className="inline-block mb-3 text-primary hover:text-primary-dark transition-colors">
              ← Înapoi
            </Link>
            <h1 className="text-4xl font-bold text-foreground">
              Admin <span className="text-primary">Rezervări</span>
            </h1>
          </div>
          <div className="flex gap-3 text-sm">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
              {totalPerStatus('in asteptare')} în așteptare
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
              {totalPerStatus('confirmat')} confirmate
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full font-semibold">
              {totalPerStatus('respins')} respinse
            </span>
          </div>
        </div>

        {/* FILTRE */}
        <div className="backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Căutare */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Caută după nume..."
                value={cautare}
                onChange={(e) => setCautare(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white/80"
              />
            </div>
            {/* Filtre status */}
            <div className="flex gap-2 flex-wrap">
              {['toate', 'in asteptare', 'confirmat', 'respins'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFiltruStatus(status)}
                  className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    filtruStatus === status
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white border border-gray-200 hover:border-primary text-foreground'
                  }`}
                >
                  {status === 'toate' ? 'Toate' : STATUS_CONFIG[status]?.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* REZULTATE */}
        {rezervariFiltrate.length === 0 ? (
          <div className="backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-12 text-center">
            <p className="text-gray-500 text-lg">Nicio rezervare găsită.</p>
          </div>
        ) : (
          <>
            {/* TABEL - Desktop */}
            <div className="hidden md:block backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Nume</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Contact</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Data & Ora</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Pers.</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Status</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">Acțiuni</th>
                  </tr>
                </thead>
                <tbody>
                  {rezervariFiltrate.map((r) => {
                    const cfg = STATUS_CONFIG[r.status] || STATUS_CONFIG['in asteptare'];
                    return (
                      <tr key={r.id} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-semibold text-foreground">{r.nume}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-600">{r.email}</p>
                          <p className="text-sm text-gray-500">{r.telefon}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-foreground">{formatData(r.data_ora)}</p>
                          <p className="text-sm text-gray-500">{formatOra(r.data_ora)}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-semibold text-foreground">{r.numar_persoane}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
                            {cfg.label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2 justify-end">
                            {r.status !== 'confirmat' && (
                              <button
                                onClick={() => schimbaStatus(r.id, 'confirmat')}
                                className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-lg transition-colors"
                              >
                                Confirmă
                              </button>
                            )}
                            {r.status !== 'respins' && (
                              <button
                                onClick={() => schimbaStatus(r.id, 'respins')}
                                className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-lg transition-colors"
                              >
                                Respinge
                              </button>
                            )}
                            <button
                              onClick={() => stergeRezervare(r.id)}
                              className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-semibold rounded-lg transition-colors"
                            >
                              Șterge
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* CARDURI - Mobil */}
            <div className="md:hidden flex flex-col gap-4">
              {rezervariFiltrate.map((r) => {
                const cfg = STATUS_CONFIG[r.status] || STATUS_CONFIG['in asteptare'];
                return (
                  <div key={r.id} className="backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{r.nume}</h3>
                        <p className="text-sm text-gray-500">{r.email}</p>
                        <p className="text-sm text-gray-500">{r.telefon}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.text}`}>
                        {cfg.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Data</p>
                        <p className="text-sm font-medium text-foreground">{formatData(r.data_ora)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Ora</p>
                        <p className="text-sm font-medium text-foreground">{formatOra(r.data_ora)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Persoane</p>
                        <p className="text-sm font-medium text-foreground">{r.numar_persoane}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Creată</p>
                        <p className="text-sm font-medium text-foreground">{formatData(r.created_at)}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {r.status !== 'confirmat' && (
                        <button
                          onClick={() => schimbaStatus(r.id, 'confirmat')}
                          className="flex-1 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-colors"
                        >
                          Confirmă
                        </button>
                      )}
                      {r.status !== 'respins' && (
                        <button
                          onClick={() => schimbaStatus(r.id, 'respins')}
                          className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-xl transition-colors"
                        >
                          Respinge
                        </button>
                      )}
                      <button
                        onClick={() => stergeRezervare(r.id)}
                        className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-semibold rounded-xl transition-colors"
                      >
                        Șterge
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* FOOTER INFO */}
        <div className="mt-6 text-center text-sm text-gray-500">
          {rezervariFiltrate.length} din {rezervari.length} rezervări afișate
        </div>
      </div>
    </div>
  );
}
