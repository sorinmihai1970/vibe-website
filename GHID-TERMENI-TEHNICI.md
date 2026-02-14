# GHID: Termeni Tehnici în Săptămânile 4-5
> Material suplimentar pentru cursanți - Referință terminologie
> Dat împreună cu Lecția 4.2 - pentru că începem să folosim termeni mai specifici.

---

## De ce acest ghid?

În **Săptămânile 1-3** (Vibe Website) am evitat termenii tehnici aproape complet. Totul era "formular", "tabel", "salvează", "afișează".

În **Săptămânile 4-5** (Vibe Budget), aplicația e **3-4x mai complexă**. Unii termeni tehnici devin **inevitabili** pentru că:
- Îi vei întâlni în mesajele de eroare
- Claude Code îi va folosi când îți explică ce face
- Îi vei auzi în conversații cu alți developeri
- Sunt **repetitivi** - după ce îi auzi de 3-4 ori, devin naturali

**Acest ghid NU înseamnă că trebuie să îi memorezi!**

Păstrează-l deschis pe ecran și consultă-l când întâlnești un termen necunoscut.

---

## Lista Termeni (cu traducere în română simplă)

### 1. **API** = Fișier de mijloc

**Ce e:** Fișierul care primește cereri (ex: "salvează bancă") și le procesează (salvează în baza de date).

**Exemplu:**
- Ai un formular pentru adăugare bancă
- Apeși Submit
- Formularul trimite date la **API** (`/api/banks`)
- API-ul salvează banca în Supabase
- Îți răspunde "Gata, salvat!"

**În română:** "Fișierul care primește și procesează cereri"

---

### 2. **CRUD** = Crează, Citește, Actualizează, Șterge

**Ce e:** Cele 4 operații de bază pentru orice date.

**Exemplu bănci:**
- **C**reate = Adaugă bancă nouă
- **R**ead = Vezi lista bănci
- **U**pdate = Schimbă nume/culoare bancă
- **D**elete = Șterge bancă

**În română:** "Operații de bază cu date"

---

### 3. **Endpoint** = Adresa fișierului de mijloc

**Ce e:** URL-ul unde trimiți cereri. Fiecare endpoint face ceva specific.

**Exemple:**
- `/api/banks` = endpoint pentru bănci
- `/api/categories` = endpoint pentru categorii
- `/api/transactions` = endpoint pentru tranzacții

**În română:** "Adresa unde trimiți cererea"

---

### 4. **Route** = Fișier sau pagină accesibilă

**Ce e:** Orice pagină sau fișier API din aplicație.

**Exemple:**
- `/dashboard` = route pentru dashboard (pagină)
- `/api/banks/route.ts` = route pentru API bănci (fișier)

**În română:** "Pagină sau fișier accesibil"

---

### 5. **Schema** = Structura tabelului în baza de date

**Ce e:** Descrierea câmpurilor unui tabel (ce date are, ce tip).

**Exemplu schema `banks`:**
- `id` = număr unic
- `name` = text (numele băncii)
- `color` = text (culoarea în hex)
- `userId` = număr (cui aparține banca)

**În română:** "Structura tabelului"

---

### 6. **Migration** = Schimbare structură bază de date

**Ce e:** Când schimbi structura unui tabel (adaugi/ștergi câmp).

**Exemplu:**
- Inițial: tabel `banks` are doar `name`
- Migration: adaugi câmpul `color`
- Acum: tabel `banks` are `name` și `color`

**În română:** "Modificare structură tabel"

---

### 7. **Token** = Cheie de identificare

**Ce e:** Un cod secret care îți păstrează sesiunea (să rămâi logat).

**Exemplu:**
- Te loghezi → primești un **JWT token**
- Token-ul se salvează în browser
- La fiecare cerere, îl trimiți → aplicația știe cine ești
- Logout → token-ul dispare

**În română:** "Cheie secretă pentru sesiune"

---

### 8. **JWT** = Token special (JSON Web Token)

**Ce e:** Tip specific de token, foarte folosit pentru autentificare.

**De ce e important:** E sigur, nu poate fi falsificat, conține info despre tine.

**În română:** "Token sigur de sesiune"

---

### 9. **Middleware** = Verificator înainte să accesezi pagina

**Ce e:** Cod care rulează ÎNAINTE să intri pe o pagină.

**Exemplu:**
- Încerci să accesezi `/dashboard`
- **Middleware** verifică: "Ai token? Ești logat?"
- Da → Îți arată dashboard-ul
- Nu → Te redirectionează la login

**În română:** "Verificator acces pagină"

---

### 10. **Parsing** = Citire și transformare date

**Ce e:** Când citești un fișier (CSV, Excel) și transformi datele în ceva utilizabil.

**Exemplu CSV:**
```
Fișier brut:
Data,Suma,Descriere
2025-01-15,100,Kaufland

După parsing:
{
  data: "2025-01-15",
  suma: 100,
  descriere: "Kaufland"
}
```

**În română:** "Citire și organizare date din fișier"

---

### 11. **Upload** = Încărcare fișier

**Ce e:** Când trimiți un fișier de pe calculator în aplicație.

**Exemplu:**
- Ai extras CSV de la bancă
- Click "Upload CSV"
- Selectezi fișierul
- Se trimite la server → **parsing** → salvare în baza de date

**În română:** "Încărcare fișier"

---

### 12. **Tabel** = Lista organizată de date

**Ce e:** În UI = tabel vizual cu rânduri și coloane. În DB = colecție de înregistrări.

