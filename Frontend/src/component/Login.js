import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Login1 from "../images/Login.jpg";
// import Navbar from './Navbar'
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: result } = await axios.post(url, data);
      localStorage.setItem("token", result.token);
      console.log(result.message);
      window.location = "/Mainpage";
    } catch (error) {
      setError("Invalid Email or Password");
    }
  };
  return (
    <>
    {/* <Navbar/> */}
    <div>
      <div class="login">
        <img src={Login1} alt="" class="login__img" />

        <form action="" onSubmit={handleSubmit} class="login__form">
          <h1 class="login__title">Login</h1>

          <div class="login__content">
            <div class="login__box">
              <i class="ri-user-3-line login__icon"></i>

              <div class="login__box-input">
                <input
                  type="email"
                  name="email"
          value={data.email}
          id=""
          onChange={handleChange}
                  required
                  class="login__input"
                  placeholder=" "
                />
                <label for="" class="login__label">
                  Email
                </label>
              </div>
            </div>

            <div class="login__box">
              <i class="ri-lock-2-line login__icon"></i>

              <div class="login__box-input">
                <input
                  type="password"
                  name="password"
          value={data.password}
          onChange={handleChange}
                  required
                  class="login__input"
                  id="login-pass"
                  placeholder=" "
                />
                <label for="" class="login__label">
                  Password
                </label>
                <i class="ri-eye-off-line login__eye" id="login-eye"></i>
              </div>
            </div>
          </div>

          <div class="login__check">
            <div class="login__check-group">
              <input type="checkbox" class="login__check-input" />
              <label for="" class="login__check-label">
                Remember me
              </label>
            </div>

            <Link to="#" class="login__forgot">
              Forgot Password?
            </Link>
          </div>
          {error && <div>{error}</div>}
          <button
            type="submit"
            class="login__button"
          >
            Login
          </button>

          <p class="login__register">
            Don't have an account? <Link to="/Signin">Register</Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
