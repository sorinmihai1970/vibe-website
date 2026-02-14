# GHID 5.2 - Rapoarte, AI Insights și Deploy
> Ghid pas cu pas pentru Lecția 5.2 - ULTIMA LECȚIE!
> 7 comenzi | ~45-50 minute
> Cerință: Lecția 5.1 completată (Upload funcțional, tranzacții importate)

---

## Înainte să începem

**Ce ar trebui să ai funcțional:**
- ✅ Aplicația rulează local (`npm run dev`)
- ✅ Te poți loga (ai cont creat)
- ✅ Ai bănci, categorii, valute create (din Lecția 4.2)
- ✅ Ai tranzacții importate din extrasul tău bancar (din Lecția 5.1)

**Ce vom face azi:**
Construim rapoarte cu grafice, adăugăm AI Financial Coach, și punem aplicația online pe Vercel. La final, ai o aplicație completă, funcțională, accesibilă de oriunde.

---

## COMANDA 1: Construiește pagina de Rapoarte

Construim pagina cu grafice care arată cum îți cheltuiești banii.

**Activează Plan mode** (selectorul din partea de jos a chatului) apoi spune-i lui Claude Code:

```
Construiește o pagină de rapoarte în dashboard care arată:

1. Pie chart cu cheltuieli pe categorii (cât % din total e fiecare categorie)
2. Bar chart cu cheltuieli pe luni (cât ai cheltuit în fiecare lună)
3. Folosește datele reale din tranzacțiile importate
4. Adaugă filtre: perioadă (luna curentă, ultimele 3 luni, ultimele 6 luni, tot)
5. Graficele să fie colorate și ușor de citit
```

**Ce se întâmplă:**
- Se creează pagina de rapoarte cu două grafice
- Datele vin din tranzacțiile tale reale (importate în Lecția 5.1)
- Filtrele permit analiza pe diferite perioade

**Verifică:** Deschide pagina de rapoarte - ar trebui să vezi grafice cu datele tale.

---

## COMANDA 2: Adaugă rezumatul financiar

Adăugăm carduri cu cifrele importante: cât ai cheltuit, cât ai câștigat, cât ți-a rămas.

**Spune-i lui Claude Code:**

```
Adaugă deasupra graficelor un rezumat financiar cu 3 carduri:

1. Total cheltuieli (sumă negativă, afișată în roșu)
2. Total venituri (sumă pozitivă, afișată în verde)
3. Balanță (venituri minus cheltuieli, verde dacă pozitivă, roșu dacă negativă)

Cardurile să se actualizeze când schimbi filtrul de perioadă.
```

**Ce se întâmplă:**
- 3 carduri mari apar deasupra graficelor
- Cifrele sunt din tranzacțiile tale reale
- Se schimbă când alegi altă perioadă

**Verifică:** Cifrele ar trebui să corespundă cu tranzacțiile importate.

---

## COMANDA 3: Obține API key + Construiește AI Financial Coach

Acum adăugăm inteligența artificială. Dar mai întâi, ai nevoie de un API key de la Anthropic.

### Pas 1: Obține API key (2 minute)

**Claude Code ≠ Claude API.** Contul tău de pe claude.ai (pe care îl folosești pentru Claude Code) e separat de API-ul programatic. Pentru ca aplicația ta să comunice cu Claude AI, ai nevoie de un API key de la console.anthropic.com.

**Pași:**
1. Intră pe **console.anthropic.com**
2. Creează cont cu e-mail și parolă
3. Primești automat **$5 credit gratuit** (suficient pentru sute de analize)
4. Mergi la **API Keys** → **Create New Key**
5. Dă-i un nume (ex: "vibe-budget")
6. Copiază key-ul (începe cu `sk-ant-...`)
7. Deschide fișierul `.env.local` din proiect și adaugă:
   ```
   ANTHROPIC_API_KEY=sk-ant-...cheia-ta-aici...
   ```
8. Restartează serverul (`npm run dev`)

**De ce cont separat?** Aplicația ta trimite cereri direct la Claude AI, independent de Claude Code. Sunt sisteme diferite de facturare.

### Pas 2: Construiește AI Financial Coach

**Spune-i lui Claude Code:**

```
Construiește un AI Financial Coach care:

1. Adaugă un buton "Analizează cheltuielile" pe pagina de rapoarte
2. La click, colectează un rezumat al tranzacțiilor (total pe categorii, trend lunar)
3. Trimite rezumatul la un API endpoint care folosește Claude AI
4. Claude AI returnează:
   - Health score (0-100) cu explicație
   - 3-5 sfaturi personalizate bazate pe datele reale
   - O observație pozitivă (ce face bine utilizatorul)
5. Afișează rezultatul într-un card frumos sub grafice

IMPORTANT: Trimite doar rezumate agregate la AI (total pe categorii), NU tranzacții individuale.
```

**Ce se întâmplă:**
- Se creează un API endpoint care comunică cu Claude AI
- Se trimite un rezumat (nu tranzacții individuale)
- AI-ul returnează sfaturi personalizate
- Rezultatul apare într-un card cu health score și recomandări

