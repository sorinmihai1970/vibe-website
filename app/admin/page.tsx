'use client';

import { useState, useEffect, useMemo } from 'react';
import { getRezervari, schimbaStatus, stergeRezervare, StatusRezervare } from '@/lib/rezervari';

type Rezervare = {
  id: number;
  nume: string;
  email: string;
  telefon: string;
  numar_persoane: number;
  data: string;
  ora: string;
  status: StatusRezervare;
  created_at: string;
};

const STATUS_CONFIG: Record<StatusRezervare, { label: string; culoare: string }> = {
  'în așteptare': { label: 'În așteptare', culoare: 'bg-yellow-100 text-yellow-800' },
  'confirmat':    { label: 'Confirmat',    culoare: 'bg-green-100 text-green-800' },
  'respins':      { label: 'Respins',      culoare: 'bg-red-100 text-red-800' },
};

function Actiuni({ r, actionId, onStatus, onSterge }: {
  r: Rezervare;
  actionId: number | null;
  onStatus: (id: number, s: StatusRezervare) => void;
  onSterge: (id: number) => void;
}) {
  return (
    <div className="flex gap-2 flex-wrap">
      {r.status !== 'confirmat' && (
        <button disabled={actionId === r.id} onClick={() => onStatus(r.id, 'confirmat')}
          className="px-3 py-1.5 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-all">
          Confirmă
        </button>
      )}
      {r.status !== 'respins' && (
        <button disabled={actionId === r.id} onClick={() => onStatus(r.id, 'respins')}
          className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-all">
          Respinge
        </button>
      )}
      <button disabled={actionId === r.id} onClick={() => onSterge(r.id)}
        className="px-3 py-1.5 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-all">
        Șterge
      </button>
    </div>
  );
}

export default function AdminPage() {
  const [rezervari, setRezervari] = useState<Rezervare[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState<number | null>(null);
  const [cautare, setCautare] = useState('');
  const [filtruStatus, setFiltruStatus] = useState<StatusRezervare | 'toate'>('toate');

  async function incarca() {
    setLoading(true);
    const data = await getRezervari();
    setRezervari(data as Rezervare[]);
    setLoading(false);
  }

  useEffect(() => { incarca(); }, []);

  async function handleStatus(id: number, status: StatusRezervare) {
    setActionId(id);
    await schimbaStatus(id, status);
    await incarca();
    setActionId(null);
  }

  async function handleSterge(id: number) {
    if (!confirm('Sigur vrei să ștergi această rezervare?')) return;
    setActionId(id);
    await stergeRezervare(id);
    await incarca();
    setActionId(null);
  }

  const filtrate = useMemo(() => rezervari
    .filter((r) => filtruStatus === 'toate' || r.status === filtruStatus)
    .filter((r) => r.nume.toLowerCase().includes(cautare.toLowerCase())),
    [rezervari, filtruStatus, cautare]
  );

  const numarPeStatus = (s: StatusRezervare) => rezervari.filter((r) => r.status === s).length;

  return (
    <main className="min-h-screen py-10 px-6" style={{ background: 'linear-gradient(135deg, #92400E 0%, #78350F 100%)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin — Rezervări</h1>
            <p className="text-amber-100 mt-1">{rezervari.length} rezervări în total</p>
          </div>
          <button onClick={incarca}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-amber-900 transition-all"
            style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}>
            ↺ Reîncarcă
          </button>
        </div>

        {/* Filtre status */}
        <div className="flex gap-2 flex-wrap mb-4">
          {([
            { val: 'toate', label: `Toate (${rezervari.length})` },
            { val: 'în așteptare', label: `În așteptare (${numarPeStatus('în așteptare')})` },
            { val: 'confirmat',    label: `Confirmate (${numarPeStatus('confirmat')})` },
            { val: 'respins',      label: `Respinse (${numarPeStatus('respins')})` },
          ] as { val: StatusRezervare | 'toate'; label: string }[]).map(({ val, label }) => (
            <button key={val} onClick={() => setFiltruStatus(val)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: filtruStatus === val ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.2)',
                color: filtruStatus === val ? '#D97706' : 'white',
                backdropFilter: 'blur(8px)',
              }}>
              {label}
            </button>
          ))}
        </div>

        {/* Căutare */}
        <div className="mb-6 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-300">🔍</span>
          <input
            type="text"
            placeholder="Caută după nume..."
            value={cautare}
            onChange={(e) => setCautare(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
          />
        </div>

        {loading && <div className="text-center py-20 text-amber-100">Se încarcă...</div>}

        {!loading && filtrate.length === 0 && (
          <div className="text-center py-20 text-amber-100">Nicio rezervare găsită.</div>
        )}

        {!loading && filtrate.length > 0 && (
          <>
            {/* MOBILE — carduri */}
            <div className="flex flex-col gap-4 md:hidden">
              {filtrate.map((r) => (
                <div key={r.id} className="rounded-2xl p-5"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-white text-lg">{r.nume}</p>
                      <p className="text-amber-100 text-sm">{r.email}</p>
                      <p className="text-amber-200 text-sm">{r.telefon}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_CONFIG[r.status]?.culoare ?? 'bg-gray-100 text-gray-600'}`}>
                      {STATUS_CONFIG[r.status]?.label ?? r.status}
                    </span>
                  </div>
                  <div className="flex gap-4 text-amber-100 text-sm mb-4">
                    <span>📅 {r.data}</span>
                    <span>🕐 {r.ora}</span>
                    <span>👥 {r.numar_persoane}</span>
                  </div>
                  <Actiuni r={r} actionId={actionId} onStatus={handleStatus} onSterge={handleSterge} />
                </div>
              ))}
            </div>

            {/* DESKTOP — tabel */}
            <div className="hidden md:block rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <table className="w-full text-sm">
                <thead style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <tr>
                    {['Nume', 'Contact', 'Data & Ora', 'Persoane', 'Status', 'Acțiuni'].map((h) => (
                      <th key={h} className="text-left px-6 py-4 font-semibold text-amber-100">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtrate.map((r) => (
                    <tr key={r.id} className="border-t transition-colors"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                      <td className="px-6 py-4 font-semibold text-white">{r.nume}</td>
                      <td className="px-6 py-4 text-amber-100">
                        <div>{r.email}</div>
                        <div className="text-amber-200 text-xs">{r.telefon}</div>
                      </td>
                      <td className="px-6 py-4 text-amber-100">
                        <div className="font-medium">{r.data}</div>
                        <div className="text-amber-200 text-xs">{r.ora}</div>
                      </td>
                      <td className="px-6 py-4 text-amber-100">{r.numar_persoane}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_CONFIG[r.status]?.culoare ?? 'bg-gray-100 text-gray-600'}`}>
                          {STATUS_CONFIG[r.status]?.label ?? r.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Actiuni r={r} actionId={actionId} onStatus={handleStatus} onSterge={handleSterge} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

      </div>
    </main>
  );
}
