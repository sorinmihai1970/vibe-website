# Session Log

## 2026-02-14 - Demo Live 3.1 + 3.2: Supabase + Formular Rezervări

### Ce s-a făcut

**Demo live 3.1 - Setup Supabase:**
- ✅ Creat proiect `vibe-caffe` pe Supabase (cont enifbusiness@gmail.com, Frankfurt)
- ✅ Legat proiectul local de Supabase (`supabase init` + `supabase link`)
- ✅ Creat tabelul `rezervari` cu migrație SQL (8 câmpuri + RLS policies)
- ✅ Trimis migrația pe Supabase cloud (`db push`)
- ✅ Salvat cheile de acces în `.env.local`
- ✅ Verificare finală: proiect conectat, tabel creat, chei salvate
- ✅ Copiat `env-local.txt` pe Desktop pentru demonstrație cursanți

**Demo live 3.2 - Formular Rezervări conectat la Supabase:**
- ✅ Creat `lib/supabase.ts` (client Supabase, citește chei din .env.local)
- ✅ Rescris complet `app/rezervari/page.tsx` cu cerințe noi:
  - Calendar cu navigare pe luni (maxim 6 luni în viitor) + butoane rapide 14 zile
  - Ore: 10:00-22:00, din 30 în 30 de minute (25 slot-uri)
  - Persoane: 1-12
  - Spinner pe buton la submit
  - Confirmare "Rezervare confirmată!" cu buton rezervare nouă
  - Design: backdrop-blur, teal principal, portocaliu secundar, responsive
- ✅ Formular salvează în Supabase (insert) + citește rezervări (select, cele mai noi primele)
- ✅ Build compilat fără erori
- ✅ Testat: 2 rezervări salvate și citite corect din Supabase cloud

**Materiale curs (sesiune anterioară, același context):**
- ✅ Creat materiale Săptămâna 7 (4 fișiere: 7.1 + 7.2)
- ✅ Creat materiale Săptămâna 8 (4 fișiere: 8.1 + 8.2)

### Ce rămâne
- [ ] Filmat demo live 3.3 (Admin panel + deploy)
- [ ] Decidere branch-uri: ce merge pe starter vs main înainte de deploy
- [ ] Filmat video lead magnet Claude Code (~/vibe-oracle-demo)
- [ ] Testat Sales Sparring Coach cu API key

### Commits
- Niciun commit - modificări nesalvate, decizie amânată pentru final

### Decizii importante

**1. Cont Supabase separat pentru demo:**
- Folosim `enifbusiness@gmail.com` (nu contul personal)
- Token: setat via `SUPABASE_ACCESS_TOKEN` (sbp_590a...)
- Proiect `vibe-caffe` ref: kepnfragmdvmoyosuybp, Frankfurt

**2. Demo live 3.1 - comenzile executate:**
- Comanda 3: Creat proiect vibe-caffe (eu-central-1)
- Comanda 4: Legat local de cloud (supabase init + link)
- Comanda 5: Creat tabel rezervari (migrație SQL)
- Comanda 6: Push migrație pe Supabase
- Comanda 7: Chei salvate în .env.local
- Comenzile 1-2 (instalare + login) sărite - cursanții le au deja făcute

**3. Demo live 3.2 - fișiere create/modificate:**
- `lib/supabase.ts` - NOU (client Supabase)
- `app/rezervari/page.tsx` - RESCRIS (formular complet cu calendar + Supabase)

**4. Materiale Săptămâna 7-8:**
- 7.1: Harta celor 5 stadii, 7.2: Polish UX & Copy
- 8.1: Aplicația de arătat, 8.2: Viața după curs

### Fișiere modificate/create sesiunea aceasta:
- `lib/supabase.ts` (NOU)
- `app/rezervari/page.tsx` (RESCRIS)
- `supabase/` folder (NOU - config + migrations)
- 8 materiale curs săptămânile 7-8

**Total materiale curs (toate sesiunile): 25 fișiere**
- 11 prezentări (3.1-3.3, 4.1-4.3, 5.1-5.2, 6.1-6.2, 7.1-7.2, 8.1-8.2)
- 11 ghiduri (3.1-3.3, 4.1-4.3, 5.1-5.2, 6.1-6.2, 7.1-7.2, 8.1-8.2)
- 3 materiale suplimentare (GHID-TERMENI-TEHNICI, GHID-UI-UX, PROCES-CREARE-MATERIALE)

