import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  console.log("Login component mounted");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

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
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, token } = data;
      if (success) {
        handleSuccess(message);
        // Save token to localStorage as well for the other app to see
        localStorage.setItem("token", token);
        setTimeout(() => {
          // Redirect to the dashboard app on port 3001
          window.location.href = "http://localhost:3001";
        }, 1000);
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
    });
  };

  return (
    <div className="container mt-5 p-5">
      <div className="row p-5 justify-content-center">
        <div className="col-5 p-5 border rounded shadow-sm bg-light">
          <h1 className="mb-4 fs-2 text-center">Login account</h1>
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
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
