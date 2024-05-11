import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name : 'app',
    initialState : {
        'isMenuOpen' : true,
        'mainContainerWidth' : 'w-11/12'
    },
    reducers : {
        toggleMenu : (state,action)=>{
           state.isMenuOpen = !state.isMenuOpen;
           state.isMenuOpen ? state.mainContainerWidth = 'w-11/12' : state.mainContainerWidth = 'w-full';
        },
        closeMenu : (state) =>{
            state.isMenuOpen = false
            state.mainContainerWidth = 'w-full'
        }
    }
})

export const {toggleMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer