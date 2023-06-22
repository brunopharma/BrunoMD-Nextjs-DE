import React from 'react'
import storia from '../../json/storia.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import ImgText from '@/utilities/Sections/Img&Text';
import TimeLine from '@/utilities/TimeLine';
import { NewsLetter } from '@/utilities/NewsLetter';
import PageHead from '@/utilities/Head';
import SEO from '../../json/SEO.json'

export default function Storia({version}) {
    const {masterHead, section,timeline,newsletter} = storia || {};
    return(
        <section>
        <PageHead content={SEO[version]?.storia?.SEO} />
        <MasterHeadImg  data={masterHead}/>
        <div style={{fontFamily: 'ivypresto-display,Times New Roman,Times,serif',fontSize: '16px',fontWeight: 400,letterSpacing: 0,lineHeight: '1.5rem',maxWidth: '400px',paddingBottom: '32px',padding:'6rem 16px 2rem'}}>
        <p>For 25 years, BRUNO MD has been offering some of the most innovative and effective prescription grade supplements available.</p>
        </div>
        <TimeLine data={timeline}/>
        <ImgText data={section}/>
        <NewsLetter content={newsletter}/>
        </section>
    )

}