---

## 2026-02-10 - Materiale Săptămânile 5-6 Complete + Starter Branch Updates

### Ce s-a făcut
- ✅ Creat PREZENTARE-5.1-UPLOAD-LOGIC.md (10 slide-uri, parsing + auto-categorizare)
- ✅ Creat GHID-5.1-UPLOAD-LOGIC.md (7 comenzi, upload complet cu extras bancar propriu)
- ✅ Creat PREZENTARE-5.2-REPORTS-AI-DEPLOY.md (11 slide-uri, reports + AI + deploy)
- ✅ Creat GHID-5.2-REPORTS-AI-DEPLOY.md (7 comenzi, grafice + AI Coach + Vercel)
- ✅ Creat PREZENTARE-6.1-BARISTA-BOT.md (10 slide-uri, chatbot construction)
- ✅ Creat GHID-6.1-BARISTA-BOT.md (7 comenzi, knowledge base → chat widget → AI)
- ✅ Creat PREZENTARE-6.2-INTEGRARE-DEPLOY.md (10 slide-uri, quick replies + deploy)
- ✅ Creat GHID-6.2-INTEGRARE-DEPLOY.md (7 comenzi, integrare + reglaje + deploy)
- ✅ Creat GHID-UI-UX.md (ghid suplimentar UI vs UX)
- ✅ Actualizat vibe-budget starter branch: adăugat fișiere auto-categorizare + light mode
- ✅ Șters test-data/ din starter (cursanții folosesc extrase proprii)
- ✅ Toate materialele copiate pe Desktop

### Ce rămâne
- [ ] Filmat video lead magnet Claude Code (~/vibe-oracle-demo)
- [ ] Testat Sales Sparring Coach cu API key înainte de filmare
- [ ] Cursul complet (Săpt 1-6) - materialele sunt gata, de filmat lecțiile

### Commits (vibe-budget starter branch)
- `e3ee2ae` Add auto-categorization files and light mode to starter
- `219b8a9` Remove test-data directory - students use own bank statements

### Decizii importante

**1. Parsing dat pre-built în starter:**
- Fișierele de parsing (file-parser.ts, categories-rules.ts, user-keywords-matcher.ts) puse direct în starter
- Motivație: parsing e prea complex, cursanții s-ar bloca
- Cursanții construiesc restul (API, UI, import logic)

**2. Testare cu extrase bancare proprii (nu test data):**
- Șters test-data/ din starter complet
- Ghidul include tabel cu instrucțiuni per bancă (ING, BCR, BT, Revolut, PayPal)
- "Momentul WOW" = vezi tranzacțiile TALE în aplicația TA

**3. API key Anthropic - clarificare importantă:**
- Claude Code ≠ Claude API (conturi separate, facturare separată)
- console.anthropic.com → cont nou → $5 credit gratuit
- Adăugat slide dedicat + secțiune în ghid 5.2
- Același API key se folosește și pentru Vibe Budget (AI Coach) și pentru Barista Bot

**4. Barista Bot - Săptămâna 6 (2 lecții, nu 3):**
- Componentă direct în vibe-website (nu repo separat)
- Claude Code citește meniul din components/Menu.tsx (variază per cursant)
- Claude Code propune 3 personalități → cursantul alege
- Folosește Anthropic API (NU OpenAI ca repo-ul original barista-bot)
- Knowledge base generat automat din meniul cursantului

**5. Light mode forțat pe vibe-budget starter:**
- Removed dark mode complet din globals.css
- Removed toate clasele dark:* din page.tsx
- Motivație: evităm confuzia cu tema neagră/albastru pe macOS dark mode

### Materiale create sesiunea aceasta (8 fișiere noi):

**Lecția 5.1:** PREZENTARE-5.1 + GHID-5.1
**Lecția 5.2:** PREZENTARE-5.2 + GHID-5.2
**Lecția 6.1:** PREZENTARE-6.1 + GHID-6.1
**Lecția 6.2:** PREZENTARE-6.2 + GHID-6.2

