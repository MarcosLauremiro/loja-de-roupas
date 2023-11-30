import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalContext/GlobalContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRout = ()=>{
    const {CurrentUser} = useContext(GlobalContext)

    return !CurrentUser ? <Outlet/> : <Navigate to='/adm/dashboard'/>
}