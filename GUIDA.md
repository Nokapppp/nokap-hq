# NoKap HQ – sito indipendente: guida di installazione

Tempo: 30–45 minuti, una volta sola. Fai tutto **dall'account Google nokapmerch@gmail.com**, così il sito e i dati restano del brand.

Cosa c'è nella cartella:

| File | A cosa serve |
|---|---|
| `index.html` | il sito (stessa grafica e funzioni di NoKap HQ) |
| `firebase-config.js` | da compilare al passo 4 |
| `firestore.rules` | le regole di accesso, da incollare al passo 3 |
| `seed.json` | i dati attuali (11 attività, link, reference, cartella Drive) |
| `assets/`, `fonts/` | logo, grafica della tee, Creato Display, Cloister Black |

---

## 1. Crea il progetto Firebase
1. Vai su **console.firebase.google.com** → **Crea un progetto** → nome `nokap-hq`.
2. Google Analytics: puoi disattivarlo. Crea.

## 2. Attiva l'accesso con Google
1. Menu a sinistra **Authentication** → **Inizia**.
2. Scheda **Metodo di accesso** → **Google** → **Attiva** → scegli l'email di supporto → **Salva**.

## 3. Crea il database e incolla le regole
1. Menu **Firestore Database** → **Crea database**.
2. Posizione: una europea (es. `eur3` o `europe-west`). Modalità: **produzione**.
3. Scheda **Regole**: cancella tutto, incolla il contenuto di `firestore.rules`, **Pubblica**.

## 4. Collega il sito al progetto
1. Ingranaggio in alto a sinistra → **Impostazioni progetto** → in basso **Le tue app** → icona **`</>`** (Web).
2. Nome app `NoKap HQ`, **non** spuntare Firebase Hosting → **Registra app**.
3. Ti mostra un blocco `firebaseConfig` con `apiKey`, `authDomain`, ecc.
4. Apri `firebase-config.js` con un editor di testo e sostituisci ogni `INCOLLA_QUI` con il valore corrispondente. Salva.
   (Non sono password: è normale che stiano in un file pubblico. La protezione la fanno le regole del passo 3.)

## 5. Dai al sito il permesso di caricare su Google Drive
Il progetto Firebase è anche un progetto Google Cloud.
1. Vai su **console.cloud.google.com** e in alto seleziona il progetto `nokap-hq`.
2. Cerca **Google Drive API** → **Abilita**.
3. Cerca **Schermata consenso OAuth** (o "Google Auth Platform"):
   - Tipo di utenti: **Esterni**. Nome app: `NoKap HQ`. Email di supporto e contatto: nokapmerch@gmail.com.
   - **Accesso ai dati / Ambiti** → Aggiungi ambito → cerca `.../auth/drive` (Google Drive, vedere e modificare i file) → Aggiorna → Salva.
   - **Destinatari / Utenti di test** → aggiungi le email Google di tutto il team, comprese nokapmerch e la tua.
   L'app resta "in test": va benissimo per un team fino a 100 persone. Al primo caricamento Google mostra un avviso perché l'app non è verificata: si clicca **Continua**.

## 6. Metti il sito online con Netlify
1. Vai su **app.netlify.com** e crea un account gratuito con nokapmerch (serve perché il sito resti online).
2. **Add new site → Deploy manually** e trascina **l'intera cartella** `nokap-hq-sito`.
3. Netlify ti dà un indirizzo tipo `nome-a-caso.netlify.app`. In **Site configuration → Change site name** puoi chiamarlo `nokap-hq` → `nokap-hq.netlify.app`.

## 7. Autorizza l'indirizzo del sito
1. Torna su Firebase → **Authentication → Impostazioni → Domini autorizzati** → **Aggiungi dominio**.
2. Inserisci l'indirizzo Netlify, es. `nokap-hq.netlify.app` (senza https://).

## 8. Primo accesso
1. Apri il sito e clicca **Accedi con Google** con nokapmerch.
2. Menu → **Team e accessi** → **Importa dati iniziali** (una volta sola).
3. Nella stessa pagina aggiungi l'email di ogni membro. Gabriele, o chi deve approvare i contenuti, mettilo come **Approvatore**.
4. Condividi la cartella Drive **NoKap HQ – Caricamenti** di nokapmerch con le stesse email, come **Editor**.

Fatto. Ognuno entra con il suo account Google e lavora per conto suo.

---

## Dominio vostro (facoltativo)
Netlify → **Domain management → Add a domain** → es. `hq.nokap.it` e segui le istruzioni DNS. Poi aggiungi lo stesso dominio nei **Domini autorizzati** di Firebase (passo 7).

## Aggiornare il sito
Quando modifichiamo l'interfaccia ti mando la cartella nuova: Netlify → **Deploys** → trascina la cartella. I dati non si toccano. Ricordati di tenere il tuo `firebase-config.js` già compilato.

## Se qualcosa non va
| Cosa vedi | Cosa fare |
|---|---|
| "Configurazione mancante" | `firebase-config.js` non compilato o non caricato su Netlify |
| "Questo indirizzo non è autorizzato" | passo 7: aggiungi il dominio in Firebase |
| "Non sei ancora nel team" | un amministratore aggiunge l'email in Team e accessi |
| Il browser blocca la finestra di Google | consenti i popup per il sito |
| "Drive ha rifiutato il file" | la cartella Caricamenti non è condivisa con quella email |
| "Accesso bloccato: app non verificata" | l'email non è tra gli utenti di test (passo 5) |

Amministratori (gestiscono il team e approvano): nokapmerch@gmail.com e lorenzociampana@gmail.com. Per cambiarli si modificano sia `firebase-config.js` sia `firestore.rules`.

## Novità (novembre 2026)
- **Reference**: clicca una reference nella moodboard per aprirla. Dentro puoi caricare foto (vanno su Drive) e aggiungere link.
- **Più persone**: ogni attività e scadenza ha un responsabile più chi collabora. Tutti ricevono avviso e promemoria via email. Con "modifica" cambi persone, data e luogo.
- **Dove**: attività, scadenze e bozze hanno il luogo (Online, Firenze, Milano, Roma, Altro).
- **Brand kit**: palette, hashtag, tono e template li modifica chi ha la spunta "Brand kit" in Team e accessi (la mette Gabriele).
- **Fornitori**: elenco per regione e oggetto, con link, contatti e stato.
- **Email ai fornitori**: gli approvatori creano modelli email nella pagina Fornitori. Da una bozza approvata, "Email ai fornitori" programma l'invio a data e ora scelte. Partono da nokapmerch@gmail.com entro 15 minuti dall'orario.
