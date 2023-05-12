import React, { useEffect } from "react";
import styles from './styles.module.css'
export const NewsLetter = ({ content }) => {
    useEffect(() => {
        if (content) {
            let { title, portalId, formId } = content || undefined;
            if (!portalId || !formId) { } else {
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
    }, []);
    if (!content) return null
    const { title, portalId, formId } = content || undefined;
    if (!portalId || !formId) return null
    return (
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