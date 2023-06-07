import React, { memo,useEffect } from 'react'

import styles from './styles.module.css'

const ProductReviews = ({ product }) => {
  useEffect(() => {
        (function e() { var e = document.createElement("script"); e.type = "text/javascript", e.async = true, e.src = `//staticw2.yotpo.com/ahHyITcI0fkzYo7KejQeWGiBK2CXMKvLvTZ8KUBJ/widget.js`; var t = document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e, t) })();
}, [])

  return (
    <div className={styles.wrapper}>
      <div
        class="yotpo yotpo-main-widget"
        data-product-id={'3526581387339'}
        data-price={''}
        data-currency="$"
        data-name={''}
        data-url={`/products/`}
        data-image-url={''}
      ></div>
    </div>

  )
}

export default memo(ProductReviews)
