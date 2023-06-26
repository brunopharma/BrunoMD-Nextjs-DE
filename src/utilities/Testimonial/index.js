import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import VideoPlayer from '../Video';

const Testimonial = ({ content }) => {
  const { slides, theme, colorCodeOnPlayButton, videoHeight, videoWidth,invertDesign } = content || null
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(()=>{},[currentSlide])

  const previous = ()=>{
    let i = currentSlide;
    document.getElementById('transformContainer').style.transform = `translateX(-${i*400}px)`
    if(i != 0){
      setCurrentSlide(0);
    }
  }
  
  const Next = ()=>{
    let i = currentSlide;
    console.log({i,len:slides.length});
    if(i <= slides.length){
    setCurrentSlide(i+1);
    document.getElementById('transformContainer').style.transform = `translateX(-${i*400}px)`
    }
  }

  return (
    <section className={styles.container}>
      <div class={styles.testimonialSliderTrack} style={{ transform: 'translateX(200px)' }} id='transformContainer'>
        {slides.map((e, i) => {
          return (<div class={styles.testimonialSlide} key={i}>
            {i == currentSlide &&<div class={styles.slideInfo}>
              <div class={styles.slideInfoWidth}>
                <div class={styles.slideInfoQuote} style={invertDesign ? { color: theme }:{}}>
                  <p>{e.title}</p>
                </div>
                <div class={styles.slideInfoAuthor} style={!invertDesign ? { color: theme }:{}}>
                  {e.author}
                </div>
              </div>
            </div>}
            <div class={styles.slideVideo} style={i == currentSlide ? {transform:'scale(1)'} : {}}>
              {e.video && <VideoPlayer video={e.video} id={i} theme={colorCodeOnPlayButton && theme}/>}
            </div>
          </div>)
        })}
      </div>
      <div className={styles.dFlex}><p onClick={previous}>previous</p><p onClick={Next}>Next</p></div>
    </section>
  )
}
export default Testimonial