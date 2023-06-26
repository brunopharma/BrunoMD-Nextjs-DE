import MarkqueCarousel from "@/utilities/MarkqueCarousel";
import { WistiaHero } from "@/utilities/WistiaHero";
import AnnouncementBar from "@/utilities/announcementBar";
import PatnerData from "../../json/parters.json"
import landingData from "../../json/landing.json"
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
import SubscriptionBar from "@/utilities/SubscriptionBar";

const Run = ({ version }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ModalHandler = () => {
    console.log("booo");
    setIsOpen(!isOpen)
  }
  const pageData = landingData['run'] || {}
  return (
    <>
      <PageHead content={pageData.seo} />
      <AnnouncementBar announcement={pageData.announcement.title} theme={pageData.announcement.theme} />
      <WistiaHero id={pageData.wistiaVideoId} content={{ buyNow: true, ModalHandler }} />
      <ModalBoxInner isOpen={isOpen} ModalHandler={ModalHandler} />
      <MarkqueCarousel image={PatnerData} />
      <ImageAside content={pageData.ImageAside} />
      <ProductArticleModal content={pageData.ProductArticleModal} ModalHandler={ModalHandler} />
      <ProductTrustBadges images={pageData.ProductTrustBadges} />
      <Testimonial content={{ slides: pageData.testimonial, theme: pageData.theme, invertDesign: false }} />
      <FourStepProcess processCards={pageData.FourStepProcess.items} theme={pageData.theme} header={pageData.FourStepProcess.title} />
      <ReasonsToBelieve ingredients={pageData.FourStepProcess.ingredients} content={pageData.ReasonsToBelieve.items} theme={pageData.theme} product={pageData.product} />
      <ProductReviews variantId={pageData.variantId} />
      <NewsLetter content={pageData.NewsLetter} />
      <Chat />
      <Footer data={data[version].footer} />
      <SubscriptionBar />
    </>
  )
}
Run.hideLayout = true;
export default Run