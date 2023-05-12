import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import { ExitIcon } from 'Components/SvgIcons'
import styles from './styles.module.css'

const MobileNav = ({ setIsMobileNavOpenProp, navMenuLinks }) => {
  const [activeLinksIndex, setActiveLinksIndex] = useState(null)

  const show = index => {
    if (navMenuLinks[index]?.subMenuLinks) {
      setActiveLinksIndex(index)
    }
  }

  useEffect(() => {
    const firstSubMenu = navMenuLinks.findIndex(link => link?.subMenuLinks?.length > 0)

    show(firstSubMenu)
  }, [navMenuLinks])

  return (
    <div className={styles.mobileNavDropdownContainer}>
      <div className={styles.exitButton} onClick={() => setIsMobileNavOpenProp(false)}>
        X
      </div>

      <div className={styles.mobileNavDropdownLeftContainer}>
        <div className={styles.mobileNavDropdownLeftWrapper}>
          {navMenuLinks?.map((link, index) => {
            return (
              <Link
                href={link.url}
                className={`${styles.mobileDropDownItem} ${activeLinksIndex === index && styles.mobileDropDownItemActive}`}
                onMouseOver={() => show(index)}
                key={index}
              >
                {link.displayText}
              </Link>
            )
          })}
        </div>
      </div>
      <div className={styles.mobileNavDropdownRightContainer}>
        <div className={styles.mobileNavDropdownRightWrapper}>
          {navMenuLinks[activeLinksIndex]?.subMenuLinks?.map((link,i) => {
            return (
              <Link href={link.url} className={styles.mobileDropDownItemRight} key={i}>
                {link.displayText}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileNav
