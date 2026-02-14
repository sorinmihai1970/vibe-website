# GHID 5.1 - Upload Logic: Import Tranzacții
> Ghid pas cu pas pentru Lecția 5.1
> 7 comenzi | ~40-45 minute
> Cerință: Lecția 4.3 completată (Upload Form UI existent)

---

## Înainte să începem

**Ce ar trebui să ai funcțional:**
- ✅ Aplicația rulează local (`npm run dev`)
- ✅ Te poți loga (ai cont creat)
- ✅ Ai cel puțin o bancă creată (din Lecția 4.2)
- ✅ Ai categorii create (din Lecția 4.2)
- ✅ Ai pagina de Upload cu formularul (din Lecția 4.3)

**Ce vom face azi:**
Conectăm Upload Form-ul la logica reală. La final, vei putea importa un fișier CSV și vedea tranzacțiile în baza de date.

**Veste bună:** Repo-ul starter include deja logica de citire a fișierelor CSV/Excel și regulile de categorizare automată. Noi construim API-ul și conectăm totul.

---

## COMANDA 1: Instalează librăriile necesare

Logica de citire a fișierelor din starter folosește două librării externe. Trebuie instalate.

**Spune-i lui Claude Code:**

```
Instalează librăriile papaparse și xlsx care sunt necesare pentru citirea fișierelor CSV și Excel. Instalează și tipurile TypeScript pentru papaparse.
```

**Verifică:** `npm run dev` funcționează fără erori.

---

## COMANDA 2: Construiește API-ul pentru import tranzacții

Construim endpoint-ul care primește tranzacțiile și le salvează în baza de date cu categorizare automată.

**Activează Plan mode** (selectorul din partea de jos a chatului) apoi spune-i lui Claude Code:

```
Construiește API endpoint POST /api/transactions care:

1. Verifică autentificarea utilizatorului
2. Primește un array de tranzacții în body
3. Fiecare tranzacție are: bankId, date, description, amount, currency, type
4. Pentru fiecare tranzacție, încearcă auto-categorizare folosind funcțiile existente din lib/auto-categorization/
5. Inserează toate tranzacțiile în baza de date
6. Returnează: mesaj de succes, număr total importat, număr categorizate automat
```

**Ce se întâmplă:**
- Se creează endpoint-ul API
- Endpoint-ul folosește logica de categorizare deja existentă în proiect
- Returnează statistici după import

---

## COMANDA 3: Conectează Upload Form la citirea fișierelor

Acum legăm interfața de upload (din Lecția 4.3) la logica de citire.

**Spune-i lui Claude Code:**

```
Actualizează pagina de upload să folosească logica de citire a fișierelor din lib/utils/file-parser.ts:

1. Când userul selectează un fișier CSV, citește-l și transformă-l în date structurate
2. Când selectează Excel, la fel
3. Afișează un indicator de loading în timp ce procesează
4. Dacă citirea eșuează, afișează mesajul de eroare
5. Dacă reușește, salvează tranzacțiile în state
```

**Ce se întâmplă:**
- Upload Form detectează tipul fișierului (.csv vs .xlsx)
- Apelează funcția potrivită de citire
- Tranzacțiile sunt salvate în state-ul paginii

---

## COMANDA 4: Adaugă preview-ul real

Acum afișăm datele reale din fișier în tabelul de preview.

**Spune-i lui Claude Code:**

```
Adaugă preview-ul tranzacțiilor citite din fișier:

1. După citire, afișează un tabel cu primele 10 tranzacții
2. Coloane: Dată, Descriere, Sumă, Valută
3. Suma negativă în roșu, pozitivă în verde
4. Sub tabel: "Total: X tranzacții găsite în fișier"
5. Dacă sunt mai mult de 10, arată "...și încă Y tranzacții"
6. Buton "Importă X tranzacții" - dezactivat dacă nu e selectată banca
```

**Verifică:** Încarcă un fișier CSV din folderul `test-data/` al proiectului. Ar trebui să vezi tranzacțiile în tabel.

---

## COMANDA 5: Conectează butonul "Importă" la API

Ultimul pas de integrare - butonul trimite tranzacțiile la server.

**Spune-i lui Claude Code:**

