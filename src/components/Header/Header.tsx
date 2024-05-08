import React, { FC } from 'react'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { HiOutlineUsers } from 'react-icons/hi2'
import { IoBulb } from 'react-icons/io5'
import { CiCircleQuestion } from 'react-icons/ci'

import styles from './Header.module.css'
import HeaderActions from '../HeaderActions/HeaderActions'
import { Container } from 'react-bootstrap'

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Container fluid>
          <nav className={styles.nav}>
            <div className={styles.navbar}>
              <div className={styles.brand}>Deals</div>
              <form>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search Pipedrive"
                />
                <button className={styles.buttonForm} type="button">
                  +
                </button>
              </form>
              <div className={styles.navbarActions}>
                <IoExtensionPuzzleOutline className={styles.navbarIcons} />
                <HiOutlineUsers className={styles.navbarIcons} />
                <IoBulb className={styles.navbarIcons} />
                <CiCircleQuestion className={styles.navbarIcons} />
                <div>LOGO</div>
              </div>
            </div>
          </nav>
          <HeaderActions />
        </Container>
      </header>
    </>
  )
}

export default Header
