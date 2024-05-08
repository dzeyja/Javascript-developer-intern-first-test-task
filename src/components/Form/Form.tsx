import React, { ChangeEvent, FC, FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'
import { IJob } from '../../types/types'

import styles from './Form.module.css'

interface FormaProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  jobInfo: IJob
  setJobInfo: React.Dispatch<React.SetStateAction<IJob>>
}

const Forma: FC<FormaProps> = ({ jobInfo, setJobInfo, handleSubmit }) => {
  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group className={styles.formG}>
        <h3>Client details</h3>
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, firstName: e.target.value })
          }
          placeholder="First name"
        />
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, lastName: e.target.value })
          }
          placeholder="Last name"
        />
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, phone: e.target.value })
          }
          placeholder="Phone"
        />
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, email: e.target.value })
          }
          placeholder="Email (optional)"
        />
      </Form.Group>
      <Form.Group className={styles.formG}>
        <h3>Job details</h3>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setJobInfo({ ...jobInfo, jobType: e.target.value })
          }
          className={styles.select}
        >
          <option selected disabled>
            Select type
          </option>
          <option value="recall job">Recall Job</option>
        </select>
        <select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setJobInfo({ ...jobInfo, jobSource: e.target.value })
          }
          className={styles.select}
        >
          <option selected disabled>
            GL Pinellas
          </option>
          <option value="Test Value"> Test value</option>
        </select>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Job description (optional)"
        />
      </Form.Group>
      <Form.Group className={styles.formG}>
        <h3>Service location</h3>
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, address: e.target.value })
          }
          placeholder="Address"
        />
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, city: e.target.value })
          }
          placeholder="City"
        />
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, state: e.target.value })
          }
          placeholder="State"
        />
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, zipCode: e.target.value })
          }
          placeholder="Zip code"
        />
        <select className={styles.select}>
          <option selected disabled>
            Area
          </option>
        </select>
      </Form.Group>
      <Form.Group className={styles.formG}>
        <h3>Shceduled</h3>
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, date: e.target.value })
          }
          type="date"
          placeholder="hello"
        />
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, startTime: e.target.value })
          }
          type="time"
          placeholder="start time"
        />
        <Form.Control
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setJobInfo({ ...jobInfo, endTime: e.target.value })
          }
          type="time"
          placeholder="start time"
        />
        <select className={styles.select}>
          <option selected disabled>
            Test select
          </option>
        </select>
      </Form.Group>
      <Button type="submit" variant="success">
        Create a job
      </Button>
    </Form>
  )
}

export default Forma
