import React, { memo,useEffect, useState } from 'react'

const StarRatings = ({ variantId }) => {
  const [productId, setProductId] = useState(variantId);
  useEffect(() => {
    console.warn({productId});
        (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true, e.src = `//staticw2.yotpo.com/ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ/widget.js`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
}, [productId])

  return (
    <div style={{height: '40px',display: 'flex'}}>
      {productId && <div
        class="yotpo bottomLine yotpo-medium"
        data-yotpo-product-id={productId}
      ></div>}
    </div>

  )
}

export default memo(StarRatings)
