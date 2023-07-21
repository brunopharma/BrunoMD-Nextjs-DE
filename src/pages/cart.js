import React, { useEffect, useState } from "react";
import styles from '@/styles/carrelo.module.css'
import PageHead from "@/utilities/Head";
import { NewsLetter } from "@/utilities/NewsLetter";
import Link from "next/link";
import Client from 'shopify-buy';
import CartSummary from "@/utilities/CartSummary";
import CartItemList from "@/utilities/CartItemList";

const Cart = ({ version }) => {
    const [cartData, setData] = useState({
        url: undefined, price: undefined, lineItems: [],version:"ENG",
        title: "Summary", subtotalLabel: "Subtotal", checkoutLabel: "Checkout", moneyBack: {
            title: "100% Satisfaction 30-Day money back guarantee",
            description: "How does the 30 day guarantee work? Purchase with complete confidence, with our 30-day money back guarantee. We are confident you will be happy with your Bruno MD products, however, if for any reason you are dissatisfied with your purchase, we will refund your first order in full. We honor a full refund if our customer care department is contacted within 30 days from your first order date. There is no need to return the product; however, we welcome your feedback to help us improve the quality of our service."
        }
    })
    let client = undefined
    if (version == 'EU') {
        client = Client.buildClient({
            domain: 'bruno-md-europe.myshopify.com',
            storefrontAccessToken: 'a51b71098dff9f7cfd68456c464991bb'
        });
    }
    if (version == 'ENG') {
        client = Client.buildClient({
            domain: 'brunomd.myshopify.com',
            storefrontAccessToken: '4233f2f4417f089c3d28dbd476de595c'
        });
    }
    useEffect(() => {
        let cId = localStorage.getItem('e6S4JJM9G');
        client.checkout.fetch(cId).then((checkout) => {
            let { webUrl, totalPrice, lineItems } = checkout;
            setData({
                url: webUrl, price: totalPrice.amount, lineItems,version:"ENG",
                title: "Summary", subtotalLabel: "Subtotal", checkoutLabel: "Checkout", moneyBack: {
                    title: "100% Satisfaction 30-Day money back guarantee",
                    description: "How does the 30 day guarantee work? Purchase with complete confidence, with our 30-day money back guarantee. We are confident you will be happy with your Bruno MD products, however, if for any reason you are dissatisfied with your purchase, we will refund your first order in full. We honor a full refund if our customer care department is contacted within 30 days from your first order date. There is no need to return the product; however, we welcome your feedback to help us improve the quality of our service."
                }
            })
        });
    }, [])
    const removeItem = (lineItemIdsToRemove)=>{
        let cId = localStorage.getItem('e6S4JJM9G');
        if(cId){
            client.checkout.removeLineItems(cId, lineItemIdsToRemove).then((checkout) => {
                // Do something with the updated checkout
                console.log(checkout.lineItems); // Checkout with line item 'gid://shopify/CheckoutLineItem/194677729198640?checkout=e3bd71f7248c806f33725a53e33931ef' removed
            });
        }
    }
    // return(
    //     <div><p><PageHead content={{ title: "BrunoMD | Shopping Cart", description: "BrunoMD shopping cart" }} /></p></div>
    // )
    return (
        <section className={styles.container}>
            <Link href={'/collezioni/tutti'} className={styles.back}>← Continua lo shopping</Link>
            <PageHead content={{ title: "BrunoMD | Shopping Cart", description: "BrunoMD shopping cart" }} />
            <h1 className={styles.headLine}>Review order</h1>
            <div className={styles.cartContainerHolder}>
                {cartData.lineItems?.length ? <CartItemList items={cartData.lineItems} content={{ removeBtnText: "Remove", QTYLabel: "QTY" }} removeItem={removeItem}/> :
                    <div className={styles.cartEmptyText}>Cart is Empty</div>}
                <NewsLetter content={{
                    "title": "Iscriviti alla newsletter",
                    "portalId": "19647191",
                    "formId": "cb74b532-174c-4aa4-bb3e-59bcce283ad8", "titleFont": '26px', 'formWidth': 'auto'
                }} />
                <CartSummary data={cartData} />
            </div>
        </section>
    )
}
export default Cart