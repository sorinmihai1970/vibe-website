# PREZENTARE 5.2 - Rapoarte, AI Insights și Deploy
> Lecție din cursul Vibe Coding
> Durata estimată: ~45-50 minute
> Cerință: Lecția 5.1 completată (Upload funcțional, tranzacții importate)
> ULTIMA LECȚIE!

---

## SLIDE 1: Ultima lecție!

**Săptămâna 4 - COMPLETĂ:**
- ✅ Lecția 4.1: Setup + Autentificare + Dashboard
- ✅ Lecția 4.2: Management Bănci, Categorii, Valute
- ✅ Lecția 4.3: Lista Tranzacții + Upload Form UI

**Săptămâna 5:**
- ✅ Lecția 5.1: Upload Logic (import tranzacții reale)
- 👉 **Lecția 5.2: Rapoarte + AI + Deploy (ACUM - ULTIMA!)**

**Azi terminăm aplicația și o punem online.**

---

## SLIDE 2: Ce construim azi - 3 părți

**Partea 1: Rapoarte cu grafice (~15 min)**
- Cheltuieli pe categorii (pie chart)
- Trend lunar (bar chart)
- Rezumat: total cheltuieli, total venituri, balanță

**Partea 2: AI Financial Coach (~15 min)**
- Claude AI analizează tranzacțiile tale
- Îți dă sfaturi personalizate
- Health score financiar

**Partea 3: Deploy pe Vercel (~15 min)**
- Aplicația ta online, accesibilă de oriunde
- URL propriu
- Commit + Push + Deploy

---

## SLIDE 3: Rapoarte - Ce grafice facem

**Grafic 1: Cheltuieli pe categorii (Pie Chart)**

```
🛍️ Cumpărături ████████████ 35%
🚗 Transport    ██████ 18%
🏠 Locuință     █████ 15%
📺 Subscripții  ████ 12%
🍽️ Divertisment ███ 10%
🏥 Sănătate     ██ 6%
📚 Altele       █ 4%
```

**Grafic 2: Trend lunar (Bar Chart)**
- Câți bani ai cheltuit pe fiecare lună
- Compari lunile între ele
- Vezi dacă cheltuielile cresc sau scad

**Rezumat în cifre:**
- Total cheltuieli luna curentă
- Total venituri luna curentă
- Balanță (venituri - cheltuieli)

---

## SLIDE 4: API Key - Cum obții acces la Claude AI

**Claude Code ≠ Claude API**

Voi deja aveți cont pe claude.ai (pentru Claude Code). Dar pentru a folosi AI din aplicație, trebuie un API key separat.

| Ce ai deja | Ce ai nevoie |
|-----------|-------------|
| claude.ai (chat + Claude Code) | console.anthropic.com (API programatic) |
| Plătit prin abonament Pro/Max | Plătit per utilizare ($5 credit gratuit) |
| Folosit în VS Code | Folosit din aplicația ta |

**Pași (2 minute):**
1. Intră pe **console.anthropic.com**
2. Creează cont (e-mail + parolă)
3. Primești automat **$5 credit gratuit** (suficient pentru sute de analize)
4. Mergi la API Keys → Create New Key
5. Copiază key-ul și pune-l în fișierul `.env.local` al proiectului

**De ce cont separat?** Pentru că aplicația ta trimite cereri la Claude AI independent de Claude Code. Sunt sisteme diferite.

---

## SLIDE 5: AI Financial Coach

**Ce face:**
- Analizează tranzacțiile tale importate
- Calculează un "health score" financiar (0-100)
- Dă sfaturi personalizate bazate pe datele tale reale

**Exemple de sfaturi:**
- "Cheltuielile pe transport au crescut cu 23% față de luna trecută"
- "Ai 3 subscripții care însumează 150 RON/lună - verifică dacă le folosești pe toate"
- "Health score: 72/100 - Bun! Economisești constant, dar ai câteva categorii unde poți optimiza"

