import React, { useState, useEffect } from "react";
import Slider from "../Slider";
import styles from "./styles.module.css";
import PurchaseBox from "../PurchaseBox";
const ProductCard = ({ data, base }) => {
  const { images, declaimer, priceDescription } = data || {};
  const { client, shopifyP } = base || {};
  const [isActive, setIsActive] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [variantId, setVariantId] = useState(shopifyP?.variants[0]?.id);
  useEffect(() => {
    setVariantId(shopifyP?.variants[0]?.id);
  }, [data, base]);

  const CreateCart = () => {
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
        quantity,
      },
    ];
    client.checkout
      .addLineItems(checkOutId, lineItemsToAdd)
      .then((checkout) => {
        // Do something with the updated checkout
        window.location.href = checkout.webUrl;
      });
  };
  // fire onClick={CreateCart}

  const handleChange = (event) => {
    setQuantity(parseInt(event.target.value));
    console.log({ quantity, variantId });
  };

  if (!data) return null;
  console.log({ images });
  return (
    <section className={styles.conatiner}><div className={styles.productCard}>
      <div style={{ margin: "auto" }}>
        {images?.length && <Slider data={images} />}
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: declaimer?.title }} className={styles.title}></div>
        <div dangerouslySetInnerHTML={{ __html: declaimer?.subTitle }} className={styles.subTitle}></div>
        <div dangerouslySetInnerHTML={{ __html: declaimer?.content }} className={styles.content}></div>
      </div>
      <div>
        <PurchaseBox data={priceDescription} />
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
