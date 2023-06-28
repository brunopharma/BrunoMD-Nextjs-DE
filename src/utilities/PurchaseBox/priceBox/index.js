import React, { useState, useEffect } from "react";
import styles from './styles.module.css'
import SupplementalInfo from "@/utilities/SupplementalInfo";
import Spinner from "@/utilities/Loader/index1";

const PriceBox = ({ isActive, data, base }) => {
  const { client, shopifyP } = base || {};
  const [variantId, setVariantId] = useState(shopifyP?.variants[0]?.id);
  const [learnMore, setLearnMore] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [currentShippingInterval, setCurrentShippingInterval] = useState(null)
  useEffect(() => {
    setVariantId(false || shopifyP?.variants[0]?.id);
  }, [data, base]);
  if (!data) return null
  const QUANTITY_OPTIONS = [...Array(data?.priceBox.maxQty).keys()].map(n => n + 1)
  const buttonText = isActive == 2 ? data.priceBox?.subscribe?.btnText : data.priceBox?.oneTime?.btnText

  const handleQuantityChange = e => {
    const { value } = e.target
    setQuantity(+value);
  }

  const handleFreqChange = e => {
    const { value } = e.target
    setCurrentShippingInterval(parseInt(value));
  }
  const CreateCart = () => {
    // alert("soon.")
    if (quantity && variantId) {
      let cId = localStorage.getItem('e6S4JJM9G');
      if (!cId) {
        client.checkout.create().then((checkout) => {
          let checkOutId = checkout.id;
          localStorage.setItem('e6S4JJM9G', checkOutId);
          AddToCart(checkOutId);
        });
      } else {
        AddToCart(cId);
      }
    }
  };

  const AddToCart = (checkOutId) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity
      },
    ];
    client.checkout
      .addLineItems(checkOutId, lineItemsToAdd)
      .then((checkout) => {
        // Do something with the updated checkout
        window.location.href = checkout.webUrl;
      });
  };
  // if (quantity && variantId) {
  //   let cId = localStorage.getItem('e6S4JJM9G');
  //   if (!cId) {
  //     client.checkout.create().then((checkout) => {
  //       let checkOutId = checkout.id;
  //       localStorage.setItem('e6S4JJM9G', checkOutId);
  //       AddToCart(checkOutId);
  //     });
  //   } else {
  //     AddToCart(cId);
  //   }
  // }
  return (
    <div className={styles.accordionItem} >
      <div className={styles.accordionContent}>
        <div style={styles.row}>
          {isActive == 2 && <>
            <div className={styles.section2} id="section2">
              {data.priceBox.subscriptionDetails ? <div dangerouslySetInnerHTML={{ __html: data.priceBox.subscriptionDetails }} /> : <><p>Non perdere l&apos;opportunita&apos; di risparmiare il <b>{data.priceBox.discount}%</b> su quest&apos;ordine e sulle successive consegne automatiche</p>
                <ul><li className={styles.liDecore}>Nessun costo</li><li className={styles.liDecore}>Cancella quando vuoi</li></ul></>}
            </div>
            <div className={styles.section3} style={{ 'color': data.theme }} onClick={() => setLearnMore(!learnMore)}>{data?.priceBox.moreInfoBtnText ? data?.priceBox.moreInfoBtnText: 'Maggiori informazioni'}<div className={learnMore ? styles.upArrow : styles.downArrow}><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></div>
            </div>
            {learnMore &&
              <div className={styles.m5}>
                <SupplementalInfo moneyBackInfo={data?.priceBox.moneyBackInfo} termPurchase={data?.priceBox?.termPurchase}/>
              </div>}
          </>}
          <div className={styles.section4}>Disponibilita&apos; immediata.</div>
          <div className={styles.flex}>
            <div className={styles.selectDiv}>
              <div className={styles.quntity}>{data.priceBox?.qtyLabelText ? data.priceBox?.qtyLabelText : "Quantita'"}:</div>
              <select className={styles.selectNon} onChange={handleQuantityChange}>
                {QUANTITY_OPTIONS.map(val => (
                  <option key={val} value={val}>
                    {`${val}`}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.section5_2}>{data.priceBox.qtyUnitMultiplierLabel && quantity * data.priceBox.defaultQtyMultiplayer} {data.priceBox.qtyUnitMultiplierLabel}
              {data.priceBox.qtyExtraDesc && <> ({data.priceBox.qtyMultiplierShowOnExtraDesc && quantity * data.priceBox.defaultQtyMultiplayer} {data.priceBox.qtyExtraDesc})</>}</div>
          </div>
          {isActive == 2 &&
            <div className={styles.section6_2}>
              <b className={styles.freqLabel}>{data.priceBox?.freqLabelText ? data.priceBox?.freqLabelText : 'Consegna ogni'}:</b>
              <select className={styles.freq} onChange={handleFreqChange}>
                {/* {recharge?.shippingIntervalFrequency?.map(val => (
                    <option key={val} value={val}>
                      {`${val}`} {recharge.shippingIntervalUnitType == 'day' ? 'giorni' : recharge.shippingIntervalUnitType}
                    </option>
                  ))} */}
                <option>15 {data.priceBox?.subscribe?.interval ? data.priceBox?.subscribe.interval :'giormi'}</option>
                <option>30 {data.priceBox?.subscribe?.interval ? data.priceBox?.subscribe.interval :'giormi'}</option>
                <option>45 {data.priceBox?.subscribe?.interval ? data.priceBox?.subscribe.interval :'giormi'}</option>
              </select>
            </div>}
          {/*  onClick={CreateCart} */}
          <div className={styles.flex}><div className={styles.buyNowBtn} onClick={CreateCart}><p>{isAddingToCart ? <Spinner className={styles.spinner} size={20} /> : buttonText}</p></div></div>
        </div>
      </div>
    </div>
  )
}
export default PriceBox