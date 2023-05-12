import React, { useState } from 'react'
import styles from "./index.module.css"
import Link from 'next/link'
export default function NavList({navMenuLinks}) {
    const [visibleSubItemsIndex, setVisibleSubItemsIndexes] = useState()

    const show = index => {
      setVisibleSubItemsIndexes(index)
    }
    const hide = () => {
      setVisibleSubItemsIndexes(null)
    }
    return(
        <div className={styles.navListContainer}>
        {navMenuLinks?.map((item, index) => (
          <div className={styles.container} key={index}>
            <Link href={item.url} onMouseOver={() => show(index)} className={styles.navItem} >
              {item.displayText}
            </Link>
            {item?.subMenuLinks?.length > 0 && visibleSubItemsIndex === index && (
              <div className={styles.navItemDropdownContainer}>
                {item.subMenuLinks.map((sub,i) => {
                  return (
                    <Link href={sub.url} className={styles.navItem} key={i}>
                      {sub.displayText}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    )
}