import whiteLogo from '../images/white-tinder.png';
import colorLogo from '../images/color-logo-tinder.png'

// if we want our site minimal we want to pass the color full logo if not we want the white
// must pass down as a prop from home page
// if not login in we want to have a login button
// if you click on the showModal take login button off => disabled feature
const NavBar = ({ minimal, authToken, setShowModal, showModal, setIsSignUp}) => {

  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }

  return (
  <nav>
   <div className="logo-container">
     <img className="logo" src={ minimal ? colorLogo : whiteLogo}/>
     {!authToken && !minimal && <button className='nav-button'
     onClick={handleClick}
     disabled={showModal}
     >Login </button>}
   </div>
  </nav>
  )
  }

  export default NavBar