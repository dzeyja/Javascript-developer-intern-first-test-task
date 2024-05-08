import { FC } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

import styles from './Tabs.module.css'

const TabC: FC = () => {
  return (
    <div className={styles.tabs}>
      <Tabs
        defaultActiveKey="notes"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="notes" title="Notes">
          <p className={styles.tabText}>Take a note, @name</p>
        </Tab>
        <Tab eventKey="activity" title="Activity">
          Tab content for Profile
        </Tab>
        <Tab eventKey="call" title="Call">
          Tab content for Loooonger Tab
        </Tab>
        <Tab eventKey="email" title="Email">
          Tab content for Contact
        </Tab>
        <Tab eventKey="files" title="Files">
          Tab content for Contact
        </Tab>
        <Tab eventKey="docs" title="Documents">
          Tab content for Contact
        </Tab>
        <Tab eventKey="invoice" title="Invoice">
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  )
}

export default TabC
