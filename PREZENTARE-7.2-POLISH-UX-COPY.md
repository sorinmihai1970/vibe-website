# PREZENTARE 7.2 - Polish rapid: texte, layout, deploy
> Lecție din cursul Vibe Coding
> Durata estimată: ~30-35 minute
> Cerință: Lecția 7.1 completată (ai documentul de portofoliu)

---

## SLIDE 1: De la "funcționează" la "arată profesionist"

**Cele 3 aplicații ale tale funcționează. Dar...**

Ai observat:
- Texte care sună ciudat?
- Mesaje de eroare în engleză?
- Butoane cu texte neclare?
- Lucruri care nu arată bine pe telefon?

**Azi facem polish rapid pe toate 3.**
Schimbări mici care fac diferența mare.

---

## SLIDE 2: De ce contează textele

**Două versiuni ale aceluiași buton:**

| Versiune | Text |
|----------|------|
| Înainte | "Submit" |
| După | "Trimite rezervarea" |

| Versiune | Mesaj de eroare |
|----------|----------------|
| Înainte | "Error: field required" |
| După | "Te rugăm completează numele" |

**Utilizatorul nu vede codul. Vede textele.**
Textele bune = aplicație profesionistă.
Textele slabe = aplicație de amator.

---

## SLIDE 3: Claude Code ca copy-helper

**Claude Code nu scrie doar cod. Scrie și texte.**

Îi poți cere:
- "Îmbunătățește titlurile din site" → texte mai atractive
- "Schimbă mesajele de eroare în română" → limbaj prietenos
- "Fă descrierile mai scurte și mai clare" → comunicare eficientă

**Cum funcționează:**
1. Claude Code citește textele existente
2. Propune variante mai bune
3. Tu alegi ce-ți place
4. El schimbă în cod

**E ca și cum ai un copywriter în echipă.**

---

## SLIDE 4: Ce curățăm - Texte

**Checklist texte pentru fiecare aplicație:**

| Element | Verificare |
|---------|-----------|
| Titluri pagini | Sunt clare și atractive? |
| Descrieri | Sunt scurte și la obiect? |
| Butoane | Spun clar ce fac? ("Trimite", nu "Submit") |
| Mesaje de eroare | Sunt în română? Sunt prietenoase? |
| Mesaje când nu ai date | Ce vede utilizatorul la prima deschidere? |
| Textul chatbot-ului | Mesajul de bun venit sună natural? |

**Regula:** Dacă textul e în engleză sau sună tehnic, îl schimbăm.

---

## SLIDE 5: Ce curățăm - Layout

**Checklist layout pentru fiecare aplicație:**

| Element | Verificare |
|---------|-----------|
| Pe telefon | Arată bine? Textul e lizibil? |
| Spațiere | Elementele au suficient spațiu între ele? |
| Aliniere | Totul e aliniat corect? |
| Imagini | Se încarcă? Au dimensiunea potrivită? |
| Culori | Sunt consistente pe tot site-ul? |

**Nu reconstruim nimic.** Doar ajustăm detalii.

---

## SLIDE 6: Ciclul rapid - FLUX pe toate 3

**Azi facem ciclul complet pe TOATE aplicațiile:**

```
  VIBE CAFFE              VIBE BUDGET
  ┌──────────┐            ┌──────────┐
  │ Schimbări│            │ Schimbări│
  │ texte +  │            │ texte +  │
  │ layout   │            │ layout   │
  └────┬─────┘            └────┬─────┘
       │                       │
       ▼                       ▼
  test local              test local
       │                       │
       ▼                       ▼
  commit + push           commit + push
       │                       │
       ▼                       ▼
  deploy Vercel           deploy Vercel
```

**Golden Rule, de 2 ori:** Local → GitHub → Vercel (pentru fiecare proiect).

---

## SLIDE 7: Ce facem azi (pas cu pas)

**Comanda 1:** Polish texte Vibe Caffe

**Comanda 2:** Polish layout Vibe Caffe (responsive)

**Comanda 3:** Polish texte Vibe Budget

**Comanda 4:** Polish mesaje Barista Bot

**Comanda 5:** Test local pe toate 3

**Comanda 6:** Commit + Push pe GitHub (ambele proiecte)

**Comanda 7:** Deploy pe Vercel + verificare finală

---

## SLIDE 8: Demo live

**Hai să facem polish!**

Urmăriți ghidul pas cu pas - 7 comenzi, ~25 minute.

Deschideți Claude Code și începem cu Comanda 1.

**Atenție:** Azi lucrăm rapid. Schimbări mici, impact mare.

---

## SLIDE 9: Recapitulare Lecția 7.2

**Ce am făcut:**
- ✅ Texte mai bune în Vibe Caffe (titluri, descrieri, butoane)
- ✅ Layout verificat pe mobil
- ✅ Texte mai bune în Vibe Budget (mesaje, erori, butoane)
- ✅ Mesaje mai naturale în Barista Bot
- ✅ Totul testat, push-uit și deploiat

**Rezultatul:**
Cele 3 aplicații arată acum ca un **portofoliu coerent**.
Nu 3 proiecte separate, ci un **set profesionist de aplicații**.

---

## SLIDE 10: Privim înapoi + Ce urmează

**Ce ai construit în 7 săptămâni:**

| Săptămâna | Ce ai făcut |
|-----------|------------|
| 1-3 | Site complet Vibe Caffe |
| 4-5 | Aplicație web Vibe Budget cu AI |
| 6 | Chatbot Barista Bot |
| 7 | Portofoliu coerent + polish |

**Săptămâna 8 - Capstone & închidere:**
- Aplicația ta "de arătat"
- Protocol personal de lucru
- Cum continui după curs

**Ești aproape de final. Și ai de arătat ceva real.**

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 7
**Temă:** Integrare & Polish - Polish UX & Copy
