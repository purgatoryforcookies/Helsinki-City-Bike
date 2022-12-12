import { createSlice } from '@reduxjs/toolkit'

export const journeySlice = createSlice({
  name: 'journeysetting',
  initialState: {
    journeyParams: {
        limit: 20,
        sortkey: "",
        searchkey:"",
        departure: "",
        arrival: "",
        newDeparture: "",
        newArrival:"",
        newDepartureStationId: "",
        newReturnStationId: "",
        newDistance:"",
        newDuration:""  
      },
    newJourney: {
        newDeparture: "",
        newArrival:"",
        newDepartureStationId: "",
        newReturnStationId: "",
        newDistance:"",
        newDuration:""  
      },
      
   
  },
  reducers: {
    setJourneyParams: (state, action) => {
        state.journeyParams = {...state.journeyParams, ...action.payload}
    },
    setNewJourney: (state, action) => {
      state.newJourney = {...state.newJourney, ...action.payload}
  },
  }
})

// Action creators are generated for each case reducer function
export const { setJourneyParams, setNewJourney } = journeySlice.actions

export default journeySlice.reducer