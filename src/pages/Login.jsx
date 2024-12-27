import React, { useState } from 'react';
import "../index.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const PUBLIC_BACKEND_API = import.meta.env.VITE_PUBLIC_BACKEND_API;

    try {
      const URL = `${PUBLIC_BACKEND_API}/auth/login`;
      const response = await fetch(URL,{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

     if(response.ok){
      const data = await response.json();
      // console.log("res from server",data);
      // localStorage.setItem("authtoken", data.data.authToken);
      // localStorage.setItem("refreshtoken", data.data.refreshToken);

      // {console.log(data.data.authToken);} 
      storeTokenInLS('authToken' , data.data.authToken);
      storeTokenInLS('refreshToken' ,data.data.refreshToken);
      navigate('/');
     }

      toast.success("successful!", {
        position: 'top-right',
        autoClose: 2000,
      });

    
    } catch (error) {
      console.log(error);
      toast.error("Login Fail!", {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            {/* ---- Registration image ---- */}
            <div className='container grid grid-two-cols'>
              <div className="registration-image">
                <img src="/images/register.png"
                  alt="fill the login form"
                  width="500"
                  height="500" />
              </div>
            {/* ---- Login Form ---- */}
            <div className="registration-form">
              <h1 className="main-heading ">Login Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email"
                    name="email"
                    placeholder="Enter your Email"
                    id="email"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                   />
                </div>

                {/* Password  */}
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password"
                    name="password"
                    placeholder="Password"
                    id="Password" 
                    autoComplete="off" 
                    value={formData.password}
                    onChange={handleChange}
                    />
                </div>

                <br />
                <button className="btn"
                >Login</button>
              </form>
            </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
