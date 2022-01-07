import { Outlet, Navigate } from 'react-router-dom'


export default function ProtectedRoutes({Authenticated}){
    return (
        Authenticated ? <Outlet /> : <Navigate to="/login" />
    )
}


