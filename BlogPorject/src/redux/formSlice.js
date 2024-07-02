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
    loading: false
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
    loadForm: (state) => {
      return { ...state, loading: true };
    },
    loadFormSuccess: (state) => {
      return { ...state, loading: false };
    },
  },
});

export const { setFormData, resetForm, loadForm, loadFormSuccess } = formSlice.actions;
export default formSlice.reducer;
