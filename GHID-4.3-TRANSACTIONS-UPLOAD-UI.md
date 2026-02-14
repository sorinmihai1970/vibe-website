# GHID 4.3 - Lista Tranzacții + Upload Form UI
> Material suplimentar pentru cursanți - Lecția 4.3
> UI complet - backend complex vine în Săptămâna 5.

---

## Înainte de a începe

**CE AI NEVOIE:**
- Lecția 4.2 finalizată (bănci, categorii, valute configurate)
- Proiect vibe-budget deschis în VS Code
- Claude Code activ
- Server pornit SAU restart cu `npm run dev`
- GHID-TERMENI-TEHNICI.md deschis (referință)

**CE VEI CONSTRUI:**
- Transactions List - tabel cu filtre și căutare
- Form adăugare tranzacție manual (funcțional complet)
- Upload Form UI (doar layout, fără logică)

**TIMP ESTIMAT:** 35-40 minute (2 pagini UI + testare)

---

## COMANDA 1: Construiește Transactions List

Spune-i lui Claude Code:

> **"Vreau o pagină cu lista tuturor tranzacțiilor. Tabel mare cu filtre și căutare."**

Claude Code o să te întrebe detalii. Răspunde:

> **"Pagina la /dashboard/transactions. Tabel cu coloane: dată, descriere, sumă, bancă (cu culoare), categorie (cu icon). Filtre: date range, bancă, categorie. Căutare după descriere. Buton Adaugă tranzacție."**

Dacă te întreabă despre salvare:

> **"Salvează în Supabase, tabelul transactions din schema."**

**Ce face Claude Code:**
- Creează pagina `/dashboard/transactions/page.tsx`
- Creează API routes pentru CRUD (`/api/transactions/`)
- Tabel cu toate coloanele
- Filtre funcționale (date, bancă, categorie)
- Input căutare după descriere
- Buton "Adaugă tranzacție"

**Ce aștepți să vezi:**
- Fișiere noi: `app/dashboard/transactions/page.tsx`, `app/api/transactions/`
- Pagina arată tabel gol (normal, nu ai tranzacții încă)
- Filtrele și search-ul sunt vizibile

---

## COMANDA 2: Testează filtrele și căutarea

**Testează în browser:**

1. Deschide `localhost:3000/dashboard/transactions`
2. Vezi tabel gol cu mesaj "Niciun tranzacție" (normal)
3. Verifică că filtrele apar:
   - Date range (de la ... până la ...)
   - Dropdown bănci (ING, Revolut, etc. - băncile tale din Lecția 4.2)
   - Dropdown categorii (Food, Transport, etc.)
4. Verifică că search box există ("Caută după descriere...")

**Pentru moment, nu poți testa funcționalitatea (tabel gol).**

**Trecem la COMANDA 3 să adaugi tranzacții manual!**

---

## COMANDA 3: Construiește form "Adaugă tranzacție manual"

Spune-i lui Claude Code:

> **"Vreau un form să adaug tranzacții manual. Modal sau pagină separată."**

Claude Code o să te întrebe detalii. Răspunde:

> **"Modal care apare când apeși 'Adaugă tranzacție'. Form cu: dată (calendar picker), sumă (număr cu minus pentru cheltuieli), descriere (text), bancă (dropdown), categorie (dropdown). Submit salvează în tabelul transactions."**

**Ce face Claude Code:**
- Adaugă modal sau pagină separată
- Form cu toate câmpurile (dată, sumă, descriere, bancă, categorie)
- Validări (suma nu e 0, descriere completată, etc.)
- Submit salvează în Supabase
- După salvare → tabelul se refresh-ează automat

**Ce aștepți să vezi:**
- Butonul "Adaugă tranzacție" devine funcțional
- Click → Modal sau pagină cu form
- Dropdown-uri populat cu băncile și categoriile tale

---

## COMANDA 4: Testează adăugare manuală

**Testează în browser:**

1. Click "Adaugă tranzacție"
2. Completează:
   - Dată: 15 ianuarie 2025
   - Sumă: **-125.50** (minus pentru cheltuială)
   - Descriere: "Kaufland Cluj"
   - Bancă: ING
   - Categorie: Food 🍔
