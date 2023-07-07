import { CartIcon, SearchIcon } from '../../../SvgIcons/index'
import Link from 'next/link'
import NavList from '../Navlist'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import MobileNav from '../MobileNav'
import Image from 'next/image';
import { useMatchMedia } from '@/utilities/Sections/Hooks/useMatchMedia'
const MainNav = ({ navMenuLinks,version }) => {
  const [isMobile] = useMatchMedia('(max-width: 380px)', true)
  const [isSearchOpened, setIsSearchOpened] = useState(false)
  let [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  let cartUrl = version == 'EU' ? '/carrello' : '/cart'
  const router = useRouter()

  const [logInText, setLogIntext] = useState(version == 'EU' ? 'Accedi' : 'Log in')
  const [logInLink, setLogInLink] = useState('/login')
  const items = [];

  const handleSearchSubmit = React.useCallback(query => router.push(`/search?q=${query}`), [router])
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoWrapper}>
        {!isMobileNavOpen && <Link href={'/'} className={styles.logo}>
          {!isMobile ? <Image
            alt="Bruno logo"
            src={"/logo/Bruno-White.avif"}
            width={180}
            height={30}
          /> : <Image
            alt="Bruno logo"
            src={"/logo/Bruno-White.avif"}
            width={120}
            height={20}
          />}
        </Link>}
        {false ? (
          <></>
          //   <SearchQueryInput
          //     closeSearch={() => setIsSearchOpened(false)}
          //     onSearchSubmit={handleSearchSubmit}
          //     isOpen={isSearchOpened}
          //   />
        ) : (
          <div className={styles.navItemsContainer}>
            <NavList navMenuLinks={navMenuLinks} />
            <div className={styles.MobileNavContainer}>
              {isMobileNavOpen ? (
                <MobileNav navMenuLinks={navMenuLinks} setIsMobileNavOpenProp={setIsMobileNavOpen} />
              ) : (
                <div onClick={() => setIsMobileNavOpen(true)}>
                  <div className={styles.burgerButtonContainer} onClick={() => setIsMobileNavOpen(true)}>
                    <button className={styles.burgerLineContainer}>
                      <span className={styles.burgerLineTop}></span>
                      <span className={styles.burgerLine}></span>
                      <span className={styles.burgerLineBottom}></span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.iconContainer}>
              <div onClick={() => setIsSearchOpened(true)}>
                {/* <SearchQueryInput onSearchSubmit={handleSearchSubmit} /> */}
                {/* <input type='text' /> */}
                <SearchIcon />
              </div>
              <div>
                <div className={styles.loginButton}>
                  <Link href={logInLink}>
                    <span className={styles.loginText}>{logInText}</span>
                  </Link>
                  <Link href={cartUrl}>
                    <CartIcon number={(items.length === 0) ? "" : items.length} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainNav