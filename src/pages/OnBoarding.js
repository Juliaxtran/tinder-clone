import { useState } from "react"
import NavBar from "../components/Nav"


const OnBoarding = () => {
const[formData, setFormData] = useState({
  user_id: '',
  first_name: '',
  dob_day: '',
  dob_month: '',
  dob_year: '',
  show_gender: 'false',
  gender_identity: 'man',
  geneder_interest: 'woman',
  url: '',
  about: '',
  matches: []
})




  // one huge form
  // always import useState when you want to form

  const handleSubmit = () => {
    console.log("Click")
  }

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    console.log("value", value, "name", name)

    setFormData((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }

  console.log(formData);

  return (
    <>

      <NavBar
        minimal={true}
        setShowModal={() => { }}
        showModal={false}
      />

      <div className='onboarding'>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <section>

            <label htmlFor='first_name'> First Name </label>
            <input
              id='first_name'
              type='text'
              name='first_name'
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            <label > Birthday </label>
            <div className='multiple-input-container'>
              <input
                id='dob_day'
                type='number'
                name='dob_day'
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                id='dob_month'
                type='number'
                name='dob_month'
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                id='dob_year'
                type='number'
                name='dob_year'
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label > Gender </label>
            <div className='multiple-input-container'>
              <input
                id='man-gender-identity'
                type='radio'
                name='gender_identity'
                value="Man"
                onChange={handleChange}
                checked={formData.gender_identity === 'Man'}
              />
              <label htmlFor='man-gender-identity' > Man </label>
              <input
                id='woman-gender-identity'
                type='radio'
                name='gender_identity'
                value="Woman"
                onChange={handleChange}
                checked={formData.gender_identity === 'Woman'}
              />
              <label htmlFor='woman-gender-identity' >Woman </label>
              <input
                id='more-gender-identity'
                type='radio'
                name='gender_identity'
                value="More"
                onChange={handleChange}
                checked={formData.gender_identity === 'More'}
              />
              <label htmlFor='more-gender-identity' >More</label>
            </div>

            <label htmlFor='show-gender' >Show gender on my profile</label>
            <input
              id='show-gender'
              type='checkbox'
              name='show-gender'
              value="more"
              onChange={handleChange}
              checked={formData.show_gender}
            />





            <label>Show Me</label>
            <div className='multiple-input-container'>
              <input
                id='man-gender-interest'
                type='radio'
                name='gender_interest'
                value="Man"
                onChange={handleChange}
                checked={formData.gender_interest === 'Man'}
              />
              <label htmlFor='man-gender-interest' > Man </label>
              <input
                id='woman-gender-interest'
                type='radio'
                name='gender_interest'

                value="Woman"
                onChange={handleChange}
                checked={formData.gender_interest === 'Woman'}
              />
              <label htmlFor='woman-gender-interest' >Woman </label>
              <input
                id='everyone-gender-interest'
                type='radio'
                name='gender_interest'
                value="Everyone"
                onChange={handleChange}
                checked={formData.gender_interest === 'Everyone'}
              />
              <label htmlFor='everyone-gender-interest' >Everyone</label>
            </div>

            <label htmlFor="about">About Me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like long walks..."
              value={formData.about}
              onChange={handleChange}
            />

            <input type="submit" />




          </section>

          <section>
            <label htmlFor="about">Profile</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              <img src={formData.url} alt="profile-pic-preview"/>

            </div>


          </section>

        </form>

      </div>




    </>
  )
}

export default OnBoarding