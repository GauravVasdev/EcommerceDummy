import React from 'react'
import './lostpassword.scss'

const LostPassword = () => {
  return (
    <div className='lostPasswordOuterdiv'>
        <p>
            Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
        </p>
        <form className="formclass border border-0">
                <label htmlFor="resetpasswrd" className="requiredLabel">Username or email</label>
                <input type="text" id="resetpasswrd" name="resetpasswrd" className='w-50' required/>
                <button type="submit" name="resetpassword" value="resetpassword" className="registerandloginandresetBtn">RESET PASSWORD</button>
            </form>
    </div>
  )
}

export default LostPassword
