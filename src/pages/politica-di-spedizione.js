import React, { useEffect, useState } from "react"
import styles from "@/styles/spedizione.module.css"


export default function Spedizione() {

    return (
        <section className={styles.container}>
            <h1>POLITICA DI SPEDIZIONE</h1>
            <div className={styles.textHolder}>
            <h2 >
                Offrite la spedizione gratuita?</h2>
            <p>Offriamo la spedizione via terra standard gratuita per tutti gli ordini superiori a € 60. Per qualificarsi, il totale del carrello deve essere € 60 dopo eventuali sconti applicabili e l&apos;ordine effettuato in Italia. La spedizione gratuita è in genere di 3-5 giorni lavorativi ed entro 7 giorni lavorativi nelle zone disagiate e isole. I termini di consegna sopra indicati sono puramente indicativi e non essenziali. Qualsiasi variante a quanto sopraindicato verrà comunicata tempestivamente via e-mail al Cliente. Al momento non spediamo alcun prodotto al di fuori del territorio italiano. </p><h2>Come funziona la spedizione?</h2><p>Una volta spedito l&apos;ordine, il Cliente riceverà via e-mail le informazioni di tracciamento in modo che possa seguire l&apos;ordine durante il transito. Il monitoraggio richiede spesso 1-2 giorni per l&apos;aggiornamento una volta spedito. Il Cliente dovrà accedere all&apos;ordine attraverso il sito<strong> www.brunomd.eu.com</strong> (in alto a destra della homepage). Dovrà creare un account se non lo ha fatto al momento dell&apos;acquisto. Si prega di utilizzare lo stesso indirizzo e-mail utilizzato al momento dell&apos;acquisto per collegare l&apos;ordine all&apos;account. Se un account è già stato creato, il Cliente dovrà accedere utilizzando il suo indirizzo e-mail e la password. Il Cliente potrà farlo facendo clic sulla parola “account” situata sopra l&apos;icona del carrello nella home page (angolo in alto a destra). Verrà reindirizzato alla pagina della cronologia degli ordini e sulla riga dell&apos;ordine c&apos;è un&apos;opzione per “annullare / modificare” il suo ordine. • In alternativa, è possibile contattare il nostro Servizio Clienti via e-mail all&apos;indirizzo customerservice@brunopharma.com. </p><p>e saremo lieti di aiutarvi. </p>
            <h2>Dov&apos;è il mio pacco e come posso tracciarlo?</h2><p>Nel momento in cui spediamo l&apos;ordine, il Cliente riceverà via e-mail il numero di tracciamento e un link in modo da poter seguire tutti gli aggiornamenti di tracciamento via e-mail. </p><p>Nota: il monitoraggio a volte richiede 1-3 giorni lavorativi per l&apos;aggiornamento e questo non significa che l&apos;ordine sia bloccato in una città diversa. Invece, i nostri corrieri aggiorneranno il monitoraggio in ogni nuova località, inclusa la sua città.</p><h2>Il monitoraggio del mio pacco non si aggiorna, dov&apos;è il mio pacco?</h2><p>L&apos;aggiornamento del monitoraggio richiede in genere 24 ore, ma non è raro che l&apos;aggiornamento richieda 2-3 giorni. Facciamo del nostro meglio per spedire tutti gli ordini entro 1 giorno lavorativo dall&apos;ordine. Se il Cliente ha ricevuto via e-mail un numero di tracciamento, il suo ordine è stato già spedito dal nostro magazzino.</p><h2>Il mio pacco dice che è stato consegnato ma non riesco a trovarlo. Qual è il prossimo passo?</h2><p>Il passo successivo è contattare il corriere locale che ha effettuato la consegna finale. Probabilmente è Poste Italiane. Il Cliente potrà trovare le informazioni necessarie sul numero di tracciamento precedentemente ricevuto via e-mail. Il corriere locale sarà in grado di dire se si è trattato di un errore durante il processo di scansione e potrà dare ulteriori chiarimenti. Per qualsiasi tipo di assistenza, preghiamo di essere contattati inviando un&apos;e-mail utilizzando il nostro modulo “Contattaci” situato sulla home page (in alto a destra), oppure in basso, oppure scrivendo una e-mail a customerservice@brunopharma.com. Uno dei nostri agenti di assistenza clienti, risponderà il più rapidamente possibile.</p>
            </div>
        </section>
    )
}