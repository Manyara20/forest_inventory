/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "./reducer"
import { getLoginStatus } from "../actions/userActions"

const initialState = {
  alert: {open: false, severity: 'info', message: ''},
  currentUser: null,
  openAlert: false, 
  loginStatus: false,
}

const Context = createContext(initialState)

export const useValue = () =>{
  return useContext(Context)
}

const ContextProvider = ({children}) => {

const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
  getLoginStatus(dispatch)
}, [])

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider> 
  )
}

export default ContextProvider