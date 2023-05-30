import { CartIcon, SearchIcon } from '../../../SvgIcons/index'
import Link from 'next/link'
import NavList from '../Navlist'
import React, { useState } from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import { useCustomerState, useCustomerActions } from 'frontend-customer'
import { useCartState } from 'frontend-checkout'
import MobileNav from '../MobileNav'
import Image from 'next/image';
const MainNav = ({ navMenuLinks }) => {
  const { status, isLoggedIn } = useCustomerState()
  const [isSearchOpened, setIsSearchOpened] = useState(false)
  let [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const router = useRouter()

  const [logInText, setLogIntext] = useState('Accedi')
  const [logInLink, setLogInLink] = useState('/login')
  const { items } = useCartState()
  const { getCustomer } = useCustomerActions();

  const handleSearchSubmit = React.useCallback(query => router.push(`/search?q=${query}`), [router])
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoWrapper}>
        {!isMobileNavOpen &&<Link href={'/'} className={styles.logo}><Image
          alt="Bruno logo"
          src={"/logo/Bruno-White.png"}
          width={180}
          height={30}
        />
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
                  <Link href="/carrello">
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