import React,{useEffect} from 'react'
import styles from './styles.module.css'

export const HomeGallery = ({ id }) => {
    useEffect(() => {
        if(id){
            (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true, e.src = `//staticw2.yotpo.com/${id}/widget.js`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
        }
    }, [])
    if(!id) return null

    return (
        <div className={styles.homeGalleryContainer}>
            <div className={styles.container}>
                <p className={styles.text}>Vivi anche tu la <br/><strong className={styles.strong}>“Dolce Vita”!</strong></p>
                </div>
            <div
                class="yotpo yotpo-pictures-widget"
                data-gallery-id={'6411911c72b20e001784b649'}>
                    <div class="center-body" style={{height:'200px'}}><div class="loader-circle-2"></div></div> 
            </div>
            {true && <div class="yotpo yotpo-reviews-carousel"
                data-background-color="transparent"
                data-mode="top_rated"
                data-type="product"
                data-count="9"
                data-show-bottomline="1"
                data-autoplay-enabled="1"
                data-autoplay-speed="5000"
                data-show-navigation="1"></div>}
        </div>
    )

}