3. Submit → Vezi tranzacția în tabel!
4. Adaugă încă 2-3 tranzacții:
   - Venit: Dată 20 ian, Sumă **+2500**, Descriere "Salariu", Bancă ING, Categorie Salary
   - Cheltuială: Dată 22 ian, Sumă **-45**, Descriere "Benzină OMV", Bancă Revolut, Categorie Transport 🚗

**Acum testează filtrele:**

5. Filtrează după bancă ING → Vezi doar tranzacțiile ING
6. Filtrează după categorie Food → Vezi doar Kaufland
7. Caută "Kaufland" → Vezi Kaufland Cluj
8. Caută "salariu" → Vezi Salariu
9. Filtrează date: 1-20 ianuarie → Vezi Kaufland + Salariu (fără Benzină)

**Dacă totul funcționează, EXCELENT!**

---

## COMANDA 5: Construiește Upload Form UI

Spune-i lui Claude Code:

> **"Vreau o pagină pentru upload CSV și Excel. Doar UI, fără logica de procesare."**

Claude Code o să te întrebe detalii. Răspunde:

> **"Pagina la /dashboard/upload. File input pentru CSV sau Excel, dropdown pentru selectare bancă, buton Upload. Preview table (gol deocamdată). Logica de parsing o facem în Săptămâna 5."**

Dacă te întreabă despre ce se întâmplă când apeși Upload:

> **"Deocamdată arată un mesaj: 'Upload va fi funcțional în Săptămâna 5, Lecția 5.1'. Preview rămâne gol."**

**Ce face Claude Code:**
- Creează pagina `/dashboard/upload/page.tsx`
- File input (`<input type="file" accept=".csv,.xlsx">`)
- Dropdown bănci
- Buton "Upload"
- Preview table (empty state cu mesaj)
- Handler care arată alert/mesaj placeholder

**Ce aștepți să vezi:**
- Fișiere noi: `app/dashboard/upload/page.tsx`
- Pagina arată form curat cu file input + dropdown + buton
- Preview table gol cu mesaj "Selectează fișier pentru preview"

---

## COMANDA 6: Testează Upload Form UI

**Testează în browser:**

1. Deschide `localhost:3000/dashboard/upload`
2. Vezi form cu:
   - File input (Accept CSV, Excel)
   - Dropdown bănci (ING, Revolut, etc.)
3. Click "Alege fișier" → Selectează orice fișier CSV/Excel de pe calculator
4. Selectează bancă: ING
5. Click "Upload"
6. Vezi mesaj: "Upload va fi funcțional în Săptămâna 5, Lecția 5.1" SAU alert similar
7. Preview table rămâne gol (normal, nu procesăm fișierul încă)

**Dacă UI-ul arată bine și butonul răspunde, PERFECT!**

---

## COMANDA 7: Verifică navigare între pagini

Spune-i lui Claude Code:

> **"Vreau să verific că pot naviga ușor între toate paginile."**

SAU testează manual:

1. Mergi la Dashboard (`/dashboard`)
2. Verifică că ai linkuri/butoane către:
   - Banks
   - Categories
   - Currencies
   - **Transactions** (NOU)
   - **Upload** (NOU)
3. Click fiecare link → Pagina se încarcă corect
4. Verifică că Navigation bar (dacă există) arată toate paginile
5. Logout → Login → Toate datele sunt persistent

**Dacă totul funcționează, GATA - Lecția 4.3 finalizată!**

**UI 100% COMPLET pentru Săptămâna 4!**

---

## Rezumat: Cele 7 comenzi

| # | Ce i-ai spus | Ce a făcut |
|---|--------------|------------|
| 1 | "Pagină lista tranzacții cu filtre" | Creat Transactions List (tabel + filtre + search) |
| 2 | "Testează filtre" | Verificat UI (tabel gol normal) |
| 3 | "Form adăugare tranzacție manual" | Creat modal/form complet funcțional |
| 4 | "Testează adăugare manual" | Adăugat 3 tranzacții + testat filtre |
| 5 | "Pagină upload CSV/Excel (doar UI)" | Creat Upload Form (layout, fără logică) |
| 6 | "Testează Upload UI" | Verificat file input + buton (placeholder) |
| 7 | "Verifică navigare" | Testat linkuri între toate paginile |

