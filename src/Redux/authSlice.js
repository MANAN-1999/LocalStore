import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUserDetail: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUserDetail} = authSlice.actions;

export default authSlice.reducer;
