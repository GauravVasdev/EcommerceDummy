import React from 'react'
import './lostpassword.scss'
import { Button } from 'react-bootstrap'

const LostPassword = () => {
  return (
    <div className='lostPasswordOuterdiv'>
        <p>
            Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
        </p>
        <form className="formclass border border-0">
                <label htmlFor="resetpasswrd" className="requiredLabel">Username or email</label>
                <input type="text" id="resetpasswrd" name="resetpasswrd" className='w-50' required/>
                <Button variant="outline-danger" type="submit" name="resetpassword" value="resetpassword" className="mt-3">RESET PASSWORD</Button>
            </form>
    </div>
  )
}

export default LostPassword
