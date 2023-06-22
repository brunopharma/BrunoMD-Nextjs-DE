import React from 'react'
import scienza from '../../json/scienza.json'
import { NewsLetter } from '@/utilities/NewsLetter';
import TextText from '@/utilities/Sections/Text&Text';
import ImgText from '@/utilities/Sections/Img&Text';
import Quote from '@/utilities/Sections/Quote';
import PageHead from '@/utilities/Head';
import SEO from '../../json/SEO.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';

export default function Scienza({version}) {
    const {masterHead, sectionOne,sectionTwo,quote,newsletter} = scienza || {};
    return(
        <section>
            
            <PageHead content={SEO[version].science?.SEO} />
            <MasterHeadImg data={masterHead}/>
            <div style={{margin:'3rem auto'}}><TextText data={sectionOne.sectionContent} /></div>
            <ImgText data={sectionTwo} />
            <Quote data={quote}/>
            <NewsLetter content={newsletter}/>
        </section>
    )

}