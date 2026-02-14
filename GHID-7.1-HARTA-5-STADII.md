# GHID 7.1 - Harta celor 5 stadii
> Ghid pas cu pas pentru Lecția 7.1
> 7 comenzi | ~20 minute
> Cerință: Cele 3 aplicații completate (Vibe Caffe, Vibe Budget, Barista Bot)

---

## Înainte să începem

**Ce ar trebui să ai funcțional:**
- ✅ Vibe Caffe - site-ul online pe Vercel
- ✅ Vibe Budget - aplicația online pe Vercel
- ✅ Barista Bot - chatbot integrat în site, online pe Vercel

**Ce vom face azi:**
Azi NU construim nimic nou. Folosim Claude Code ca partener de analiză - îi cerem să se uite la tot ce ai construit și să te ajute să vezi metoda din spatele aplicațiilor tale.

**Pregătire:**
Deschide Claude Code în VS Code, în folderul `vibe-website`.

---

## COMANDA 1: Analizează Vibe Caffe

Hai să vedem ce ai construit în primul proiect.

**Spune-i lui Claude Code:**

> **"Uită-te la tot ce am în proiectul ăsta (vibe-website) și spune-mi: ce pagini am, ce funcționalități are site-ul, și ce tehnologii s-au folosit. Vreau un rezumat simplu, nu tehnic."**

**Ce face Claude Code:**
- Citește toate fișierele din proiect
- Identifică paginile (acasă, meniu, rezervări, etc.)
- Listează funcționalitățile (formular rezervări, galerie, chatbot)
- Menționează ce instrumente s-au folosit

**Ce aștepți să vezi:**
Un rezumat clar cu tot ce conține site-ul tău. Probabil te va surprinde cât de mult ai construit!

---

## COMANDA 2: Analizează Vibe Budget

Acum ne uităm la a doua aplicație.

**Spune-i lui Claude Code:**

> **"Deschide și proiectul vibe-budget și fă-mi un rezumat la fel: ce pagini am, ce date salvez, ce funcționalități are. Tot simplu, fără termeni tehnici."**

Claude Code o să te întrebe unde e proiectul. Spune-i:

> **"E în folderul vibe-budget, la același nivel cu vibe-website."**

**Ce face Claude Code:**
- Citește proiectul vibe-budget
- Identifică paginile și funcționalitățile
- Listează ce date se salvează (tranzacții, categorii, bănci)
- Menționează funcționalitățile speciale (rapoarte, AI Coach)

**Ce aștepți să vezi:**
Un rezumat cu tot ce ai în aplicația de gestiune financiară.

---

## COMANDA 3: Analizează Barista Bot

Acum ne uităm la chatbot-ul integrat în site.

**Spune-i lui Claude Code:**

> **"Acum uită-te la chatbot-ul din vibe-website - la componenta de chat și la cum se conectează la AI. Spune-mi: ce știe chatbot-ul, ce personalitate are, cum funcționează."**

**Ce face Claude Code:**
- Citește componenta de chat
- Citește knowledge base-ul (ce știe despre meniu)
- Identifică personalitatea aleasă
- Explică cum funcționează conversația

**Ce aștepți să vezi:**
Un rezumat cu capabilitățile chatbot-ului tău.

---

## COMANDA 4: Mapează pe cele 5 stadii

Acum vine partea interesantă - punem totul pe hartă.

**Spune-i lui Claude Code:**

> **"Am 3 aplicații: Vibe Caffe (site), Vibe Budget (gestiune financiară) și Barista Bot (chatbot). Mapează-le pe cele 5 stadii ale vibe coding: CINE (cine e implicat), CE (ce construim), CU CE (unelte folosite), CUM (metoda de lucru), FLUX (cum ajunge codul online). Fă-mi un tabel."**

**Ce face Claude Code:**
- Analizează cele 3 aplicații prin prisma celor 5 stadii
- Creează un tabel comparativ
- Evidențiază ce e comun și ce e diferit

**Ce aștepți să vezi:**
Un tabel cu 5 rânduri (stadiile) și 3 coloane (aplicațiile). Vei vedea cât de similar e procesul, chiar dacă aplicațiile sunt diferite.

---

## COMANDA 5: Ce au în comun?

Hai să scoatem lecțiile.

