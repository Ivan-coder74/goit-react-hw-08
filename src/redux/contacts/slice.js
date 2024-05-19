import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {addContactThunk, deleteContactThunk, fetchContactsThunk} from "../contacts/operations";
import { logOut } from "../auth/operations";

const INITIAL_STATE = {
    items: null,
    loading: false,
    error: null,
}
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchContactsThunk.fulfilled, (state, action) => { 
     
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(addContactThunk.fulfilled, (state, action) => {
      
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(deleteContactThunk.fulfilled, (state, action) => { 
   
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    })
    .addCase(logOut.fulfilled, () => {
      // console.log(state.items);
      return INITIAL_STATE;
    }) 
    .addMatcher(isAnyOf(fetchContactsThunk.pending, addContactThunk.pending, deleteContactThunk.pending), (state) => {
      state.loading = true;
      state.error = false;
    })
    .addMatcher(isAnyOf(fetchContactsThunk.rejected, addContactThunk.rejected, deleteContactThunk.rejected), (state) => {
      state.loading = false;
      state.error = true;
    })
})
export const contactsReducer = contactsSlice.reducer