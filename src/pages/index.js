import React from 'react'
import styles from '@/styles/Home.module.css'
import { getAllProducts } from '@/data/product'
import MarkqueCarousel from '@/utilities/MarkqueCarousel'
import { WistiaHero } from '@/utilities/WistiaHero'
import Cards from '@/utilities/CategoriesCards'
import TrustBadge from '@/utilities/TrustBadges'
import Purpose from '@/utilities/Purpose'
import { HomeGallery } from '@/utilities/HomeGallery'
import { NewsLetter } from '@/utilities/NewsLetter'
import PatnerData from "../../json/parters.json"
import TrustBadgeData from '../../json/trustBages.json'
export default function Home() {
  const data = {
    wistia: {
      id: 'ile0o2zvsm',
      content: { title: 'Benvenuti', btnText: 'shop', subTitle: "Prodotti per la salute e il benessere radicati nel cuore dell'Italia, realizzati con ingredienti completamente naturali." }
    },
    categories: [
      { name: 'Dolore', link: '/collezioni/dolore', logo: { src: '/logo/Dolore.png', alt: 'Dolore' } },
      { name: 'Pelle', link: '/collezioni/salute-della-pelle', logo: { src: '/logo/Pelle.png', alt: 'Pelle' } },
      { name: 'Occhi', link: '/collezioni/occhi', logo: { src: '/logo/Occhi.png', alt: 'Occhi' } },
      { name: 'PRE-DIABETIC', link: '/collezioni/pre-diabete', logo: { src: '/logo/Pre-diabete.png', alt: 'PRE-DIABETIC' } },
      { name: 'Reverse-aging', link: '/collezioni/reverse-aging', logo: { src: '/logo/Reverse-aging.png', alt: 'Reverse-aging' } },
      { name: 'Sali Minerali', link: '/collezioni/sali-minerali', logo: { src: '/logo/sali-minerali.png', alt: 'Sali Minerali' } },
    ],
    trustBages: {
      title: '14 Giorni - Soddisfatti o Rimborsati', theme: undefined, badges: [
        { src: '/logo/14-giormi.png', alt: '14-giormi' },
        { src: '/logo/con-ordini.png', alt: 'con-ordini' },
        { src: '/logo/shopify-secure.png', alt: 'shopify-secure' },
      ]
    },
    purpose: {
      title: 'La Nostra Missione', buttonText: 'Leggi di piu', buttonUrl: '/scienza', image: { src: '/utility/purpose.jpg', alt: 'La Nostra Missione' }, paragraphs: [
        "Bruno MD permette di vivere la vita in modo più sano grazie ad ingredienti naturali senza compromessi e all'immaginazione scientifica.", "Siamo italiani e a conduzione familiare, quindi mettere in contatto le persone con i trattamenti farmacologici più innovativi ed efficaci e con i migliori ingredienti naturali ci porta gioia, sostenuta dalla sana alimentazione e dalle abitudini sociali tipiche del Mediterraneo. Non è a caso che due delle cinque Zone Blu del mondo si trovino nel Mediterraneo, dove le persone superano regolarmente i 100 anni di vita.", "Il nostro percorso è iniziato come azienda farmaceutica, ma utilizziamo gli stessi principi scientifici per realizzare i nostri prodotti naturali per la salute. Ogni ingrediente che utilizziamo è clinicamente testato per fornire i massimi benefici per la salute. Abbiamo anche reso più biodisponibili gli ingredienti difficili da assorbire grazie alla tecnologia dei fitosomi.", "Bruno MD si trova al crocevia delle tradizioni e della storia che hanno dato vita al mondo moderno. Abbracciamo la semplicità della famiglia, della tavola condivisa e degli ingredienti freschi ad ogni pasto. Abbracciamo la scienza innovativa per offrire questi ingredienti e creare una vita più sana."
      ]
    },
    homeGallery:'jEbEI2jY9vvLxI8yyKzuyJz2I0PQz9Mn0SaZJTMJ',
    newsletter:{
      title:'Iscriviti alla newsletter',
      portalId: '19647191',
      formId: '7b270a73-336b-4895-8b55-286a3f49b1f2'
    }
  }
  return (
    <>
      <section>
        <WistiaHero id={data.wistia.id} content={data.wistia.content} />
        <MarkqueCarousel image={PatnerData} />
        <Cards contents={data.categories} />
        <TrustBadge contents={TrustBadgeData} />
        <Purpose contents={data.purpose} />
        {/* <HomeGallery id={data.homeGallery}/> */}
        <NewsLetter content={data.newsletter}/>
      </section>
    </>
  )
}
