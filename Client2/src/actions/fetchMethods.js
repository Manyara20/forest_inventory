import newRequest from "../utils/newRequest"
import { setErrorMessage } from "../utils/utilMethods";

export const updateData = async(method, url, dataToSend, dispatch,)=>{

    const config = {method: method, url: url, data: dataToSend, };

    try {
        const res = await newRequest(config)
        const data = res.data
        dispatch({type: 'UPDATE_ALERT', payload: {open: true, variant: 'success', duration: 5000, message: data}})
    } catch (error) {
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, variant: 'danger', message: setErrorMessage(error), duration: 5000}
        })
    }

}