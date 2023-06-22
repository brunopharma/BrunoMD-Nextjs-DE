import React, { useEffect } from 'react'
import styles from './styles.module.css'

const ModalBoxInner = ({ isOpen, content, ModalHandler }) => {
    return (
        <section>
            {isOpen === true && (
                <div className={styles.holder}>
                    {isOpen && (<div className={styles.exitButton} onClick={ModalHandler}>
                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="white" fill-rule="evenodd"><path fill="#FFBF3C" d="M0 0h40v40H0z" /><path fill="#00A0DD" fill-rule="nonzero" d="M16.93 25.416l3.267-3.266 3.069 3.07 2.09-2.09-3.07-3.07 3.13-3.13-2.338-2.337-3.13 3.13-3.078-3.078-2.09 2.089 3.079 3.078-3.266 3.266z" /></g></svg>
                    </div>)}
                    <div style={{ margin: '0 30px' }}>
                        <div className={styles.grid}>
                            <div className={styles.box1}>
                                <div style={{ color: '#ffbf3c' }}>CODE AUTOMATICALLY APPLIED AT CHECKOUT FOR 30% OFF ONE-TIME PURCHASE</div>
                                <div>100% SATISFACTION 30-DAY MONEY-BACK GUARANTEE</div>
                            </div>
                            <div>
                                <div className={styles.per}>
                                    <p>$50.38 <span className={styles.strike}>$62.98</span></p>
                                    <p className={styles.ft12}>SAVE $12.60 WITH SUBSCRIBE & SAVE</p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.per}>
                                    <p>$50.38 <span className={styles.strike}>$62.98</span></p>
                                    <p className={styles.ft12}>EXCLUSIVE OFFER. SAVE 30% ($18.89)</p>
                                </div>
                            </div>
                            <div className={styles.box5}><img width="150" height="150" src="https://f.shgcdn.com/ab21f754-d400-4d8f-80cf-198be3329f90/" class="styles_imageSource__xZJZ_" /></div>
                            <div className={styles.boxDetails}>
                                <p>SAVE 20% WITH SUBSCRIBE &amp; SAVE</p>
                                <p>ON ALL FUTURE DELIVERIES</p>
                                <ul style={{listStyle: 'inside disc'}}><li>NO FEES</li><li>CANCEL ANYTIME</li></ul>
                                
                            </div>
                            <div className={styles.boxDetails}><p>SAVINGS APPLIED AT CHECKOUT. ONE-TIME PURCHASE ONLY, LIMIT TWO PER HOUSEHOLD</p>
                            
                            </div>
                            <div className={styles.box6}>
                                <label class="styles_label__sD0A9">Delivery every:</label>
                                <select class="styles_select__xqdkO"><option value="30">30 days</option><option value="60">60 days</option><option value="90">90 days</option></select>
                                </div>
                                <div className={styles.box7}>
                            <label class="styles_label__sD0A9">QTY:</label>
                            <select class="styles_select__sBd98"><option value="1">1</option><option value="2">2</option></select>
                            </div>
                            <div className={styles.box8}><p className={styles.btn}>Subscribe</p></div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ModalBoxInner