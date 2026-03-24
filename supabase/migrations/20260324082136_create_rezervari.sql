-- Tabel rezervări pentru Vibe Caffè
CREATE TABLE rezervari (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nume          TEXT NOT NULL,
  email         TEXT NOT NULL,
  telefon       TEXT NOT NULL,
  numar_persoane INTEGER NOT NULL DEFAULT 2,
  data          DATE NOT NULL,
  ora           TIME NOT NULL,
  status        TEXT NOT NULL DEFAULT 'în așteptare',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Activăm Row Level Security
ALTER TABLE rezervari ENABLE ROW LEVEL SECURITY;

-- Oricine poate citi rezervările
CREATE POLICY "Public read" ON rezervari
  FOR SELECT USING (true);

-- Oricine poate adăuga o rezervare
CREATE POLICY "Public insert" ON rezervari
  FOR INSERT WITH CHECK (true);

-- Oricine poate modifica o rezervare
CREATE POLICY "Public update" ON rezervari
  FOR UPDATE USING (true);

-- Oricine poate șterge o rezervare
CREATE POLICY "Public delete" ON rezervari
  FOR DELETE USING (true);
