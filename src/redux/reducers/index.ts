import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface State {
    showMobileMenu: boolean
}

const initialState: State = {
    showMobileMenu: false
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        changeShowMobileMenu(state, action: PayloadAction<boolean>) {
            state.showMobileMenu = action.payload
        }
    }
})

export const { changeShowMobileMenu } = appSlice.actions

export default appSlice.reducer
