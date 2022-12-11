import { createSlice } from '@reduxjs/toolkit'

export const journeySlice = createSlice({
  name: 'search',
  initialState: {
    journeyParams: {
        limit: 20,
        sortkey: "",
        searchkey:"",
        timeframe_start: "",
        timeframe_end: ""
    }
  },
  reducers: {
    setJourneyParams: (state, action) => {
        state.journeyParams = {...state.journeyParams, ...action.payload}
    }
}
})

// Action creators are generated for each case reducer function
export const { setJourneyParams } = journeySlice.actions

export default journeySlice.reducer