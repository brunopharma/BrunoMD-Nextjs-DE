import React from "react";
import styles from './styles.module.css'
const SubscriptionBar = () => {
    return (
        <section className={styles.SubscriptionBar}>
            <div className={styles.SubscriptoionInner}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.colxl7}>
                            <div className="codeAutomaticaly">
                                <p className={styles.firstLineHeader}>CODE AUTOMATICALLY APPLIED AT CHECKOUT FOR 30% OFF ONE-TIME PURCHASE</p>
                                <p className={styles.secondLineHeader}>100% SATISFACTION 30-DAY MONEY-BACK GUARANTEE</p>
                            </div>
                        </div>
                        <div className={styles.colxl5}>
                            <div className={styles.SubOneTime}>
                                <div className={styles.button01}>
                                    <div >
                                        <p className={styles.priceCross}>50.38</p>
                                    </div>
                                    <div className={styles.btnText}>
                                        <div>
                                            <p>SUBSCRIBE </p>
                                            <p>& SAVE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.button02}>
                                    <div >
                                        <p className={styles.priceCross}>40.09</p>
                                    </div>
                                    <div className={styles.btnText}>
                                        <div>
                                            <p>ONE-TIME </p>
                                            <p>PURCHASE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SubscriptionBar