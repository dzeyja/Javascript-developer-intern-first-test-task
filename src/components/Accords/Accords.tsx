import React, { FC, useState } from 'react'
import { Accordion, Button, Modal } from 'react-bootstrap'
import { GrPowerReset } from 'react-icons/gr'

import styles from './Accords.module.css'
import Modalka from '../Modal/Modal'
import { useAppSelector } from '../../hooks/redux'
import JobList from '../JobList/JobList'

const Accords: FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false)

  const job = useAppSelector((state) => state.job.job)

  return (
    <>
      <Accordion alwaysOpen defaultActiveKey="2" className={styles.acc}>
        <Accordion.Item className={styles.accordion} eventKey="0">
          <Accordion.Header>Test</Accordion.Header>
          <Accordion.Body>
            <Button variant="success">Test</Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={styles.accordion} eventKey="2">
          <Accordion.Header>Workiz</Accordion.Header>
          <Accordion.Body>
            <Button variant="success" onClick={() => setModalActive(true)}>
              NEW Create a job
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={styles.accordion} eventKey="2">
          <Accordion.Header>Details</Accordion.Header>
          <Accordion.Body>
            {/* Информация о работе */}
            <JobList job={job} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modalka active={modalActive} setActive={setModalActive} />
    </>
  )
}

export default Accords
