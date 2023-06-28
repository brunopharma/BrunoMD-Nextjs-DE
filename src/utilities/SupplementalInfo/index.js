import React, { useState } from "react";
import styles from './styles.module.css'

const SupplementalInfo = ({ moneyBackInfo, termPurchase }) => {
    console.log({ termPurchase });
    const [isAdditionalInfoVisible, setAdditionalInfoVisibility] = useState(false)
    // const subscriptionDetails = "Il tuo abbonamento a questo prodotto si rinnoverà ogni 25 giorni e riceverai il prodotto a pagamento effettuato";
    let regex = /\d\d giorni/gi
    let newText = termPurchase?.desc ? termPurchase.desc.replaceAll(regex, `2 giorni`,) : undefined;
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
                    <p className={styles.subscribeAndSave}>{termPurchase.title}</p>
                    <div className={styles.frequencyDisclaimer}>
                        {text}
                    </div>
                </>
            )}

            {moneyBackInfo.title && (
                <>
                    <div className={styles.informationContainer}>
                        <p>{moneyBackInfo.title}</p>
                        <img
                            onClick={() => setAdditionalInfoVisibility(prev => !prev)}
                            className={styles.infoGraphic}
                            src="//cdn.shopify.com/s/files/1/0021/0573/7291/t/172/assets/information-button.svg?v=6467211743660140745"
                            height="20"
                            width="20"
                            alt="Information button"
                        />
                    </div>
                    {isAdditionalInfoVisible && <div className={`${styles.additionalInfo} ${styles.visible}`} dangerouslySetInnerHTML={{ __html: moneyBackInfo.desc }} />}
                </>
            )}
        </div>
    )

}
export default SupplementalInfo