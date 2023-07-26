import React, { useState,useEffect } from "react";
import styles from './styles.module.css'
import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import TrustBadge from "@/utilities/TrustBadges";
import { NewsLetter } from "@/utilities/NewsLetter";
import PatnerData from "../../../json/parters.json"
import TrustBadgeData from '../../../json/trustBages.json'
import ProductsData from '../../../json/products.json'
import ProductCard from "@/utilities/ProductCard";
import BenefitCards from "@/utilities/BenefitCards";
import Tabs from "@/utilities/Tabs";
import Client from 'shopify-buy';
import PageHead from "@/utilities/Head";
import Loader2 from "@/utilities/Loader/index2";
import ProductReviews from "@/utilities/ProductReviews";
import FourStepProcess from "@/utilities/FourStepProcess";
import ProductTrustBadges from "@/utilities/ProductTrustBadges";
import Testimonial from "@/utilities/Testimonial";
import { HomeGallery } from "@/utilities/HomeGallery";

const Product = ({version}) => {
    const [load, setLoad] = useState(true)
    const [product, setProduct] = useState();
    const [shopifyP, setSProduct] = useState();
    let client = Client.buildClient({
            domain: 'brunomd.myshopify.com',
            storefrontAccessToken: '4233f2f4417f089c3d28dbd476de595c'
        });
    // const products = getAllProducts();
    const {title, details, newsletter,fourStepProcess, theme, images, declaimer, EXTERNALID, STOREFRONTID, SLUG, benefits,priceBox,price, seo, testimonial,homeGallery,review } = product || {}
    console.log({homeGallery});
    useEffect( () => {
        let url = window.location.href;
        let splitUrl = url.split('/product/');
        if (splitUrl.length == 2) {
            let product = ProductsData[splitUrl[1]];
            if (product?.EXTERNALID) {
                const productId = `gid://shopify/Product/${product.EXTERNALID}`;
                client.product?.fetch(productId).then((product) => {
                    if (product) {
                        setSProduct(product)
                        setLoad(false)
                    }
                });
                setProduct(product);
            } else {
                window.location.href = '/';
            }
        } else {
            window.location.href = '/';
        }
    }, [load,shopifyP, product])

    if(load) return( <Loader2 />)
    return (
        <section style={{ margin: '2rem auto' }}>
            <PageHead content={seo}/>
            {true && <ProductCard data={{ images, declaimer, priceDescription: { EXTERNALID, STOREFRONTID, SLUG, price,theme ,priceBox } }} base={{client,shopifyP}}/>}
            {benefits && <BenefitCards data={benefits} productColorTheme={theme}/>}
            {product?.ProductTrustBadges &&<ProductTrustBadges images={product.ProductTrustBadges} />}
            <Tabs data={details} productColorTheme={theme}/>
            {fourStepProcess?.content &&<FourStepProcess processCards={fourStepProcess.content} theme={theme} header={fourStepProcess.title} buttonTittle={fourStepProcess.buttonTittle} stepAlignment={fourStepProcess.stepAlignment}/>}
            <TrustBadge contents={TrustBadgeData[version]} productColorTheme={theme}/>
            <MarkqueCarousel image={PatnerData} />
            {testimonial && <Testimonial content={{ slides: testimonial,title:"Our Believers", subTitle:"See what BrunoMD customers have to say.",theme: theme }}/>}
            <NewsLetter content={newsletter} />
            {homeGallery &&<HomeGallery id={homeGallery.id} galleryId={homeGallery.galleryId} productid={EXTERNALID}/>}
            {!review &&<ProductReviews variantId={EXTERNALID} />}
        </section>
    )
}
export default Product