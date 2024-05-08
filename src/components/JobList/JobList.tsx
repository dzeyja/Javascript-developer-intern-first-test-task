import React, { FC } from 'react'
import { IJob } from '../../types/types'

import styles from './JobList.module.css'

interface JobListProps {
  job: IJob
}

const JobList: FC<JobListProps> = ({ job }) => {
  return (
    <ul className={styles.jobsInfo}>
      <li>
        <span>Address:</span> {job.firstName}
      </li>
      <li>
        <span>Job type:</span>
        {job.jobType}
      </li>
      <li>
        <span>Job source:</span> {job.jobSource}
      </li>
      <li>
        <span>Job date:</span> {job.date}
      </li>
      <li>
        <span>Job start time:</span> {job.startTime}
      </li>
      <li>
        <span>Job end time:</span> {job.endTime}
      </li>
      <li>
        <span>Job comment:</span>
      </li>
      <li>
        <span>Job ID:</span>
      </li>
      <li>
        <span>Job Linkz:</span>
      </li>
    </ul>
  )
}

export default JobList
