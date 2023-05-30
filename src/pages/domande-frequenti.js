import React from 'react'
import frequenti from '../../json/domande-frequenti.json'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import { NewsLetter } from '@/utilities/NewsLetter';
import Accordion from '@/utilities/Accordion';

export default function Frequenti() {
    const { masterHead, section, newsletter } = frequenti || {};
    const styles = {
        container: {
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1380px',
            width: '100%'
        },
        holder: {
            gridGap: '4rem',
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            padding: '2rem'
        },
        title: {
            fontFamily: 'ivypresto-display,Times New Roman,Times,serif',
            fontSize: '24px',
            fontWeight: 400,
            marginBottom: '1rem',
            paddingLeft: '5px',
        }
    };
    return (
        <section>
            <MasterHeadImg data={masterHead} />
            <div style={styles.container}>
                <div style={styles.holder}>
                    {
                        section && section.map((e, i) => {
                            return (
                                <div key={i}>
                                    <h2 style={styles.title}>{e.title}</h2>
                                    <Accordion items={e.content} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <NewsLetter content={newsletter} />
        </section>
    )
}