**Verifică:** Apasă "Analizează cheltuielile" - ar trebui să vezi sfaturi bazate pe datele tale reale.

---

## COMANDA 4: Testează rapoartele și AI-ul

Verificăm că totul funcționează cu tranzacțiile tale importate.

**Spune-i lui Claude Code:**

```
Verifică că:
1. Graficele arată date corecte din tranzacțiile importate
2. Filtrele de perioadă funcționează
3. Rezumatul financiar are cifre corecte
4. AI Financial Coach returnează sfaturi relevante
5. Dacă ceva nu funcționează, repară
```

**Ce verificăm:**
- ✅ Pie chart arată categoriile tale (Cumpărături, Transport, etc.)
- ✅ Bar chart arată cheltuieli pe luni
- ✅ Cifrele din rezumat sunt corecte
- ✅ AI-ul dă sfaturi care au sens pentru datele tale

---

## COMANDA 5: Commit + Push pe GitHub

Salvăm tot codul pe GitHub înainte de deploy.

**Spune-i lui Claude Code:**

```
Fă commit cu toate modificările și push pe GitHub.
Mesajul de commit: "Add reports, AI financial coach, and prepare for deploy"
```

**Ce se întâmplă:**
- Tot codul e salvat local (commit)
- Tot codul e trimis pe GitHub (push)
- Acum ai backup și istoric complet

**Verifică:** Pe GitHub ar trebui să vezi ultimul commit cu toate fișierele noi.

**IMPORTANT:** Întotdeauna commit + push ÎNAINTE de deploy. GitHub e backup-ul tău.

---

## COMANDA 6: Deploy pe Vercel

Punem aplicația online!

**Spune-i lui Claude Code:**

```
Ajută-mă să fac deploy pe Vercel:

1. Ce variabile de mediu trebuie setate pe Vercel?
2. Cum conectez repo-ul GitHub la Vercel?
3. Ghidează-mă pas cu pas
```

**Ce se întâmplă:**
Claude Code te ghidează prin procesul de deploy:
1. Creezi cont Vercel (dacă nu ai)
2. Conectezi repo-ul GitHub
3. Setezi variabilele de mediu (Supabase URL, chei API, etc.)
4. Vercel construiește și publică automat
5. Primești URL-ul aplicației tale

**Verifică:** Deschide URL-ul primit de la Vercel - ar trebui să vezi aplicația ta online!

---

## COMANDA 7: Verificare finală

Testăm aplicația online - totul funcționează?

**Spune-i lui Claude Code:**

```
Aplicația e pe Vercel la [URL-ul tău].
Ajută-mă să verific că totul funcționează:
1. Login funcționează?
2. Dashboard arată datele?
3. Tranzacțiile sunt vizibile?
4. Rapoartele au grafice?
5. AI Coach funcționează?
```

**Verifică pe telefon:** Deschide URL-ul pe telefonul mobil. Aplicația ta funcționează și pe telefon!

**Dacă totul funcționează:** Felicitări! Ai o aplicație completă, online, construită de tine!

---

## Lecție importantă: De la local la online

**Ordinea de construcție (Golden Rule):**

```
LOCAL → GITHUB → VERCEL
  1.       2.       3.
```

1. **Local:** Construiești și testezi pe calculatorul tău
2. **GitHub:** Salvezi codul (backup + istoric)
3. **Vercel:** Publici pentru toată lumea

**De ce în ordinea asta?**
- Dacă publici direct → Nu ai backup
- Dacă sari peste GitHub → Nu ai istoric al schimbărilor
- Dacă nu testezi local → Publici bug-uri

**Asta fac developerii profesioniști:** Nimeni nu publică fără să testeze local și să salveze pe GitHub mai întâi.

---

## Recapitulare Lecția 5.2

**Ce am construit:**
- ✅ Rapoarte cu grafice (pie chart + bar chart)
- ✅ Rezumat financiar (cheltuieli, venituri, balanță)
- ✅ AI Financial Coach (health score + sfaturi personalizate)
- ✅ Deploy pe Vercel (aplicația e online!)

---

## Felicitări! Ai terminat cursul!

**Aplicația ta completă include:**
- Autentificare (login/register)
- Dashboard cu rezumat
- Management bănci, categorii, valute
- Upload CSV/Excel cu auto-categorizare
- Rapoarte cu grafice
- AI Financial Coach
- Online pe Vercel

**Ce ai învățat în Săptămânile 4-5:**
- Plan mode pentru proiecte complexe
- Pattern CRUD (Create, Read, Update, Delete)
- Separarea UI de Backend
- Integrare cu cod existent
- Auto-categorizare inteligentă
- Grafice și rapoarte
- Integrare cu AI (Claude API)
- Deploy pe Vercel

**Ce poți face mai departe:**
- Importă extrase lunare și urmărește-ți bugetul real
- Adaugă mai multe bănci
- Arată aplicația prietenilor și familiei
- Pune-o în portofoliu ca proiect personal

**Bravo! Asta e vibe coding.**

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 5
**Aplicație:** Vibe Budget (gestiune financiară personală)
