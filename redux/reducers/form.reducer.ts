import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialState {
  isLoading: boolean
  error: string
}

const initialState: initialState = {
  isLoading: false,
  error: ''
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    }
  }
})

export const { setError, setIsLoading } = formSlice.actions
export const formReducer = formSlice.reducer
