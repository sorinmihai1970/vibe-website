# PREZENTARE 5.1 - Upload Logic: Import Tranzacții
> Lecție din cursul Vibe Coding
> Durata estimată: ~40-45 minute
> Cerință: Lecția 4.3 completată (Upload Form UI existent)

---

## SLIDE 1: Bun venit în Săptămâna 5!

**Săptămâna 4 - COMPLETĂ:**
- ✅ Lecția 4.1: Setup + Autentificare + Dashboard
- ✅ Lecția 4.2: Management Bănci, Categorii, Valute
- ✅ Lecția 4.3: Lista Tranzacții + Upload Form UI

**Săptămâna 5 - Începem acum:**
- 👉 **Lecția 5.1: Upload Logic (ACUM)**
- ⏳ Lecția 5.2: Rapoarte + AI Insights + Deploy

**Azi conectăm Upload Form-ul la logica reală.**

---

## SLIDE 2: Ce am construit vs ce lipsește

**Ce avem din Lecția 4.3:**
- Pagină de upload cu file input
- Dropdown pentru selectare bancă
- Buton "Upload"
- Tabel preview (gol deocamdată)

**Ce lipsește (construim azi):**
- Citirea fișierului CSV/Excel
- Transformarea datelor în format standard
- Preview-ul real cu datele din fișier
- Trimiterea datelor la baza de date
- Categorizare automată a tranzacțiilor

**Rezultat final:** Upload fișier → Preview → Import în baza de date

---

## SLIDE 3: De ce nu scriem totul de la zero?

**Realitatea profesională:**

Citirea fișierelor CSV/Excel e mai complexă decât pare:
- Fiecare bancă are alt format de export
- Datele vin diferit: "01.12.2024" vs "2024-12-01" vs numere Excel
- Diacriticele românești pot fi corupte
- Unele bănci pun suma într-o coloană, altele în două (Debit + Credit)

**Veste bună:**
- Repo-ul starter include deja logica de citire a fișierelor
- A fost testată cu extrase reale de la ING, BCR, Revolut, PayPal
- Toate cazurile speciale sunt rezolvate

**Ce faceți voi azi:**
- Instalați două librării necesare
- Construiți API-ul care primește și salvează tranzacțiile
- Conectați Upload Form la logica existentă
- Testați cu propriile extrase bancare

**Pattern profesionist:** În viața reală, nu reinventezi roata. Folosești cod testat și te concentrezi pe integrare.

---

## SLIDE 4: Arhitectura Upload-ului

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  UPLOAD FORM │ →  │   CITIRE     │ →  │   PREVIEW    │
│  (din 4.3)   │    │   FIȘIER     │    │  (tabel)     │
│              │    │  (în starter)│    │              │
│  File input  │    │  CSV → Date  │    │  10 rânduri  │
│  Bancă       │    │  Excel→Date  │    │  Verificare  │
└──────────────┘    └──────────────┘    └──────┬───────┘
                                               │
                                          Click "Importă"
                                               │
                                               ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  BAZA DATE   │ ←  │    API       │ ←  │   REQUEST    │
│  (Supabase)  │    │ (construim!) │    │  POST + JWT  │
│              │    │              │    │              │
│  INSERT rows │    │  Auto-categ. │    │  Tranzacții  │
│  categories  │    │  (în starter)│    │  + bankId    │
└──────────────┘    └──────────────┘    └──────────────┘
```

**Ce e deja în starter:** Citirea fișierelor + Auto-categorizarea
**Ce construim noi:** API-ul + Conectarea pieselor

---

## SLIDE 5: Auto-categorizarea - Cum funcționează

**Când importi tranzacții, aplicația ghicește categoria automat:**

```
"MEGA IMAGE BUCURESTI"  →  🛍️ Cumpărături
"UBER TRIP"             →  🚗 Transport
"NETFLIX.COM"           →  📺 Subscripții
"SALARIU LUNA DEC"      →  💰 Venituri
```

**Sistem cu 2 nivele de prioritate:**

| Prioritate | Sursă | Exemplu |
|-----------|-------|---------|
| **1 (PRIMA)** | Cuvinte cheie personalizate | Tu ai salvat "cofidis" → Cumpărături |
| **2 (A DOUA)** | Reguli generale (100+ cuvinte cheie) | "mega image" → Cumpărături |

**Dacă nu găsește nimic:** Categoria rămâne goală → Utilizatorul categorizează manual

**Cu cât folosești mai mult aplicația, cu atât devine mai precisă!**

---

## SLIDE 6: Testarea - Cu propriile tale extrase!

**Azi nu testăm cu date fictive. Testăm cu datele TALE reale.**

**Cum descarci extras de la banca ta:**

| Bancă | De unde | Format |
|-------|---------|--------|
| **ING** | Home'Bank → Istoric → Export | CSV |
| **BCR** | George → Tranzacții → Export | CSV |
| **BT** | BT24 → Extras de cont → Descarcă | CSV/Excel |
| **Revolut** | App → Statements → Generate | CSV/Excel |
| **PayPal** | Activity → Download → CSV | CSV |

**Descarcă direct din aplicația băncii, NU din convertoare online.**

**Momentul WOW:** Vei vedea propriile tranzacții, categorizate automat, în aplicația pe care ai construit-o TU.

---

## SLIDE 7: Ce construim noi azi (pas cu pas)

**Comanda 1:** Instalăm librăriile necesare pentru citirea fișierelor

**Comanda 2:** Construim API-ul care primește și salvează tranzacțiile

**Comanda 3:** Conectăm Upload Form la logica de citire fișiere

**Comanda 4:** Adăugăm preview-ul real cu datele din fișier

**Comanda 5:** Conectăm butonul "Importă" la API

**Comanda 6:** Descarcă un extras de la banca ta și testează!

**Comanda 7:** Testare completă - tot flow-ul de la upload la lista tranzacții

---

## SLIDE 8: Lecție importantă - Cod existent vs Cod nou

**Nu tot codul trebuie scris de tine.**

**În proiectele reale:**
- Folosești librării - scrise de alții, testate de mii de oameni
- Folosești cod de la colegi - testat și verificat
- Folosești cod generat de AI - revizuit și adaptat

**Ce contează:**
- Să **înțelegi** ce face codul (nu neapărat să-l scrii)
- Să **integrezi** corect (conectezi piesele)
- Să **testezi** rezultatul (funcționează cu datele tale?)

**Analogie:**
- Nu construiești motorul mașinii ca să conduci
- Dar trebuie să știi ce face motorul ca să diagnostichezi probleme

**Azi:** Motorul (citirea fișierelor) e deja în proiect. Voi construiți drumul (API) și puneți totul în mișcare.

---

## SLIDE 9: Demo live

**Hai să vedem cum funcționează!**

Urmăriți ghidul pas cu pas - 7 comenzi, ~40 minute.

Deschideți Claude Code și începem cu Comanda 1.

---

## SLIDE 10: Recapitulare Lecția 5.1

**Ce am făcut:**
- ✅ Instalat librăriile necesare
- ✅ Construit API endpoint pentru import tranzacții
- ✅ Conectat Upload Form la logica de citire
- ✅ Adăugat preview real cu date din fișier
- ✅ Implementat auto-categorizare
- ✅ Testat cu propriile extrase bancare

**Ce rămâne (Lecția 5.2):**
- Rapoarte cu grafice
- AI Financial Coach (insights personalizate)
- Deploy pe Vercel

**Mai avem o singură lecție!**

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 5
**Aplicație:** Vibe Budget (gestiune financiară personală)
