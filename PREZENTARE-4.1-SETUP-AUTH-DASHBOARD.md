# PREZENTARE 4.1 - Setup, Autentificare și Dashboard
> Săptămâna 4 - Vibe Budget (Financial Tracking App)
> Durată: ~45-50 min (prezentare + demo live cu plan mode)

---

## SLIDE 1: Titlu

```
SĂPTĂMÂNA 4 - VIDEO 4.1
Vibe Budget - Setup și Autentificare

De la Vibe Website la aplicație financiară reală
```

---

## SLIDE 2: Ce construim în Săptămâni 4-5

```
VIBE BUDGET - APLICAȚIE GESTIUNE FINANCIARĂ

Ce face:
→ Conectezi conturile bancare (RON, EUR, USD, etc.)
→ Încarci extrasele bancare (CSV sau Excel)
→ Categorizezi automat cheltuielile
→ Vezi rapoarte și grafice
→ Primești recomandări de la AI

Pentru cine:
→ Oricine vrea să știe unde îi dispar banii
→ Freelanceri cu mai multe valute
→ Oameni care vor buget organizat

De ce e utilă:
→ O singură aplicație pentru toate băncile
→ Categorii automate (nu introduci manual)
→ AI care îți spune unde poți economisi
```

---

## SLIDE 3: Diferențe față de Vibe Website

```
VIBE WEBSITE (S1-3):
→ 1 tabel în bază de date
→ Formular simplu (rezervări)
→ Fără autentificare
→ Admin basic

VIBE BUDGET (S4-5):
→ 6 tabele în bază de date
→ Upload fișiere (CSV, Excel)
→ Autentificare cu parolă
→ AI pentru recomandări
→ Grafice și rapoarte

✨ 3-4x mai complex, dar folosim aceeași metodă:
   comenzi simple către Claude Code
```

---

## SLIDE 4: Structura Săptămânii 4

```
3 VIDEO-URI = APLICAȚIE FUNCȚIONALĂ

VIDEO 4.1 (ASTĂZI): Setup + Autentificare + Dashboard
→ Proiect nou Next.js
→ Login/Register (cu parolă)
→ Pagina principală cu rezumat financiar

VIDEO 4.2: Gestiune date (bănci, categorii, valute)
→ Adaugi băncile tale
→ Creezi categorii personalizate
→ Configurezi valutele

VIDEO 4.3: Lista tranzacții + Upload
→ Vezi toate tranzacțiile
→ Filtre și căutare
→ Upload CSV/Excel (partea vizuală)
```

---

## SLIDE 5: Conceptul "Plan Mode" - NOU!

```
PÂNĂ ACUM (S1-3):
→ Tu: "Vreau formular de rezervări"
→ Claude Code: face direct

DE ACUM (S4-5):
→ TU activezi plan mode (selector din chat)
→ Tu: "Vreau aplicație finance tracking"
→ Claude Code: intră în mod planificare
→ Claude explorează proiectul
→ Claude întreabă detalii
→ Claude propune un plan (10-15 pași)
→ Tu aprobi planul
→ Claude execută automat

WHY PLAN MODE?
→ Aplicații complexe = risc să uiți ceva
→ Tu vezi înainte ce se va construi
→ Poți corecta planul înainte de cod
→ Claude lucrează mai organizat

CUM ACTIVEZI?
→ Selector din chat: Plan mode / Edit automatically / Ask before edits
```

---

## SLIDE 6: Cum funcționează Plan Mode

```
┌─────────────────────┐
│  TU                 │
│  Apasă selector     │
│  "Plan mode"        │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  TU                 │
│  "Vreau X"          │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  CLAUDE CODE        │
│  (în plan mode)     │
│  citește repo       │
│  analizează         │
│  te întreabă        │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  PLAN (10-15 pași)  │
│  1. Creez DB schema │
│  2. Fac auth        │
│  ...                │
└──────────┬──────────┘
           │
           ↓ tu aprobi
┌─────────────────────┐
│  EXECUȚIE           │
│  Claude face pas    │
│  cu pas             │
└─────────────────────┘
```

