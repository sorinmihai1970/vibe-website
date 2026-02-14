# GHID 4.2 - CRUD Managers (Bănci, Categorii, Valute)
> Material suplimentar pentru cursanți - Lecția 4.2
> Pattern CRUD învățat odată, repetat de 3 ori.

---

## Înainte de a începe

**CE AI NEVOIE:**
- Lecția 4.1 finalizată (auth + dashboard funcțional)
- Proiect vibe-budget deschis în VS Code
- Claude Code activ
- Server pornit din Lecția 4.1 SAU restart cu `npm run dev`

**CE VEI CONSTRUI:**
- Banks Manager - gestionare bănci cu color picker
- Categories Manager - categorii venituri/cheltuieli cu icon picker
- Currencies Manager - valute cu preset rapid

**TIMP ESTIMAT:** 30-35 minute (3 pagini CRUD cu același pattern)

---

## COMANDA 1: Construiește Banks Manager

Spune-i lui Claude Code:

> **"Vreau o pagină pentru gestionarea băncilor. Să pot adăuga, edita și șterge bănci."**

Claude Code o să te întrebe detalii. Răspunde:

> **"Pagina la /dashboard/banks. Tabel cu lista bănci, buton Adaugă, form cu nume bancă și color picker pentru culoare. Butoane Editează și Șterge pe fiecare rând."**

Dacă te întreabă despre salvare:

> **"Salvează în Supabase, tabelul banks din schema."**

**Ce face Claude Code:**
- Creează pagina `/dashboard/banks/page.tsx`
- Creează API routes pentru CRUD (`/api/banks/route.ts`, `/api/banks/[id]/route.ts`)
- Adaugă tabel cu lista bănci
- Form cu nume + color picker
- Butoane editare și ștergere

**Ce aștepți să vezi:**
- Fișiere noi: `app/dashboard/banks/page.tsx`, `app/api/banks/`
- Pagina arată tabel gol (normal, nu ai bănci încă)

---

## COMANDA 2: Testează Banks Manager

Spune-i lui Claude Code:

> **"Pornește serverul să testez."**

(Dacă serverul deja rulează din Lecția 4.1, sari direct la testare)

**Testează în browser:**

1. Deschide `localhost:3000/dashboard/banks`
2. Click "Adaugă bancă" (sau similar)
3. Completează: Nume = "ING", Culoare = portocaliu
4. Submit → Vezi ING în tabel cu culoare portocalie
5. Adaugă încă 2 bănci: "Revolut" (mov), "BCR" (albastru)
6. Click "Editează" pe ING → Schimbă culoarea în verde → Save
7. Click "Șterge" pe BCR → Confirmare → Dispare din tabel

**Dacă totul merge, GATA - Banks Manager funcțional!**

---

## COMANDA 3: Construiește Categories Manager

Spune-i lui Claude Code:

> **"Vreau o pagină pentru categorii de tranzacții. Categorii de venituri și cheltuieli separate."**

Claude Code o să te întrebe detalii. Răspunde:

> **"Pagina la /dashboard/categories. Două tabele: Income și Expense. Fiecare categorie are nume, tip (income/expense) și icon (emoji). Categorii sistem nu se pot șterge, doar personalizate."**

Dacă te întreabă despre icon picker:

> **"Icon picker simplu cu emoji populare: 🍔 🚗 🏠 💰 🎮 📱 ✈️ 🛒"**

**Ce face Claude Code:**
- Creează pagina `/dashboard/categories/page.tsx`
- Creează API routes pentru CRUD (`/api/categories/`)
- Două tabele (Income vs Expense)
- Form cu nume, tip, icon picker
- Categorii sistem (ex: Uncategorized) disabled pentru ștergere

**Ce aștepți să vezi:**
- Fișiere noi: `app/dashboard/categories/page.tsx`, `app/api/categories/`
- Pagina arată categorii sistem (Uncategorized, Food, Transport, etc.)

---

## COMANDA 4: Testează Categories Manager

**Testează în browser:**

1. Deschide `localhost:3000/dashboard/categories`
2. Vezi 2 secțiuni: Income și Expense
3. Expense are categorii sistem: Uncategorized, Food, Transport, etc.
4. Click "Adaugă categorie"
5. Completează: Nume = "Streaming", Tip = Expense, Icon = 📺
6. Submit → Vezi "Streaming 📺" în lista Expense
7. Adaugă categorie Income: "Freelancing 💼"
8. Încearcă să ștergi categorie sistem (Uncategorized) → Butonul e disabled sau mesaj "Nu se poate șterge"
9. Șterge "Streaming" → Funcționează (categorie personalizată)

**Dacă totul merge, GATA - Categories Manager funcțional!**

---

## COMANDA 5: Construiește Currencies Manager

Spune-i lui Claude Code:

> **"Vreau o pagină simplă pentru valute. Să pot adăuga valute noi."**

Claude Code o să te întrebe detalii. Răspunde:

> **"Pagina la /dashboard/currencies. Tabel cu lista valute (code, symbol, name). Buton Preset cu valute populare: RON, EUR, USD, GBP. Click pe Preset adaugă automat valuta dacă nu există."**

**Ce face Claude Code:**
- Creează pagina `/dashboard/currencies/page.tsx`
- Creează API routes pentru CRUD (`/api/currencies/`)
- Tabel simplu (code, symbol, name)
- Buton Preset pentru valute populare
- Form adaugă valută custom

