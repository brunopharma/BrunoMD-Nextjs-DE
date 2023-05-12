import React,{useState,useEffect} from 'react'
import collection from "../../../json/collection.json";
import { CollectionList } from '@/utilities/CollectionCard'
import MasterHeadImg from '@/utilities/MasterHeadImg';
import { WistiaHero } from '@/utilities/WistiaHero';
import { useRouter } from 'next/router'
import styles from './styles.module.css'
const Collection = () => {
    const router = useRouter()
    // const { collezioni } = router.query
    const collezioni = null
    const [category, setCategory] = useState({
        name: undefined,
        DataisLoaded: false
    });
    useEffect(() => {
        if (!collezioni) {
            let url = window.location.href;
            let splitUrl = url.split('/collezioni/');
            if (splitUrl.length == 2) {
                console.log({ url: splitUrl[1] });
                if(splitUrl[1] == 'salute-della-pelle'){
                    setCategory({
                        name: collection[splitUrl[1]]?.title ? splitUrl[1] : false,
                        DataisLoaded: true
                    })
                }else{
                    setCategory({
                        name: false,
                        DataisLoaded: true
                    })
                }
            } else {
            }
        } else {
            setCategory({
                name: collection[collezioni]?.title ? collezioni : false,
                DataisLoaded: true
            })
        }
    }, [category])
    const { DataisLoaded, name } = category;
    const { masterHead, item, title } = collection[name] || {}
    const { img, wistia } = masterHead || {};
    if (!DataisLoaded) return <div class="center-body"><div class="loader-circle-2"></div></div>;
    return (
        <section>
            {name ?
                <>
                    {wistia?.id && <WistiaHero id={wistia.id} content={wistia?.content} />}
                    {img?.src && <MasterHeadImg data={img} />}
                    <section className={styles.container}>
                        <CollectionList content={item} />
                    </section></> : <div style={{ fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"', height: '25vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><div>
                        <h1 class="next-error-h1" style={{ display: 'inline-block', margin: '0 20px 0 0', paddingRight: '23px', fontSize: '24px', fontWeight: 500, verticalalign: 'top', lineHeight: '49px', borderRight: '1px solid' }}>404</h1>
                        <div style={{ display: 'inline-block', textAlign: 'left' }}><h2 style={{ fontSize: '14px', fontWeight: 400, lineHeight: '49px', margin: 0 }}>This page could not be found.</h2></div></div></div>}
        </section>
    )
}

export default Collection