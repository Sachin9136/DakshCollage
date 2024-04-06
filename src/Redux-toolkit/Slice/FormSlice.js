import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {createContact } from "../../Componanats/api/api_base";
export const token = sessionStorage.getItem("accessToken")

// const headers = {
//     Authorization: `Bearer ${token}`,
// };
// create form
export const createformApi = createAsyncThunk('createform/form', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(createContact, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})




const formSlice = createSlice({
    name: 'form',
    initialState: {
        forms: [],
        status: 'idle',
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //create form
            .addCase(createformApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createformApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';

            })
            .addCase(createformApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })

    }
});

export default formSlice.reducer;
