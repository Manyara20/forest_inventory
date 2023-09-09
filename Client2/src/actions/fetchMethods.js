import newRequest from "../utils/newRequest"
import { setErrorMessage } from "../utils/utilMethods";

export const updateData = async(method, url, dataToSend, dispatch,)=>{

    const config = {method: method, url: url, data: dataToSend, };

    try {
        const res = await newRequest(config)
        const data = res.data
        dispatch({type: 'UPDATE_ALERT', payload: {open: true, severity: 'success', message: data}})
    } catch (error) {
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, severity: 'error', message: setErrorMessage(error)}
        })
    }

}