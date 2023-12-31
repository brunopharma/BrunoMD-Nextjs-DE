import React from 'react'
import styles from './styles.module.css'
import ProcessCard from './ProcessCard'

const FourStepProcess = ({ processCards, header, theme,stepAlignment,buttonTittle }) => {
  //titleColor = undefined
  if (!processCards?.length) return null
  return (
    <section>
      <div>
        <h2 className={styles.processHeader}>
        {header}
        </h2>
        <div className={styles.processCardGrid }>
          {processCards?.map((el, idx) => {
            return (
              <ProcessCard
                stepNumber={el.stepNumber}
                image={el?.video?.src || el.image?.src}
                title={el.title}
                imageAltText = {el?.video?.alt || el.image?.alt}
                video={el?.video && true}
                bodyCopy={el.body}
                expandedCopy={el.expanded}
                key={idx}
                stepAlignment={stepAlignment}
                titleColor={theme}
                buttonTittle={buttonTittle}
                arrowColor={theme}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FourStepProcess