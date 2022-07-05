import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncStorage } from 'react-native';
import accountApi from '../../api/accountApi';
import PetTypeApi from '../../api/petTypeApi';

export type PetTypeType = {
  name?: String;
  requiredLevel?: Number;
  price?: Number;
  isPublished?: Boolean;
  url?: String;
};

type FetchError = {
  message: string;
};

const defaultValue: PetTypeType = {};

export const getPetTypes = createAsyncThunk<
  any,
  any | undefined,
  { rejectValue: FetchError }
>('account/get-all-pet-type', async (thunkApi) => {
  const response = await PetTypeApi.getAll();

  if (response.status != 200) {
    return thunkApi.rejectWithValue({ message: 'Load Pet Type Failed' });
  } else {
    return response.data;
  }
});

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    PetTypes: defaultValue,
    loading: false,
    errorMessage: 'this is message',
    isSignedIn: false,
    isRegSuccess: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPetTypes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPetTypes.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.PetTypes = payload;
      state.isSignedIn = true;
    });
    builder.addCase(getPetTypes.rejected, (state, { payload }) => {
      state.loading = false;
      if (payload) state.errorMessage = payload.message;
    });
  }
});
