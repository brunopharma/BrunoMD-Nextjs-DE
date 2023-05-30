import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
export const NewsLetter = ({ content }) => {
    const [ image ,setImage ] = useState('/utility/home-news-desk.png')
    useEffect(() => {
        if (content) {
            let { title, portalId, formId,desktopImage,mobileImage } = content || undefined;
            if(desktopImage) setImage(desktopImage)
            if (portalId || formId) {
                const script = document.createElement('script');
                script.src = 'https://js.hsforms.net/forms/v2.js';
                document.body.appendChild(script);
                script.addEventListener('load', () => {
                    if (window.hbspt) {
                        window.hbspt.forms.create({
                            portalId: portalId,
                            formId: formId,
                            target: '#hubspotForm'
                        })
                    }
                });
            }
        }
    }, [content]);
    if (!content) return null
    const { title, portalId, formId } = content || undefined;
    if (!portalId || !formId) return null
    return(
        <section>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.imageContainer}>
            <img className={styles.image} src={image} alt="..." />
            </div>
            <div style={{ 'position': 'relative' }}>
              <div className={styles.details}>
                <div className={styles.headingContainer}>
                {title}
                </div>
                <div className={styles.formContainer}>
                <div id="hubspotForm"><div class="center-body" style={{ height: '200px' }}><div class="loader-circle-2"></div></div> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
    if(false) return (
        <section className={styles.newsletterSection} id="NewLetterFrom">
            <div className={styles.container}>
                <img className={styles.imgHolder} src="/utility/home-news-desk.png" alt="..." />

                <div className={styles.formContainer}>
                    <div className={styles.form}>
                        <div className={styles.headingContainer}>
                            {title}
                        </div>
                        <div id="hubspotForm"><div class="center-body" style={{ height: '200px' }}><div class="loader-circle-2"></div></div> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}