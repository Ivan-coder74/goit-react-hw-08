import { createAsyncThunk } from "@reduxjs/toolkit";
import {setToken, clearToken, apiCreateNewUser, apiLoginUser, apiLogoutUser, apiGetInfoUser} from "../../components/services/contactsAp";

export const register = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
        try {
            const data = await apiCreateNewUser(formData);
            setToken(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const logIn = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
        try {
            const data = await apiLoginUser(formData);
            setToken(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await apiLogoutUser();
            clearToken();
            return;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const getCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        try{
            const state = thunkAPI.getState();
            const token= state.auth.token;
            setToken(token);
            const data = await apiGetInfoUser();
            console.log(data);
            return data;
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
            console.log(error);
        }
    }
)