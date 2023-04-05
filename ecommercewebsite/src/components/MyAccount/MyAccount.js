import React, { useEffect } from "react";
import "./myaccount.css";
import { NavLink } from "react-router-dom";
import { useCreateUser } from "../../query/user/adduser/userquery";

const MyAccount = () => {
    const {mutateAsync} = useCreateUser()
    useEffect(() => {
        debugger
        mutateAsync({
            "username": "gauravVasdev",
            "email": "gauravvasdev@gmail.com",
            "password": "gaurav123"
          })
        debugger
      },[]);
  return (
    <div className="row outerdiv">
      <div className="col-sm-6 loginOuterDiv mt-5 ml-3">
        <h2>Login</h2>
        <form className="formclass">
          <label for="unameoreaddress" className="requiredLabel">
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
          <label for="rememberme"> Remember me</label>
          <button
            type="submit"
            name="login"
            value="login"
            className="registerandloginandresetBtn"
          >
            LOGIN
          </button>
          <NavLink to="/lostpassword" className="lostPasswordLink">
            Lost your password ?
          </NavLink>
        </form>
      </div>
      <div className="registerOuterDiv col-sm-6 mt-5 ml-3">
        <h2>Register</h2>
        <form className="formclass">
          <label for="uname" className="requiredLabel">
            Username
          </label>
          <input type="text" id="uname" name="uname" required />
          <label for="eaddress" className="requiredLabel">
            Email address
          </label>
          <input type="text" id="eaddress" name="eaddress" required />
          <label for="password" className="requiredLabel">
            Password
          </label>
          <input type="password" id="password" name="password" required />
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
            className="registerandloginandresetBtn"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
