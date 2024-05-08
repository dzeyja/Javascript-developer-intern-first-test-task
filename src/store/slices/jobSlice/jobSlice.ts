import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IJob } from '../../../types/types'

interface IState {
  job: IJob
}

const initialState: IState = {
  job: {
    id: 0,
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
    link: 'https://api.testlink.com',
  },
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setAddJob: (state, action: PayloadAction<IJob>) => {
      return { ...state, job: action.payload }
    },
  },
})

export default jobSlice.reducer

export const { setAddJob } = jobSlice.actions
