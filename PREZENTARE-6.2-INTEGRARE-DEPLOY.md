# PREZENTARE 6.2 - Integrare, Reglaje și Deploy
> Lecție din cursul Vibe Coding
> Durata estimată: ~40 minute
> Cerință: Lecția 6.1 completată (Chatbot funcțional de bază)

---

## SLIDE 1: Terminăm Barista Bot!

**Lecția 6.1 - COMPLETĂ:**
- ✅ Knowledge base din meniul tău
- ✅ Personalitate aleasă
- ✅ Chat Widget funcțional
- ✅ Conversație reală cu Claude AI

**Lecția 6.2 - Azi:**
- 👉 Quick replies + Link-uri + Reglaje + Deploy

**La final: Chatbot-ul tău e live pe internet, integrat complet în site.**

---

## SLIDE 2: Quick Replies - Butoane rapide

**Problema:** Utilizatorul nu știe ce să întrebe.
**Soluția:** Butoane rapide care sugerează întrebări.

```
+-------------------------------+
| Barista Bot                   |
|                               |
| Buna! Cu ce te pot ajuta?     |
|                               |
| +------------+ +------------+ |
| | Vezi meniu | | Recomandari| |
| +------------+ +------------+ |
| +------------+ +------------+ |
| | Rezervari  | |  Program   | |
| +------------+ +------------+ |
|                               |
| +---------------------------+ |
| | Scrie un mesaj...         | |
| +---------------------------+ |
+-------------------------------+
```

**Quick replies apar:**
- La deschiderea chat-ului (primele sugestii)
- După anumite răspunsuri (sugestii contextuale)

---

## SLIDE 3: Link-uri active

**Chatbot-ul nu doar informează - direcționează.**

Când utilizatorul întreabă despre:
- **Rezervări** → Bot-ul răspunde + link spre `/rezervari`
- **Meniu complet** → Bot-ul răspunde + link spre secțiunea meniu
- **Locație** → Bot-ul răspunde cu adresa

**Exemplu:**
> "Pot face o rezervare?"
> "Sigur! Poți rezerva direct pe site. [Fă o rezervare →](/rezervari)"

**De ce e important:** Chatbot-ul transformă conversații în acțiuni.

---

## SLIDE 4: Reglaje System Prompt

**Un chatbot fără limitări poate spune prostii.**

**Ce limităm:**
- Nu inventează produse sau prețuri care nu sunt în meniu
- Nu vorbește despre alte cafenele sau restaurante
- Nu dă sfaturi medicale sau nutriționale complexe
- Răspunsuri scurte: maxim 2-3 propoziții
- Dacă nu știe, spune sincer: "Nu am informația asta, dar poți suna la [telefon]"

**De ce e important:** Un chatbot care inventează e mai rău decât niciunul.

---

## SLIDE 5: Styling consistent

**Chat widget-ul trebuie să se potrivească cu site-ul tău.**

| Element | Stil |
|---------|------|
| Buton chat | Culoarea primară din site |
| Header | Culorile site-ului + numele cafenelei |
| Bubbles user | Culoarea primară (ex: teal) |
| Bubbles bot | Alb cu shadow |
| Quick replies | Border culoarea primară |
| Fonturi | Aceleași ca în site |

**Nu vrem:** Chat widget care arată ca și cum e din altă aplicație.
**Vrem:** Se integrează natural, pare parte din site.

---

## SLIDE 6: Ce facem azi (pas cu pas)

**Pasul 1:** Adăugăm quick replies (butoane rapide)

**Pasul 2:** Adăugăm link-uri active (rezervări, meniu)

**Pasul 3:** Reglaje system prompt (limitări)

**Pasul 4:** Styling consistent cu site-ul

**Pasul 5:** Testare completă

**Pasul 6:** Commit + Push pe GitHub

**Pasul 7:** Deploy pe Vercel + verificare finală

---

## SLIDE 7: Lecție importantă - Reglaje și limitări

**Un chatbot fără reglaje = un angajat fără training.**

**Regula de aur:**
- Mai bine să nu răspundă decât să răspundă greșit
- "Nu știu, dar pot să te redirecționez" > Informație inventată

**Ce am reglat:**
1. **Knowledge base** = Ce știe (meniu real, nu inventat)
2. **Personalitate** = Cum vorbește (tonul ales de tine)
3. **Limitări** = Ce NU face (nu inventează, nu deviază)
4. **Acțiuni** = Ce recomandă (link-uri reale din site)

**Pattern profesionist:** Chatbot-urile comerciale au sute de reglaje. Noi am făcut cele esențiale.

---

## SLIDE 8: Demo live

**Hai să finalizăm chatbot-ul!**

Urmăriți ghidul pas cu pas - 7 pași, ~40 minute.

Deschideți Claude Code și începem cu Pasul 1.

---

## SLIDE 9: Recapitulare Lecția 6.2

**Ce am făcut:**
- ✅ Quick replies contextuale
- ✅ Link-uri active (rezervări, meniu)
- ✅ Reglaje system prompt (limitări clare)
- ✅ Styling consistent cu site-ul
- ✅ Deploy pe Vercel

**Chatbot-ul complet:**
- Știe meniul TĂU
- Are personalitatea aleasă de TINE
- Direcționează spre pagini reale din site
- Arată ca parte naturală din site
- E online pe Vercel

---

## SLIDE 10: Felicitări - Săptămâna 6 completă!

**Ai construit 3 aplicații în 6 săptămâni:**

1. **Vibe Caffe** (Săpt. 3) - Site complet cu meniu, rezervări, galerie
2. **Vibe Budget** (Săpt. 4-5) - Gestiune financiară cu AI Coach
3. **Barista Bot** (Săpt. 6) - Chatbot AI integrat în site

**Portofoliul tău acum include:**
- Un site de prezentare
- O aplicație cu bază de date
- Un chatbot cu inteligență artificială

**Asta e vibe coding!**

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 6
**Aplicație:** Barista Bot (chatbot AI pentru Vibe Caffe)
