import { supabase } from './supabase';

export interface RezervareData {
  nume: string;
  email: string;
  telefon: string;
  numar_persoane: number;
  data: string;
  ora: string;
}

export async function salveazaRezervare(rezervare: RezervareData) {
  const { data, error } = await supabase
    .from('rezervari')
    .insert([rezervare])
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function getRezervari() {
  const { data, error } = await supabase
    .from('rezervari')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;

  return data;
}

export type StatusRezervare = 'în așteptare' | 'confirmat' | 'respins';

export async function schimbaStatus(id: number, status: StatusRezervare) {
  const { error } = await supabase
    .from('rezervari')
    .update({ status })
    .eq('id', id);

  if (error) throw error;
}

export async function stergeRezervare(id: number) {
  const { error } = await supabase
    .from('rezervari')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
