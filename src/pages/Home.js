import  NavBar from '../components/Nav'
import AuthModal from '../components/AuthModal';
import { useState } from 'react'


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const[isSignUp, setIsSignUp] = useState(true)
  // showModal creates an  when u click the create account



  // authToken determines if you are signed in or not
  const authToken = false

  const handleClick = () => {
   setShowModal(true);
   setIsSignUp(true)
  }



  return (
    <div className="overlay">
    <NavBar
    minimal={false}
     setShowModal={setShowModal}
     showModal={showModal}
     setIsSignUp={setIsSignUp}
     />
  <div class="home" authToken={authToken}>

    <h1 className="primary-title">Swipe Right</h1>
    <button class='primary-button' onClick={handleClick}>
      {authToken ? 'Sign Out' : 'Create Account'}
      </button>

{showModal && (
  <AuthModal
  setShowModal={setShowModal}
   isSignUp={isSignUp} />
)}


  </div>
  </div>
  )
  }

  export default Home