```
Conectează butonul "Importă" la API-ul /api/transactions:

1. La click, trimite toate tranzacțiile la API
2. Adaugă banca selectată la fiecare tranzacție
3. Trimite token-ul de autentificare
4. În timp ce importă, arată loading
5. La succes, afișează: "X tranzacții importate, Y categorizate automat"
6. Adaugă butoane: "Încarcă alt fișier" și "Vezi tranzacțiile"
7. La eroare, afișează mesajul de eroare
```

**Verifică:** Importă un fișier CSV. Ar trebui să vezi mesajul de succes cu statistici.

---

## COMANDA 6: Descarcă un extras de la banca ta și testează!

Acum vine momentul cel mai tare - testăm cu datele TALE reale.

**Înainte de comandă, descarcă un extras de cont:**

| Bancă | De unde | Format |
|-------|---------|--------|
| **ING** | Home'Bank → Istoric → Export | CSV |
| **BCR** | George → Tranzacții → Export | CSV |
| **BT** | BT24 → Extras de cont → Descarcă | CSV/Excel |
| **Revolut** | App → Statements → Generate | CSV/Excel |
| **PayPal** | Activity → Download → CSV | CSV |

**Descarcă direct din aplicația băncii, NU din convertoare online.**

Acum testează:
1. Selectează banca ta din dropdown
2. Încarcă fișierul descărcat
3. Verifică preview-ul - sunt tranzacțiile tale?
4. Click "Importă"

**Spune-i lui Claude Code dacă ceva nu funcționează:**

```
Am încărcat un extras CSV de la [banca ta] și [descrie problema].
Repară te rog.
```

**Momentul WOW:** Acestea sunt tranzacțiile TALE, categorizate automat, în aplicația pe care ai construit-o TU.

---

## COMANDA 7: Testare completă

Verificăm tot flow-ul de la upload până la lista tranzacții.

**Spune-i lui Claude Code:**

```
Verifică tot flow-ul complet:
1. Pagina de upload se încarcă fără erori
2. Dropdown-ul cu bănci funcționează
3. Upload CSV → Preview → Import funcționează
4. Tranzacțiile importate apar în lista de tranzacții din dashboard
5. Dacă ceva nu funcționează, repară
```

**Dacă totul funcționează:** Felicitări! Ai un sistem complet de import tranzacții!

---

## Lecție importantă: Cod existent vs Cod nou

**Nu tot codul trebuie scris de la zero.**

Azi am folosit logica de citire a fișierelor care era deja în proiect. De ce?
- A fost testată cu extrase reale de la 4 bănci
- Cazurile speciale sunt multe și complexe
- Scopul lecției era **integrarea** - să conectezi piesele, nu să reinventezi roata

**În proiectele reale faci la fel:**
- Folosești librării = cod scris de alții
- Folosești cod de la colegi = testat și verificat
- Folosești cod generat de AI = revizuit și adaptat

**Ce contează cu adevărat:**
1. **Să înțelegi** ce face codul
2. **Să integrezi** corect - azi ai conectat citire → preview → API → baza de date
3. **Să testezi** rezultatul - ai verificat cu fișiere CSV reale

**Analogie simplă:**
- Nu construiești motorul mașinii ca să conduci
- Dar trebuie să știi ce face motorul ca să diagnostichezi probleme

---

## Recapitulare Lecția 5.1

**Ce am construit:**
- ✅ Instalat librăriile necesare
- ✅ API endpoint pentru import tranzacții cu auto-categorizare
- ✅ Upload Form conectat la logica de citire
- ✅ Preview real cu datele din fișier
- ✅ Import funcțional cu statistici
- ✅ Testat cu fișiere CSV reale

**Flow complet funcțional:**
```
Selectează bancă → Alege fișier → Preview tranzacții → Click "Importă" → Categorizare automată → Salvare → Succes!
```

**Ce urmează (Lecția 5.2 - ULTIMA!):**
- Rapoarte cu grafice (cheltuieli pe categorii, trend lunar)
- AI Financial Coach (insights personalizate cu Claude AI)
- Deploy pe Vercel (aplicația online!)

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 5
**Aplicație:** Vibe Budget (gestiune financiară personală)
