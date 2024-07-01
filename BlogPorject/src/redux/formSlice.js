// redux/formSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: '',
    email: '',
    phoneNumber: '',
    numberOfGuests: '',
    checkInDate: '',
    checkOutDate: '',
    branchName: '',
    roomName: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
        state = action.payload;
        return state;
    },
    resetForm: (state) => {
      return initialState
    }
  },
});

export const { setFormData, resetForm } = formSlice.actions;

export default formSlice.reducer;
