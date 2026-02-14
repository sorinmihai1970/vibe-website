# GHID 7.2 - Polish rapid: texte, layout, deploy
> Ghid pas cu pas pentru Lecția 7.2
> 7 comenzi | ~25 minute
> Cerință: Lecția 7.1 completată (ai documentul de portofoliu)

---

## Înainte să începem

**Ce ar trebui să ai:**
- ✅ Cele 3 aplicații funcționale și online
- ✅ Documentul PORTOFOLIU.md generat în Lecția 7.1
- ✅ Claude Code deschis în VS Code

**Ce vom face azi:**
Schimbări mici de texte și layout pe toate 3 aplicațiile, apoi ciclul complet: test → push → deploy. Claude Code devine copy-helper-ul tău.

**Pregătire:**
Deschide Claude Code în folderul `vibe-website`.

---

## COMANDA 1: Polish texte Vibe Caffe

Începem cu site-ul cafenelei. Claude Code citește tot site-ul și propune texte mai bune.

**Spune-i lui Claude Code:**

> **"Citește toate paginile din site-ul Vibe Caffe și îmbunătățește textele: titluri mai atractive, descrieri mai clare și mai scurte, butoane cu text în română. Nu schimba funcționalitatea, doar textele. Arată-mi ce vrei să schimbi înainte să faci."**

Claude Code o să-ți arate o listă cu propunerile. Dacă ceva nu-ți place:

> **"Titlul de la secțiunea X lasă-l cum era. Restul e bine, fă schimbările."**

**Ce face Claude Code:**
- Citește toate paginile (hero, meniu, rezervări, contact, etc.)
- Identifică texte care pot fi mai bune
- Propune variante (nu schimbă direct)
- Aplică doar ce aprobi tu

**Ce aștepți să vezi:**
Titluri mai atractive, descrieri mai concise, butoane clare în română.

---

## COMANDA 2: Polish layout Vibe Caffe

Acum verificăm cum arată pe telefon.

**Spune-i lui Claude Code:**

> **"Verifică dacă site-ul arată bine pe mobil. Uită-te la spațiere, aliniere, dimensiunea textului. Dacă ceva nu arată bine pe ecran mic, repară."**

Dacă Claude Code găsește probleme, o să te întrebe dacă să le repare. Spune-i:

> **"Da, repară tot ce ai găsit."**

**Ce face Claude Code:**
- Verifică responsive design pe toate paginile
- Identifică elemente care nu se aliniază pe mobil
- Ajustează spațiere, dimensiuni text, layout
- Nu schimbă designul, doar corectează probleme

**Ce aștepți să vezi:**
Site-ul arată bine și pe telefon, nu doar pe desktop.

---

## COMANDA 3: Polish texte Vibe Budget

Trecem la aplicația de gestiune financiară.

**Spune-i lui Claude Code:**

> **"Deschide proiectul vibe-budget și îmbunătățește textele: titluri pagini, texte butoane, mesaje când nu ai date încă, mesaje de eroare. Totul să fie în română, clar și prietenos. Arată-mi propunerile."**

Claude Code o să te întrebe unde e proiectul. Spune-i:

> **"E în folderul vibe-budget."**

**Ce face Claude Code:**
- Citește paginile aplicației
- Găsește texte în engleză sau neclare
- Propune variante mai bune în română
- Schimbă mesajele de eroare să fie prietenoase

**Ce aștepți să vezi:**
Mesaje ca "Te rugăm completează acest câmp" în loc de "Field required". Titluri clare pe fiecare pagină.

---

## COMANDA 4: Polish mesaje Barista Bot

Acum îmbunătățim cum vorbește chatbot-ul.

**Spune-i lui Claude Code:**

> **"Înapoi în vibe-website - uită-te la mesajele chatbot-ului: mesajul de bun venit, textele butoanelor rapide, și răspunsurile când nu știe ceva. Fă-le mai naturale, mai prietenoase, ca și cum ar vorbi un barista real."**

**Ce face Claude Code:**
- Citește mesajul de bun venit
- Verifică textele quick replies
- Îmbunătățește răspunsurile fallback ("nu știu")
- Face tonul mai cald și mai natural

**Ce aștepți să vezi:**
Chatbot-ul sună ca un om, nu ca un robot. Mesajul de bun venit te face să vrei să conversezi.

---

## COMANDA 5: Test local - toate 3

Pornim totul și verificăm.

**Spune-i lui Claude Code:**

> **"Pornește site-ul vibe-website pe localhost și verifică: pagina principală arată bine? Textele noi sunt ok? Chatbot-ul funcționează cu mesajele noi? Arată-mi în browser."**

