import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import "../style/landing.css";
import { apiEndpoint } from "../utils/apiEndpoint";

const Login = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value });
  };

  const history = useHistory();

  const handleLogin = async (e) => {
    const body = JSON.stringify(formData);
    console.log(body);
    const res = await axios({
      method: "POST",
      url: `${apiEndpoint}/api/auth`,
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    });
    const token = res.data.token;
    if (token) {
      localStorage.setItem("token", token);
      window.location = "/";
    }
  };

  return (
    <div>
      <div className="my-control">
        <label htmlFor="email" className="my-label">
          Email
        </label>
        <input
          type="text"
          className="
          my-2
          bg-brand-navy-blue
          text-brand-peach
          w-3/5 h-9 p-2 rounded focus:outline-none
          focus:ring-2 
          placeholder-brand-peach
          focus:ring-brand-pink"
          id="email"
          value={formData.email}
          placeholder="name@example.com"
          onChange={handleChange}
        />
      </div>
      <div className="my-control">
        <label htmlFor="password" className="my-label">
          Password
        </label>
        <input
          type="password"
          className="
          my-2
          text-brand-peach
          bg-brand-navy-blue 
          w-3/5 h-9 p-2 rounded focus:outline-none
          focus:ring-2 
          placeholder-brand-peach
          focus:ring-brand-pink"
          id="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end w-3/5">
        <p className="text-brand-peach text-sm underline cursor-pointer">
          Forgot password
        </p>
      </div>
      <div>
        <button
          onClick={() => handleLogin()}
          className="cursor-pointer
         text-lg focus:outline-none
          hover:bg-pink-300
          bg-brand-pink focus:ring-2
          focus:ring-brand-peach 
          text-brand-navy-blue 
          font-bold px-4 py-2 rounded"
        >
          LOGIN
        </button>
      </div>
      <div className="mt-4">
        <p className="text-brand-peach text-sm">
          Don't have an account sign up
          <span>
            <Link className="mx-1 underline cursor-pointer" to="/register">
              here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
