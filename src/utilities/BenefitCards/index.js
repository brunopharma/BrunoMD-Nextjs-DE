import React from "react";
import styles from './styles.module.css'

const BenefitCards = ({ data }) => {
    console.log({ data });

    return (
        <div className={styles.container}>
            <div className={styles.card} style={{ 'background-color': data?.productColorTheme }}>
                <div className={styles.section}>
                    <div className={styles.title}>
                        <h1>{data.title}</h1></div>
                    <div className={styles.cardContainer}>

                        {data.items.map((e, i) => {
                            if (e.img.src && e.title) {
                                return (
                                    <div className={styles.row} key={i}>
                                        <div className={styles.boxImagesContainer}>
                                            <img src={e.img.src} alt="..." className={styles.boxImage} height width/>
                                        </div>
                                        <div className={styles.card2} style={false ? { justifyContent: 'center' } : {}}>
                                            {false && <div className={styles.ht75}>{e.icon && <img src={e.icon?.src} alt="..." height width/>}</div>}
                                            {e.title && <div><h2>{e.title}</h2></div>}
                                            {e.description && <div className={styles.hide}><p>{e.description}</p></div>}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitCards;