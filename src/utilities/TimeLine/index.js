import React from 'react'

import styles from './styles.module.css'

const TimeLine = ({ data }) => {
    if (!data) return null
    return (
        <section id='TimeLine' className={styles.TimeLine}>
            <div className={styles.TimeLineContainer}>
                {data.map((year, key) => {
                    return (
                        <div className={styles.tlItem} key={key}>

                            <div className={styles.tlBg} style={{ backgroundImage: `url(${year.src})` }}></div>

                            <div className={styles.tlYear}>
                                <p className={styles.tlTitle}>{year.title}</p>
                            </div>

                            <div className={styles.tlContent}>
                                {year.subTitle && <h1>{year.subTitle}</h1>}
                                <p>{year.Desc}</p>
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TimeLine