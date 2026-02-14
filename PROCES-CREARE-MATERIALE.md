# Proces de Creare Materiale Curs

## Principii Fundamentale

### 1. Limbaj Conversațional - ZERO Termeni Tehnici

**REGULA DE AUR:** Prezentările și ghidurile NU trebuie să conțină termeni tehnici pe care oamenii obișnuiți nu îi știu.

**Excepții permise (dar explicate simplu):**
- commit
- push
- deploy

**Termeni de evitat:**
- API, CRUD, endpoint, route
- migration, schema, RLS
- component, props, state
- singleton, instance, factory
- build, bundle, compile (folosește: "verifică că totul merge")
- library, package (folosește: "instalează ce trebuie")
- framework, SDK, CLI (folosește: "programul X")

### 2. Cum Vorbești Cu Claude Code

**NU așa:**
```
"Creează un API endpoint cu CRUD operations pentru reservation management"
```

**CI așa:**
```
"Vreau să pot salva rezervările în Supabase"
```

**Apoi conversație naturală:**
- Claude Code te întreabă ce date
- Tu răspunzi simplu: "Nume, email, telefon, câți oameni"
- Nu dai toate specificațiile într-o comandă mare

## Structura Materialelor

### Pentru fiecare lecție ai 2 fișiere:

1. **PREZENTARE-X.Y-TITLU.md** - Slide-urile video
2. **GHID-X.Y-TITLU.md** - Material suplimentar cu comenzi Claude Code

### PREZENTARE (slide-uri)

**Format:**
```markdown
## SLIDE 1: Titlu
```
[text slide]
```

## SLIDE 2: Context
```
[text slide]
```

...

## [DEMO LIVE - X minute]
Urmărește GHID-X.Y cu cele 7 comenzi

## SLIDE N: Recapitulare
...
```

**Structură tipică (9-11 slide-uri):**
1. Titlu
2-3. Context (unde suntem, ce facem)
4-5. Explicații teoretice (ce construim, cum funcționează)
6. Ce vom face (lista comenzi)
7. Pregătire demo (ce ai nevoie)
8. [DEMO LIVE] - aici urmărești GHID-ul
9-10. Recapitulare + ce urmează
11. Întrebări frecvente

**Durată totală: ~30 minute**
- 10 min slide-uri teoretice
- 15-20 min demo live cu ghid
- 5 min recapitulare

### GHID (pas cu pas)

**Format:**
```markdown
## COMANDA 1: Titlu scurt

Spune-i lui Claude Code:

> **"Comandă în limbaj natural"**

Claude Code o să te întrebe... Spune-i:

> **"Răspuns conversațional"**

**Ce face Claude Code:**
- Lista acțiuni

**Ce aștepți să vezi:**
Rezultat concret
```

**Elemente cheie:**
- Comenzi în blockquote (>)
- Conversație naturală (întrebare → răspuns)
- NU specificații tehnice lungi
- "Ce face" și "Ce aștepți să vezi" pentru fiecare comandă
- 7 comenzi per ghid (număr magic - ușor de reținut)

### Pattern-ul conversațional

**Prima comandă - generală:**
```
> "Vreau să fac X"
```

**Claude Code întreabă detalii:**
```
Claude Code o să te întrebe Y. Spune-i:
> "Detaliu simplu"
```

**Dacă te mai întreabă:**
```
Dacă te mai întreabă despre Z:
> "Alt detaliu simplu"
```

Astfel arăți că e **dialog**, nu monolog tehnic.

## Exemple Bune vs Rele

### ❌ GREȘIT - Prea Tehnic

```
> **"Vreau să faci o pagină admin la app/admin/page.tsx. Pagina să:**
> **- Incarce rezervările automat cand se deschide (cu GET de la API)**
> **- Le afișeze într-un tabel cu coloanele: Nume, Contact, Data, Ora**
> **- Aiba filtre pe status: Toate, În așteptare, Confirmate**"
```

**Probleme:**
- Specifică path-ul tehnic (app/admin/page.tsx)
- Menționează "GET de la API"
- Prea multe detalii într-o comandă
- Nu e conversație, e listă de requirements

### ✅ CORECT - Conversațional

```
Spune-i lui Claude Code:

> **"Vreau o pagină admin unde să văd toate rezervările."**

Claude Code o să te întrebe ce vrei pe pagina aia. Răspunzi:

> **"Vreau tabel cu rezervările, filtre pe status, căutare după nume."**

Dacă te mai întreabă despre design:

> **"Design ca restul site-ului - fundal transparent cu blur."**
```

**De ce e corect:**
- Comandă inițială simplă
- Detalii adăugate în conversație
- Limbaj natural, fără termeni tehnici
- Arată flow-ul real de conversație

## Checklist Înainte de Publicare

### Pentru PREZENTARE:
- [ ] Titlu clar (PREZENTARE-X.Y-TITLU.md)
- [ ] 9-11 slide-uri (nu mai multe)
- [ ] Slide-uri context + explicații (5-7 slide-uri)
- [ ] Slide pregătire demo
- [ ] Secțiune [DEMO LIVE] cu trimitere la GHID
- [ ] Slide-uri recapitulare (2-3 slide-uri)
- [ ] ZERO termeni tehnici neexplicați
- [ ] Durată totală menționată (~30 min)

### Pentru GHID:
- [ ] Titlu clar (GHID-X.Y-TITLU.md)
- [ ] 7 comenzi (număr ideal)
- [ ] Fiecare comandă are: prompt → conversație → ce face → ce aștepți
- [ ] Comenzi în limbaj natural (cum vorbești cu un coleg)
- [ ] Comenzi scurte, detalii în conversație
- [ ] Tabel rezumat la final
- [ ] Secțiune "Dacă ceva nu merge"
- [ ] ZERO termeni tehnici

### Pentru ambele:
- [ ] Aliniate (prezentarea menționează exact cele 7 comenzi din ghid)
- [ ] Consistente în nume fișiere, nume concepte
- [ ] Teste pe cineva non-tehnic (mama, prieteni) - înțeleg?

## Template-uri

### Template PREZENTARE

```markdown
# PREZENTARE X.Y - TITLU
> Săptămâna X - Descriere scurtă
> Durată: ~30 min (prezentare + demo live)

---

## SLIDE 1: Titlu
[titlu eveniment]

## SLIDE 2: Unde suntem
[context: ce am făcut, ce facem acum]

## SLIDE 3-4: Explicații
[ce construim, cum funcționează]

## SLIDE 5: Ce vom face
[listă 7 comenzi]

## SLIDE 6: Pregătire demo
[ce ai nevoie]

## [DEMO LIVE - 15-20 min]
Urmărește GHID-X.Y

## SLIDE 7: Recapitulare
[ce am făcut]

## SLIDE 8: Ce urmează
[preview lecție următoare]

## SLIDE 9: Întrebări?
[FAQ]

**MATERIALE:**
- GHID-X.Y-TITLU.md
- PREZENTARE-X.Y-TITLU.md
```

### Template GHID

```markdown
# GHID X.Y - TITLU
> Material suplimentar pentru cursanți - Video X.Y
> Vorbești cu Claude Code ca și cum vorbești cu un coleg.

---

## Înainte de a începe
[prerequisites]

---

## COMANDA 1: Titlu

Spune-i lui Claude Code:

> **"Comandă simplă"**

Claude Code o să te întrebe X. Spune-i:

> **"Răspuns simplu"**

**Ce face Claude Code:**
- Acțiune 1
- Acțiune 2

**Ce aștepți să vezi:**
Rezultat concret

---

[... repetă pentru COMANDA 2-7 ...]

---

## Rezumat: Cele 7 comenzi

| # | Ce i-ai spus | Ce a făcut |
|---|--------------|------------|
| 1 | "X" | Y |
...

---

## Dacă ceva nu merge
[troubleshooting simplu]

---

## Ce ai acum
[listă cu ✅]
```

## Exemplu Real: Săptămâna 3

Săptămâna 3 (sistem rezervări) a fost împărțită în:

### VIDEO 3.1: Baza de date
- **PREZENTARE-3.1**: 11 slide-uri
- **GHID-3.1**: 7 comenzi (setup Supabase)
- Durată: ~30 min

### VIDEO 3.2: Formular
- **PREZENTARE-3.2**: 9 slide-uri
- **GHID-3.2**: 7 comenzi (formular + conectare DB)
- Durată: ~30 min

### VIDEO 3.3: Admin + Deploy
- **PREZENTARE-3.3**: 11 slide-uri
- **GHID-3.3**: 7 comenzi (admin + deploy)
- Durată: ~35 min

**Total: 21 comenzi = sistem complet de rezervări**

## Note Finale

1. **Testează pe non-tehnici** - Dacă mama ta înțelege, e bun
2. **Scurt și la obiect** - Mai puține slide-uri = mai multă atenție
3. **Demo live > explicații** - Arată, nu spune
4. **Conversație > monolog** - Dialog natural, nu listă requirements
5. **Zero jargon** - Dacă sună "smart", probabil e prea tehnic

---

**Creat:** 9 februarie 2026
**Ultima actualizare:** 9 februarie 2026
**Status:** Template validat cu Săptămâna 3
