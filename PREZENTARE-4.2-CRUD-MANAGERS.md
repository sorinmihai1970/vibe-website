# PREZENTARE 4.2 - CRUD Managers (Bănci, Categorii, Valute)
> Săptămâna 4 - Vibe Budget (Financial Tracking App)
> Durată: ~35-40 min (prezentare + demo live)

---

## SLIDE 1: Titlu

```
SĂPTĂMÂNA 4 - LECȚIA 4.2
CRUD Managers: Bănci, Categorii, Valute

Învățăm pattern-ul CRUD o dată, repetăm de 3 ori
```

---

## SLIDE 2: Recap Lecția 4.1 - Ce avem deja

```
✅ LECȚIA 4.1 - CE AM CONSTRUIT:

→ Branch starter clonat (fundație solidă)
→ Sistem autentificare (register + login)
→ JWT token (sesiune persistentă)
→ Dashboard cu rezumat financiar
→ Plan mode folosit pentru prima dată

ACUM: Construim paginile de management date
```

---

## SLIDE 3: Ce construim în Lecția 4.2

```
3 PAGINI DE MANAGEMENT = CRUD MANAGERS

1. BANKS MANAGER (/dashboard/banks)
   → Adaugi băncile tale (ING, Revolut, BT, etc.)
   → Alegi culoare pentru fiecare bancă
   → Ștergi băncile vechi

2. CATEGORIES MANAGER (/dashboard/categories)
   → Categorii venituri vs cheltuieli
   → Icon picker (emoji pentru fiecare categorie)
   → Categorii sistem vs personalizate

3. CURRENCIES MANAGER (/dashboard/currencies)
   → Valute (RON, EUR, USD, GBP)
   → Preset rapid pentru valute populare

TOATE 3 = ACELAȘI PATTERN (CRUD)
```

---

## SLIDE 4: Pattern-ul CRUD - Concept

```
CRUD = 4 OPERAȚII DE BAZĂ

C = Create (Creează)   → Adaugă bancă nouă
R = Read (Citește)     → Vezi lista bănci
U = Update (Actualizează) → Schimbă nume/culoare
D = Delete (Șterge)    → Șterge bancă

PATTERN IDENTIC pentru toate 3 paginile:
→ Tabel cu date
→ Buton "Adaugă"
→ Form cu câmpuri
→ Butoane "Editează" și "Șterge" pe fiecare rând

Învățăm odată, repetăm de 3 ori!
```

---

## SLIDE 5: De ce CRUD Managers acum?

```
ÎNAINTE de tranzacții AI NEVOIE de:

→ Bănci (unde sunt banii?)
→ Categorii (cum clasificăm cheltuielile?)
→ Valute (ce monede folosim?)

LOGICA:
1. Setup date inițiale (Lecția 4.2)
2. După aceea adaugi tranzacții (Lecția 4.3)
3. Apoi upload CSV/Excel (Săptămâna 5)

Fără bănci și categorii = nu poți gestiona tranzacții!
```

---

## SLIDE 6: Ce vom face astăzi

```
7 COMENZI = 3 PAGINI CRUD

1. Construiește Banks Manager (tabel + form + color picker)
2. Testează Banks Manager (adaugă, editează, șterge)
3. Construiește Categories Manager (income vs expense, icon picker)
4. Testează Categories Manager
5. Construiește Currencies Manager (simplu, preset)
6. Testează Currencies Manager
7. Testează toate 3 împreună

Pattern CRUD învățat odată, repetat de 3 ori!
```

---

## SLIDE 7: Pregătire pentru demo

```
CE AI NEVOIE:

✅ Lecția 4.1 finalizată (auth + dashboard funcțional)
✅ Proiect vibe-budget deschis în VS Code
✅ Claude Code activ
✅ GHID-4.2 deschis

NOTĂ: Folosim plan mode pentru fiecare pagină,
      dar pattern-ul e același → rapid!

Gata? Demo live!
```

---

## [DEMO LIVE - 25-30 minute]

**Urmărește GHID-4.2 - 7 comenzi:**

1. "Construiește Banks Manager"
2. "Testează Banks Manager"
3. "Construiește Categories Manager"
4. "Testează Categories Manager"
5. "Construiește Currencies Manager"
6. "Testează Currencies Manager"
7. "Testează toate 3 împreună"

**Demo include:**
- Pattern CRUD explicat o dată
- 3 pagini construite rapid (același pattern)
- Testare completă pentru fiecare

---

## SLIDE 8: Recapitulare

```
CE AM FĂCUT:

✅ Învățat pattern-ul CRUD (Create, Read, Update, Delete)
✅ Construit Banks Manager (color picker)
✅ Construit Categories Manager (income/expense, icon picker)
✅ Construit Currencies Manager (preset rapid)
✅ Testat fiecare pagină separat
✅ Dashboard acum poate folosi date reale

ACUM AVEM:
→ Auth funcțional
→ Dashboard
→ 3 pagini management date

PATTERN CRUD = repetat de 3 ori, însușit!
```

---

## SLIDE 9: Ce urmează

```
LECȚIA 4.3: Lista Tranzacții + Upload Form UI

→ Pagina cu toate tranzacțiile (tabel mare)
→ Filtre (date, bancă, categorie)
→ Căutare după descriere
→ Form upload CSV/Excel (doar UI, fără logică)
→ Buton "Adaugă tranzacție manual"

După 4.3 = UI complet!
Săptămâna 5 = Backend complex (upload logic + AI)
```

---

## SLIDE 10: Întrebări?

```
ÎNTREBĂRI FRECVENTE:

"De ce 3 pagini separate, nu una singură?"
→ Organizare mai bună - fiecare gestionează un tip de date
→ Mai ușor de navigat pentru utilizator

"CRUD e același pattern peste tot în programare?"
→ Da! Pattern fundamental în orice aplicație
→ Odată învățat, îl folosești mereu

"Pot personaliza culorile/icon-urile?"
→ Da, în Banks/Categories ai color picker și icon picker
→ Fiecare user își personalizează datele

"Cum păstrăm datele între lecții?"
→ Totul salvat în Supabase (cloud)
→ Chiar dacă închizi VS Code, datele rămân
```

---

**MATERIALE:**
- **GHID-4.2-CRUD-MANAGERS.md** - Pas cu pas cu comenzi Claude Code
- **PREZENTARE-4.2-CRUD-MANAGERS.md** - Acest fișier (slide-uri)

**DURATA TOTALĂ:** ~35-40 minute (10 min prezentare + 25-30 min demo live)
