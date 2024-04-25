import { useNavigate } from 'react-router-dom'
import logo from '../assets/img/EscudoPeque.svg'
import { useUserDetails } from '../shared/hooks/useUserDetails.jsx'

const NavLogo = () => {
    return (
        <div className="nav-logo-container">
            <img
                className="nav-logo"
                width='100%'
                height='100%'
                src={logo}
                alt="Logo.svg"
            />
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className='nav-nutton' onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
    const {isLogged, logoutSys} = useUserDetails()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logoutSys()
    }
    const handleNavigateToLogin=()=>{
        navigate('/auth')
    }
    return (
        <div className="nav-container">
            <NavLogo />
            <div className='nav-buttons-container'>
                <NavButton text='Browse' />
                {
                    !isLogged ? (
                        <NavButton text='Login' onClickHandler={handleNavigateToLogin}/>
                    ) : (
                        <div>
                            <NavButton text='Account' />
                            <NavButton text='LogOut' onClickHandler={handleLogout}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}