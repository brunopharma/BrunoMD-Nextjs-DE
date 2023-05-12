import React from 'react'
import scienza from '../../json/scienza.json'
import Image from 'next/image';
import { WistiaHero } from '@/utilities/WistiaHero';
import { NewsLetter } from '@/utilities/NewsLetter';
import TextText from '@/utilities/Sections/Text&Text';
import ImgText from '@/utilities/Sections/Img&Text';
import Quote from '@/utilities/Sections/Quote';

export default function Scienza() {
    const {masterHead, sectionOne,sectionTwo,quote,newsletter} = scienza || {};
    return(
        <section>
            {/* <WistiaHero id={masterHead.id} content={masterHead.content}/>
            <TextText data={sectionOne.sectionContent} />
            <Image src={sectionOne.sectionImage} alt="..."/>
            <ImgText data={sectionTwo} />
            <Quote data={quote}/>
            <NewsLetter content={newsletter}/> */}
        </section>
    )

}