**Cum funcționează tehnic:**
- Trimitem un rezumat al tranzacțiilor la Claude AI (prin API key-ul tău)
- Claude AI returnează analiza și sfaturile
- Afișăm rezultatul într-un card frumos

**Datele tale NU pleacă nicăieri** - rămân în baza ta de date. Doar un rezumat (categorii + sume totale) e trimis la AI.

---

## SLIDE 6: Deploy pe Vercel

**De ce Vercel?**
- Gratuit pentru proiecte personale
- Se conectează direct la GitHub
- Deploy automat la fiecare push
- URL propriu (proiectul-tau.vercel.app)

**Pașii:**
1. Commit tot codul local
2. Push pe GitHub
3. Conectează repo-ul la Vercel
4. Vercel construiește și publică automat
5. Primești URL-ul aplicației tale

**Rezultat:** Aplicația ta de buget, online, accesibilă de pe telefon sau orice browser.

---

## SLIDE 7: Ce construim noi azi (pas cu pas)

**Comanda 1:** Construim pagina de Rapoarte cu grafice

**Comanda 2:** Adăugăm rezumatul financiar (total cheltuieli, venituri, balanță)

**Comanda 3:** Construim AI Financial Coach

**Comanda 4:** Testăm rapoartele și AI-ul cu tranzacțiile importate

**Comanda 5:** Commit + Push pe GitHub

**Comanda 6:** Deploy pe Vercel

**Comanda 7:** Verificare finală - aplicația ta e online!

---

## SLIDE 8: Lecție importantă - De la local la online

**Ordinea de construcție (Golden Rule):**

```
LOCAL → GITHUB → VERCEL
  1.       2.       3.
```

1. **Local:** Construiești și testezi pe calculatorul tău
2. **GitHub:** Salvezi codul într-un loc sigur (backup + istoric)
3. **Vercel:** Publici aplicația pentru toată lumea

**De ce în ordinea asta?**
- Dacă publici direct → Nu ai backup
- Dacă sari peste GitHub → Nu ai istoric al schimbărilor
- Dacă nu testezi local → Publici bug-uri

**Pattern profesionist:** Niciun developer serios nu publică fără să testeze local și să salveze pe GitHub mai întâi.

---

## SLIDE 9: Demo live

**Hai să terminăm aplicația!**

Urmăriți ghidul pas cu pas - 7 comenzi, ~45 minute.

Deschideți Claude Code și începem cu Comanda 1.

---

## SLIDE 10: Recapitulare Lecția 5.2

**Ce am făcut:**
- ✅ Rapoarte cu grafice (pie chart + bar chart)
- ✅ Rezumat financiar (cheltuieli, venituri, balanță)
- ✅ AI Financial Coach (health score + sfaturi)
- ✅ Deploy pe Vercel (aplicația e online!)

**Aplicația completă include:**
- Autentificare (login/register)
- Dashboard cu rezumat
- Management bănci, categorii, valute
- Upload CSV/Excel cu auto-categorizare
- Rapoarte cu grafice
- AI Financial Coach
- Online pe Vercel

---

## SLIDE 11: Felicitări!

**Ai construit o aplicație completă de gestiune financiară.**

**Ce ai învățat în Săptămânile 4-5:**
- Plan mode pentru proiecte complexe
- Pattern CRUD (Create, Read, Update, Delete)
- Separarea UI de Backend
- Integrare cu cod existent
- Auto-categorizare cu reguli și cuvinte cheie
- Grafice și rapoarte
- Integrare cu AI (Claude API)
- Deploy pe Vercel

**Ce poți face mai departe:**
- Adaugă mai multe bănci
- Importă extrase lunare
- Folosește aplicația cu adevărat pentru bugetul tău!
- Arată-le prietenilor ce ai construit

**Bravo! Asta e vibe coding.**

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 5
**Aplicație:** Vibe Budget (gestiune financiară personală)
