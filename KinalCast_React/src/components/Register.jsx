import {
  emailValidationMessage,
  validateEmail,
  usernameValidationMessage,
  validateUsername,
  passwordValidationMessage,
  validatePassword,
  validatePasswordConfirm,
  passwordConfirmValidationMessage
} from "../shared/validators/input.validator.js"
import { Input } from "./Input.jsx"
import { useState } from "react"
import axios from "axios"

export const Register = ({ switchAuthHandled }) => {

  //Código momentaneo
    const apiURL = 'http://localhost:2656/twitch/v1/'
  //----------------


  const [formData, setformData] = useState(
    {
      email: {
        value: '',
        isValid: false,
        showError: false
      },
      username: {
        value: '',
        isValid: false,
        showError: false
      },
      password: {
        value: '',
        isValid: false,
        showError: false
      },
      passwordConfirm: {
        value: '',
        isValid: false,
        showError: false
      }
    }
  )

  const onValueChange = (value, field) => {
    setformData((prevData) => (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          value
        }
      }
    ))
  }

  const handlerValidationOnBlur = (value, field) => {
    let isValid = false
    switch (field) {
      case 'email':
        isValid = validateEmail(value)
        break;

      case 'username':
        isValid = validateUsername(value)
        break;

      case 'password':
        isValid = validatePassword(value)
        break;

      case 'passwordConfirm':
        isValid = validatePasswordConfirm(formData.password.value, value)
        break;

      default:
        break;
    }
    setformData((prevData) => (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          isValid,
          showError: !isValid
        }
      }
    ))
  }
  const handlerRegister = async (e) => {
    //Codigo momentaneo
    e.preventDefault()
    const body = {
      email: formData.email.value,
      username: formData.username.value,
      password: formData.password.value
    }
    try {
      const {data} = await axios.post(`${apiURL}auth/register`,body)
      console.log(data)
    } catch (err) {
      return{
        error: true,
        err
      }
    }
    // -----------------
  }
  const isSubmitButtonDisable = 
        !formData.email.isValid ||
        !formData.username.isValid ||
        !formData.password.isValid ||
        !formData.passwordConfirm.isValid
  return (
    <div className="register-container">
      <form className="auth-form" onSubmit={handlerRegister}>
        <Input
          field='email'
          label='Email'
          value={formData.email.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handlerValidationOnBlur}
          showErrorMessage={formData.email.showError}
          validationMessage={emailValidationMessage}
        />

        <br />
        <Input
          field='username'
          label='Username'
          value={formData.username.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handlerValidationOnBlur}
          showErrorMessage={formData.username.showError}
          validationMessage={usernameValidationMessage}
        />

        <br />
        <Input
          field='password'
          label='Password'
          type='password'
          value={formData.password.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handlerValidationOnBlur}
          showErrorMessage={formData.password.showError}
          validationMessage={passwordValidationMessage}
        />

        <br />
        <Input
          field='passwordConfirm'
          label='PasswordConfirm'
          type='password'
          value={formData.passwordConfirm.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handlerValidationOnBlur}
          showErrorMessage={formData.passwordConfirm.showError}
          validationMessage={passwordConfirmValidationMessage}
        />

        <button disabled={isSubmitButtonDisable}>
          Register
        </button>
      </form>
      <span className="auth-span-text" onClick={switchAuthHandled}>
        ¿Ya tienes una Cuenta?<br />
        <a href="https://www.google.com/?hl=es"><b>Inicia sesión aquí</b></a>
      </span>
    </div>
  )
}
