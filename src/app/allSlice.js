import { createSlice, current } from "@reduxjs/toolkit";

export const allSlice = createSlice({
    name:"all",
    initialState:{},
    reducers:{
        push: (state,newState)=>{
            state[newState.payload.state.invoiceNumber] = newState.payload.state
            let temp = {...newState.payload.state}
            temp["isOpen"] = false
            state[newState.payload.state.invoiceNumber] = temp
        },
        del: (state,invoiceNumberWrapper)=>{
            let temp = {...state}
            delete temp[invoiceNumberWrapper.payload]
            return temp
        },
        modalSwitch:(state,invoiceNumberWrapper)=>{
            state[invoiceNumberWrapper.payload.no].isOpen = invoiceNumberWrapper.payload.action
            // console.log(current(state)) 
        }
    }
})

export const {push,del,modalSwitch} = allSlice.actions
export default allSlice.reducer