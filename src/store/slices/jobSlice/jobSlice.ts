import { createSlice } from '@reduxjs/toolkit'
import { IJob } from '../../../types/types'

interface IState {
  job: IJob
}

const initialState: IState = {
  job: {
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
  },
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setAddJob: (state, action) => {
      return { ...state, job: action.payload }
    },
  },
})

export default jobSlice.reducer

export const { setAddJob } = jobSlice.actions
