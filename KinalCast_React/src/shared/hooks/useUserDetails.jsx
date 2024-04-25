import { useState } from "react"
import { logout } from "./useLogout.jsx"

//Obtener datos del localStorage
const getUserDetails = ()=>{
    const userDetails = localStorage.getItem('user')
    if(userDetails){
        return JSON.parse(userDetails)
    }
    return null
}

//Validar si el Usuario está logeado o no
export const useUserDetails = () => {
    const [userDetails, setuserDetails] = useState(getUserDetails())
    const logoutSys = ()=>{
        logout()
    }
  return {
    isLogged: Boolean(userDetails),
    username: userDetails?.username ? userDetails?.username : 'Guest',
    logoutSys
  }
}
