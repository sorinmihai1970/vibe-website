# GHID 6.1 - Barista Bot: Construcție Chatbot AI
> Ghid pas cu pas pentru Lecția 6.1
> 7 pași | ~45 minute
> Cerință: Site-ul Vibe Caffe funcțional + API key Anthropic în .env.local

---

## Înainte să începem

**Ce ar trebui să ai funcțional:**
- ✅ Site-ul Vibe Caffe rulează local (`npm run dev`)
- ✅ Ai meniu pe site (din Săptămâna 3)
- ✅ Ai API key Anthropic în `.env.local` (din Lecția 5.2)

**Verifică API key-ul:**
Deschide fișierul `.env.local` și asigură-te că ai linia:
```
ANTHROPIC_API_KEY=sk-ant-...cheia-ta...
```

Dacă nu o ai, revino la Lecția 5.2, Pasul 3 pentru instrucțiuni.

**Ce vom face azi:**
Construim un chatbot AI integrat în site-ul tău. La final, vizitatorii pot întreba chatbot-ul despre meniu, prețuri, recomandări.

---

## Pasul 1: Generează knowledge base din meniul tău

Claude Code va citi meniul din site-ul tău și va crea automat baza de cunoștințe a chatbot-ului.

**Activează Plan mode** (selectorul din partea de jos a chatului) apoi spune-i lui Claude Code:

```
Citește meniul din components/Menu.tsx și creează un fișier lib/knowledge-base.ts care conține:

1. Toate produsele cu: nume, preț, categorie, ingrediente, dacă e vegan
2. Categoriile disponibile cu emoji-uri
3. Informații despre cafenea: program (08:00-22:00), locație, facilități (WiFi, pet-friendly)
4. Recomandări: cel mai popular, cel mai ieftin, cel mai scump, opțiuni vegane

Exportă totul ca un string mare KNOWLEDGE_BASE pe care îl vom folosi în system prompt.
```

**Ce se întâmplă:**
- Claude Code citește meniul TĂU (diferit de al altora)
- Creează `lib/knowledge-base.ts` cu toate informațiile
- Knowledge base-ul e personalizat pe meniul tău

**Verifică:** Deschide `lib/knowledge-base.ts` - ar trebui să vezi produsele tale cu prețurile corecte.

---

## Pasul 2: Alege personalitatea chatbot-ului

Claude Code îți propune 3 variante de personalitate. Tu alegi care se potrivește brandului tău.

**Spune-i lui Claude Code:**

```
Propune-mi 3 variante de personalitate pentru chatbot-ul cafenelei mele. Pentru fiecare variantă arată-mi:
1. Numele și stilul
2. Un exemplu de răspuns la "Ce cafea recomandați?"
3. Un exemplu de răspuns la "Aveți opțiuni vegane?"

Vreau să aleg una dintre ele.
```

**Ce se întâmplă:**
- Claude Code propune 3 personalități diferite
- Citești exemplele de răspuns
- Alegi varianta care îți place

**După ce alegi, spune-i:**

```
Vreau varianta [1/2/3]. Salvează personalitatea aleasă în knowledge-base.ts.
```

---

## Pasul 3: Construiește Chat Widget

Acum construim ce vede utilizatorul - butonul de chat și fereastra de conversație.

**Spune-i lui Claude Code:**

```
Construiește o componentă ChatWidget.tsx care:

1. Afișează un buton rotund în colțul din dreapta jos al ecranului (floating)
2. La click pe buton, se deschide o fereastră de chat
3. Fereastra are: header cu numele botului, zonă de mesaje, input de text, buton trimite
4. Adaugă componenta în app/layout.tsx ca să apară pe toate paginile
5. Când chat-ul e închis, butonul pulsează ușor ca să atragă atenția
```

**Ce se întâmplă:**
- Se creează `components/ChatWidget.tsx`
- Butonul apare pe toate paginile site-ului
- Click → se deschide fereastra de chat (goală deocamdată)

**Verifică:** Deschide site-ul - ar trebui să vezi butonul de chat în colț.

---

## Pasul 4: Adaugă mesajele vizuale

Acum facem fereastra de chat să arate bine - mesaje diferite pentru user și bot, animații.

**Spune-i lui Claude Code:**

```
Adaugă în ChatWidget:

1. Message bubbles diferite: user (teal, dreapta) și bot (alb cu shadow, stânga)
2. Mesaj de bun venit de la bot când se deschide chat-ul (ex: "Bună! Sunt barista virtual. Cu ce te pot ajuta?")
3. Typing indicator (3 puncte animate) când bot-ul "scrie"
4. Auto-scroll la ultimul mesaj
5. Enter trimite mesajul, input se golește după trimitere
```

**Ce se întâmplă:**
- Chat-ul arată profesionist cu bubbles colorate
- Bot-ul salută când deschizi chat-ul
- Animații smooth pentru typing și scroll

**Verifică:** Deschide chat-ul - ar trebui să vezi mesajul de bun venit. Poți scrie mesaje (încă nu primești răspuns real).

---

