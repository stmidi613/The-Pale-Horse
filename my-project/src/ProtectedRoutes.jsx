import { Outlet, Navigate } from 'react-router-dom';
import {Authenticated} from "./Login";

export default function ProtectedRoutes({Authenticated}){
    return (
        Authenticated ? <Outlet /> : <Navigate to="/login" />
    )
}


