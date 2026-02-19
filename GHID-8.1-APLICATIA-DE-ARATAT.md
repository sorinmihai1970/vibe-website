# GHID 8.1 - Aplicația ta "de arătat"
> Ghid pas cu pas pentru Lecția 8.1
> 7 pași | ~25 minute
> Cerință: Săptămâna 7 completată (polish + portofoliu generat)

---

## Înainte să începem

**Ce ar trebui să ai:**
- ✅ Cele 3 aplicații online pe Vercel
- ✅ Polish de texte și layout făcut (din Lecția 7.2)
- ✅ PORTOFOLIU.md generat (din Lecția 7.1)

**Ce vom face azi:**
Alegem UNA din cele 3 aplicații, o privim cu ochi proaspeți, reparăm ce nu e în regulă, și o punem online în forma finală.

**Pregătire:**
Deschide Claude Code în VS Code.

---

## Pasul 1: Alege aplicația

Claude Code analizează cele 3 și te ajută să alegi.

**Spune-i lui Claude Code:**

> **"Am 3 aplicații: Vibe Caffe (site cafenea), Vibe Budget (gestiune financiară) și Barista Bot (chatbot integrat în site). Analizează-le pe toate 3 și spune-mi: care e cea mai completă și mai potrivită să o arăt cuiva ca portofoliu? De ce?"**

Claude Code o să îți dea o recomandare cu argumente.

Dacă nu ești de acord:

> **"Prefer să aleg [aplicația ta]. Continuăm cu ea."**

**Ce face Claude Code:**
- Analizează structura și completitudinea fiecărei aplicații
- Compară funcționalitățile
- Recomandă cea mai impresionantă

**Ce aștepți să vezi:**
O recomandare argumentată. Tu decizi - Claude Code doar sugerează.

---

## Pasul 2: Testul de 5 secunde

Claude Code se uită la aplicație ca și cum ar fi prima dată.

**Spune-i lui Claude Code:**

> **"Uită-te la aplicația pe care am ales-o ca și cum o vezi prima dată. Ce e primul lucru pe care îl observi? Ce nu e clar? Dacă ai vedea-o doar 5 secunde, ai înțelege ce face? Fii sincer."**

**Ce face Claude Code:**
- Privește pagina principală "cu ochi proaspeți"
- Identifică ce e clar și ce nu
- Îți spune prima impresie

**Ce aștepți să vezi:**
Feedback sincer. Poate titlul e prea generic. Poate nu e clar ce face aplicația. Poate prima pagină e confuză.

---

## Pasul 3: Lista de fixuri

Acum facem inventarul problemelor, în ordinea priorității.

**Spune-i lui Claude Code:**

> **"Fă-mi o listă cu tot ce ar trebui îmbunătățit la aplicația asta. Pune-le în ordinea asta: mai întâi ce e stricat (nu funcționează), apoi ce e confuz (nu se înțelege), apoi ce e urât (arată neplăcut). NU adăuga funcționalități noi - doar repară ce există."**

**Ce face Claude Code:**
- Scanează aplicația complet
- Identifică buguri, texte confuze, probleme de layout
- Le organizează pe categorii de prioritate

**Ce aștepți să vezi:**
O listă clară. Poate 3-5 lucruri, poate 10. Important e ordinea: stricat > confuz > urât.

---

## Pasul 4: Repară fix-urile

Acum trecem la treabă.

**Spune-i lui Claude Code:**

> **"Repară problemele din listă, de la cele mai importante în jos. Începe cu ce e stricat, apoi ce e confuz. Arată-mi fiecare schimbare înainte să o faci."**

Dacă sunt multe și nu vrei să le repari pe toate:

> **"Oprește-te după primele 5 fix-uri. Cele mai importante e suficient."**

**Ce face Claude Code:**
- Repară problemele una câte una
- Îți arată ce vrea să schimbe înainte
- Tu aprobi fiecare schimbare

