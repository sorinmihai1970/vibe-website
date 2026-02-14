# GHID 4.1 - Setup, Autentificare și Dashboard
> Material suplimentar pentru cursanți - Video 4.1
> Prima experiență cu plan mode - Claude Code planifică înainte de a executa.

---

## Înainte de a începe

**CE AI NEVOIE:**
- VS Code cu Claude Code activ
- Terminal deschis
- Cont GitHub (pentru clonare repo)

**CE VEI CONSTRUI:**
- Sistem de autentificare (login + register)
- Dashboard cu rezumat financiar
- Structură aplicație pentru săptămânile 4-5

**TIMP ESTIMAT:** 40-45 minute (clonare + plan mode + construcție)

---

## COMANDA 1: Clonează proiectul Vibe Budget

Spune-i lui Claude Code:

> **"Vreau să lucrez la Vibe Budget. Clonează proiectul de pe GitHub."**

Claude Code o să te întrebe unde e repo-ul. Spune-i:

> **"github.com/danutmitrut/vibe-budget, branch starter"**

Dacă te întreabă unde să cloneze:

> **"În folderul meu principal."**

**Ce face Claude Code:**
- Clonează branch starter de pe GitHub
- Deschide folderul vibe-budget în VS Code
- Verifică structura proiectului

**Ce aștepți să vezi:**
- Folderul vibe-budget apare în VS Code
- Fișiere: `app/`, `lib/`, `package.json`, etc.
- Pagina de start (app/page.tsx) cu "Ce vom construi"

---

## COMANDA 2: Activează plan mode

**IMPORTANT:** Apasă selectorul din partea de jos a chatului Claude Code și alege **"Plan mode"**.

Apoi spune-i lui Claude Code:

> **"Vreau să construim prima parte a aplicației: autentificare și dashboard."**

**Ce face Claude Code:**
- Intră în mod planificare (plan mode activ)
- Citește toate fișierele din proiect
- Analizează ce există deja (schema DB, Supabase, middleware)
- Te întreabă despre detalii

**Claude Code o să te întrebe despre autentificare. Răspunde:**

> **"Vreau pagini de login și register cu email și parolă. Dashboard să arate rezumatul financiar: total bani, venituri luna asta, cheltuieli luna asta."**

Dacă te mai întreabă despre design:

> **"Design ca Vibe Website - fundal transparent cu blur, culori teal și portocaliu."**

**Ce aștepți să vezi:**
- Claude Code zice "Plan mode activ"
- Claude citește fișierele (vezi bara de progres)
- Claude îți pune întrebări despre ce vrei exact

---

## COMANDA 3: Revizuiește planul

După ce Claude Code termină de analizat, o să îți arate un plan cu 10-15 pași.

**AICI E IMPORTANT - CITEȘTE PLANUL CU ATENȚIE!**

O să vezi ceva de genul:
```
PLAN - Autentificare și Dashboard:

1. Creez fișier pentru register (app/api/auth/register/route.ts)
2. Fac hash la parolă cu bcrypt
3. Salvez user în Supabase
4. Creez fișier pentru login (app/api/auth/login/route.ts)
5. Verific parolă și generez JWT token
6. Creez pagina de register (app/register/page.tsx)
7. Creez pagina de login (app/login/page.tsx)
8. Creez pagina dashboard (app/dashboard/page.tsx)
9. Dashboard citește date user din Supabase
10. Afișez rezumat: total, venituri, cheltuieli
```

**Dacă planul arată bine, spune:**

> **"Perfect, execută planul."**

**Dacă vrei să schimbi ceva, spune:**

> **"Modifică pasul X - vreau să..."**

**Ce face Claude Code:**
- Îți arată planul complet
- Așteaptă aprobarea ta
- NU execută nimic până nu confirmi

**Ce aștepți să vezi:**
- Un plan detaliat (10-15 pași)
- Fiecare pas explicat simplu
- Opțiunea să aprobi sau să modifici

---

## COMANDA 4: Așteaptă execuția planului

După ce ai aprobat planul, Claude Code lucrează automat.

**NU TREBUIE SĂ MAI SPUI NIMIC - CLAUDE LUCREAZĂ SINGUR**

**Ce face Claude Code:**
- Execută fiecare pas din plan
- Creează fișierele necesare (API routes, pagini)
- Îți arată progresul pe măsură ce lucrează
- La final îți spune "Am terminat!"

**Ce aștepți să vezi:**
- Claude Code lucrează prin toți pașii
- Vezi mesaje: "Pas 1 completat", "Pas 2 completat", etc.
- Fișiere noi apar în VS Code:
  - app/register/page.tsx
  - app/login/page.tsx
  - app/dashboard/page.tsx
  - app/api/auth/register/route.ts
  - app/api/auth/login/route.ts
- La final: "Planul a fost executat cu succes!"

**DURATĂ:** 10-15 minute (Claude Code lucrează singur)

