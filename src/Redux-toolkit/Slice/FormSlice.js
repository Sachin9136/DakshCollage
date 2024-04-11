import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {createContact } from "../../Componanats/api/api_base";
import { complainForm } from "../../Componanats/api/api_base";
import {studentFeedbackForm} from "../../Componanats/api/api_base";
import {alumniFeedbackForm} from "../../Componanats/api/api_base";
import {teacherFeedbackForm} from "../../Componanats/api/api_base";
import {parentsFeedbackForm} from "../../Componanats/api/api_base";
import {signup} from "../../Componanats/api/api_base";
import {login} from "../../Componanats/api/api_base";
export const token = sessionStorage.getItem("accessToken");

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

export const complainApi = createAsyncThunk('complainApi/form', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(complainForm, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const studentFeedbackFormApi = createAsyncThunk('studentFeedbackFormApi/form', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(studentFeedbackForm, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const alumniFeedbackFormApi = createAsyncThunk('alumniFeedbackFormApi/form', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(alumniFeedbackForm, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const teacherFeedbackFormApi = createAsyncThunk('teacherFeedbackFormApi/form', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(teacherFeedbackForm, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const parentsFeedbackFormApi = createAsyncThunk('parentsFeedbackFormApi/form', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(parentsFeedbackForm, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const signupApi = createAsyncThunk('signupApi/form', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(signup, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const loginApi = createAsyncThunk('loginApi/form', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(login, data)
        localStorage.setItem("accessToken", response.data.data.accessToken)
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

            //Complain form
            .addCase(complainApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(complainApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';

            })
            .addCase(complainApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })

            //student feedback form
            .addCase(studentFeedbackFormApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(studentFeedbackFormApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';

            })
            .addCase(studentFeedbackFormApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })

            //Alumni feedback form
            .addCase(alumniFeedbackFormApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(alumniFeedbackFormApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';
            })
            .addCase(alumniFeedbackFormApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })

            //teacher feedback form
            .addCase(teacherFeedbackFormApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(teacherFeedbackFormApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';
            })
            .addCase(teacherFeedbackFormApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })

            //parents feedback form
            .addCase(parentsFeedbackFormApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(parentsFeedbackFormApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';
            })
            .addCase(parentsFeedbackFormApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })

            // Sign up form
            .addCase(signupApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signupApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';
            })
            .addCase(signupApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })

            
            // login form
            .addCase(loginApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';
            })
            .addCase(loginApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
    }
});

export default formSlice.reducer;
