import React from "react";
import "./myaccount.scss";
import { NavLink } from "react-router-dom";
import { useCreateUser } from "../../query/user/adduser/userquery";
import { useState } from "react";

const MyAccount = () => {

    const [registerFormData, setRegisterFormData] = useState({
      "username":"",
      "email":"",
      "password":""
    })

    const {mutateAsync} = useCreateUser()

    const registerBtn = (e) => {
      e.preventDefault();
      mutateAsync(registerFormData)
      setRegisterFormData({
        "username":"",
        "email":"",
        "password":""
      })
      debugger
    }

  return (
    <div className="row outerdiv">
      <div className="col-lg-6 loginOuterDiv mt-5 ml-3">
        <h2>Login</h2>
        <form className="formclass">
          <label htmlFor="unameoreaddress" className="requiredLabel">
            Username or email address
          </label>
          <input
            type="text"
            id="unameoreaddress"
            name="unameoreaddress"
            required
          />
          <label for="password" className="requiredLabel">
            Password
          </label>
          <input type="password" id="password" name="password" required />
          <input
            type="checkbox"
            id="rememberme"
            name="rememberme"
            value="rememberme"
          />
          <label htmlFor="rememberme"> Remember me</label>
          <button
            type="submit"
            name="login"
            value="login"
          >
            LOGIN
          </button>
          <NavLink to="/lostpassword" className="lostPasswordLink">
            Lost your password ?
          </NavLink>
        </form>
      </div>
      <div className="registerOuterDiv col-lg-6 mt-5 ml-3">
        <h2>Register</h2>
        <form className="formclass">
          <label htmlFor="uname" className="requiredLabel">
            Username
          </label>
          <input type="text" id="uname" name="uname" value={registerFormData.username} onChange={e => setRegisterFormData({...registerFormData,"username":e.target.value})} required />
          <label htmlFor="eaddress" className="requiredLabel">
            Email address
          </label>
          <input type="text" id="eaddress" name="eaddress" value={registerFormData.email} onChange={e => setRegisterFormData({...registerFormData,"email":e.target.value})} required />
          <label htmlFor="password" className="requiredLabel">
            Password
          </label>
          <input type="password" id="password" name="password" value={registerFormData.password} onChange={e => setRegisterFormData({...registerFormData,"password":e.target.value})} required />
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span style={{ color: "red" }}>privacy policy.</span>
          </p>
          <button
            type="submit"
            name="register"
            value="register" 
             onClick={registerBtn}
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
