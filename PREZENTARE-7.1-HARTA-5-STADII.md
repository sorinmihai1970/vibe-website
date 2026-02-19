# PREZENTARE 7.1 - Harta celor 5 stadii
> Lecție din cursul Vibe Coding
> Durata estimată: ~25-30 minute
> Cerință: Săptămânile 1-6 completate (3 aplicații funcționale)

---

## SLIDE 1: Privim tot ce am construit

**6 săptămâni. 3 aplicații. Un singur mod de lucru.**

Azi nu construim nimic nou.
Azi facem un pas înapoi și ne uităm la tot ce am creat - prin ochii metodei.

**Cele 3 aplicații ale tale:**
1. Vibe Caffe - site-ul cafenelei
2. Vibe Budget - gestiune financiară
3. Barista Bot - chatbot inteligent

---

## SLIDE 2: Unde suntem

**Ce ai acum:**
- ✅ Un site de prezentare cu meniu, rezervări, galerie (Vibe Caffe)
- ✅ O aplicație web cu bază de date și AI (Vibe Budget)
- ✅ Un chatbot inteligent integrat în site (Barista Bot)
- ✅ Totul e online pe Vercel

**Ce facem azi:**
- Ne uităm la toate 3 prin prisma **celor 5 stadii**
- Descoperim ce au în comun
- Vedem metoda din spatele haosului
- Generăm un document de portofoliu

---

## SLIDE 3: Cele 5 stadii ale Vibe Coding

Fiecare aplicație pe care ai construit-o a trecut prin aceleași 5 stadii, chiar dacă nu ai realizat:

```
+-----------+     +-----------+     +-----------+     +-----------+     +-----------+
|   CINE    | --> |    CE     | --> |   CU CE   | --> |    CUM    | --> |   FLUX    |
|           |     |           |     |           |     |           |     |           |
|  Roluri   |     | Aplicatia |     |  Unelte   |     |  Metoda   |     |  Drumul   |
|           |     |           |     |           |     | de lucru  |     |  codului  |
+-----------+     +-----------+     +-----------+     +-----------+     +-----------+
```

**1. CINE** - Cine e implicat?
**2. CE** - Ce construim?
**3. CU CE** - Cu ce unelte?
**4. CUM** - Care e metoda de lucru?
**5. FLUX** - Cum ajunge codul la utilizator?

---

## SLIDE 4: Stadiul 1 - CINE

**În fiecare aplicație au fost 3 roluri:**

| Rol | Ce face | Exemplu concret |
|-----|---------|-----------------|
| **Vibe Coder** (tu) | Decide ce vrea, dă direcția | "Vreau un meniu cu prețuri" |
| **Claude Code** (AI) | Scrie codul, implementează | Generează componentele, conectează baza de date |
| **Clientul** (utilizatorul) | Folosește aplicația la final | Vizitează site-ul, încarcă tranzacții, vorbește cu chatbot-ul |

**Observație importantă:**
Tu nu ai scris cod. Tu ai condus procesul - ai spus CE vrei, AI-ul a făcut CUM.
Asta e vibe coding: tu ești regizorul, Claude Code e echipa tehnică.

---

## SLIDE 5: Stadiul 2 - CE construim

**Cele 3 modele de aplicații:**

| Model | Aplicația ta | Ce rezolvă |
|-------|-------------|------------|
| **Landing page** | Vibe Caffe | Prezintă cafeneaua: meniu, rezervări, contact |
| **Aplicație web** | Vibe Budget | Gestiune date: tranzacții, categorii, rapoarte |
| **Chatbot** | Barista Bot | Conversație: recomandări, informații, link-uri |

**Fiecare model are ingrediente diferite:**

- **Landing page** = pagini + design + formulare
- **Aplicație web** = pagini + bază de date + logică + AI
- **Chatbot** = knowledge base + personalitate + AI

Dar toate 3 au un lucru în comun: **Front-end** (ce vede utilizatorul).

---

## SLIDE 6: Stadiul 3 - CU CE construim

**Instrumentul central: Claude Code**

Dar pe lângă Claude Code, ai folosit și alte instrumente:

| Instrument | Unde l-ai folosit | Ce face |
|------------|-------------------|---------|
| **Claude Code** | Toate 3 | Scrie codul, creează pagini, conectează totul |
| **Supabase** | Vibe Caffe + Vibe Budget | Baza de date (rezervări, tranzacții, categorii) |
| **Vercel** | Toate 3 | Pune aplicația online |
| **GitHub** | Toate 3 | Salvează codul în siguranță |
| **Anthropic API** | Vibe Budget + Barista Bot | Inteligența artificială (AI Coach + Chatbot) |

