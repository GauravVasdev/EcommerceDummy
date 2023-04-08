import React from 'react'
import './updatepassword.scss'

const UpdatePassword = () => {
  return (
    <div className="updatePasswordOuterDiv">
      <div className="container-fluid">
      <p>Enter a new password below.</p>
        <div className="row">
          <div className="col-sm-6 leftDiv">
            <label htmlFor="newPassword">
              New password
            </label>
            <input type="text" id="newPassword" name="newPassword" required />
          </div>
          <div className="col-sm-6 rightDiv">
            <label htmlFor="reEnterNewPassword">
              Re-enter new password 
            </label>
            <input type="text" id="reEnterNewPassword" name="reEnterNewPassword" required />
          </div>
        </div>
        <button>SAVE</button>
      </div>
    </div>
  )
}

export default UpdatePassword