**Exemplu vizual:**
```
| Nume      | Culoare   |
|-----------|-----------|
| ING       | Portocaliu|
| Revolut   | Mov       |
```

**În română:** "Lista organizată"

---

### 13. **Folder** = Dosar/Directoriu

**Ce e:** Locul unde grupezi fișiere (ca pe calculator).

**Exemplu:**
```
app/
  dashboard/
    banks/
      page.tsx
```

**În română:** "Dosar pentru fișiere"

---

### 14. **Salvează** = Trimite date la baza de date

**Ce e:** Când apeși Submit și datele se păstrează permanent.

**Nu e termen tehnic**, dar e acțiunea fundamentală!

---

### 15. **Token (după explicație inițială)**

După ce ai explicat ce e token-ul (vezi #7), poți folosi termenul direct în conversație.

**Exemplu:**
- "Verifică dacă ai token valid"
- "Token-ul a expirat, loghează-te din nou"

---

## Când folosim termenii tehnici vs limbaj simplu

### ✅ FOLOSIM termenii tehnici când:

1. **Sunt repetitivi** (îi auzi mereu)
   - "Adaugă un API pentru bănci"
   - "Schema baza de date"
   - "Token expirat"

2. **Sunt mai scurți decât explicația**
   - "API" vs "fișierul de mijloc care primește cereri"
   - "CRUD" vs "operațiile de creare, citire, actualizare, ștergere"

3. **Apar în mesaje de eroare**
   - "Invalid token"
   - "Migration failed"
   - "API route not found"

### ❌ EVITĂM jargonul când:

1. **Putem spune la fel de simplu**
   - NU: "Fă un hook custom cu useState"
   - DA: "Salvează valoarea când user tastează"

2. **E prea specific pentru nivel începător**
   - NU: "Folosește memoization pentru optimizare"
   - DA: "Salvează rezultatul să nu calculeze mereu"

3. **Nu aduce valoare conversației**
   - NU: "Implementează un singleton pattern"
   - DA: "Fă o funcție care se apelează o singură dată"

---

## Exemple de conversații naturale (cu termeni repetitivi)

### Exemplu 1: Adăugare API

**ROșU (prea tehnic):**
> "Creează un RESTful API endpoint cu POST request handler care validează payload-ul și face database insertion cu error handling."

**VERDE (natural cu termeni repetitivi):**
> "Vreau un API la `/api/banks` care primește numele băncii și culoarea, le salvează în tabelul banks din Supabase, și răspunde cu succes sau eroare."

### Exemplu 2: Debugging token

**ROȘU (prea tehnic):**
> "JWT verification middleware returnează 401 Unauthorized când token-ul e expired sau invalid signature."

**VERDE (natural):**
> "Când token-ul expiră sau e greșit, middleware-ul te trimite la login. Verifică dacă token-ul e valid."

### Exemplu 3: Upload CSV

**ROȘU (prea tehnic):**
> "Implementează file upload cu multipart/form-data, CSV parsing cu Papa Parse library, data transformation pipeline și bulk insert operation."

**VERDE (natural):**
> "Vreau să pot încărca fișier CSV. După upload, citește datele (parsing), transformă-le în format corect și salvează toate rândurile în tabelul transactions."

---

## Regula de aur: "Pot explica asta mamei mele?"

Înainte să folosești un termen tehnic, întreabă-te:

**"Dacă spun asta mamei mele, înțelege despre ce vorbesc?"**

- "API pentru bănci" → ❌ Nu înțelege
  - **Reformulare:** "Fișierul care primește datele despre bănci și le salvează"

- "Token expirat" → ✅ Înțelege (după ce i-am explicat ce e token-ul)

- "Middleware verifică token-ul" → ✅ Înțelege (după explicații)

- "Singleton pattern cu lazy loading" → ❌❌❌ Nimeni nu înțelege
  - **Reformulare:** "Funcția se apelează o singură dată, când ai nevoie"

---

## Cum să folosești acest ghid

### În timpul lecțiilor:

1. **Păstrează-l deschis pe ecran** (al doilea monitor sau jumătate din ecran)
2. Când Claude Code sau eu (Dan) folosim un termen necunoscut → **caută în ghid**
3. După 3-4 folosiri, **termenul devine familiar** → nu mai cauți

### După lecții:

- **NU trebuie să memorezi!**
- Revii la ghid când îți trebuie
- Când explici altcuiva, folosește **traducerea în română** din ghid

### Peste 2-3 săptămâni:

- Termenii vor fi **naturali** pentru tine
- Îi vei folosi fără să te gândești
- Vei înțelege conversații cu alți developeri

---

## Ultima notă: Termenii ≠ Programare

**Știind termenii NU înseamnă că știi să programezi.**

Termenii sunt doar **vocabular** pentru a comunica mai ușor.

**Programarea reală** = să înțelegi LOGICA:
- Când salvez o bancă, trebuie să verific dacă userul e logat
- Când șterg o categorie, ce se întâmplă cu tranzacțiile?
- Cum validez că email-ul e corect înainte să creez contul?

**Acesta e focusul cursului**: LOGICA aplicației, nu memorarea termenilor!

---

**Creat:** 9 februarie 2026
**Folosit începând cu:** Lecția 4.2
**Actualizat:** Pe măsură ce întâlnim termeni noi în S4-5

**IMPORTANT:** Dacă întâlnești un termen care NU e în acest ghid și nu înțelegi ce înseamnă, **întreabă**! Îl vom adăuga aici pentru următorii cursanți.
