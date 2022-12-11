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
    },
    newJourney:{
      departure: "",
      arrival: "",
      departure_station_id: "",
      return_station_id: "",
      distance: "",
      duration: ""
    }
  },
  reducers: {
    setJourneyParams: (state, action) => {
        state.journeyParams = {...state.journeyParams, ...action.payload}
    },
    setNewjourney: (state, action) => {
      state.newJourney = {...state.newJourney, ...action.payload}
  },
}
})

// Action creators are generated for each case reducer function
export const { setJourneyParams, setNewjourney } = journeySlice.actions

export default journeySlice.reducer