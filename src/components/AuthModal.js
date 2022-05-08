import { useState } from "react"


const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);


  // authroization module
  // will have form to allow people to sign up or log back in
  // h2 will show sign up form or signup form
  // if we are signing up show all 3
  // if we are login don;'t need to show all three


  console.log(email, password, confirmPassword)



  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (isSignUp = true && (password !== confirmPassword)) {
        setError('Password need to match')
      }
      console.log('make a post request to database')
    } catch (error) {
      console.log(error)
    }


}




  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>x</div>
      AuthModal
      <h2>{isSignUp ? 'Create Account' : 'Login In'}</h2>
      <p>By clicking LogIn, you agree to our terms. Learn how we process your data in our Privacy Policy </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)} />
        { isSignUp && (<input
          type="password-check"
          id="password-check"
          name="password-check"
          placeholder="confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)} />)}

        <input className='secondary-button' type="submit" />
        <p>{error}</p>
        <hr />
        <h2>GET THE APP</h2>




      </form>




    </div>
  )
}

export default AuthModal