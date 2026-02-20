# Portofoliu - Vibe Coding

Trei aplicații construite cu metoda vibe coding: conversație cu AI, iterare prin feedback, deploy pe internet.

---

## 1. Vibe Caffe - Site de prezentare

**Link:** https://vibe-website-rho.vercel.app

**Ce face:**
Site-ul cafenelei Vibe Caffe cu 4 pagini. Pagina principală are video full-screen în fundal, secțiune de features în stil bento grid, meniu complet cu 30 de produse pe 6 categorii cu tab-uri, și secțiune "Despre noi". Pagina de locație arată adresa, programul, facilitățile și o galerie foto. Pagina de rezervări are un formular interactiv cu calendar, selectare de oră, și salvare în baza de date. Pagina de admin gestionează toate rezervările cu filtre, căutare și acțiuni de confirmare/respingere.

Are dark mode persistent, smooth scroll cinematografic, animații parallax, preloader cu animație, și design responsive care arată bine pe telefon și pe desktop.

**Ce am învățat:**
- Cum arată un site modern: video background, parallax, animații la scroll, bento grid
- Cum funcționează un formular cu calendar și salvare în baza de date (Supabase)
- Cum faci un site responsive care se adaptează la orice ecran
- Cum adaugi dark mode care ține minte preferința utilizatorului
- Cum pui un site online cu Vercel

---

## 2. Vibe Budget - Aplicație de gestiune financiară

**Link:** https://vibe-budget-main.vercel.app

**Ce face:**
Aplicație web completă pentru gestionarea banilor personali. Are autentificare cu conturi de utilizator, import de extrase bancare din fișiere CSV și Excel, categorizare inteligentă a tranzacțiilor care învață de la tine, grafice interactive cu diagrame plăcintă și bare, tabel pivot pentru analiză detaliată, și un AI coach financiar care îți dă scor de sănătate financiară, recomandări de economisire pe categorii, și alerte pentru cheltuieli neobișnuite.

Gestionează mai multe bănci simultan (ING, BCR, Revolut, BT), mai multe valute (RON, EUR, USD), și are 9 pagini de dashboard cu 20 de endpoint-uri API și 6 tabele în baza de date.

**Ce am învățat:**
- Cum funcționează autentificarea: login, înregistrare, recuperare parolă, protecție rute
- Cum stochezi și organizezi date complexe cu mai multe tabele legate între ele
- Cum imporți și procesezi fișiere externe (CSV, Excel) cu formate diferite
- Cum faci categorizare inteligentă care învață reguli de la utilizator
- Cum integrezi AI (Claude) ca să analizeze date și să dea recomandări concrete
- Cum construiești grafice interactive din date reale
- Diferența dintre un site de prezentare și o aplicație web adevărată

---

## 3. Barista Bot - Chatbot AI

**Link:** https://vibe-website-rho.vercel.app (integrat în site-ul Vibe Caffe, butonul din dreapta jos)

**Ce face:**
Chatbot inteligent integrat în site-ul cafenelei, cu personalitate de barista prietenoasă. Știe tot meniul cu prețuri și ingrediente, programul, locația, facilitățile, și personalizările disponibile. Răspunde natural în română, oferă recomandări, și dă link-uri clickabile spre meniu și rezervări. Are butoane rapide contextuale care se schimbă în funcție de ce tocmai s-a discutat. Funcționează full-screen pe telefon și ca widget flotant pe desktop.

**Ce am învățat:**
- Cum dai personalitate unui chatbot: ton, reguli, limite, exemple de comportament
- Cum construiești o bază de cunoștințe structurată pe care AI-ul o folosește corect
- Cum funcționează un system prompt cu reguli stricte (nu inventa, rămâi pe subiect, răspunde scurt)
- Cum integrezi Claude AI într-un endpoint API cu istoric de conversație
- Cum faci butoane rapide contextuale care ghidează conversația
- Cum rezolvi probleme neașteptate de integrare (scroll-ul site-ului bloca scroll-ul din chat)

---

## Ce am învățat în tot cursul

Am învățat o metodă de lucru care funcționează indiferent ce construiești. Descrii ce vrei în cuvintele tale, Claude Code scrie codul, verifici rezultatul, dai feedback, și repeți până e cum trebuie. Apoi: test local, commit, push pe GitHub, deploy pe Vercel. Metoda e aceeași, doar aplicația e diferită.

Am construit trei tipuri diferite de aplicații - un site de prezentare, o aplicație web cu bază de date, și un chatbot inteligent - și fiecare a adăugat un strat de complexitate. Site-ul m-a învățat design și experiență vizuală. Aplicația de buget m-a învățat cum funcționează datele, autentificarea, și analiza cu AI. Chatbot-ul m-a învățat cum dai inteligență și personalitate unui program.

Cel mai important lucru pe care l-am învățat: nu trebuie să fii programator ca să construiești aplicații reale. Trebuie să știi ce vrei, să poți descrie clar, și să ai răbdare să iterezi până iese bine.

---

**Creat:** Februarie 2026
**Curs:** Vibe Coding
**Instrumente:** Claude Code + Next.js + React + Tailwind CSS + Supabase + Anthropic Claude AI + Vercel
