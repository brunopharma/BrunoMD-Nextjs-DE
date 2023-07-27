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
import Testimonial from '@/utilities/Testimonial'
export default function Home({version}) {
  return (
    <>
      <section>
        {SEO[version] && <PageHead content={SEO[version]?.home?.SEO}/>}
        {HomePageData[version] &&<WistiaHero id={HomePageData[version].wistia.id} content={HomePageData[version].wistia.content} />}
        {HomePageData[version]?.PatnerData &&<MarkqueCarousel image={PatnerData} />}
        {HomePageData[version] &&<Cards contents={HomePageData[version].categories} />}
        {TrustBadgeData[version] &&<TrustBadge contents={TrustBadgeData[version]} />}
        {HomePageData[version] && <Purpose contents={HomePageData[version].purpose} />}
        {HomePageData[version].testimonial && <Testimonial content={{slides:HomePageData[version].testimonial, title:"Our Believers",subTitle:"See what BrunoMD customers have to say."}}/>}
        {HomePageData[version]?.homeGallery &&<HomeGallery id={HomePageData[version].homeGallery.id} galleryId={HomePageData[version].homeGallery.galleryId} content={{title:HomePageData[version].homeGallery.title, desc:HomePageData[version].homeGallery.subTitle, invert:HomePageData[version].homeGallery.invert}}/>}
        {HomePageData[version] &&<NewsLetter content={HomePageData[version].newsletter}/>}
      </section>
    </>
  )
}
