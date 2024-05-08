import React, { FC } from 'react'
import { Container } from 'react-bootstrap'

import styles from './MainContent.module.css'
import HistoryCategories from '../HistoryCategories/HistoryCategories'
import DealInfo from '../DealInfoCart/DealInfo'

const MainContent: FC = () => {
  return (
    <Container fluid>
      <div>
        <h3>Focus </h3>
        <div className={styles.focusContent}>
          <p>No focus items yet</p>
          <p>
            Scheduled activities, pinned notes, email drafts
            <br />
            and scheduled emails will appear here.
          </p>
          <a className={styles.link} href="/">
            + Schedule an activity
          </a>
        </div>
      </div>

      <div>
        <h3>History </h3>
        <div className={styles.historyContent}>
          <HistoryCategories />

          <DealInfo />
        </div>
      </div>
    </Container>
  )
}

export default MainContent
