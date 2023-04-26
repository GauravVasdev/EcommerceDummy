import React from "react";
import "./myaccount.scss";
import { NavLink } from "react-router-dom";
import { useCreateUser, useLoginUser } from "../../query/user/adduser/userquery";
import { useState } from "react";
import { Button } from "react-bootstrap";

const MyAccount = () => {

    const [registerFormData, setRegisterFormData] = useState({
      "username":"",
      "email":"",
      "password":""
    })

    const [loginFormData, setLoginFormData] = useState({
      "username":"",
      "password":""
    })

    const {mutateAsync: createMutateAsync} = useCreateUser()

    const {mutateAsync: loginMutateAsync} = useLoginUser()

    const registerLoginBtn = (e, action) => {
      e.preventDefault()
      if(action==="register"){
        createMutateAsync(registerFormData)
        setRegisterFormData({
          "username":"",
          "email":"",
          "password":""
        })  }
      else{
        loginMutateAsync(loginFormData)
        setLoginFormData({
          "username":"",
          "password":""
        }) 
      }
       
      // debugger
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
            value={loginFormData.username}
            onChange={e => setLoginFormData({...loginFormData,"username":e.target.value })}
            required
          />
          <label for="password" className="requiredLabel">
            Password
          </label>
          <input type="password" id="password" name="password" required 
          value={loginFormData.password}
          onChange={e => setLoginFormData({...loginFormData, "password":e.target.value})}/>
          <input
            type="checkbox"
            id="rememberme"
            name="rememberme"
            value="rememberme"
          />
          <label htmlFor="rememberme"> Remember me</label>
          <Button variant="outline-danger"
            className="login-btn mt-3"
            type="submit"
            name="login"
            value="login"
            onClick={e => registerLoginBtn(e,"login")}
          >
            LOGIN
          </Button>
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
          <Button variant="outline-danger"
            type="submit"
            name="register"
            value="register" 
             onClick={e => registerLoginBtn(e, "register")}
          >
            REGISTER
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