După ce verifici Vibe Caffe:

> **"Acum pornește și vibe-budget pe alt port și verifică că totul arată bine acolo."**

**Ce face Claude Code:**
- Pornește vibe-website pe localhost
- Pornește vibe-budget pe alt port
- Te ghidează să verifici vizual

**Ce aștepți să vezi:**
Ambele aplicații rulează local. Textele sunt actualizate. Chatbot-ul funcționează cu mesajele noi.

**Verifică tu manual:**
- Deschide site-ul pe telefon (sau cu Inspect → dimensiune mobil)
- Testează chatbot-ul - scrie-i ceva
- Deschide Vibe Budget - arată bine?

---

## COMANDA 6: Commit + Push pe GitHub

Salvăm tot pe GitHub. Golden Rule: Local → GitHub → Vercel.

**Spune-i lui Claude Code:**

> **"Fă commit și push pe GitHub pentru vibe-website. Mesaj de commit: Polish text and layout across all pages and chatbot."**

Apoi:

> **"Fă același lucru pentru vibe-budget. Mesaj de commit: Polish text and error messages in Romanian."**

**Ce face Claude Code:**
- Commit + push vibe-website
- Commit + push vibe-budget

**Verifică:** Pe GitHub ar trebui să vezi ultimele commit-uri în ambele repo-uri.

**IMPORTANT:** Push ÎNAINTE de deploy. Mereu.

---

## COMANDA 7: Deploy pe Vercel + Verificare finală

Ultimul pas - punem totul online.

**Spune-i lui Claude Code:**

> **"Verifică că ambele proiecte s-au deploiat pe Vercel după push. Dacă deploy-ul e automat, ar trebui să fie deja live. Dă-mi link-urile să le testez."**

Dacă deploy-ul nu e automat:

> **"Ajută-mă să fac deploy manual pe Vercel pentru ambele proiecte."**

**Ce face Claude Code:**
- Verifică statusul deploy pe Vercel
- Îți dă link-urile live
- Te ghidează dacă trebuie deploy manual

**Verificare finală - pe telefon:**
1. Deschide Vibe Caffe pe telefon → textele noi sunt acolo?
2. Deschide Vibe Budget pe telefon → mesajele sunt în română?
3. Deschide chatbot-ul pe telefon → mesajul de bun venit e nou?

**Dacă totul e ok: Felicitări! Portofoliul tău e complet și polish-uit.**

---

## Rezumat: Cele 7 comenzi

| # | Ce i-ai spus | Ce s-a schimbat |
|---|-------------|-----------------|
| 1 | "Polish texte Vibe Caffe" | Titluri, descrieri, butoane mai bune |
| 2 | "Polish layout Vibe Caffe" | Responsive ok pe mobil |
| 3 | "Polish texte Vibe Budget" | Mesaje în română, erori prietenoase |
| 4 | "Polish mesaje Barista Bot" | Bun venit mai natural, quick replies mai bune |
| 5 | "Test local toate 3" | Verificat că totul merge |
| 6 | "Push pe GitHub" | Cod salvat pe ambele repo-uri |
| 7 | "Deploy pe Vercel" | Totul live pe internet |

---

## Dacă ceva nu merge

**Claude Code face schimbări pe care nu le vrei:**
- Spune-i: "Anulează ultima schimbare" sau "Revino la varianta anterioară"
- Sau: "Arată-mi ce vrei să schimbi înainte să faci"

**Deploy-ul nu pornește:**
- Verifică pe Vercel Dashboard dacă ai erori
- Spune-i lui Claude Code: "Am o eroare pe Vercel, ajută-mă"

**Chatbot-ul nu mai funcționează după polish:**
- Probabil s-a modificat ceva în system prompt
- Spune-i: "Chatbot-ul nu mai răspunde corect, verifică ce s-a schimbat"

---

## Ce ai acum

- ✅ Texte profesioniste în toate 3 aplicațiile
- ✅ Layout corect pe mobil
- ✅ Mesaje în română, prietenoase
- ✅ Chatbot cu ton natural
- ✅ Totul online pe Vercel
- ✅ Document PORTOFOLIU.md generat

**Portofoliul tău de 3 aplicații e complet:**
1. **Vibe Caffe** - Site de prezentare
2. **Vibe Budget** - Aplicație web cu AI
3. **Barista Bot** - Chatbot inteligent

**Săptămâna 8:** Capstone & închidere - aplicația ta "de arătat" + protocol personal de lucru.

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 7
**Temă:** Integrare & Polish - Polish UX & Copy
