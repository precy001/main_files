import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const url = "https://ocds-project.onrender.com/auth/users/";
  const [data, setData] = useState({
    username: "",
    date_of_birth: "",
    user_type: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [error, setError] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", data);
    axios.post(url, {
      username: data.username,
      date_of_birth: data.date_of_birth,
      user_type: data.user_type,
      email: data.email,
      password: data.password,
      re_password: data.re_password
    })
    .then(res => {
      console.log("Response data:", res.data);
      setError(null);  // Clear any previous errors on successful submission
    })
    .catch(err => {
      console.error("Error during form submission:", err);
      if (err.response) {
        console.error("Full error response:", err.response);
        console.error("Error response data:", err.response.data);

        
        const responseData = err.response.data;
        let errorMsg = "An error occurred during submission.";
        
        if (responseData.username) {
          errorMsg = responseData.username[0]; 
        } else if (responseData.email) {
          errorMsg = responseData.email[0];
        } else if (responseData.detail) {
          errorMsg = responseData.detail;
        }

        setError(errorMsg);
      } else {
        setError(err.message);
      }
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [id]: value
    }));
    console.log("Updated form data:", { ...data, [id]: value });
  };

  return (
    <div className="form-container">
      <form className="form" method="post" onSubmit={submit}>
        <p className="form-title">Create a new account</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            id="username"
            value={data.username}
          />
          <input
            type="date"
            placeholder='Date of Birth'
            name="date_of_birth"
            onChange={handleChange}
            id="date_of_birth"
            value={data.date_of_birth}
          />
        </div>
        <div className="input-container">
          <select
            className='select-container'
            name="user_type"
            onChange={handleChange}
            id="user_type"
            value={data.user_type}
          >
            <option value="" disabled>Select Your category</option>
            <option value="ST">ST</option>
            <option value="MT">MT</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            id="email"
            value={data.email}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Create a password"
            name="password"
            onChange={handleChange}
            id="password"
            value={data.password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="re_password"
            onChange={handleChange}
            id="re_password"
            value={data.re_password}
          />
        </div>
        <button type="submit" className="submit" name="submit">
          Sign up
        </button>
        {error && <p className="error">Error: {error}</p>}
        <p className="signup-link">
          Already have an account?
          <a href="sign-in.html">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
