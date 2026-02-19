# GHID 6.2 - Integrare, Reglaje și Deploy
> Ghid pas cu pas pentru Lecția 6.2
> 7 pași | ~40 minute
> Cerință: Lecția 6.1 completată (Chatbot funcțional de bază)

---

## Înainte să începem

**Ce ar trebui să ai funcțional:**
- ✅ Chat Widget apare pe site (buton în colț + fereastră)
- ✅ Poți scrie mesaje și primești răspunsuri de la Claude AI
- ✅ Chatbot-ul știe meniul tău (knowledge base generat)
- ✅ Personalitatea e aleasă

**Ce vom face azi:**
Adăugăm quick replies, link-uri active, reglaje, styling consistent cu site-ul, și punem totul online.

---

## Pasul 1: Adaugă quick replies

Butoanele rapide ajută utilizatorul să știe ce poate întreba.

**Spune-i lui Claude Code:**

```
Adaugă quick replies (butoane rapide) în ChatWidget:

1. Când se deschide chat-ul, afișează butoane: "Vezi meniu", "Recomandări", "Rezervări", "Program"
2. Click pe buton = trimite mesajul ca și cum l-ar fi scris userul
3. După anumite răspunsuri, arată butoane contextuale:
   - Dacă vorbim de meniu → "Opțiuni vegane", "Deserturi", "Cafea rece"
   - Dacă vorbim de rezervări → "Fă o rezervare", "Program"
4. Butoanele dispar după ce userul scrie un mesaj propriu
```

**Ce se întâmplă:**
- La deschidere, utilizatorul vede 4 butoane sugestive
- Click pe buton → conversația pornește instant
- Butoane contextuale apar după anumite răspunsuri

**Verifică:** Deschide chat-ul - butoanele rapide apar sub mesajul de bun venit.

---

## Pasul 2: Adaugă link-uri active

Chatbot-ul trebuie să direcționeze spre pagini reale din site.

**Spune-i lui Claude Code:**

```
Actualizează system prompt-ul și knowledge base-ul ca chatbot-ul să:

1. Când vorbește despre rezervări, să includă link: [Fă o rezervare](/rezervari)
2. Când vorbește despre meniu complet, să includă link: [Vezi meniul complet](/meniu)
3. Link-urile să fie clickabile în chat (render markdown links)
4. Adaugă în system prompt: "Când userul vrea să facă o acțiune, oferă link-ul relevant"
```

**Ce se întâmplă:**
- Bot-ul include link-uri clickabile în răspunsuri
- Click pe link → navighează la pagina din site
- Chatbot-ul transformă conversații în acțiuni

**Verifică:** Întreabă "Pot face o rezervare?" - răspunsul ar trebui să conțină un link clickabil.

---

## Pasul 3: Reglaje system prompt

Adăugăm limitări ca chatbot-ul să nu inventeze și să nu devieze.

**Spune-i lui Claude Code:**

```
Adaugă aceste reguli în system prompt:

1. NU inventa produse sau prețuri care nu sunt în knowledge base
2. NU vorbi despre alte cafenele sau restaurante
3. NU da sfaturi medicale sau nutriționale complexe
4. Răspunsuri SCURTE: maxim 2-3 propoziții per mesaj
5. Dacă nu știi răspunsul, spune sincer: "Nu am informația asta, dar ne poți contacta la [telefon/email]"
6. Rămâi mereu pe tema cafenelei - dacă userul întreabă altceva, redirecționează politicos
7. Folosește limba română
```

**Ce se întâmplă:**
- System prompt-ul primește reguli clare de comportament
- Chatbot-ul e mai precis și mai focusat

**Verifică:** Întreabă ceva în afara temei (ex: "Cum e vremea?") - ar trebui să redirecționeze politicos.

---

## Pasul 4: Styling consistent cu site-ul

Chat widget-ul trebuie să arate ca parte din site, nu ca un element străin.

**Spune-i lui Claude Code:**

```
Actualizează stilul ChatWidget ca să se potrivească cu designul site-ului:

1. Butonul de chat folosește culoarea primară din site
2. Header-ul chat-ului are culorile și fonturile site-ului
3. Bubbles-urile user folosesc culoarea primară
4. Quick replies au border-ul în culoarea primară
5. Fereastra de chat are border-radius consistent cu restul site-ului
6. Pe mobil, fereastra de chat ocupă tot ecranul (full screen)
```

**Ce se întâmplă:**
- Chat widget-ul se integrează vizual cu restul site-ului
- Pe mobil, chat-ul e full screen (mai ușor de folosit)

**Verifică:** Compară vizual chat-ul cu restul site-ului - ar trebui să arate consistent.

---

## Pasul 5: Testare completă

Verificăm tot: meniu, recomandări, rezervări, limitări, styling.

**Spune-i lui Claude Code:**

