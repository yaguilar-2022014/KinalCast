import logo from '../assets/img/EscudoPeque.svg'

const NavLogo =()=>{
    return(
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

const NavButton = ({text, onClickHandler})=> {
    return(
        <span className='nav-nutton' onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const Navbar = () => {
  return (
    <div className="nav-container">
            <NavLogo/>
        <div>

        </div>
    </div>
  )
}
