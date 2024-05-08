import React, { FC } from 'react'
import MySelect from '../MySelect/MySelect'
import img from '../../images/icons8-данные-о-здоровье-50.png'

import styles from './HeaderActions.module.css'

const days: number[] = []

for (let i = 0; i < 16; i++) {
  days.push(i + 1)
}

const HeaderActions: FC = () => {
  return (
    <>
      <div className={styles.headerActions}>
        <div className={styles.left}>Test Deals</div>
        <div className={styles.right}>
          <MySelect
            className={styles.selectFollower}
            disabled={true}
            selected={true}
            name="1 follower"
          />
          <MySelect
            className={styles.select}
            disabled={true}
            selected={true}
            name="Won"
          />
          <button className={styles.lostBtn} type="button">
            Lost
          </button>
          <button className={styles.additionaly} type="button">
            ...
          </button>
        </div>
      </div>
      <ul className={styles.days}>
        {days.map((el, i) => (
          <li key={i}>
            <button>Days 0</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HeaderActions