**Ce aștepți să vezi:**
- Fișiere noi: `app/dashboard/currencies/page.tsx`, `app/api/currencies/`
- Pagina arată tabel gol sau cu 1-2 valute default

---

## COMANDA 6: Testează Currencies Manager

**Testează în browser:**

1. Deschide `localhost:3000/dashboard/currencies`
2. Click "Preset RON" → Apare "RON, lei, Romanian Leu"
3. Click "Preset EUR" → Apare "EUR, €, Euro"
4. Click "Preset USD" → Apare "USD, $, US Dollar"
5. Adaugă valută custom: Code = "CHF", Symbol = "Fr", Name = "Swiss Franc"
6. Șterge CHF → Funcționează
7. Încearcă să adaugi RON din nou (dacă ai buton Adaugă manual) → Eroare "Valută există" SAU Preset dezactivat

**Dacă totul merge, GATA - Currencies Manager funcțional!**

---

## COMANDA 7: Testează toate 3 împreună

Spune-i lui Claude Code:

> **"Vreau să testez că toate 3 paginile se leagă corect."**

SAU testează manual:

1. Mergi la Dashboard (`localhost:3000/dashboard`)
2. Ar trebui să vezi linkuri către:
   - Banks
   - Categories
   - Currencies
3. Click fiecare link → Pagina se încarcă corect
4. Verifică că datele pe care le-ai adăugat sunt persistent (refresh pagină → datele rămân)
5. Logout → Login din nou → Datele sunt încă acolo (Supabase cloud)

**Dacă totul merge, EXCELENT - Lecția 4.2 finalizată!**

---

## Rezumat: Cele 7 comenzi

| # | Ce i-ai spus | Ce a făcut |
|---|--------------|------------|
| 1 | "Pagină gestionare bănci" | Creat Banks Manager (CRUD complet) |
| 2 | "Testează Banks Manager" | Testat adăugare/editare/ștergere bănci |
| 3 | "Pagină categorii income/expense" | Creat Categories Manager (2 tabele, icon picker) |
| 4 | "Testează Categories Manager" | Testat categorii sistem vs personalizate |
| 5 | "Pagină valute cu preset" | Creat Currencies Manager (preset rapid) |
| 6 | "Testează Currencies Manager" | Testat preset + adăugare custom |
| 7 | "Testează toate 3" | Verificat integrare și persistență date |

---

## Dacă ceva nu merge

**"Banks Manager nu salvează culoarea"**
→ Verifică că API route primește și salvează câmpul `color`
→ Spune-i: "Culoarea băncii nu se salvează, rezolvă"

**"Categories Manager arată toate categoriile la grămadă"**
→ Verifică că afișează separat Income vs Expense
→ Spune-i: "Separă categoriile Income de Expense"

**"Currencies Preset nu funcționează"**
→ Verifică că butonul Preset apelează API cu date corecte
→ Spune-i: "Preset-ul de valute nu adaugă valuta, rezolvă"

**"Datele dispar după refresh"**
→ NU e normal! Verifică că API save-ază în Supabase, nu doar în state local
→ Spune-i: "Datele se pierd după refresh, trebuie salvate în Supabase"

**"Nu pot accesa /dashboard/banks"**
→ Verifică că ești logat (JWT token valid)
→ Verifică că middleware permite acces la `/dashboard/*`

---

## Ce ai acum

✅ Banks Manager funcțional (color picker)
✅ Categories Manager funcțional (income/expense, icon picker)
✅ Currencies Manager funcțional (preset rapid)
✅ Pattern CRUD învățat și repetat de 3 ori
✅ Toate datele persistent în Supabase
✅ Dashboard poate folosi date reale (bănci, categorii, valute)

**URMĂTORUL PAS:** Lecția 4.3 - Lista Tranzacții + Upload Form UI (partea vizuală).

---

## Lecție importantă: Pattern-ul CRUD

**CE E CRUD?**
- **C**reate = Adaugă
- **R**ead = Citește/Afișează
- **U**pdate = Editează
- **D**elete = Șterge

**DE CE E IMPORTANT?**
- 90% din aplicații = CRUD operations
- Odată învățat, îl folosești mereu
- Același pattern pentru users, products, posts, orice!

**PATTERN-UL VIZUAL (UI):**
1. Tabel cu lista date
2. Buton "Adaugă"
3. Form cu câmpuri (nume, descriere, etc.)
4. Butoane "Editează" și "Șterge" pe fiecare rând

**PATTERN-UL BACKEND (API):**
1. GET `/api/resursa` → Lista toate
2. POST `/api/resursa` → Creează nou
3. PATCH `/api/resursa/[id]` → Actualizează
4. DELETE `/api/resursa/[id]` → Șterge

**ÎN LECȚIA 4.2 AM REPETAT PATTERN-UL DE 3 ORI:**
- Banks = CRUD
- Categories = CRUD (cu twist: income vs expense)
- Currencies = CRUD (cu twist: preset)

**ODATĂ ÎNVĂȚAT → POȚI CONSTRUI ORICE PAGINĂ DE MANAGEMENT!**

---

**Creat:** 9 februarie 2026
**Aliniat cu:** PREZENTARE-4.2-CRUD-MANAGERS.md
**Durată lecție:** ~35-40 minute (10 min prezentare + 25-30 min demo)