## Pasul 5: Construiește API endpoint

Construim partea de server - endpoint-ul care trimite mesajele la Claude AI.

**Spune-i lui Claude Code:**

```
Construiește API endpoint POST /api/chat care:

1. Primește mesajul utilizatorului și istoricul conversației
2. Construiește system prompt din knowledge base + personalitatea aleasă
3. Trimite la Claude AI (Anthropic API) folosind ANTHROPIC_API_KEY din .env.local
4. Folosește modelul claude-sonnet-4-5-20250929
5. Limitează răspunsul la max 200 tokens (2-3 propoziții)
6. Păstrează ultimele 6 mesaje ca context
7. Returnează răspunsul AI
```

**Ce se întâmplă:**
- Se creează `app/api/chat/route.ts`
- Endpoint-ul comunică cu Claude AI
- System prompt-ul conține meniul tău + personalitatea aleasă

**Verifică:** Nu ar trebui să fie erori TypeScript.

---

## Pasul 6: Conectează chat-ul la AI

Ultimul pas - legăm interfața de chat la API-ul real.

**Spune-i lui Claude Code:**

```
Conectează ChatWidget la API-ul /api/chat:

1. Când userul trimite mesaj, fă POST la /api/chat cu mesajul și istoricul
2. Arată typing indicator în timp ce așteptăm răspunsul
3. Când primim răspunsul, afișează-l ca bubble de bot
4. Dacă API-ul dă eroare, afișează mesaj prietenos ("Ups, ceva nu a mers. Încearcă din nou.")
5. Salvează istoricul conversației în state
```

**Ce se întâmplă:**
- Mesajele merg la Claude AI și răspunsul vine înapoi
- Conversația e reală - chatbot-ul știe meniul tău!

**Verifică:** Scrie "Ce cafea aveți?" - ar trebui să primești un răspuns cu produse din meniul TĂU.

---

## Pasul 7: Testare conversație

Testăm chatbot-ul cu întrebări reale.

**Spune-i lui Claude Code:**

```
Testează chatbot-ul cu aceste întrebări și verifică răspunsurile:
1. "Ce cafea recomandați?" - ar trebui să recomande din meniul meu
2. "Aveți opțiuni vegane?" - ar trebui să listeze produsele vegane
3. "Cât costă un cappuccino?" - ar trebui să dea prețul corect
4. "Ce program aveți?" - ar trebui să spună programul
5. "Vreau ceva dulce" - ar trebui să recomande deserturi
Dacă vreun răspuns e greșit, ajustează.
```

**Ce verificăm:**
- ✅ Răspunsurile conțin produse din meniul TĂU
- ✅ Prețurile sunt corecte
- ✅ Personalitatea aleasă se simte în răspunsuri
- ✅ Nu inventează produse care nu există pe site

---

## Lecție importantă: Chatbot = Knowledge Base + Personalitate + AI

**Un chatbot bun are 3 ingrediente:**

1. **Knowledge Base** = Ce știe (meniu, prețuri, program)
   - Fără asta, inventează răspunsuri
   - Cu asta, răspunde corect și precis

2. **Personalitate** = Cum răspunde (prietenos, formal, amuzant)
   - Fără asta, e robotizat și rece
   - Cu asta, se simte ca un om real

3. **AI** = Cum înțelege întrebarea (Claude AI)
   - Fără asta, doar potrivire exactă de cuvinte
   - Cu asta, înțelege context și nuanțe ("vreau ceva dulce" = deserturi)

**Azi am construit toate 3.** Knowledge base din meniul tău, personalitate aleasă de tine, AI de la Anthropic.

---

## Rezumat: Cei 7 pași

| # | Ce faci | Ce se întâmplă |
|---|---------|-----------------|
| 1 | Generează knowledge base | Baza de cunoștințe din meniul tău |
| 2 | Alege personalitatea | 3 variante, tu alegi |
| 3 | Construiește Chat Widget | Buton + fereastră de chat |
| 4 | Adaugă mesaje vizuale | Bubbles, typing indicator, auto-scroll |
| 5 | Construiește API endpoint | Server → Claude AI |
| 6 | Conectează chat-ul la AI | Conversație reală funcțională |
| 7 | Testare conversație | Verifici cu 5 întrebări |

---

## Recapitulare Lecția 6.1

**Ce am construit:**
- ✅ Knowledge base generat din meniul TĂU
- ✅ Personalitate aleasă pentru chatbot
- ✅ Chat Widget (buton + fereastră + bubbles + typing)
- ✅ API endpoint conectat la Claude AI
- ✅ Conversație reală funcțională

**Ce urmează (Lecția 6.2):**
- Quick replies (butoane rapide)
- Link-uri active (rezervări, meniu)
- Reglaje system prompt (limitări)
- Styling consistent cu site-ul
- Deploy pe Vercel

---

**Creat:** Februarie 2026
**Actualizat:** 17 februarie 2026
**Proiect:** Vibe Coding - Săptămâna 6
**Aplicație:** Barista Bot (chatbot AI pentru Vibe Caffe)
