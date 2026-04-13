import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  console.log("Signup component mounted");
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, token } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        setTimeout(() => {
          window.location.href = "http://localhost:3001";
        }, 2000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5 p-5">
      <div className="row p-5">
        <div className="col-7 p-5">
          <img
            src="media/images/signup.png"
            style={{ width: "100%" }}
            alt="Signup Illustration"
          />
        </div>
        <div className="col-5 p-5 border rounded shadow-sm bg-light">
          <h1 className="mb-4 fs-2">Signup account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={() => window.location.href = "http://localhost:3000"}>
              Submit
            </button>
            <div className="mt-3 text-center">
              Already have an account? <Link to={"/login"}>Login</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Signup;
