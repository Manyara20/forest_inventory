import newRequest from "../utils/newRequest"
import { setErrorMessage } from "../utils/utilMethods";


export const login = async(dataToSend, dispatch,)=>{
    try {
        const res = await newRequest.post('/login', dataToSend)
        const data = res.data
        dispatch({type: 'UPDATE_CURRENT_USER', payload: data})
        dispatch({type: 'UPDATE_ALERT', payload: {open: true, severity: 'success', message: data.message}})
    } catch (error) {
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, severity: 'error', message: setErrorMessage(error)}
        })
    }

}

export const getLoginStatus = async (dispatch)=>{
    try {
        const {data}= await newRequest.get('/login')
        dispatch({type: 'UPDATE_CURRENT_USER', payload: data})
    } catch (error) {
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, severity: 'error', message: setErrorMessage(error)}
        })
    }
}