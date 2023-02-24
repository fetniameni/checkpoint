import { getProduct } from "../Actiontype/Actiontype"
const initialState={
  product:[]
}

const getreducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case getProduct:
            return {...state,product:payload}
        
        default:
            return state 
    }
}

export default getreducer;