---

## SLIDE 7: Ce vom face astăzi

```
5 COMENZI = SETUP + AUTH + DASHBOARD

1. Clonează repo-ul vibe-budget (branch starter)
2. Activează plan mode + cere construcție auth + dashboard
3. Revizuiești și aprobi planul
4. Așteaptă - Claude execută planul automat
5. Testezi login și dashboard

Clonare (~5 min) + Plan mode (~15 min) + Execuție (~20 min)
```

---

## SLIDE 8: Pregătire pentru demo

```
CE AI NEVOIE:

✅ VS Code instalat cu Claude Code
✅ Cont GitHub (pentru clonare repo)
✅ Claude Code activ
✅ GHID-4.1 deschis

NOTĂ: Repo-ul vibe-budget (branch starter) conține fundația:
      - Next.js setup complet
      - Schema DB Drizzle (6 tabele)
      - Supabase config + middleware
      - Foldere goale pentru pagini și API

      Cursanții construiesc 90% din cod!

Gata? Demo live cu plan mode!
```

---

## [DEMO LIVE - 30-35 minute]

**Urmărește GHID-4.1 - 5 comenzi:**

1. "Clonează Vibe Budget, branch starter"
2. Activează plan mode + "Construim auth și dashboard"
3. "Perfect, execută planul"
4. (Așteaptă - Claude execută automat)
5. "Pornește serverul să testez"

**Demo include:**
- Activare plan mode (NOUĂ EXPERIENȚĂ)
- Claude explorează repo-ul
- Planul propus de Claude (10-15 pași)
- Aprobare plan
- Execuție automată
- Testare login local

---

## SLIDE 9: Recapitulare

```
CE AM FĂCUT:

✅ Înțeles ce e Vibe Budget
✅ Descoperit plan mode (mod planificare)
✅ Folosit plan mode pentru prima dată
✅ Construit setup + autentificare
✅ Creat dashboard basic
✅ Testat login funcțional

CONCEPTE NOI:
→ Plan mode (planificare înainte de execuție)
→ Autentificare cu parolă (hashed)
→ Token de sesiune
```

---

## SLIDE 10: Ce urmează

```
VIDEO 4.2: Gestiune Date (Bănci, Categorii, Valute)

→ Adaugi băncile tale (ING, Revolut, etc.)
→ Creezi categorii personalizate (Mâncare, Transport, etc.)
→ Configurezi valutele (RON, EUR, USD)
→ Pattern CRUD (Create, Read, Update, Delete)

După V4.2 ai dashboard + gestiune completă date!
```

---

## SLIDE 11: Întrebări?

```
ÎNTREBĂRI FRECVENTE:

"Plan mode e obligatoriu?"
→ Nu, dar recomandat pentru features complexe
→ Pentru tweaks mici poți folosi comenzi directe

"Pot modifica planul propus de Claude?"
→ Da! Înainte de aprobare poți cere modificări

"Cât durează plan mode?"
→ 5-15 min (depinde de complexitate feature)
→ Saving: previne ore de debugging

"De ce repo vibe-budget deja există?"
→ Conține structura de bază (foldere, config)
→ TU construiești funcționalitatea (auth, dashboard, etc.)
```

---

**MATERIALE:**
- **GHID-4.1-SETUP-AUTH-DASHBOARD.md** - Pas cu pas cu comenzi Claude Code
- **PREZENTARE-4.1-SETUP-AUTH-DASHBOARD.md** - Acest fișier (slide-uri)

**DURATA TOTALĂ:** ~45-50 minute (15 min prezentare + 30-35 min demo live)

---

## 🎯 IMPORTANT: PLAN MODE

Acesta este primul video unde introducem plan mode.
Cursanții vor vedea pentru prima dată:
- Claude Code întreabă "Vrei să activez plan mode?"
- Claude explorează repository-ul
- Claude propune un plan structurat
- Tu revizuiești și aprobi

E un moment "wow" - aplicația devine colaborare strategică, nu doar execuție.
