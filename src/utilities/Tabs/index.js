import React, { useState } from "react";
import styles from './styles.module.css'
const Tabs = ({ data,isTab,productColorTheme }) => {
  const [activeTab, setActiveTab] = useState(0)
  if (!data) return null
  let width = 0
  data.map(e => { width += (e.title.length * 11) })
  const handler = (value) => {
    setActiveTab(value)
  }
  return (
    <>
      {!isTab && <div className={styles.active} id="According">
        <div className={styles.app}>
          <div className={styles.box1}>
            <div className={styles.tabs} id={'productTab'} style={{ 'width': `${width}px` }}>
              {data && data.map((e, i) => {
                if (activeTab == i) {
                  return (
                    <div
                    key={i}
                      onClick={() => handler(i)}
                      className={styles.tab} style={{ 'color': productColorTheme }}
                    >
                      {e.title}
                      <div className={styles.hr} style={{ 'background-color': productColorTheme }}></div>
                    </div>
                  )
                } else {
                  return (
                    <div
                      onClick={() => handler(i)}
                      className={styles.tab}
                      key={i}
                    >
                      {e.title}
                      <div className={styles.hr}></div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div className={styles.contents}>
            <>
              {data && data.map((e, i) => {
                return (
                  <div
                  key={i}
                    className={activeTab == i ? styles.activeContent : styles.content}
                  >
                    <div
                          dangerouslySetInnerHTML={{ __html: e.details }}
                        />
                  </div>
                )
              })}
            </>
          </div>
        </div>
      </div>}
      {isTab &&
        <>
          <div className={styles.app}>
            <div className={styles.box2}>
              {data && data.map((e, i) => {
                if (activeTab == i) {
                  return (
                    <>
                      <div
                      key={i}
                        onClick={() => handler(i)}
                        className={styles.accordTitle} style={{ 'color': productColorTheme, 'background-color': '#F7F7F7' }}
                      >
                        <div className={styles.accordFlex}>
                          <div>{e.title}</div>
                          <div className={styles.upArrow} style={{ 'color': productColorTheme }}><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></div>
                        </div>
                      </div>
                      <div className={styles.accordDesc}>{e.details && <span
                          dangerouslySetInnerHTML={{ __html: e.details }}
                        />}</div>
                    </>
                  )
                } 
                else {
                  return (
                    <div
                    key={i}
                      onClick={() => handler(i)}
                      className={styles.accordTitle}
                    >
                      <div className={styles.accordFlex}>
                        <div>{e.title}</div>
                        <div className={styles.downArrow}><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></div>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </>
      }
    </>
  );
};
export default Tabs;
