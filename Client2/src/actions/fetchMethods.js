import newRequest from "../utils/newRequest"
import { setErrorMessage } from "../utils/utilMethods";

export const updateData = async(method, url, dataToSend, dispatch,)=>{

    const config = {method: method, url: url, data: dataToSend, };

    dispatch({type: 'OPEN_LOADING'});

    try {
        const res = await newRequest(config)
        const data = res.data
        dispatch({type: 'CLOSE_LOADING'});
        dispatch({type: 'UPDATE_ALERT', payload: {open: true, variant: 'success', duration: 5000, message: data}})
    } catch (error) {
        dispatch({type: 'CLOSE_LOADING'});
        dispatch({
            type: 'UPDATE_ALERT',
            payload: {open: true, variant: 'danger', message: setErrorMessage(error), duration: 5000}
        })
    }

}


export const handleError = (dispatch, errorParams)=>{
    dispatch({
        type: 'UPDATE_ALERT',
        payload: {open: true, variant: 'danger', message: setErrorMessage(errorParams), duration: 5000}
    })
}

export const fetchDataReactQuerry = async (dispatch, dest)=>{
        try {
          const res = await newRequest.get(dest); 
          console.log(dest)
          return res.data;
        } catch (error) {
          console.error('Error:', error);
          handleError(dispatch, error); 
          throw error; 
        }
}