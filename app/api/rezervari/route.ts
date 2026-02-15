import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// PATCH - Schimbă statusul unei rezervări
export async function PATCH(request: NextRequest) {
  const { id, status } = await request.json();

  const statusuriValide = ['in asteptare', 'confirmat', 'respins'];
  if (!statusuriValide.includes(status)) {
    return NextResponse.json(
      { error: 'Status invalid. Folosește: in asteptare, confirmat, respins' },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('rezervari')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// DELETE - Șterge o rezervare
export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  const { error } = await supabase
    .from('rezervari')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
