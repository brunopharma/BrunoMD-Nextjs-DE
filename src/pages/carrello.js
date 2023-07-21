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
        url:undefined,price:undefined,lineItems:[],title: "Riepilogo ordine", subtotalLabel: "Subtotale", checkoutLabel: "Checkout", 
        version:"EU",
        moneyBack: {
            title: "14 Giorni - Soddisfatti o Rimborsati",
            description: "Come funziona? Siamo sicuri che il nostro Cliente sarà soddisfatto dei prodotti Bruno MD, tuttavia, se per qualsiasi motivo non lo sarà, rimborseremo il primo ordine per intero meno i costi della spedizione. Onoriamo un rimborso completo se il nostro servizio clienti viene contattato entro 14 giorni lavorativi dalla data del ricevimento dell’ordine. Non è necessario restituire il prodotto (se è il primo ordine ricevuto); tuttavia, accogliamo con favore il feedback per aiutarci a migliorare la qualità del nostro servizio."
        }
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
            if(checkout){
                let {webUrl,totalPrice,lineItems} = checkout;
                setData({
                    url:webUrl,price:totalPrice.amount,lineItems,title: "Riepilogo ordine", subtotalLabel: "Subtotale", checkoutLabel: "Checkout", 
                    version:"EU",
                    moneyBack: {
                        title: "14 Giorni - Soddisfatti o Rimborsati",
                        description: "Come funziona? Siamo sicuri che il nostro Cliente sarà soddisfatto dei prodotti Bruno MD, tuttavia, se per qualsiasi motivo non lo sarà, rimborseremo il primo ordine per intero meno i costi della spedizione. Onoriamo un rimborso completo se il nostro servizio clienti viene contattato entro 14 giorni lavorativi dalla data del ricevimento dell’ordine. Non è necessario restituire il prodotto (se è il primo ordine ricevuto); tuttavia, accogliamo con favore il feedback per aiutarci a migliorare la qualità del nostro servizio."
                    }
                })
            }
        });
    }, [])
    return (
        <section className={styles.container}>
            <Link href={'/collezioni/tutti'} className={styles.back}>← Continua lo shopping</Link>
            <PageHead content={{ title: "Carrello della Spesa | Bruno MD", description: "BrunoMD carrello della spesa" }} />
            <div className={styles.cartContainerHolder}>
                {cartData.lineItems?.length ? <CartItemList items={cartData.lineItems} content={{removeBtnText:"Rimuovere",QTYLabel:"QTY"}}/>:
            <div className={styles.cartEmptyText}>Non ci sono articoli nel carrello</div>}
                <NewsLetter content={{
                    "title": "Join our newsletter",
                    "portalId": "19647191",
                    "formId": "7b270a73-336b-4895-8b55-286a3f49b1f2", "titleFont": '26px', 'formWidth': 'auto'
                }} />
                <CartSummary data={cartData}/>
            </div>
        </section>
    )
}
export default Carrelo