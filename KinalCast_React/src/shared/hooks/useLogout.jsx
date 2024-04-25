export const logout = () => {
    localStorage.removeItem('user')//Eliminar solo 1 campo
    //localStorage.clear()//Elimina todos los campos del localstorage
    window.location.href = '/channels'
}