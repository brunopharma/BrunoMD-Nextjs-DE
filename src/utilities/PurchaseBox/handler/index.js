import React, { useState, useEffect } from "react";
import styles from './styles.module.css'
import PriceBox from "../priceBox";
const Handler = ({ data }) => {

        const [oneTimePrice, setOneTimePrice] = useState(data?.product?.price.toFixed(2))
        const [DiscountPrice, setDiscountPrice] = useState((data?.product?.price * (data?.product?.priceBox.discount / 100)).toFixed(2))
        const [subscribePrice, setSubscribePrice] = useState((data?.product?.price - (data?.product?.price * (data?.product?.priceBox.discount / 100))).toFixed(2))
        const [OTST, setOTST] = useState(oneTimePrice.split('.'))
        const [SEST, setSEST] = useState(subscribePrice.split('.'))
        const [isActive, setIsActive] = useState(2);
    if (!data.product) return null
    return (
        <div className={styles.accordionItem}>
            <div className={`${styles.accordionTitle} { ${isActive == 1 && styles.accordionTitleActive} ${isActive == 1 && styles.p25_15}`} onClick={() => setIsActive(1)}>
                <div className={styles.flex}><div className={styles.circle}>{isActive == 1 && <div className={styles.circleActive}></div>}</div><div className={styles.title}>Acquisto singolo</div></div>
                <div className={styles.price}><div className={styles.titlePrice}>$</div><div className={styles.priceFirstIndex}>{OTST[0]}</div><div className={styles.titlePrice}>{OTST[1]}</div></div>
            </div>
            {isActive == 1 && <div><PriceBox isActive={isActive} data={data.product}/>
            </div>}
            <div className={`${styles.accordionTitle} ${isActive == 2 && styles.accordionTitleActive}`} onClick={() => setIsActive(2)}>
                <div className={styles.flex}><div className={styles.circle}>{isActive == 2 && <div className={styles.circleActive}></div>}</div><div className={styles.title}>Acquisto periodico</div></div>
                <div className={styles.price}><div className={styles.titlePrice}>$</div><div className={styles.priceFirstIndex}>{SEST[0]}</div><div className={styles.titlePrice}>{SEST[1]}</div> &nbsp;<div className={styles.crossed}> ${oneTimePrice}</div></div>
                <div className={styles.titleDesc}>
                    <div className={styles.saveInfo}>Risparmia subito ${DiscountPrice}</div>
                    <div className={styles.saveText}>&nbsp;acquisto periodico</div>
                </div>
            </div>
            {isActive == 2 && <div><PriceBox isActive={isActive} data={data.product}/>
            </div>}
        </div>
    )
}

export default Handler