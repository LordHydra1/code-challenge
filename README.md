# Consegna esercizio

## Struttura dell'applicazione

// TODO: Spiega la strutturazione delle cartelle in modo chiaro come se dovessi darlo
in mano ad un tuo collega.
Immagina che il tuo collegato ci dovrà eseguire bugfix e aggiungere feature su
questo proggetto.

# Riepilogo

## Di seguito le specifiche:

Il candidato deve produrre in un elapsed di 1w su StackBlitz un codice sorgente in React che renderizza una datagrid della libreria SyncFusion per mezzo di una chiamata ad API.
Sarebbe ottimo poter realizzare il progetto in TypeScript, ma nel caso tu sia piu' a tuo agio con JS puoi crearti uno stackblitz vuoto tuo con cui partire.
NB: Realizzare il codice considerando che altri colleghi potranno prendere in carico il sorgente.

1. Mostrare le colonne: FirstName, LastName, Gender, Age, Emails
   - // TODO: Spiega come hai fatto
2. In caso di valore null mostrare il placeholder “--”
   - // TODO: Spiega come hai fatto
3. Per la colonna Gender convertire il valore Male e Female in una icona a piacere
   - // TODO: Spiega come hai fatto
4. Per la colonna Emails mostrare l’elenco degli indirizzi
   - // TODO: Spiega come hai fatto
5. Realizzare la paginazione lato front end con n.5 item per pagina
   - // TODO: Spiega come hai fatto
6. Abilitare un column chooser per selezionare le colonne che si vogliono vedere in schermata
   - // TODO: Spiega come hai fatto
7. Realizzare un pulsante esterno alla tabella che se cliccato mostra/nasconde la stessa. Quando la tabella riappare non deve partire un'altra GET per retrieve-are i dati.
   - // TODO: Spiega come hai fatto

## Di seguito attività opzionali di 1 livello:

8. Introdurre due pulsanti per poter filtrare i gender

- // TODO: Spiega come hai fatto

9. Introdurre un pulsante per effettuare la GET dei dati con un debounce (se possibile tramite redux-saga)

- // TODO: Spiega come hai fatto

## Di seguito attività opzionali di 2 livello:

10. Introdurre Redux e gestire le chiamate API tramite Redux-Saga

- // TODO: Spiega come hai fatto

11. Gestire le email attraverso una child grid

- // TODO: Spiega come hai fatto

12. Implementare l'export tramite excel grazie alla funzionalita della tabella di syncfusion.

- // TODO: Spiega come hai fatto

## Di seguito attività opzionali di 3 livello:

13. Abilitare l’editing inline sulla riga(senza effettuare la patch a backend) ed in particolare sul campo Gender

- // TODO: Spiega come hai fatto

14. Creare una toolbar custom con un pulsante custom che rimuove solo le righe dispari

- // TODO: Spiega come hai fatto

15. Creare bottone custom che rimuove solo le righe dispari ma questa volta aggiungilo alla toolbar Out Of The Box (quella originale di Syncfusion)

- // TODO: Spiega come hai fatto

16. Applicare un mapping sulla colonna Gender durante l'export, si vuole che il dato sul excel appaia formattato diversamente da come viene mostrato in griglia.
    Es:
    In tabella si mostrerà tramite un'icona
    In excel si mostrerà tramite una label: Male (Gender) o / Female (Gender)

- // TODO: Spiega come hai fatto

## Considerazioni

// TODO:

- Hai trovato complicazioni?
- Hai trovato bug della libreria Syncfusion?
