import { combineReducers } from "redux"
import { datalist } from "./ProductReducer"

const reducers = combineReducers({
    datas: datalist
})

export default reducers