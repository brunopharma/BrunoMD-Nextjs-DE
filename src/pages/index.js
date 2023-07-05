import React from 'react'
// import styles from '@/styles/Home.module.css'
import MarkqueCarousel from '@/utilities/MarkqueCarousel'
import { WistiaHero } from '@/utilities/WistiaHero'
import Cards from '@/utilities/CategoriesCards'
import TrustBadge from '@/utilities/TrustBadges'
import Purpose from '@/utilities/Purpose'
import { HomeGallery } from '@/utilities/HomeGallery'
import { NewsLetter } from '@/utilities/NewsLetter'
import PatnerData from "../../json/parters.json"
import TrustBadgeData from '../../json/trustBages.json'
import HomePageData from '../../json/home.json'
import SEO from '../../json/SEO.json'
import PageHead from '@/utilities/Head'

export default function Home({version}) {
  return (
    <>
    
      <section>
        
        <PageHead content={SEO[version]?.home?.SEO}/>
        <WistiaHero id={HomePageData[version].wistia.id} content={HomePageData[version].wistia.content} />
        <MarkqueCarousel image={PatnerData} />
        <Cards contents={HomePageData[version].categories} />
        <TrustBadge contents={TrustBadgeData[version]} />
        <Purpose contents={HomePageData[version].purpose} />
        <HomeGallery id={HomePageData[version].homeGallery.id} galleryId={HomePageData[version].homeGallery.galleryId}/>
        <NewsLetter content={HomePageData[version].newsletter}/>
      </section>
    </>
  )
}
