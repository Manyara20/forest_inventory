import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useValue } from '../context/ContextProvider'
import PropTypes from 'prop-types'

 export const PrivateAdminRoutes = () => {

    const {state: {currentUser},}= useValue();

    const location = useLocation()

    return(
        currentUser?.role === 3000|| currentUser?.role===2000
         ? < Outlet /> 
         : currentUser
         ? <Navigate to="/unauthorized" state={{from: location}} replace />
         : <Navigate to="/login" state={{from: location}} replace />
    )
}

export const PrivateLoginRoutes = () => {

    const location = useLocation()
    
    const {state: {currentUser},}= useValue();

    return(
        currentUser
         ? < Outlet /> 
         : <Navigate to="/login" state={{from: location}} replace />
    )
}

export const PrivateSuperAdminRoutes = ()=>{
    const location = useLocation()
    const {state: {currentUser},}= useValue();

    return(
        currentUser?.role===3000
        ? < Outlet /> 
        : currentUser
        ? <Navigate to="/unauthorized" state={{from: location}} replace />
        : <Navigate to="/login" state={{from: location}} replace />
    )
}

export const NonAuthRoutes = ()=>{
    const location = useLocation()
    const {state: {currentUser},}= useValue();

    return(
        !currentUser
        ? < Outlet /> 
        : 
        <Navigate to="/" state={{from: location}} replace />
    )
}

export const NonPermissionRoutes=({permissionNumber})=>{

    const location= useLocation();

    const {state: {currentUser},}= useValue();

    const permissionsArray = currentUser?.permissions

    console.log(permissionsArray)

    return(
        <>
        {
            (permissionsArray?.includes(permissionNumber)||permissionsArray?.includes("13")) ? < Outlet />
            : currentUser
            ? <Navigate to="/unauthorized" state={{from: location}} replace />
            : <Navigate to="/login" state={{from: location}} replace />
        }
        </>
    )
}

NonPermissionRoutes.propTypes = {
    permissionNumber: PropTypes.number
}