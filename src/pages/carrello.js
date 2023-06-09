import React from "react";
import styles from '@/styles/carrelo.module.css'
import PageHead from "@/utilities/Head";
import { NewsLetter } from "@/utilities/NewsLetter";
import Link from "next/link";

const Carrelo = ()=>{
    return(
        <p>soon.</p>
    )
    return(
        <section className={styles.container}>
            <Link href={'/collezioni/tutti'} className={styles.back}>← Continua lo shopping</Link>
            <PageHead content={{title:"Carrello della Spesa | Bruno MD",description:"BrunoMD carrello della spesa"}}/>
            <div className={styles.cartContainerHolder}>
            <div></div>
            <NewsLetter content={{ "title": "Iscriviti alla newsletter",
            "portalId": "19647191",
            "formId": "7b270a73-336b-4895-8b55-286a3f49b1f2","titleFont":'26px','formWidth':'auto'}}/>
            <div></div>
            </div>
        </section>
    )
}
export default Carrelo