---

## COMANDA 5: Testează autentificarea și dashboard-ul

După ce Claude Code termină, spune-i:

> **"Pornește serverul să testez."**

**Ce face Claude Code:**
- Pornește serverul local (npm run dev)
- Îți dă link-ul (localhost:3000)

**Testează în browser:**

1. Deschide `localhost:3000`
2. Vei vedea pagina de start Vibe Budget
3. Caută linkul sau mergi direct la `/register`
4. Completează: email, parolă
5. Submit → Ești redirecționat la dashboard
6. Dashboard arată: "Bun venit, [email-ul tău]"
7. Rezumat financiar: Total, Venituri, Cheltuieli (0 deocamdată - e normal, nu ai tranzacții)

**Dacă vezi asta, GATA - merge!**

Spune-i lui Claude Code:

> **"Merge! Oprește serverul."**

**Ce aștepți să vezi:**
- Pagina de register funcționează
- Poți crea cont
- Ești logat automat după register
- Dashboard-ul se încarcă cu datele tale

---

## Rezumat: Cele 5 comenzi

| # | Ce i-ai spus | Ce a făcut |
|---|--------------|------------|
| 1 | "Clonează Vibe Budget, branch starter" | Clonat repo, deschis în VS Code |
| 2 | Activat plan mode + "Construim auth și dashboard" | Intrat în plan mode, analizat proiect, întrebat detalii |
| 3 | "Perfect, execută planul" | Arătat planul (10-15 pași), așteptat aprobare |
| 4 | (nimic - automat) | Executat planul pas cu pas (~15 min) |
| 5 | "Pornește serverul să testez" | Pornit server, testat login + dashboard |

---

## Dacă ceva nu merge

**"Nu găsesc plan mode în selector"**
→ Plan mode e în selectorul din partea de jos a chatului (unde scrii mesajele)
→ Apasă și alege: Plan mode / Edit automatically / Ask before edits

**"Claude Code nu găsește branch starter"**
→ Verifică că ai scris exact: "branch starter" (nu "main")
→ Sau clonează manual: `git clone -b starter https://github.com/danutmitrut/vibe-budget.git`

**"Serverul nu pornește - eroare dependencies"**
→ Spune-i: "Instalează tot ce lipsește" → Claude va rula `npm install`

**"Dashboard arată 0 la toate"**
→ E normal! Nu ai încă tranzacții, bănci, categorii
→ Asta vine în Video 4.2 și 4.3

**"Vreau să văd planul din nou după ce a executat"**
→ Claude Code salvează planul - caută fișier `.claude/plans/` sau întreabă: "Arată-mi planul folosit"

**"Plan mode nu se activează automat"**
→ E normal - TU trebuie să activezi plan mode din selector
→ Claude Code nu decide singur când să intre în plan mode

---

## Ce ai acum

✅ Repo vibe-budget clonat cu fundație solidă (branch starter)
✅ Sistem autentificare funcțional (register + login)
✅ JWT token de sesiune (ești ținut logat)
✅ Dashboard cu rezumat financiar (0 deocamdată)
✅ Design glassmorphism (teal + portocaliu)
✅ Structură pregătită pentru următoarele video-uri

**URMĂTORUL PAS:** Video 4.2 - Adaugi băncile, categoriile și valutele (CRUD Managers).

---

## Lecție importantă: Plan Mode

**CE E PLAN MODE?**
- Mod special în Claude Code unde Claude planifică ÎNAINTE să execute
- Tu vezi planul și îl aprobi/modifici
- Apoi Claude execută automat

**CÂND SĂ FOLOSEȘTI PLAN MODE?**
- Features complexe (mai mult de 3-4 fișiere)
- Când nu știi exact toți pașii
- Aplicații noi (setup inițial)
- Orice task unde te gândești "oare va uita Claude să facă X?"

**CÂND NU E NEVOIE?**
- Tweaks mici ("schimbă culoarea butonului")
- Bug fixes simple
- Adăugări de 1-2 linii

**CUM ACTIVEZI PLAN MODE?**
1. Apasă selectorul din partea de jos a chatului
2. Alege "Plan mode"
3. Claude Code va planifica înainte să execute

**AVANTAJE PLAN MODE:**
- Vezi înainte ce se va construi
- Poți corecta planul înainte de cod
- Claude lucrează mai organizat
- Previne uitarea unor pași
- Zero debugging de "de ce nu merge X"

**DEZAVANTAJE:**
- Mai lent (5-10 min planificare + execuție)
- Peste-engineered pentru lucruri simple

**REGULĂ:** Dacă task-ul are mai mult de 3 pași → folosește plan mode.

---

**Creat:** 9 februarie 2026
**Aliniat cu:** PREZENTARE-4.1-SETUP-AUTH-DASHBOARD.md
**Durată video:** ~45-50 minute (15 min prezentare + 30-35 min demo)
