import React from 'react'
import frequenti from '../../json/domande-frequenti.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import { NewsLetter } from '@/utilities/NewsLetter';
import Accordion from '@/utilities/Accordion';

export default function Frequenti() {
    const {masterHead,section,newsletter} = frequenti || {};
    console.log({section});
    return(
        <section>
                    {/* <Accordion items={section}/> */}
            {/* <MasterHeadImg data={masterHead}/>
            <NewsLetter content={newsletter}/> */}
        </section>
    )

}