import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setAddJob } from '../../store/slices/jobSlice/jobSlice'
import Forma from '../Form/Form'
import { IJob } from '../../types/types'
import { generateId } from '../../utils/generateId'

import styles from './Modal.module.css'

interface ModalkaProps {
  active: boolean
  setActive: (value: boolean) => void
}

const Modalka: FC<ModalkaProps> = ({ active, setActive }) => {
  const [jobInfo, setJobInfo] = useState<IJob>({
    id: generateId(),
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    jobSource: '',
    jobType: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    date: '',
    startTime: '',
    endTime: '',
    link: '',
  })

  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (
      jobInfo.firstName &&
      jobInfo.lastName &&
      jobInfo.phone &&
      jobInfo.email &&
      jobInfo.jobSource &&
      jobInfo.jobType &&
      jobInfo.address &&
      jobInfo.city &&
      jobInfo.state &&
      jobInfo.startTime &&
      jobInfo.endTime &&
      jobInfo.zipCode
    ) {
      dispatch(setAddJob(jobInfo))
    } else {
      alert('Заполните все поля')
    }
  }

  return (
    <div
      onClick={() => setActive(false)}
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
        <Forma
          jobInfo={jobInfo}
          setJobInfo={setJobInfo}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Modalka
