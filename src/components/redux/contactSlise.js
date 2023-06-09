import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(elem => elem.id !== action.payload.id);
        console.log(action.payload);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  // },
  //
  // [addContacts.pending]: handlePending,
  // [addContacts.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items.push(action.payload);
  // },
  // [addContacts.rejected]: handleRejected,
  // //
  // [deleteContact.pending]: handlePending,
  // [deleteContact.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   const index = state.items.findIndex(
  //     contact => contact.id === action.payload
  //   );
  //   state.items.splice(index, 1);
  // },
  // [deleteContact.rejected]: handleRejected,
});

export const contactsReducer = contactsSlice.reducer;
