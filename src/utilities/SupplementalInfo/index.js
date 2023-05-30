import React, { useState } from "react";
import styles from './styles.module.css'

const SupplementalInfo = () => {
    const [isAdditionalInfoVisible, setAdditionalInfoVisibility] = useState(false)
    const moneyBackInfo = "Come funziona? Siamo sicuri che il nostro Cliente sarà soddisfatto dei prodotti Bruno MD, tuttavia, se per qualsiasi motivo non lo sarà, rimborseremo il primo ordine per intero meno i costi della spedizione. Onoriamo un rimborso completo se il nostro servizio clienti viene contattato entro 14 giorni lavorativi dalla data del ricevimento dell&apos;ordine. Non è necessario restituire il prodotto (se è il primo ordine ricevuto); tuttavia, accogliamo con favore il feedback per aiutarci a migliorare la qualità del nostro servizio.";
    const subscriptionDetails = "Il tuo abbonamento a questo prodotto si rinnoverà ogni 25 giorni e riceverai il prodotto a pagamento effettuato";
    let regex = /\d\d giorni/gi
    let newText = subscriptionDetails.replaceAll(regex, `2 giorni`,);
    let [text, setText] = useState(newText)
    // React.useEffect(() => {
    //     if (selectedSubscriptionInterval) {
    //       for (let i = 0; i < subscriptionDetails.length; i++) {
    //         tArray.push(
    //           subscriptionDetails[i].children[0].text.replaceAll(
    //             regex,
    //             `${String(selectedSubscriptionInterval)} giorni`,
    //           ),
    //         )
    //       }
    //       setText(tArray)
    //     }
    //   }, [selectedSubscriptionInterval])
    return (
        <div className={styles.supplementalInfoWrapper}>
            {text && (
                <>
                    <p className={styles.subscribeAndSave}>Modalita&apos; per l&apos;acquisto periodico</p>
                    <div className={styles.frequencyDisclaimer}>
                        {text}
                    </div>
                </>
            )}

            {moneyBackInfo && (
                <>
                    <div className={styles.informationContainer}>
                        <p>14 Giorni - Soddisfatti o Rimborsati </p>
                        <img
                            onClick={() => setAdditionalInfoVisibility(prev => !prev)}
                            className={styles.infoGraphic}
                            src="//cdn.shopify.com/s/files/1/0021/0573/7291/t/172/assets/information-button.svg?v=6467211743660140745"
                            height="20"
                            width="20"
                            alt="Information button"
                        />
                    </div>
                    <div className={`${styles.additionalInfo} ${styles.visible}`}>
                        {moneyBackInfo}
                    </div>
                </>
            )}
        </div>
    )

}
export default SupplementalInfo