import React from "react"
import PageHead from "@/utilities/Head"
import { HomeGallery } from "@/utilities/HomeGallery"
import ProductReviews from "@/utilities/ProductReviews"

export default function Reviews() {

    return (
        <section>
            <PageHead content={{title:'Reviews | Bruno MD',description:"Siamo fiduciosi che sarai soddisfatto dei tuoi prodotti Bruno MD, tuttavia, se non sei soddisfatto del tuo acquisto, ti rimborseremo l&apos;intero primo ordine."}}/>
            {/* <h1>Our believers</h1> */}
            <HomeGallery id={'5e7cf7950a4044179b4ab843'} galleryId={'61f851d08d183b19ec9105cf'} title={'Our Believers'}/>
            <ProductReviews variantId={'1547402084427'} />
        </section>
    )
}
