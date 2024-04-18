//Validación De Email
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

//Validación de Username
export const validateUsername = (username)=>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}

//Validación de Password
export const validatePassword = (password)=>{
    const regex = /^\S{6,12}$/
    return regex.test(password)
}

//Validación de Confirmación de Password
export const validatePasswordConfirm = (password, passwordConfirm)=>{
    return password === passwordConfirm
}

//----------------------
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const usernameValidationMessage = 'Nombre de Usuario Inválido, mínimo 3, máximo 8 caracteres. No se aceptan espacios vacíos'
export const passwordValidationMessage = 'La Contraseña debe tener enre 6 y 12 caracteres y no tener espacios vacíos'
export const passwordConfirmValidationMessage = 'La Contraseña No Coincide'