**Spune-i lui Claude Code:**

> **"Privind cele 3 aplicații, ce au în comun? Ce pași s-au repetat de fiecare dată? Ce ai observat că e la fel?"**

**Ce face Claude Code:**
- Identifică pattern-urile comune
- Evidențiază metoda de lucru (aceiași 7 pași)
- Arată că fluxul (commit → push → deploy) e identic
- Observă că modul de conversație cu Claude Code e similar

**Ce aștepți să vezi:**
O listă cu lucrurile care s-au repetat. Concluzia: metoda e aceeași, doar aplicația e diferită.

---

## COMANDA 6: Ce e diferit?

Acum cealaltă parte - diferențele.

**Spune-i lui Claude Code:**

> **"Și ce e diferit între cele 3? Un landing page, o aplicație cu bază de date și un chatbot - unde a fost mai complex? Ce a avut fiecare în plus?"**

**Ce face Claude Code:**
- Compară complexitatea (landing < aplicație web < chatbot cu AI)
- Identifică ingredientele unice (bază de date, AI, knowledge base)
- Explică de ce unele au fost mai dificile

**Ce aștepți să vezi:**
O comparație clară a diferențelor. Vei vedea că fiecare model de aplicație adaugă un strat de complexitate.

---

## COMANDA 7: Generează documentul de portofoliu

Ultimul pas - un document care adună totul.

**Spune-i lui Claude Code:**

> **"Creează-mi un fișier PORTOFOLIU.md cu cele 3 aplicații ale mele. Pentru fiecare vreau: ce face, ce am învățat construind-o, și link-ul Vercel. La final, un rezumat cu ce am învățat în tot cursul."**

Claude Code o să te întrebe link-urile Vercel. Dă-i link-urile tale:

> **"Vibe Caffe: [link-ul tău]. Vibe Budget: [link-ul tău]."**

**Ce face Claude Code:**
- Creează fișierul PORTOFOLIU.md în proiect
- Listează cele 3 aplicații cu descrieri
- Adaugă ce ai învățat la fiecare
- Include link-urile live
- Scrie un rezumat final

**Ce aștepți să vezi:**
Un document frumos structurat pe care îl poți arăta oricui: "Uite ce am construit."

---

## Rezumat: Cele 7 comenzi

| # | Ce i-ai spus | Ce ai primit |
|---|-------------|--------------|
| 1 | "Analizează Vibe Caffe" | Rezumat site: pagini, funcționalități |
| 2 | "Analizează Vibe Budget" | Rezumat aplicație: date, funcționalități |
| 3 | "Analizează Barista Bot" | Rezumat chatbot: knowledge, personalitate |
| 4 | "Mapează pe 5 stadii" | Tabel comparativ CINE/CE/CU CE/CUM/FLUX |
| 5 | "Ce au în comun?" | Pattern-uri repetitive, metoda comună |
| 6 | "Ce e diferit?" | Complexitate diferită, ingrediente unice |
| 7 | "Generează PORTOFOLIU.md" | Document personal cu cele 3 aplicații |

---

## Dacă ceva nu merge

**Claude Code nu găsește proiectul vibe-budget:**
- Verifică că folderul `vibe-budget` e la același nivel cu `vibe-website`
- Sau dă-i calea completă: "E în ~/vibe-budget"

**Claude Code dă răspunsuri prea tehnice:**
- Spune-i: "Explică-mi mai simplu, fără termeni tehnici"

**Nu ai link-urile Vercel la îndemână:**
- Caută în Vercel Dashboard (vercel.com) → proiectele tale
- Sau spune-i lui Claude Code: "Ajută-mă să găsesc link-urile Vercel ale proiectelor mele"

---

## Ce ai acum

- ✅ Înțelegi cele 5 stadii ale vibe coding
- ✅ Ai văzut cum fiecare aplicație urmează aceeași metodă
- ✅ Ai un tabel comparativ cu toate 3 aplicațiile
- ✅ Ai un document PORTOFOLIU.md generat
- ✅ Poți explica cuiva ce ai construit și cum

**Lecția 7.2:** Facem polish rapid pe toate 3 - texte mai bune, layout mai curat, totul online.

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 7
**Temă:** Integrare & Polish - Harta celor 5 stadii
