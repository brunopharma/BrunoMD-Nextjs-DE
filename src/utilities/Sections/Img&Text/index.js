import React from 'react'
import styles from '../styles.module.css'
import Image from 'next/image';
const ImgText = ({ data }) => {
    console.log({ data });
    if (!data) return null
    return (
        <section id='ImgText'>
            {data.map((element, key) => {
                return (
                    <>
                        <div className={styles.container} key={key}>
                        {element.title && <h1 className={styles.sectionTitle}>{element.title}</h1>}
                            {element.sectionImg.imgPostion == 'left' ?
                                <div className={styles.flex}>
                                    <div><Image className={styles.sectionImg} src={element.sectionImg.src} alt={element.sectionImg.alt} /></div>
                                    <div>
                                    {element.contentTitle && <h1 className={styles.contentTitle}>{element.contentTitle}</h1>}
                                        {element.sectionContent.map((content, cKey) => {
                                        return (
                                            <p className={styles.revert} key={cKey}>{content}</p>
                                        )
                                    })}</div>
                                </div> :
                                <div className={styles.flex}>
                                    <div>{element.sectionContent.map((content, cKey) => {
                                        return (
                                            <p className={styles.revert} key={cKey}>{content}</p>
                                        )
                                    })}</div>
                                    <div><Image src={element.sectionImg.src} alt={element.sectionImg.alt} /></div>
                                </div>
                            }
                        </div>
                    </>
                )
            })}
        </section>
    )
}

export default ImgText