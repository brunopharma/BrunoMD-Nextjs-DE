import React from 'react'
import styles from './styles.module.css'
const MasterHeadImg = ({ data }) => {
    if(!data) return null
    return(
        <section id='MasterHeadImg'>
        <div className={styles.container}>
        <h1 className={styles.title}>{data.title}</h1>
        <img src={data?.src} alt={data?.alt} className={styles.imgFull}/>        
        </div>
        </section>
    )
}

export default MasterHeadImg