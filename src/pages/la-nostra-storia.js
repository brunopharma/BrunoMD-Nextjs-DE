import React from 'react'
import storia from '../../json/storia.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import ImgText from '@/utilities/Sections/Img&Text';
import TimeLine from '@/utilities/TimeLine';
import { NewsLetter } from '@/utilities/NewsLetter';

export default function Storia() {
    console.log({storia});
    const {masterHead, section,timeline,newsletter} = storia || {};
    return(
        <section>
        {/* <MasterHeadImg  data={masterHead}/>
        <TimeLine data={timeline}/>
        <ImgText data={section}/>
        <NewsLetter content={newsletter}/> */}
        <div style={{ fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"', height: '25vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><div>
                        <h1 class="next-error-h1" style={{ display: 'inline-block', margin: '0 20px 0 0', paddingRight: '23px', fontSize: '24px', fontWeight: 500, verticalalign: 'top', lineHeight: '49px', borderRight: '1px solid' }}>404</h1>
                        <div style={{ display: 'inline-block', textAlign: 'left' }}><h2 style={{ fontSize: '14px', fontWeight: 400, lineHeight: '49px', margin: 0 }}>This page could not be found.</h2></div></div></div>
        </section>
    )

}