---

## Dacă ceva nu merge

**"Filtrele nu funcționează"**
→ Verifică că API returnează date corecte când aplici filtre
→ Spune-i: "Filtrele nu funcționează, rezolvă"

**"Form adăugare nu salvează în DB"**
→ Verifică că API route primește datele și face INSERT în Supabase
→ Spune-i: "Tranzacția nu se salvează în DB, rezolvă"

**"Dropdown-urile bănci/categorii sunt goale"**
→ Verifică că fetch-ezi băncile și categoriile din Lecția 4.2
→ Spune-i: "Dropdown-urile sunt goale, trebuie să arate băncile și categoriile mele"

**"Upload butonul nu face nimic"**
→ E OK! În Lecția 4.3 e doar UI
→ Logica vine în Săptămâna 5, Lecția 5.1
→ Ar trebui să arate cel puțin un mesaj placeholder

**"Preview table rămâne gol după upload"**
→ E NORMAL! Nu procesăm fișierul în Lecția 4.3
→ Preview funcțional vine în S5.1

---

## Ce ai acum

✅ Transactions List complet (tabel + filtre + search)
✅ Form adăugare tranzacție manual (funcțional)
✅ Upload Form UI (layout pregătit pentru S5)
✅ Navigare fluidă între toate paginile
✅ UI 100% COMPLET pentru Săptămâna 4

**SĂPTĂMÂNA 4 FINALIZATĂ! 🎉**

**URMĂTORUL PAS:** Săptămâna 5, Lecția 5.1 - Upload Logic (CSV/Excel parsing, transformări, import).

---

## Lecție importantă: UI vs Backend

**ÎN LECȚIA 4.3 AM SEPARAT UI DE BACKEND:**

**UI (ce am făcut):**
- Layout Upload Form ✅
- File input ✅
- Butoane ✅
- Preview table (gol) ✅

**BACKEND (ce facem în S5.1):**
- Citire fișier CSV/Excel ❌
- Parsing (transformare date) ❌
- Excel serial numbers → ISO dates ❌
- Diacritice românești ❌
- Auto-categorization ❌
- Import în DB ❌

**DE CE SEPARAT?**
1. **Complexitate** - Upload logic = 45-60 min DOAR pentru asta
2. **Focus** - În S4 = UI, în S5 = Backend
3. **Momentum** - Finalizăm S4 cu UI complet, nu ne blocăm
4. **Organizare** - S5.1 dedicat INTEGRAL upload-ului

**ACEST PATTERN E PROFESIONIST:**
- Separi concerns (UI vs logică)
- Poți testa UI independent
- Backend vine după ce UI e validat
- Eviti refactorizări masive

---

**Creat:** 9 februarie 2026
**Aliniat cu:** PREZENTARE-4.3-TRANSACTIONS-UPLOAD-UI.md
**Durată lecție:** ~40-45 minute (10 min prezentare + 30-35 min demo)

---

## 🎉 SĂPTĂMÂNA 4 COMPLETĂ!

**Ce ai construit în Săptămâna 4:**

**Lecția 4.1:** Setup + Auth + Dashboard
- ✅ Clonare branch starter
- ✅ Plan mode (prima experiență)
- ✅ Sistem autentificare complet
- ✅ Dashboard cu rezumat financiar

**Lecția 4.2:** CRUD Managers
- ✅ Banks Manager (color picker)
- ✅ Categories Manager (income/expense, icon picker)
- ✅ Currencies Manager (preset)
- ✅ Pattern CRUD învățat și repetat

**Lecția 4.3:** Transactions + Upload UI
- ✅ Transactions List (filtre + search)
- ✅ Form adăugare manual (funcțional)
- ✅ Upload Form UI (pregătit pentru S5)

**REZULTAT:** Aplicație cu UI 100% COMPLET + CRUD funcțional!

**NE VEDEM ÎN SĂPTĂMÂNA 5! 🚀**
