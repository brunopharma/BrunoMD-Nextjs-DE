import React, { memo,useEffect, useState } from 'react'

import styles from './styles.module.css'

const ProductReviews = ({ product,variantId }) => {
  const [productId, setProductId] = useState(product ? product.variants.length ? product.variants[0].id.split('ProductVariant/').length == 2 ? product.variants[0].id.split('ProductVariant/')[1] : undefined : undefined:variantId);
  useEffect(() => {
        // (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true,e.defer = true, e.src = `//staticw2.yotpo.com/ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ/widget.js`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
        const options = {
          method: 'POST',
          headers: {accept: 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({
            app_key: 'ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ',
            external_product_ids: '4586005626955',
            product_collections: 'royal collagen peptides stick packs strawberry acai',
            sentiment_type: 'POSITIVE',
            sentiment_field: 'review_sentiment'
          })
        };
        
        fetch('https://api.yotpo.com/insights/v1/products/reviews', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
}, [productId])

  return (
    <div className={styles.wrapper}>
      <p>loreeeem</p>
      {productId && <div
        class="yotpo yotpo-main-widget"
        data-product-id={productId}
      ></div>}
    </div>

  )
}

export default memo(ProductReviews)
