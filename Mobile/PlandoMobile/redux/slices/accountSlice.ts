import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncStorage } from 'react-native'
import accountApi from '../../api/accountApi'

export type UserType = {
    _id?: string
}
const defaultValue: UserType = {}

export type loginData = {
    email?: string
    password?: string
}

type FetchError = {
    message: string
}

export const login = createAsyncThunk<
    any,
    loginData,
    { rejectValue: FetchError }
>('account/login', async (data: loginData, thunkApi) => {
    const response = await accountApi.login(data)

    if (response.status != 200) {
        return thunkApi.rejectWithValue({ message: 'Login Failed' })
    } else {
        AsyncStorage.setItem('accessToken', response.data.token)
        return response.data
    }
})

export const getData = createAsyncThunk<
    any,
    string,
    { rejectValue: FetchError }
>('account/get-by-id', async (data: string | undefined, thunkApi) => {
    const response = await accountApi.getById(data)

    if (response.status != 200) {
        return thunkApi.rejectWithValue({ message: 'Login Failed' })
    } else {
        return response.data
    }
})

// export const edit = createAsyncThunk(
//   'account/edit',
//   // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
//   async (data, { rejectWithValue }) => {
//     const response = await accountApi.edit(data)
//     if (!response.accessToken) {
//       return rejectWithValue("Login Failed");
//     }
//     else {
//       return response;
//     }
//   }
// );

// export const getAccountWithID = createAsyncThunk(
//   'account/findOne',
//   async (data, { rejectedWithValue }) => {
//     const response = await accountApi.getAccountWithID(data)
//     if (response.status != 200) {
//       return rejectedWithValue(" Find account failed")
//     } else {
//       return response.data
//     }
//   }
// )

// export const getAccountWithEmail = createAsyncThunk(
//   'account/findOneWithEmail',
//   async (data, { rejectedWithValue }) => {
//     const response = await accountApi.getAccountbyEmail(data)
//     if (!response) {
//       return false
//     } else {
//       return response
//     }
//   }
// )

// export const register = createAsyncThunk(
//   "account/register",
//   async ({ dataForReg }, { rejectWithValue }) => {
//     try {
//       const response = await accountApi.register(dataForReg);
//       if (!response) {
//         return rejectWithValue();
//       } else {
//         return response;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   })

// export const updateAccount = createAsyncThunk(
//   "account/update",
//   async (data, { rejectedWithValue }) => {
//     const response = await accountApi.updateAccount(data)
//     if (!response) {
//       return rejectedWithValue(false)
//     } else {
//       return response.data
//     }
//   }
// )

// export const updatePassword = createAsyncThunk(
//   "account/resetPassword",
//   async (data, { rejectedWithValue }) => {
//     const response = await accountApi.updatePasswordForAccount(data.password, data.userID)
//     if (!response) {
//       return rejectedWithValue(false)
//     } else {
//       return response.data
//     }
//   }
// )

export const accountSlice = createSlice({
    name: 'account',
    initialState: {
        user: defaultValue,
        loading: false,
        errorMessage: 'this is message',
        isSignedIn: false,
        isRegSuccess: false,
    },
    reducers: {
        logout: (state) => {
            state.isSignedIn = false
            state.user = defaultValue
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.loading = false
            state.user = payload.data
            state.isSignedIn = true
        })
        builder.addCase(login.rejected, (state, { payload }) => {
            // We show the error message
            // and change `status` back to `idle` again.
            state.loading = false
            if (payload) state.errorMessage = payload.message
        })

        builder.addCase(getData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getData.fulfilled, (state, { payload }) => {
            state.loading = false
            state.user = payload
            state.isSignedIn = true
        })
        builder.addCase(getData.rejected, (state, { payload }) => {
            state.loading = false
            if (payload) state.errorMessage = payload.message
        })

        // [getAccountWithID.pending]: (state, action) => {
        //   state.loading = true;
        //   state.isRegSuccess = false;
        // },
        // [getAccountWithID.fulfilled]: (state, action) => {
        //   state.user = action.payload;
        //   state.loading = false;
        //   state.isRegSuccess = true;
        // },
        // [getAccountWithID.rejected]: (state, action) => {
        //   state.loading = false;
        //   state.error = action.payload.message;
        //   state.isRegSuccess = false;
        // },
        // [getAccountWithEmail.pending]: (state, action) => {
        //   state.loading = true
        // },
        // [getAccountWithEmail.fulfilled]: (state, action) => {
        //   state.loading = false;
        // },
        // [getAccountWithEmail.rejected]: (state, action) => {
        //   state.loading = false;
        // },
        // [updateAccount.pending]: (state) => {
        //   state.loading = true;
        //   console.log(" pending...");
        // },
        // [updateAccount.fulfilled]: (state, action) => {
        //   state.loading = false;
        //   state.user = action.payload;
        //   console.log(" fulfilled: " + state.user);
        // },
        // [updateAccount.rejected]: (state, action) => {
        //   state.loading = false;
        //   state.errorMessage = action.payload;
        //   console.log("rejected: " + state.errorMessage);
        // },
        // [updatePassword.pending]: (state) => {
        //   state.loading = true;
        //   console.log(" pending...");
        // },
        // [updatePassword.fulfilled]: (state, action) => {
        //   state.loading = false;
        //   console.log(" fulfilled: " + state.user);
        // },
        // [updatePassword.rejected]: (state, action) => {
        //   state.loading = false;
        //   state.errorMessage = action.payload;
        //   console.log("rejected: " + state.errorMessage);
        // },
    },
})
