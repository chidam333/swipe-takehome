import { createSlice, current } from "@reduxjs/toolkit";

export const allSlice = createSlice({
    name:"all",
    initialState:{},
    reducers:{
        push: (state,newState)=>{
            state[newState.payload.invoiceNumber] = newState.payload
            console.log(current(state))
        },
        del: (state,invoiceNumberWrapper)=>{
            let temp = {...state}
            delete temp[invoiceNumberWrapper.payload]
            return temp
        },
        modalSwitch:(state,invoiceNumberWrapper)=>{
            state[invoiceNumberWrapper.payload.no].isOpen = invoiceNumberWrapper.payload.action
            console.log(current(state)) 
        }
    }
})

export const {push,del,modalSwitch} = allSlice.actions
export default allSlice.reducer