import React from 'react'
import styles from './styles.module.css'

const MarkqueCarousel = ({ image }) => {
  
  if (image?.length) {
    const Sliderimage = [];
    image.map(e=>Sliderimage.push(e))
    image.map(e=>Sliderimage.push(e))
    image.map(e=>Sliderimage.push(e))
    return (
      <section className={styles.container}>
        <div className={styles.photobanner}>
          {
            Sliderimage.map((element4,i) => {
              return (
                <img src={element4.src} alt={element4.alt} key={i}/>
              )
            })
          }
        </div>
      </section>
    )
  } else {
    return null
  }
}

export default MarkqueCarousel