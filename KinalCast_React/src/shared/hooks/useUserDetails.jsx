import { useState } from "react"
import { logout } from './useLogout.jsx'

//Obtener los datos del localstorage
const getUserDetails = ()=>{
  const userDetails = localStorage.getItem('user')
  if(userDetails){
    return JSON.parse(userDetails)
  }
  return null
}


//VALIDAR SI EL USUARIO ESTÁ EN LOGEADO O NO
export const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(getUserDetails())

  const logoutSys = ()=> {
    logout()
  }
  return {
    isLogged: Boolean(userDetails),
    username: userDetails?.username ? userDetails?.username : 'Guest',
    logoutSys
  }
}
