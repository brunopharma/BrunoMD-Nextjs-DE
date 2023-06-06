import React from 'react'
import storia from '../../json/storia.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import ImgText from '@/utilities/Sections/Img&Text';
import TimeLine from '@/utilities/TimeLine';
import { NewsLetter } from '@/utilities/NewsLetter';
import PageHead from '@/utilities/Head';
import SEO from '../../json/SEO.json'

export default function Storia() {
    console.log({storia});
    const {masterHead, section,timeline,newsletter} = storia || {};
    return(
        <section>
        <PageHead content={SEO.storia.SEO} />
        <MasterHeadImg  data={masterHead}/>
        <TimeLine data={timeline}/>
        <ImgText data={section}/>
        <NewsLetter content={newsletter}/>
        </section>
    )

}