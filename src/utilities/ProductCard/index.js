import React from "react";
import Slider from "../Slider";
import styles from './styles.module.css'

const ProductCard = ({data})=>{
    const {images,declaimer,priceDescription}= data || {};
    if(!data) return null;
    return(
        <div className={styles.productCard}>
            <div><Slider items={images}/>5</div>
            <div>
                <div
                dangerouslySetInnerHTML={{__html:declaimer.title}}
                ></div>
                 <div
                dangerouslySetInnerHTML={{__html:declaimer.subTitle}}
                ></div>
                 <div
                dangerouslySetInnerHTML={{__html:declaimer.content}}
                ></div>
            </div>
            <div>55</div>
        </div>
    )
}

export default ProductCard;