import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image';
export const WistiaHero = ({ id, content }) => {
    const [windowWidth, setWindowWidth] = useState(false)
    useEffect(() => {
        setWindowWidth(window.innerWidth - 15)
        }, [])
        if (!id) return null
        const wistiaVideo = `//fast.wistia.net/embed/iframe/${id}?videoFoam=true?controlsVisibleOnLoad=true&amp;version=v1&amp;videoHeight=272&amp;videoWidth=640&amp;volumeControl=true`;
        
        return (
            <section className={styles.cover}>
                <div className={styles.holder}>
                    <script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
                    <iframe src={wistiaVideo} allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width={windowWidth} height={850}></iframe>
                    {content &&
                        <div className={styles.conatiner}>
                            <div className={styles.heroButtonAndTextContainer}>
                                <div className={styles.titleHolder}>
                                    {content?.title && <div className={styles.title}>
                                        {content.title}
                                    </div>}
                                    {content?.subTitle && <div className={styles.subTitle}>
                                        {content.subTitle}
                                    </div>}
                                </div>
                                {content?.btnText && <Link href="/collezioni/tutti">
                                    <span className={styles.btn}>{content.btnText}</span>
                                </Link>}
                            </div>
                        </div>
                    }
                </div>
            </section>
        )
    }