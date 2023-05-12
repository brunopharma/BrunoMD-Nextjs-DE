import React,{useRef,useEffect} from 'react';
import styles from './styles.module.css'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

export const CollectionList = ({ content }) => {
    gsap.registerPlugin(ScrollTrigger);
    const elementRef = useRef(null);
    const h1Ref = useRef(null);
    const q = gsap.utils.selector(elementRef);
    
    useEffect(() => {
        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top 60%",
            },});
            timeline.set(q('a'), { alpha:0, y:10 });
            timeline.fromTo(h1Ref.current,{y:-10,alpha:0},{alpha:1,y:0,duration:1})
            timeline.to(q('a'), { y: 0 , alpha:1, duration:.5, stagger: 0.05 },0);
        }, []);
        if(!content || !content.length) return null
    return (
        <div ref={elementRef} className={styles.collectionContainer}>
        {content.map((e,i)=>{
            return(
                <Link href={e.link+ e?.SLUG} key={i}>
                <div className={styles.collectionCard}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={e.logo.src}
                            alt={e.logo.alt}
                            className={styles.productImage}
                            width="220"
                        />
                    </div>
                    <p className={styles.productText}>{e.title}</p>
                    <button className={styles.buyNowButton}>{e.btnText}</button>
                </div>
            </Link>
            )
        })}
        </div>
    )
}