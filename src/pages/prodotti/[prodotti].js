import React from "react";
import styles from './styles.module.css'
import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import TrustBadge from "@/utilities/TrustBadges";
import { NewsLetter } from "@/utilities/NewsLetter";
import PatnerData from "../../../json/parters.json"
import TrustBadgeData from '../../../json/trustBages.json'
import ProductsData from '../../../json/products.json'
import ProductCard from "@/utilities/ProductCard";
import { getAllProducts } from '@/data/product'
import BenefitCards from "@/utilities/BenefitCards";
import Tabs from "@/utilities/Tabs";

const Product = () => {
    
    const [product, setProduct] = React.useState();
    // const products = getAllProducts();
    React.useEffect(() => {
        let url = window.location.href;
        let splitUrl = url.split('/prodotti/');
        if (splitUrl.length == 2) {
            let product = ProductsData[splitUrl[1]];
            if(product?.EXTERNALID){
                setProduct(product);
            }else{
                window.location.href = '/';
            }
        } else {
            window.location.href = '/';
        }
    }, [])
    const {details,newsletter,images,declaimer,EXTERNALID,STOREFRONTID,SLUG,benefits} = product || {}
    const productInfo ={images,declaimer,priceDescription:{EXTERNALID,STOREFRONTID,SLUG}}
    console.log({productInfo});
    return (
        <section style={{margin:'2rem auto'}}>
            {productInfo &&<ProductCard data={productInfo}/>}
            {/* {benefits && <BenefitCards data={benefits}/>}
            <Tabs data={details} isTab={false} productColorTheme={'white'}/>
            <TrustBadge contents={TrustBadgeData} />
            <MarkqueCarousel image={PatnerData} />
            <NewsLetter content={newsletter} /> */}
        </section>
    )
}
export default Product