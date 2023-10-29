import {createSlice,current} from "@reduxjs/toolkit"

export const currentSlice = createSlice({
    name:'current',
    initialState: {
        isOpen: false,
        currency: '$',
        currentDate: '',
        invoiceNumber: 1,
        dateOfIssue: '',
        billTo: '',
        billToEmail: '',
        billToAddress: '',
        billFrom: '',
        billFromEmail: '',
        billFromAddress: '',
        notes: '',
        total: '0.00',
        subTotal: '0.00',
        taxRate: '',
        taxAmmount: '0.00',
        discountRate: '',
        discountAmmount: '0.00',
        items:[]
    },
    reducers:{
        change: (state,newState)=>{
            console.log(newState.payload,"lol")
            for(let key in newState.payload){
                state[key] = newState.payload[key]
            }
            console.log({state:current(state)})
            return state
        }
    }
})

export const {change} = currentSlice.actions
export default currentSlice.reducer