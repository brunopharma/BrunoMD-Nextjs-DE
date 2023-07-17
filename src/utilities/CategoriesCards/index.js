import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image';
const Cards = ({ contents }) => {
    if (!contents.items.length) return null;
    return (
        <section className={styles.container}>
            <h3 className={styles.solutionHeader}>
                <Link href="/">{contents.title}</Link>
            </h3>
            <div className={styles.solutionsContainer}>
                {contents.items.map((e, index) => {
                    return (
                        <>
                            <div className={styles.solutionCardOuterContainer} key={index}>
                                <Link href={e.link}>
                                    <Image
                                        src={e.logo?.src}
                                        className={styles.backgroundImage}
                                        alt={e.logo?.alt}
                                        width={438}
                                        height={326}
                                    />
                                </Link>
                                <div className={styles.categoryName} style={e.fontSize ? {fontSize:`${e.fontSize}px`}:{}}> <Link href={e.link}>{e.name}</Link></div>
                                <div className={styles.solutionCardInnerContainer}>
                                    <div className={styles.RightCornerContainer}>
                                        <Link href={e.link}>
                                            <button className={styles.buyNowButton}>{e.btnText || 'Shop'}</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    )
}
export default Cards