```
Testează chatbot-ul complet:

1. Quick replies funcționează? Click pe fiecare buton.
2. "Ce cafea aveți?" → Produse din meniul meu, prețuri corecte?
3. "Aveți opțiuni vegane?" → Listează doar produsele vegane?
4. "Vreau să fac o rezervare" → Link clickabil spre /rezervari?
5. "Cum e vremea?" → Redirecționare politicoasă?
6. "Cât costă un produs inventat?" → Nu inventează preț?
7. Pe mobil arată bine?
8. Dacă ceva nu funcționează, repară.
```

**Ce verificăm:**
- ✅ Quick replies funcționale
- ✅ Prețuri corecte din meniu
- ✅ Link-uri clickabile
- ✅ Nu inventează informații
- ✅ Redirecționare la întrebări off-topic
- ✅ Responsive pe mobil

---

## Pasul 6: Commit + Push pe GitHub

Salvăm tot codul pe GitHub.

**Spune-i lui Claude Code:**

```
Fă commit cu toate modificările și push pe GitHub.
Mesajul de commit: "Add Barista Bot AI chatbot with knowledge base and quick replies"
```

**Verifică:** Pe GitHub ar trebui să vezi ultimul commit cu fișierele noi.

**IMPORTANT:** Commit + Push ÎNAINTE de deploy. Golden Rule: Local → GitHub → Vercel.

---

## Pasul 7: Deploy pe Vercel + Verificare finală

Punem chatbot-ul online!

**Spune-i lui Claude Code:**

```
Ajută-mă să fac deploy pe Vercel:
1. Am deja site-ul pe Vercel din Săptămâna 3?
2. Trebuie doar push pe GitHub și Vercel face deploy automat?
3. Trebuie adăugată variabila ANTHROPIC_API_KEY pe Vercel?
4. Ghidează-mă pas cu pas.
```

**Ce se întâmplă:**
- Dacă ai deja site-ul pe Vercel, push-ul pe GitHub face deploy automat
- Trebuie adăugat `ANTHROPIC_API_KEY` în Vercel Dashboard → Settings → Environment Variables
- După deploy, chatbot-ul e live pe site-ul tău online

**Verifică pe telefon:** Deschide site-ul pe telefon. Chat-ul funcționează?

---

## Lecție importantă: Reglaje și limitări

**Un chatbot fără reglaje = un angajat fără training.**

**Ce am reglat azi:**
1. **Knowledge base** = Ce știe (meniu real, nu inventat)
2. **Personalitate** = Cum vorbește (tonul ales de tine)
3. **Limitări** = Ce NU face (nu inventează, nu deviază)
4. **Acțiuni** = Ce recomandă (link-uri reale din site)

**Regula de aur:**
> Mai bine să nu răspundă decât să răspundă greșit.
> "Nu știu, dar te pot redirecționa" > Informație inventată.

**Pattern profesionist:** Chatbot-urile comerciale au sute de reglaje. Noi am făcut cele esențiale - poți adăuga mai multe oricând.

---

## Rezumat: Cei 7 pași

| # | Ce faci | Ce se întâmplă |
|---|---------|-----------------|
| 1 | Adaugă quick replies | Butoane rapide la deschidere + contextuale |
| 2 | Adaugă link-uri active | Link-uri clickabile spre pagini din site |
| 3 | Reglaje system prompt | Limitări clare, nu inventează |
| 4 | Styling consistent | Chat widget se potrivește cu site-ul |
| 5 | Testare completă | Verifici tot: quick replies, link-uri, limitări |
| 6 | Commit + Push GitHub | Cod salvat pe GitHub |
| 7 | Deploy pe Vercel | Chatbot-ul e live online |

---

## Recapitulare Lecția 6.2

**Ce am construit:**
- ✅ Quick replies contextuale
- ✅ Link-uri active (rezervări, meniu)
- ✅ Reglaje system prompt (limitări clare)
- ✅ Styling consistent cu site-ul
- ✅ Deploy pe Vercel

---

## Felicitări - Săptămâna 6 completă!

**Ai construit 3 aplicații în 6 săptămâni:**

1. **Vibe Caffe** (Săpt. 3) - Site complet cu meniu, rezervări, galerie
2. **Vibe Budget** (Săpt. 4-5) - Gestiune financiară cu AI Coach
3. **Barista Bot** (Săpt. 6) - Chatbot AI integrat în site

**Portofoliul tău acum include:**
- Un site de prezentare
- O aplicație cu bază de date
- Un chatbot cu inteligență artificială

**Bravo! Asta e vibe coding.**

---

**Creat:** Februarie 2026
**Actualizat:** 17 februarie 2026
**Proiect:** Vibe Coding - Săptămâna 6
**Aplicație:** Barista Bot (chatbot AI pentru Vibe Caffe)
