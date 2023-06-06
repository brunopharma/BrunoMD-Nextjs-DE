import React from 'react'
import scienza from '../../json/scienza.json'
import Image from 'next/image';
import { WistiaHero } from '@/utilities/WistiaHero';
import { NewsLetter } from '@/utilities/NewsLetter';
import TextText from '@/utilities/Sections/Text&Text';
import ImgText from '@/utilities/Sections/Img&Text';
import Quote from '@/utilities/Sections/Quote';
import PageHead from '@/utilities/Head';
import SEO from '../../json/SEO.json'

export default function Scienza() {
    const {masterHead, sectionOne,sectionTwo,quote,newsletter} = scienza || {};
    return(
        <section>
            <PageHead content={SEO.scienza.SEO} />
            <WistiaHero id={masterHead.id} content={masterHead.content}/>
            <div style={{margin:'3rem auto'}}><TextText data={sectionOne.sectionContent} /></div>
            <img src={sectionOne.sectionImage.src} alt="..."/>
            <ImgText data={sectionTwo} />
            <Quote data={quote}/>
            <NewsLetter content={newsletter}/>
        </section>
    )

}