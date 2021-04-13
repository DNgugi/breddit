import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    queryReddit: (state, action) => {
      state.search = action.payload;

      return state;
    }
  }
});

// Action creators are generated for each case reducer function
//export const { showResults } = searchSlice.actions

export default searchSlice.reducer