**Total materiale curs (toate sesiunile): 17 fișiere**
- 6 prezentări (4.1, 4.2, 4.3, 5.1, 5.2, 6.1, 6.2) - una e GHID-UI-UX
- 6 ghiduri (4.1, 4.2, 4.3, 5.1, 5.2, 6.1, 6.2)
- 3 materiale suplimentare (GHID-TERMENI-TEHNICI, GHID-UI-UX, PROCES-CREARE-MATERIALE)

---

## 2026-02-09 - Materiale Complete Săptămâna 4 (Vibe Budget)

### Ce s-a făcut
- ✅ Creat PREZENTARE-4.1-SETUP-AUTH-DASHBOARD.md (11 slide-uri, plan mode intro)
- ✅ Creat GHID-4.1-SETUP-AUTH-DASHBOARD.md (5 comenzi, clonare + auth + dashboard)
- ✅ Creat PREZENTARE-4.2-CRUD-MANAGERS.md (10 slide-uri, CRUD pattern)
- ✅ Creat GHID-4.2-CRUD-MANAGERS.md (7 comenzi, Banks/Categories/Currencies)
- ✅ Creat GHID-TERMENI-TEHNICI.md (15 termeni cu traduceri simple)
- ✅ Creat PREZENTARE-4.3-TRANSACTIONS-UPLOAD-UI.md (11 slide-uri)
- ✅ Creat GHID-4.3-TRANSACTIONS-UPLOAD-UI.md (7 comenzi, transactions + upload UI only)
- ✅ Creat GHID-UI-UX.md (concepte design, BAD vs GOOD examples)
- ✅ Toate materialele copiate pe Desktop pentru revizuire
- ✅ Creat branch starter pentru vibe-budget (fundație solidă, 90% cod de construit)

### Ce rămâne
- [ ] Săptămâna 5, Lecția 5.1: Upload Logic (CSV/Excel parsing)
- [ ] Săptămâna 5, Lecția 5.2: Reports + AI Insights + Deploy
- [ ] Decizie: Parsing-ul - copiem din main (Varianta B) sau dăm în starter (Varianta A)?

### Commits
- Niciun commit încă - fișiere noi neadăugate în git

### Decizii importante

**1. Plan mode - Flow corect:**
- User activează MANUAL plan mode din selector
- NU "Claude Code propune plan mode"
- Corectat în toate materialele

**2. Terminologie:**
- Folosim "lecție" nu "video"
- Termeni tehnici limitați la 15 repetitivi (API, CRUD, endpoint, etc.)
- Ghid separat GHID-TERMENI-TEHNICI.md dat la Lecția 4.2

**3. Separare UI de Backend (Lecția 4.3):**
- Upload Form = doar UI în Lecția 4.3
- Upload Logic = Săptămâna 5, Lecția 5.1 (45-60 min dedicat)
- Motivație: Parsing e complex, evităm blocaj

**4. Branch starter pentru vibe-budget:**
- Fundație: Next.js setup, schema DB (6 tabele), Supabase config, middleware
- Șters: Toate UI pages, API routes, logică complexă (AI, email, auto-cat)
- Cursanții construiesc 90% din cod
- Repo: github.com/danutmitrut/vibe-budget (branch: starter)

**5. Pattern consistent:**
- 7 comenzi per ghid (magic number)
- 9-11 slide-uri per prezentare
- Limbaj conversațional, zero jargon excesiv
- Durate: 35-50 min per lecție

### Materiale create (8 fișiere):

**Lecția 4.1:**
- PREZENTARE-4.1-SETUP-AUTH-DASHBOARD.md
- GHID-4.1-SETUP-AUTH-DASHBOARD.md

**Lecția 4.2:**
- PREZENTARE-4.2-CRUD-MANAGERS.md
- GHID-4.2-CRUD-MANAGERS.md
- GHID-TERMENI-TEHNICI.md (suplimentar)

**Lecția 4.3:**
- PREZENTARE-4.3-TRANSACTIONS-UPLOAD-UI.md
- GHID-4.3-TRANSACTIONS-UPLOAD-UI.md

**Material suplimentar nou:**
- GHID-UI-UX.md (concepte design)

**Alte documente:**
- PROCES-CREARE-MATERIALE.md (proces de lucru)

---
