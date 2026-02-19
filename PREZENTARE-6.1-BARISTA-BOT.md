# PREZENTARE 6.1 - Barista Bot: Construcție Chatbot AI
> Lecție din cursul Vibe Coding
> Durata estimată: ~45 minute
> Cerință: Site-ul Vibe Caffe funcțional (Săptămâna 3) + API key Anthropic (Lecția 5.2)

---

## SLIDE 1: Săptămâna 6 - Aplicația 3!

**Ce am construit până acum:**
- ✅ Săptămâna 3: Site Vibe Caffe (vitrina online)
- ✅ Săptămânile 4-5: Vibe Budget (gestiune financiară)

**Săptămâna 6 - Chatbot AI:**
- 👉 **Lecția 6.1: Construcție Barista Bot (ACUM)**
- ⏳ Lecția 6.2: Integrare cu site-ul + Deploy

**Azi construim un chatbot care știe totul despre cafeneaua ta.**

---

## SLIDE 2: Ce e un chatbot și de ce ne trebuie?

**Un chatbot = un asistent virtual care răspunde la întrebări.**

**Pe site-ul tău Vibe Caffe, vizitatorii pot întreba:**
- "Ce cafea recomandați?"
- "Aveți opțiuni vegane?"
- "Cât costă un cappuccino?"
- "Pot face o rezervare?"
- "Ce program aveți?"

**Fără chatbot:** Vizitatorii trebuie să caute singuri prin site.
**Cu chatbot:** Răspuns instant, personalizat, 24/7.

**Unde se vede:** Un buton mic în colțul din dreapta jos al site-ului. Click → se deschide fereastra de chat.

---

## SLIDE 3: Ce face chatbot-ul nostru

**Știe totul despre cafeneaua ta:**
- Meniul complet (produse, prețuri, ingrediente)
- Ce e vegan și ce nu
- Recomandări personalizate ("vreau ceva dulce" → sugerează Mocha)
- Program, locație, facilități
- Direcționează spre pagina de rezervări

**NU face:**
- Nu inventează produse sau prețuri
- Nu vorbește despre alte cafenele
- Nu ia comenzi (doar informează și recomandă)
- Nu răspunde la întrebări în afara temei cafenelei

---

## SLIDE 4: De unde știe chatbot-ul meniul TĂU?

**Fiecare dintre voi are un meniu diferit pe site.**

Claude Code va citi meniul direct din site-ul tău și va genera automat baza de cunoștințe a chatbot-ului.

```
Site-ul TĂU          →  Claude Code citește  →  Knowledge Base
(components/Menu.tsx)    produse, prețuri,       (lib/knowledge-base.ts)
                         categorii, ingrediente
```

**Rezultat:** Chatbot-ul TĂU știe meniul TĂU. Nu un meniu generic.

**Exemplu:** Dacă ai adăugat "Matcha cu lavandă" pe site, chatbot-ul va ști să-l recomande.

---

## SLIDE 5: Personalitatea chatbot-ului

**Un chatbot bun nu e doar informativ - are personalitate.**

Claude Code vă va propune 3 variante de personalitate:

| Varianta | Stil | Exemplu răspuns |
|----------|------|-----------------|
| **Barista Prieten** | Casual, emoji, prietenos | "Hei! ☕ Cappuccino-ul nostru e super cremos, 16 lei. Vrei să-l încerci?" |
| **Barista Profesionist** | Formal, detaliat, elegant | "Cappuccino-ul nostru este preparat cu espresso dublu și lapte texturalizat. Prețul este 16 lei." |
| **Barista Comic** | Amuzant, glume, relaxat | "Cappuccino? Alegere de campion! 16 lei și primești cea mai cremoasă artă din lapte din sector. 😄" |

**Voi alegeți.** Nu există răspuns greșit - depinde de brandul cafenelei voastre.

---

## SLIDE 6: Arhitectura chatbot-ului

```
+----------------+     +----------------+     +----------------+
|  CHAT WIDGET   | --> |      API       | --> |   CLAUDE AI    |
|  (in site)     |     |   /api/chat    |     |  (Anthropic)   |
|                |     |                |     |                |
|  Input text    |     |  System        |     |  Intelege      |
|  Bubbles       |     |  prompt +      |     |  intrebarea    |
|  Quick reply   |     |  Knowledge     |     |  Raspunde      |
+----------------+     +----------------+     +----------------+
```

**3 piese:**
1. **Chat Widget** = Ce vede utilizatorul (buton, fereastră, mesaje)
2. **API Endpoint** = Trimite mesajul la Claude AI cu context (meniu + personalitate)
3. **Claude AI** = Înțelege întrebarea și răspunde (folosind API key-ul din Lecția 5.2)

---

## SLIDE 7: Ce construim azi (pas cu pas)

**Pasul 1:** Claude Code citește meniul și generează knowledge base

**Pasul 2:** Claude Code propune 3 personalități → tu alegi

**Pasul 3:** Construim Chat Widget (buton + fereastră)

**Pasul 4:** Adăugăm mesajele vizuale (bubbles + typing indicator)

**Pasul 5:** Construim API endpoint cu Claude AI

**Pasul 6:** Conectăm chat-ul la AI (mesaje reale)

**Pasul 7:** Testare - întreabă chatbot-ul despre meniu

---

## SLIDE 8: API Key - Deja îl ai!

**Veste bună:** Dacă ai făcut Lecția 5.2, ai deja API key-ul Anthropic!

Verifică în fișierul `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-...cheia-ta...
```

**Dacă nu îl ai:** Revino la pașii din Lecția 5.2, Pasul 3.

**Același API key funcționează** și pentru Vibe Budget (AI Coach) și pentru Barista Bot. Nu ai nevoie de altul.

---

## SLIDE 9: Demo live

**Hai să construim chatbot-ul!**

Urmăriți ghidul pas cu pas - 7 pași, ~45 minute.

Deschideți Claude Code și începem cu Pasul 1.

---

## SLIDE 10: Recapitulare Lecția 6.1

**Ce am făcut:**
- ✅ Knowledge base generat din meniul TĂU
- ✅ Personalitate aleasă pentru chatbot
- ✅ Chat Widget funcțional (buton + fereastră + mesaje)
- ✅ API endpoint conectat la Claude AI
- ✅ Conversație reală despre meniu, prețuri, recomandări

**Ce rămâne (Lecția 6.2):**
- Quick replies (butoane rapide)
- Link-uri active către rezervări
- Reglaje și limitări
- Styling consistent cu site-ul
- Deploy pe Vercel

---

**Creat:** Februarie 2026
**Proiect:** Vibe Coding - Săptămâna 6
**Aplicație:** Barista Bot (chatbot AI pentru Vibe Caffe)
