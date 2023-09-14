import newRequest from "../utils/newRequest"
import { setErrorMessage } from "../utils/utilMethods";

export const login = async(dataToSend, dispatch,)=>{
    dispatch({type: 'OPEN_LOADING'});

    try {
        const res = await newRequest.post('/login', dataToSend)
        const data = res.data
        dispatch({type: 'UPDATE_CURRENT_USER', payload: data})
        dispatch({type: 'CLOSE_LOADING'});
        dispatch({type: 'UPDATE_ALERT', payload: {open: true, variant: 'success', duration: 5000, message: data.message}})
    } catch (error) {
        dispatch({type: 'CLOSE_LOADING'});
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, variant: 'danger', message: setErrorMessage(error), duration: 5000}
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
            payload: {open: true, variant: 'danger', message: setErrorMessage(error), duration: 5000}
        })
    }
}

export const logout = async(dispatch, navigate)=>{
    try {
        const {data}= await newRequest.delete('/login')
        dispatch({type: 'UPDATE_CURRENT_USER', payload: {loggedIn: false}})
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, variant: 'success', message: data, duration: 5000}
        })
        navigate('/')
    } catch (error) {
        console.log(error)
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, variant: 'danger', message: setErrorMessage(error), duration: 5000}
        })
    }
}