**Ce aștepți să vezi:**
Îmbunătățiri pas cu pas. Buton care acum funcționează. Text care acum se înțelege. Layout care acum arată bine.

---

## Pasul 5: Before / After

Documentăm ce s-a schimbat.

**Spune-i lui Claude Code:**

> **"Descrie-mi toate schimbările pe care le-ai făcut: cum era înainte și cum e acum. Fă o listă before/after pentru fiecare."**

**Ce face Claude Code:**
- Listează fiecare schimbare
- Descrie varianta veche și varianta nouă
- Îți dă o imagine clară a progresului

**Ce aștepți să vezi:**
O listă cu before/after. Poți face și tu screenshot-uri din browser dacă vrei dovada vizuală.

**Sfat:** Fă screenshot pe telefon înainte de schimbări și după. Puse alăturat, arată impresionant.

---

## Pasul 6: Test final

Verificăm că totul funcționează după schimbări.

**Spune-i lui Claude Code:**

> **"Pornește aplicația pe localhost și verifică totul: funcționează toate butoanele? Paginile se încarcă? Pe mobil arată bine? Chatbot-ul răspunde? Arată-mi dacă e ceva stricat."**

**Ce face Claude Code:**
- Pornește aplicația local
- Verifică funcționalitatea completă
- Testează responsive (mobil)
- Raportează orice problemă

**Ce aștepți să vezi:**
"Totul funcționează corect." Dacă nu - Claude Code repară.

**Verifică tu manual:**
- Deschide pe telefon (sau Inspect → dimensiune mobil)
- Click pe fiecare buton important
- Dacă e chatbot - scrie-i ceva

---

## Pasul 7: Push + Deploy final

Punem versiunea finală online.

**Spune-i lui Claude Code:**

> **"Fă commit cu mesajul: Final polish - app ready for portfolio. Apoi push pe GitHub și verifică deploy-ul pe Vercel. Dă-mi link-ul live."**

**Ce face Claude Code:**
- Commit cu toate schimbările
- Push pe GitHub
- Verifică deploy pe Vercel
- Îți dă link-ul final

**Verificare finală:**
Deschide link-ul Vercel pe telefon. Asta e aplicația ta de arătat. Arată bine?

---

## Rezumat: Cei 7 pași

| # | Ce faci | Ce primești |
|---|---------|------------|
| 1 | Alege aplicația | Recomandare argumentată |
| 2 | Testul de 5 secunde | Feedback prima impresie |
| 3 | Lista de fixuri | Probleme prioritizate: stricat > confuz > urât |
| 4 | Repară fix-urile | Îmbunătățiri aplicate |
| 5 | Before / After | Lista schimbărilor |
| 6 | Test final | Confirmare că funcționează |
| 7 | Push + Deploy final | Aplicația finală e online |

---

## Dacă ceva nu merge

**Claude Code face prea multe schimbări:**
- Spune-i: "Stop. Vreau să aprob fiecare schimbare individual."

**Nu ești de acord cu recomandarea:**
- E ok! Tu alegi. Claude Code doar sugerează.

**Deploy-ul dă erori:**
- Spune-i: "Am o eroare pe Vercel după deploy. Ajută-mă să o rezolv."

---

## Ce ai acum

- ✅ Aplicația principală de portofoliu - polish-uită și online
- ✅ Before/after documentat
- ✅ Totul testat pe desktop și mobil
- ✅ Link live pe Vercel, gata de arătat

**Temă:** Arată-i cuiva aplicația pe telefon. Notează ce întrebări primești - acolo sunt lucrurile neclare.

**Lecția 8.2:** Protocol personal + portofoliu public + cum continui după curs.

---

**Creat:** Februarie 2026
**Actualizat:** 17 februarie 2026
**Proiect:** Vibe Coding - Săptămâna 8
**Temă:** Capstone & Închidere - Aplicația de arătat
