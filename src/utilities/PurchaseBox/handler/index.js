import React, { useState, useEffect } from "react";
import styles from './styles.module.css'
import PriceBox from "../priceBox";
const Handler = ({ data, base }) => {
    useEffect(()=>{},[data])
        const [oneTimePrice, setOneTimePrice] = useState(data?.price.toFixed(2))
        const [DiscountPrice, setDiscountPrice] = useState((data?.price * (data?.priceBox.discount / 100)).toFixed(2))
        const [subscribePrice, setSubscribePrice] = useState((data?.price - (data?.price * (data?.priceBox.discount / 100))).toFixed(2))
        const [OTST, setOTST] = useState(oneTimePrice.split('.'))
        const [SEST, setSEST] = useState(subscribePrice.split('.'))
        const [isActive, setIsActive] = useState(2);
    if (!data) return null
    return (
        <div className={styles.accordionItem}>
            <div className={`${styles.accordionTitle} { ${isActive == 1 && styles.accordionTitleActive} ${isActive == 1 && styles.p25_15}`} onClick={() => setIsActive(1)}>
                <div className={styles.flex}><div className={styles.circle}>{isActive == 1 && <div className={styles.circleActive}></div>}</div><div className={styles.title}>{data.priceBox?.oneTime?.title ? data.priceBox?.oneTime?.title :'Acquisto singolo'}</div></div>
                <div className={styles.price}><div className={styles.titlePrice}>$</div><div className={styles.priceFirstIndex}>{OTST[0]}</div><div className={styles.titlePrice}>{OTST[1]}</div></div>
            </div>
            {isActive == 1 && <div><PriceBox isActive={isActive} data={data}/>
            </div>}
            <div className={`${styles.accordionTitle} ${isActive == 2 && styles.accordionTitleActive}`} onClick={() => setIsActive(2)}>
                <div className={styles.flex}><div className={styles.circle}>{isActive == 2 && <div className={styles.circleActive}></div>}</div><div className={styles.title}>{data.priceBox?.subscribe?.title ? data.priceBox?.subscribe?.title :'Acquisto periodico'}</div></div>
                <div className={styles.price}><div className={styles.titlePrice}>$</div><div className={styles.priceFirstIndex}>{SEST[0]}</div><div className={styles.titlePrice}>{SEST[1]}</div> &nbsp;<div className={styles.crossed}> ${oneTimePrice}</div></div>
                <div className={styles.titleDesc}>
                    <div className={styles.saveInfo}>{data.priceBox?.subscribe?.saveLabel} ${DiscountPrice}</div>
                    {data.priceBox?.subscribe?.extraLabel &&<div className={styles.saveText}>{data.priceBox?.subscribe?.extraLabel}</div>}
                </div>
            </div>
            {isActive == 2 && <div><PriceBox isActive={isActive} data={data} base={base}/>
            </div>}
        </div>
    )
}

export default Handler