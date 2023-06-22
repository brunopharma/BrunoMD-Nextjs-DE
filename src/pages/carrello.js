import React, { useEffect, useState } from "react";
import styles from '@/styles/carrelo.module.css'
import PageHead from "@/utilities/Head";
import { NewsLetter } from "@/utilities/NewsLetter";
import Link from "next/link";
import Client from 'shopify-buy';
import CartSummary from "@/utilities/CartSummary";
import CartItemList from "@/utilities/CartItemList";

const Carrelo = ({version}) => {
    const [cartData, setData] = useState({
        url:undefined,price:undefined,lineItems:[]
    })
    let client = undefined
    if(version == 'EU'){
        client = Client.buildClient({
            domain: 'bruno-md-europe.myshopify.com',
            storefrontAccessToken: 'a51b71098dff9f7cfd68456c464991bb'
        });
    }
    if(version == 'ENG'){
        client = Client.buildClient({
            domain: 'brunomd.myshopify.com',
            storefrontAccessToken: '4233f2f4417f089c3d28dbd476de595c'
        });
    }
    useEffect(() => {
        let cId = localStorage.getItem('e6S4JJM9G');
        client.checkout.fetch(cId).then((checkout) => {
            let {webUrl,totalPrice,lineItems} = checkout;
            setData({
                url:webUrl,price:totalPrice.amount,lineItems
            })
        });
    }, [])
return(
    <div><p></p></div>
)
    // return (
    //     <section className={styles.container}>
    //         <Link href={'/collezioni/tutti'} className={styles.back}>← Continua lo shopping</Link>
    //         <PageHead content={{ title: "Carrello della Spesa | Bruno MD", description: "BrunoMD carrello della spesa" }} />
    //         <div className={styles.cartContainerHolder}>
    //             {cartData.lineItems?.length ? <CartItemList items={cartData.lineItems}/>:
    //         <div className={styles.cartEmptyText}>Non ci sono articoli nel carrello</div>}
    //             <NewsLetter content={{
    //                 "title": "Iscriviti alla newsletter",
    //                 "portalId": "19647191",
    //                 "formId": "7b270a73-336b-4895-8b55-286a3f49b1f2", "titleFont": '26px', 'formWidth': 'auto'
    //             }} />
    //             <CartSummary data={cartData}/>
    //         </div>
    //     </section>
    // )
}
export default Carrelo