**Cum ai vorbit cu Claude Code:**
- Nu i-ai dat specificații tehnice
- I-ai spus ce vrei în cuvinte simple
- El te-a întrebat detalii
- Ai avut o conversație, nu un monolog

---

## SLIDE 7: Stadiul 4 - CUM construim (Metoda de lucru)

**Fiecare aplicație a urmat aceiași 7 pași:**

| Pas | Ce înseamnă | Exemplu din Vibe Caffe |
|-----|------------|------------------------|
| 1. **Sarcină** | Clarificăm ce vrem | "Vreau un site de cafenea" |
| 2. **Front-end** | Construim ce vede utilizatorul | Pagina cu meniu, hero, galerie |
| 3. **Baze de date** | Salvăm informații | Tabelul de rezervări în Supabase |
| 4. **Rute** | Conectăm paginile între ele | Navigare: acasă → meniu → rezervări |
| 5. **Testare** | Verificăm că totul merge | Testăm pe telefon, testăm formularul |
| 6. **Remediere** | Reparăm ce nu merge | Corectăm erori, ajustăm design |
| 7. **Dezvoltare** | Adăugăm și îmbunătățim | Adăugăm galerie, chatbot, AI |

**Chiar dacă nu ai numărat pașii, i-ai urmat de fiecare dată.**
Metoda e aceeași indiferent de tipul aplicației.

---

## SLIDE 8: Stadiul 5 - FLUX (Drumul codului)

**Codul tău a urmat mereu același drum:**

```
   TU (local)          GITHUB             VERCEL            CLIENT
+------------+     +------------+     +------------+     +------------+
| Construi-  |     | Salvezi    |     | Publici    |     | Clientul   |
| esti cu    | --> | codul      | --> | pe         | --> | foloseste  |
| Claude     |     | online     |     | internet   |     | aplicatia  |
| Code       |     |            |     |            |     |            |
+------------+     +------------+     +------------+     +------------+
   commit             push              deploy            online!
```

**Golden Rule:** Local → GitHub → Vercel

Ai făcut asta de fiecare dată:
- La Vibe Caffe: commit → push → deploy
- La Vibe Budget: commit → push → deploy
- La Barista Bot: commit → push → deploy

**Același flux, de fiecare dată. Asta e profesionalism.**

---

## SLIDE 9: Tabel sinteză - Totul într-o privire

|  | Vibe Caffe | Vibe Budget | Barista Bot |
|--|-----------|-------------|-------------|
| **CINE** | Tu + Claude Code → Vizitatori site | Tu + Claude Code → Utilizatori app | Tu + Claude Code → Clienți cafenea |
| **CE** | Landing page (meniu, rezervări, galerie) | Aplicație web (tranzacții, rapoarte, AI) | Chatbot (recomandări, info, link-uri) |
| **CU CE** | Claude Code + Supabase + Vercel | Claude Code + Supabase + API Anthropic + Vercel | Claude Code + API Anthropic + Vercel |
| **CUM** | Sarcină → Front-end → DB → Rute → Test → Fix → Dev | Sarcină → Front-end → DB → Rute → Test → Fix → Dev | Sarcină → Front-end → DB → Rute → Test → Fix → Dev |
| **FLUX** | Local → GitHub → Vercel | Local → GitHub → Vercel | Local → GitHub → Vercel |

**Ce observi?**
- CUM și FLUX sunt **identice** în toate 3
- CINE e aproape la fel (tu + Claude Code + un utilizator)
- CE și CU CE variază - dar ingredientele se repetă

**Concluzie: Metoda e aceeași. Doar aplicația e diferită.**

---

## SLIDE 10: Ce facem azi - Demo

**Azi folosim Claude Code ca partener de analiză, nu de construcție.**

Îi cerem să:
1. Analizeze fiecare aplicație
2. Mapeze totul pe cele 5 stadii
3. Identifice ce e comun și ce e diferit
4. Genereze un document de portofoliu personal

**7 comenzi, ~15 minute de demo.**

Deschideți Claude Code și urmăriți ghidul.

---

## SLIDE 11: Recapitulare + Ce urmează

**Ce am descoperit azi:**
- Cele 3 aplicații urmează aceeași metodă (5 stadii)
- CUM construim și FLUX-ul sunt identice, indiferent de aplicație
- Tu ai fost regizorul, Claude Code a fost echipa tehnică
- Ai un document de portofoliu generat

**Lecția 7.2 - Polish rapid:**
- Curățăm textele din toate 3 aplicațiile
- Claude Code devine copy-helper
- Facem ciclul complet: schimbare → test → push → deploy
- Pe TOATE 3 aplicațiile simultan

**Asta e ultimul pas înainte de capstone.**

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 7
**Temă:** Integrare & Polish - Harta celor 5 stadii
