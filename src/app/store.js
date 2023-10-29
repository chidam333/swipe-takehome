import {configureStore} from '@reduxjs/toolkit'
import currentReducer from './currentSlice'
import formReducer from './formSlice'
import allReducer from './allSlice'

export default configureStore({
    reducer:{
        current: currentReducer,
        form:formReducer,
        all:allReducer,
    }
})