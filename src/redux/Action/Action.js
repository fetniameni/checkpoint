import {getProduct} from '../Actiontype/Actiontype'
import axios from 'axios'

export const getdata = ()=> async (dispatch) => {
      try {
        const res = await axios.get( "http://192.168.3.31:3333/api/getallpost" )
        dispatch( {
            type: getProduct,
            payload:res.data
        })
      } catch (error) {
        console.error(error);
      }
  };

  export const createdata = (data)=> async (dispatch) => {
   try {
    const res=await axios.post('http://192.168.3.31:3333/api/createnewpost',data)
    dispatch(getdata())
   } catch (error) {
    console.log(error)
   }
    }
  
    export const deletedata=(id)=> async (dispatch)=>{
     try {
   const res=await axios.delete('http://192.168.3.31:3333/api/deletepost/'+id)
   dispatch(getdata())
     } catch (error) {
      console.log(error)
     }
    }
    export const updatedata=(id,data)=>async (dispatch)=>{
      const res=await axios.put('http://192.168.3.31:3333/api/updatepost/'+id,data)
      dispatch(getdata())
      try {
        
      } catch (error) {
        console.log(error)
      }
    }

  