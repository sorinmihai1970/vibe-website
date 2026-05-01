import { NextRequest, NextResponse } from 'next/server';
import { salveazaRezervare } from '@/lib/rezervari';
import { trimiteEmailRezervare, trimiteEmailAdmin } from '@/lib/email';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nume, email, telefon, numar_persoane, data, ora } = body;

  if (!nume || !email || !telefon || !numar_persoane || !data || !ora) {
    return NextResponse.json({ error: 'Date incomplete' }, { status: 400 });
  }

  await salveazaRezervare({ nume, email, telefon, numar_persoane, data, ora });

  await Promise.allSettled([
    trimiteEmailRezervare({ email, nume, data, ora, nr_persoane: numar_persoane }),
    trimiteEmailAdmin({ email, nume, telefon, data, ora, nr_persoane: numar_persoane }),
  ]);

  return NextResponse.json({ success: true });
}
