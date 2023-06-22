import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import { WistiaHero } from "@/utilities/WistiaHero";
import AnnouncementBar from "@/utilities/announcementBar";
import PatnerData from "../../json/parters.json"
import Chat from '@/utilities/ChatBubble'
import data from '../../json/layout.json'
import PageHead from "@/utilities/Head";
import Footer from '@/utilities/Footer/';
import { NewsLetter } from "@/utilities/NewsLetter";
import ProductReviews from "@/utilities/ProductReviews";
import ImageAside from "@/utilities/Sections/ImageAside";
import ModalBoxInner from "@/utilities/ModalBoxInner";
import { useState } from "react";
import ProductArticleModal from "@/utilities/Sections/ProductArticleModal";
import ProductTrustBadges from "@/utilities/ProductTrustBadges";
import Testimonial from "@/utilities/Testimonial";
import FourStepProcess from "@/utilities/FourStepProcess";
import ReasonsToBelieve from "@/utilities/ReasonsToBelieve";
// import ReasonsToBelieve from "@/utilities/ReasonsToBelieve";

const Run = ({version}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ModalHandler = () => {
    console.log("booo");
    setIsOpen(!isOpen)
  }
  return (
    <>
    <PageHead content={{title:'Riboflam | Runner’s World | Bruno MD',description:'30% OFF One-Time Purchase. Riboflam, offered in Runner’s World Magazine. Clinically proven to help relieve post-exercise pain naturally for runners.'}}/>
      <AnnouncementBar announcement={'MEN’S HEALTH EXCLUSIVE EXCLUSIVE 30% OFF APPLIED AT CHECKOUT'} theme={{ backgroundColor: '#e65300', position: 'fixed' }} />
      <WistiaHero id={'j47u7bxi0j'} content={{ buyNow: true,ModalHandler }} />
      <ModalBoxInner isOpen={isOpen} ModalHandler={ModalHandler} />
      <MarkqueCarousel image={PatnerData} />
      <ImageAside content={{ title: '<h1>Riboflam</h1>', subTitle: "<h2>Supports a healthy immune response & Cools inflammation</h2>", titleDescription: ["Riboflam helps cool inflammation by support­ing the whole body's healthy inflammation response with Curcumin Phytosome", "+ maintains full-spectrum immune system functionality with Echinacea and Quercetin Phytosomes"], legalText: "" }} />
      <ProductArticleModal content={{bannerDesk:{src:'https://f.shgcdn.com/bcf155d5-cdf8-42dc-b22d-4951531f497d/'},title:'CLINICALLY PROVEN to provide post-workout pain relief and balance inflammation response',buttonTitle:'BUY NOW',buttonDescription:'with Exclusive Offer to Save 30%',offerTagDescription:'30% discount first time order automatically applied at checkout',offerTagLine:'$18.89 savings with exclusive code',colorTheme:'#e65300',offerTextColor:'#fff'}} ModalHandler={ModalHandler}/>
      <ProductTrustBadges images={[{src:'\\utility\\trust\\BioAvailable-icon-v1-Black-300x300.png'},{src:'\\utility\\trust\\cGMP-Icon-v1-Black 1.png'},{src:'\\utility\\trust\\Clean+Pure-Icon-v1-Black-300x300 1.png'},{src:'\\utility\\trust\\Clinically_Proven-Icon-v1-Black 1.png'},{src:'\\utility\\trust\\Gluten-Free-Icon-v2-Black 1.png'},{src:'\\utility\\trust\\Low-Carb-Icon-V1-Black 1.png'},{src:'\\utility\\trust\\Non-GMO-Icon-v1-Black-300x300 1.png'},{src:'\\utility\\trust\\Sugar-Free-Icon-V1-Black 1.png'},{src:'\\utility\\trust\\Vegan-Icon-v1-Black 1.png'}]}/>
      <video src="https://f.shgcdn.com/01d324de-88b0-4578-82b3-34dcde6e1c67/" autoPlay type="video/mp4"/>
      {/* <ReasonsToBelieve /> */}
      <FourStepProcess processCards={[{stepNumber:1,title:'Don’t Boost. Balance',body:'“Boosting” your immune system has unintended consequence',expanded:'Our immune system is designed to seek and destroy pathogens, but boosting your system to respond to pathogens outside of a healthy range can throw your body into overdrive, causing a cytokine storm and potentially causing long-term or even life-threatening damage.  Instead of boosting, Riboflam’s clinically-proven ingredients focus on balance. A balanced immune response does not over or underreact to invaders-instead, it activates a measured, proportional response.',image:{src:'https://f.shgcdn.com/ce977d0c-0538-49d9-9308-34e235782c33/',alt:'booo'}},{stepNumber:1,title:'Don’t Boost. Balance',body:'“Boosting” your immune system has unintended consequence',expanded:'Our immune system is designed to seek and destroy pathogens, but boosting your system to respond to pathogens outside of a healthy range can throw your body into overdrive, causing a cytokine storm and potentially causing long-term or even life-threatening damage.  Instead of boosting, Riboflam’s clinically-proven ingredients focus on balance. A balanced immune response does not over or underreact to invaders-instead, it activates a measured, proportional response.',image:{src:'https://f.shgcdn.com/ce977d0c-0538-49d9-9308-34e235782c33/',alt:'booo'}},{stepNumber:1,title:'Don’t Boost. Balance',body:'“Boosting” your immune system has unintended consequence',expanded:'Our immune system is designed to seek and destroy pathogens, but boosting your system to respond to pathogens outside of a healthy range can throw your body into overdrive, causing a cytokine storm and potentially causing long-term or even life-threatening damage.  Instead of boosting, Riboflam’s clinically-proven ingredients focus on balance. A balanced immune response does not over or underreact to invaders-instead, it activates a measured, proportional response.',image:{src:'https://f.shgcdn.com/ce977d0c-0538-49d9-9308-34e235782c33/',alt:'booo'}},{stepNumber:1,title:'Don’t Boost. Balance',body:'“Boosting” your immune system has unintended consequence',expanded:'Our immune system is designed to seek and destroy pathogens, but boosting your system to respond to pathogens outside of a healthy range can throw your body into overdrive, causing a cytokine storm and potentially causing long-term or even life-threatening damage.  Instead of boosting, Riboflam’s clinically-proven ingredients focus on balance. A balanced immune response does not over or underreact to invaders-instead, it activates a measured, proportional response.',image:{src:'https://f.shgcdn.com/ce977d0c-0538-49d9-9308-34e235782c33/',alt:'booo'}}]} theme={'#e65300'} header={'Cool inflammation with Clinically Proven Ingredients'}/>
      <ReasonsToBelieve ingredients={{src:'https://f.shgcdn.com/b54cf21c-9b62-4925-a26d-f9f06f376de3/'}} content={[{note:'lol',expanded:'kk'}]} theme={'#e65300'} expandLogo={'https://f.shgcdn.com/0175203b-050b-435b-a7fb-9f141d2778d4/'} product={'RIBOFLAM 90 V-CAPS 30 SERVINGS'}/>
      <ProductReviews variantId={'3526581387339'} />
      <NewsLetter content={{
        "title": "Join Our Newsletter",
        "portalId": "19647191",
        "formId": "7b270a73-336b-4895-8b55-286a3f49b1f2",
        "desktopImage": "https://f.shgcdn.com/36a62ffd-6a81-42b5-a958-3bced96f32e0/",
        "mobileImage": "https://f.shgcdn.com/b9865024-9eb3-4ecc-a335-fd99718d5f5b/", "landing": true
      }} />
      <Chat />
      <Footer data={data[version].footer} />
    </>
  )
}
Run.hideLayout = true;
export default Run