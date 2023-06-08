import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image';
export const WistiaHero = ({ id, content }) => {
    const [windowWidth, setWindowWidth] = useState(false)
    useEffect(() => {
        setWindowWidth(window.innerWidth - 15)
        $.getScript("http://fast.wistia.com/assets/external/E-v1.js", function () {
            window.wistiaEmbed = Wistia.embed(id);
    })
        }, [])
        if (!id) return null
        // const wistiaVideo = `//fast.wistia.net/embed/iframe/${id}?videoFoam=true`;
        return (
            <section className={styles.cover}>
                <div className={styles.holder}>
                    {/* <script src="//fast.wistia.net/assets/external/E-v1.js" async></script> */}
                    {/* <iframe src={wistiaVideo} allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width={windowWidth} height={850}></iframe> */}
                    <div id={`wistia_${id}`} class="wistia_embed" style={{ width: '640px', height: '360px' }}>&nbsp;</div>
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
        return (
            <>
                <script src="https://fast.wistia.com/embed/medias/wjbv2ss2xt.jsonp" async></script>
                <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
                <section class="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <div class="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                        <div class="wistia_embed wistia_async_wjbv2ss2xt videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                            <div class="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                                <Image src="https://fast.wistia.com/embed/medias/wjbv2ss2xt/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }