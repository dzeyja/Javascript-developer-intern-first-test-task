import React, { FC } from 'react'

import styles from './HistoruCategory.module.css'

const HistoryCategories: FC = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.active}>All</div>
      <div>Notes (0)</div>
      <div>Activities (0)</div>
      <div>Email (0)</div>
      <div>Files</div>
      <div>Documents</div>
      <div>Invoices</div>
      <div>Changelog</div>
    </div>
  )
}

export default HistoryCategories
