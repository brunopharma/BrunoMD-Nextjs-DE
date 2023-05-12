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
            <div style={{ fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"', height: '25vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><div>
                        <h1 class="next-error-h1" style={{ display: 'inline-block', margin: '0 20px 0 0', paddingRight: '23px', fontSize: '24px', fontWeight: 500, verticalalign: 'top', lineHeight: '49px', borderRight: '1px solid' }}>404</h1>
                        <div style={{ display: 'inline-block', textAlign: 'left' }}><h2 style={{ fontSize: '14px', fontWeight: 400, lineHeight: '49px', margin: 0 }}>This page could not be found.</h2></div></div></div>
            {/* <WistiaHero id={masterHead.id} content={masterHead.content}/>
            <TextText data={sectionOne.sectionContent} />
            <Image src={sectionOne.sectionImage} alt="..."/>
            <ImgText data={sectionTwo} />
            <Quote data={quote}/>
            <NewsLetter content={newsletter}/> */}
        </section>
    )

}