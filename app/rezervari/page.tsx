'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function RezervarePage() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rezervari, setRezervari] = useState<any[]>([]);
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  const fetchRezervari = async () => {
    const { data } = await supabase
      .from('rezervari')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setRezervari(data);
  };

  useEffect(() => {
    fetchRezervari();
  }, []);

  // Calendar helpers
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDate = new Date(today);
  maxDate.setMonth(maxDate.getMonth() + 6);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Luni = 0
  };

  const monthNames = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
  const dayNames = ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ', 'Du'];

  const canGoPrev = calendarMonth.getFullYear() > today.getFullYear() || calendarMonth.getMonth() > today.getMonth();
  const canGoNext = calendarMonth.getFullYear() < maxDate.getFullYear() || (calendarMonth.getFullYear() === maxDate.getFullYear() && calendarMonth.getMonth() < maxDate.getMonth());

  const isDateSelectable = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    return date >= today && date <= maxDate;
  };

  // Butoane rapide - următoarele 14 zile
  const quickDates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    return d;
  });

  const formatQuickDate = (date: Date) => {
    const days = ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'];
    const months = ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec'];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  };

  const dateToString = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  // Ore: 10:00 - 22:00, din 30 în 30
  const timeSlots: string[] = [];
  for (let h = 10; h <= 21; h++) {
    timeSlots.push(`${String(h).padStart(2, '0')}:00`);
    timeSlots.push(`${String(h).padStart(2, '0')}:30`);
  }
  timeSlots.push('22:00');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const [year, month, day] = selectedDate.split('-').map(Number);
    const [hours, minutes] = selectedTime.split(':').map(Number);
    const dataOra = new Date(year, month - 1, day, hours, minutes);

    const { error } = await supabase.from('rezervari').insert({
      nume: formData.name,
      email: formData.email,
      telefon: formData.phone,
      numar_persoane: parseInt(formData.guests),
      data_ora: dataOra.toISOString(),
    });

    setLoading(false);

    if (error) {
      alert('A apărut o eroare. Încearcă din nou.');
      console.error(error);
      return;
    }

    await fetchRezervari();
    setSubmitted(true);
  };

  // Ecran confirmare
  if (submitted) {
    const [year, month, day] = selectedDate.split('-').map(Number);
    const confirmDate = new Date(year, month - 1, day);
    const displayDate = confirmDate.toLocaleDateString('ro-RO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
        <div className="backdrop-blur-md bg-white/70 border border-white/30 shadow-xl max-w-2xl w-full rounded-3xl p-12 text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">
            Rezervare confirmată!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Ne vedem la Vibe Coffee!
          </p>

          <div className="backdrop-blur-sm bg-white/50 rounded-2xl p-6 mb-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Data & Ora</p>
                <p className="text-lg font-semibold text-foreground">
                  {displayDate} la {selectedTime}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Număr persoane</p>
                <p className="text-lg font-semibold text-foreground">{formData.guests} {parseInt(formData.guests) === 1 ? 'persoană' : 'persoane'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Nume</p>
                <p className="text-lg font-semibold text-foreground">{formData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Contact</p>
                <p className="text-lg font-semibold text-foreground">{formData.phone}</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8">
            Veți primi un email de confirmare la <span className="font-semibold">{formData.email}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Înapoi Acasă
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedDate('');
                setSelectedTime('');
                setFormData({ name: '', email: '', phone: '', guests: '2' });
              }}
              className="px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Rezervare nouă
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calendar render
  const cy = calendarMonth.getFullYear();
  const cm = calendarMonth.getMonth();
  const totalDays = daysInMonth(cy, cm);
  const startDay = firstDayOfMonth(cy, cm);

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6 text-primary hover:text-primary-dark transition-colors">
            ← Înapoi acasă
          </Link>
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Rezervă o <span className="text-primary">masă</span>
          </h1>
          <p className="text-xl text-gray-600">
            În 3 pași simpli îți rezervi locul
          </p>
        </div>

        <form onSubmit={handleSubmit} className="backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-3xl p-8 md:p-12">
          {/* STEP 1: SELECTEAZĂ DATA */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
              Selectează data
            </h2>

            {/* Butoane rapide - 14 zile */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
              {quickDates.map((date) => {
                const ds = dateToString(date);
                const isSelected = selectedDate === ds;
                const isToday = dateToString(date) === dateToString(today);
                return (
                  <button
                    key={ds}
                    type="button"
                    onClick={() => {
                      setSelectedDate(ds);
                      setCalendarMonth(new Date(date.getFullYear(), date.getMonth(), 1));
                    }}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? 'bg-primary text-white shadow-lg scale-105'
                        : 'bg-white border border-gray-200 hover:border-primary text-foreground'
                    }`}
                  >
                    {isToday ? 'Azi' : formatQuickDate(date)}
                  </button>
                );
              })}
            </div>

            {/* Calendar cu navigare pe luni */}
            <div className="backdrop-blur-sm bg-white/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <button
                  type="button"
                  onClick={() => setCalendarMonth(new Date(cy, cm - 1, 1))}
                  disabled={!canGoPrev}
                  className={`p-2 rounded-full transition-colors ${canGoPrev ? 'hover:bg-gray-100 text-foreground' : 'text-gray-300 cursor-not-allowed'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <h3 className="text-lg font-bold text-foreground">
                  {monthNames[cm]} {cy}
                </h3>
                <button
                  type="button"
                  onClick={() => setCalendarMonth(new Date(cy, cm + 1, 1))}
                  disabled={!canGoNext}
                  className={`p-2 rounded-full transition-colors ${canGoNext ? 'hover:bg-gray-100 text-foreground' : 'text-gray-300 cursor-not-allowed'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1">
                {dayNames.map((d) => (
                  <div key={d} className="text-center text-xs font-semibold text-gray-500 py-2">{d}</div>
                ))}
                {Array.from({ length: startDay }, (_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: totalDays }, (_, i) => {
                  const day = i + 1;
                  const ds = `${cy}-${String(cm + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const selectable = isDateSelectable(cy, cm, day);
                  const isSelected = selectedDate === ds;
                  const isToday = ds === dateToString(today);

                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={!selectable}
                      onClick={() => setSelectedDate(ds)}
                      className={`py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? 'bg-primary text-white shadow-md'
                          : isToday
                          ? 'bg-primary/10 text-primary font-bold hover:bg-primary/20'
                          : selectable
                          ? 'hover:bg-gray-100 text-foreground'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* STEP 2: SELECTEAZĂ ORA */}
          {selectedDate && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Selectează ora
              </h2>

              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2">
                {timeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-300 ${
                        isSelected
                          ? 'border-primary bg-primary text-white shadow-lg scale-105'
                          : 'border-gray-200 bg-white hover:border-primary hover:scale-105'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: DETALII PERSONALE */}
          {selectedDate && selectedTime && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Detalii rezervare
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white/80"
                    placeholder="Ion Popescu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white/80"
                    placeholder="ion@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white/80"
                    placeholder="0712 345 678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Număr persoane *
                  </label>
                  <select
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white/80"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'persoană' : 'persoane'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          {selectedDate && selectedTime && (
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Se trimite...
                </>
              ) : (
                'Confirmă rezervarea'
              )}
            </button>
          )}
        </form>

        {/* INFO FOOTER */}
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">
            <span className="font-semibold">Program:</span> Luni - Duminică, 10:00 - 22:00
          </p>
          <p>
            <span className="font-semibold">Contact:</span> 0721 234 567 | rezervari@vibecoffee.ro
          </p>
        </div>
      </div>
    </div>
  );
}
