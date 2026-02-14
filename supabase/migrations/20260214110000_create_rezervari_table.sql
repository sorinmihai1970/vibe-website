-- Tabel pentru rezervări
CREATE TABLE rezervari (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nume TEXT NOT NULL,
  email TEXT NOT NULL,
  telefon TEXT NOT NULL,
  numar_persoane INTEGER DEFAULT 2,
  data_ora TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'in asteptare',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Securitate: activăm Row Level Security
ALTER TABLE rezervari ENABLE ROW LEVEL SECURITY;

-- Oricine poate adăuga rezervări
CREATE POLICY "Oricine poate adauga" ON rezervari
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Oricine poate citi rezervări
CREATE POLICY "Oricine poate citi" ON rezervari
  FOR SELECT TO anon, authenticated
  USING (true);

-- Oricine poate modifica rezervări
CREATE POLICY "Oricine poate modifica" ON rezervari
  FOR UPDATE TO anon, authenticated
  USING (true);

-- Oricine poate șterge rezervări
CREATE POLICY "Oricine poate sterge" ON rezervari
  FOR DELETE TO anon, authenticated
  USING (true);
