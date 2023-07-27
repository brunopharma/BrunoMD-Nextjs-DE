import React, { useEffect } from "react";
import Slider from "../Slider";
import styles from "./styles.module.css";
import PurchaseBox from "../PurchaseBox";
import StarRatings from "../StarRatings";

const ProductCard = ({ data, base }) => {
  const { images, declaimer, priceDescription } = data || {};

  if (!data) return null;
  return (
    <section className={styles.conatiner}><div className={styles.productCard}>
      <div dangerouslySetInnerHTML={{ __html: declaimer?.title }} className={styles.mobTitle}></div>
      <div className={styles.sliderHolder}>
        {images?.length && <Slider data={images} />}
      </div>
      <div className={styles.textHolder}>
        <div dangerouslySetInnerHTML={{ __html: declaimer?.title }} className={styles.title}></div>
        {!data?.review &&<StarRatings variantId={priceDescription.EXTERNALID}/>}
        <div dangerouslySetInnerHTML={{ __html: declaimer?.subTitle }} className={styles.subTitle}></div>
        <div dangerouslySetInnerHTML={{ __html: declaimer?.content }} className={styles.content}></div>
      </div>
      <div className={styles.purchaseBoxHolder}>
        <PurchaseBox data={priceDescription} base={base}/>
      </div>
      {/* <div>
        <div
          style={{
            border: "1px solid",
            background: "#eee",
            padding: "5px",
            margin: "20px 0 10px",
            width: "400px",
          }}
          onClick={() => setIsActive(1)}
        >
          ACQUISTO SINGOLO
        </div>
        {isActive == 1 && (
          <div>
            <select onChange={handleChange}>
              <option>1</option>
              <option>2</option>
            </select>
            <br />
            <button
              style={{
                border: "1px solid",
                background: "#000",
                padding: "5px",
                margin: "20px 0 10px",
                color: "#fff",
              }}
            >
              Aggiungi al carrello
            </button>
          </div>
        )}
        <div
          onClick={() => setIsActive(2)}
          style={{
            border: "1px solid",
            background: "#eee",
            padding: "5px",
            margin: "20px 0 10px",
            width: "400px",
          }}
        >
          ACQUISTO PERIODICO
        </div>
        {isActive == 2 && (
          <div>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
            <br />
            <button
              style={{
                border: "1px solid",
                background: "#000",
                padding: "5px",
                margin: "20px 0 10px",
                color: "#fff",
              }}
            >
              Aggiungi al carrello
            </button>
          </div>
        )}
      </div> */}
    </div>
    </section>
  );
};

export default ProductCard;
