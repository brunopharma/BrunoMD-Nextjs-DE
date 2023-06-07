import React, { useEffect, useState } from "react"
import styles from "@/styles/spedizione.module.css"
import MasterHeadImg from "@/utilities/MasterHeadImg"
import ImgText from "@/utilities/Sections/Img&Text"
import scienza from '../../json/responsabilita-sociale.json'

export default function Sociale() {
    const { masterHead, sectionOne, sectionTwo } = scienza || {};
    console.log({ sectionTwo });
    return (
        <>
            <MasterHeadImg data={masterHead} />
            <section className={styles.container}>
                <div className={styles.textPDHolder} dangerouslySetInnerHTML={{ __html: sectionOne.content }} />
                <ImgText data={sectionTwo} />
            </section>
        </>
    )
}
