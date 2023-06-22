import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import TestimonialSlide from "./slide";

const Testimonial = ({content})=>{
    const {slides , colorCode,colorCodeOnPlayButton,videoHeight,videoWidth} = content || null
    const [currentSlide, setCurrentSlide] = useState(0)
    const [transformAmount, setTransformAmount] = useState(0)
    const [sliderInView, setSliderInView] = useState(false)
  
    const elementRef = useRef()
    const firstSlideRef = useRef()
  
    const onBackPressed = () => {
      setCurrentSlide(lastIndex => (lastIndex === 0 ? 0 : lastIndex - 1))
    }
  
    const onForwardPressed = () => {
      setCurrentSlide(lastIndex =>
        lastIndex === slides?.length - 1 ? slides?.length - 1 : lastIndex + 1,
      )
    }
  
    useEffect(() => {
      let cancelled = false
  
      const updateTransformAmount = () => {
        if (!cancelled && firstSlideRef?.current) {
          let width = firstSlideRef.current.getBoundingClientRect().width
          setTransformAmount(currentSlide * -width)
        }
      }
  
      if (firstSlideRef?.current) {
        updateTransformAmount()
      }
  
      window.addEventListener('resize', updateTransformAmount)
  
      return () => {
        cancelled = true
        window.removeEventListener('resize', updateTransformAmount)
      }
    }, [currentSlide, firstSlideRef])
  
    useEffect(() => {
      let cancelled = false
  
      const cleanup = () => {
        window.removeEventListener('scroll', checkIsInBounds)
  
        if (elementRef?.current) {
          elementRef.current.removeEventListener('touchstart', dragStartListener)
          elementRef.current.removeEventListener('touchend', dragEndListener)
        }
  
        cancelled = true
      }
  
      const checkIsInBounds = () => {
        if (!elementRef || !elementRef.current) {
          return
        }
  
        const boundingRect = elementRef.current.getBoundingClientRect()
        const distanceAwayFromBottom = boundingRect.top - window.innerHeight
  
        if (distanceAwayFromBottom < 0) {
          if (!cancelled) {
            setSliderInView(true)
          }
  
          window.removeEventListener('scroll', checkIsInBounds)
        }
      }
  
      let startDrag = 0
      const dragStartListener = event => {
        startDrag = event.changedTouches[0].screenX
      }
  
      const dragEndListener = event => {
        const endDrag = event.changedTouches[0].screenX
        const dragDifference = startDrag - endDrag
  
        /** Check that the drag difference is at least a few pixels to avoid weird scrolling for the smallest gestures */
        if (!cancelled && Math.abs(dragDifference) > 30) {
          if (dragDifference < 0) {
            onBackPressed()
          } else {
            onForwardPressed()
          }
        }
      }
  
      if (elementRef?.current) {
        elementRef?.current.addEventListener('touchstart', dragStartListener)
        elementRef?.current.addEventListener('touchend', dragEndListener)
  
        window.addEventListener('scroll', checkIsInBounds)
        // Run it once in case the page is rendered near the bottom already.
        checkIsInBounds()
      }
  
      return cleanup
    }, [elementRef])
  
    return (
      <div className={styles.testimonialSliderWrapper} ref={elementRef}>
        <div
          className={styles.testimonialSliderTrack}
          style={{ transform: `translateX(${transformAmount}px)` }}
        >
          {slides &&
            slides.length > 0 &&
            slides?.map((slide, index) => (
              <TestimonialSlide
                slide={slide}
                isOpen={index <= currentSlide}
                isVisible={sliderInView}
                key={index}
                colorCode={colorCode}
                colorCodeOnPlayButton={colorCodeOnPlayButton}
                ref={index === 0 ? firstSlideRef : null}
                videoWidth={videoWidth}
                videoHeight={videoHeight}
              />
            ))}
        </div>
        <div className={styles.testimonialSliderArrows}>
          <button
            onClick={onBackPressed}
            disabled={currentSlide === 0}
            aria-label="Button for Previous Testimonial"
          >
            Previous
          </button>
          <button
            onClick={onForwardPressed}
            disabled={currentSlide === slides?.length - 1}
            aria-label="Button for Next Testimonial"
          >
            Next
          </button>
        </div>
      </div>
    )
}
export default Testimonial