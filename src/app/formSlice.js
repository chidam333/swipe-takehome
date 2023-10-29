import {createSlice,current} from "@reduxjs/toolkit"

export const formSlice = createSlice({
    name:'form',
    initialState:[0],
    reducers:{
        navigate: (state)=>{
            state[0] = !state[0]
            console.log(current(state))
        }
    }
})

export const {navigate} = formSlice.actions
export default formSlice.reducer