import React, { FC } from 'react'
import { RiPushpin2Line } from 'react-icons/ri'
import { useAppSelector } from '../../hooks/redux'
import { BsThreeDots } from 'react-icons/bs'

import styles from './DealInfo.module.css'

const DealInfo: FC = () => {
  const { link, id } = useAppSelector((state) => state.job.job)

  return (
    <>
      {id ? (
        <div>
          <div className={styles.dealInfo}>
            <div className={styles.header}>
              <div className={styles.dateTime}>Today at 12:30 PM - Support</div>
              <div className={styles.dealActions}>
                <div className={styles.addComment}>Add a comment</div>
                <RiPushpin2Line />
                <BsThreeDots />
              </div>
            </div>
            <div>
              Job is created Link: <a href="/">{link}</a>
            </div>
          </div>
          <div className={styles.dealInfo}>
            <div className={styles.header}>
              <div className={styles.dateTime}>Today at 12:30 PM - Support</div>
              <div className={styles.dealActions}>
                <div className={styles.addComment}>Add a comment</div>
                <RiPushpin2Line />
                <BsThreeDots />
              </div>
            </div>
            <div>
              Job is created, but cannot be added to DataBase Job Link Link:{' '}
              <a href="/">{link}</a>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.deal}>
          <div>Deal created</div>
          <p>Today at 12:26 PM - Support (Web App)</p>
        </div>
      )}
    </>
  )
}

export default DealInfo
