import React, { FC } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Accords from '../Accords/Accords'

import styles from './Main.module.css'
import TabC from '../Tabs/Tabs'
import MainContent from '../MainContent/MainContent'

const Main: FC = () => {
  return (
    <Container fluid>
      <Row className={styles.wrapper}>
        <Col md={3} className={styles.sidebar}>
          <Accords />
        </Col>
        <Col md={9} className={styles.main}>
          <TabC />
          <MainContent />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
