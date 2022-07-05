import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncStorage } from 'react-native';
import accountApi from '../../api/accountApi';
import mealApi from '../../api/mealApi';

export type MealType = {
  name?: string;
  price?: Number;
  exp?: Number;
  url?: string;
};

type FetchError = {
  message: string;
};

const defaultValue: MealType = {};

export const getMeals = createAsyncThunk<
  any,
  any | undefined,
  { rejectValue: FetchError }
>('account/get-all', async (thunkApi) => {
  const response = await mealApi.getAll();

  if (response.status != 200) {
    return thunkApi.rejectWithValue({ message: 'Load Meal Failed' });
  } else {
    return response.data;
  }
});

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    meals: defaultValue,
    loading: false,
    errorMessage: 'this is message',
    isSignedIn: false,
    isRegSuccess: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMeals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMeals.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.meals = payload;
      state.isSignedIn = true;
    });
    builder.addCase(getMeals.rejected, (state, { payload }) => {
      state.loading = false;
      if (payload) state.errorMessage = payload.message;
    });
  }
});
