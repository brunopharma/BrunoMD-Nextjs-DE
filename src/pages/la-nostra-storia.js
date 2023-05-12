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
        </section>
    )

}