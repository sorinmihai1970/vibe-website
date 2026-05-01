import { NextRequest, NextResponse } from 'next/server';
import { trimiteEmailStatus } from '@/lib/email';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nume, email, data, ora, nr_persoane, status } = body;

  if (!nume || !email || !data || !ora || !nr_persoane || !status) {
    return NextResponse.json({ error: 'Date incomplete' }, { status: 400 });
  }

  await trimiteEmailStatus({ nume, email, data, ora, nr_persoane, status });

  return NextResponse.json({ success: true });
}
