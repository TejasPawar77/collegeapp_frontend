import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Added import
import "../index.css"
import { useAuth } from '../store/auth';


export const Register = () => {
   const [formData, setFormData] = useState({
     email: '',
     password: '',
     isAdmin: '',
   });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // --- handleSubmit ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const PUBLIC_BACKEND_API = import.meta.env.VITE_PUBLIC_BACKEND_API;

    try {
        const URL = `${PUBLIC_BACKEND_API}/auth/register`;
        const response = await fetch(URL,{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if(response.ok){
        const data = await response.json();
        {/* Storing token to localstroage */}
        // localStorage.setItem("authtoken", data.data.authToken);
        // localStorage.setItem("refreshtoken", data.data.refreshToken);

        // storeTokenInLS('authToken' ,data.data.authToken);
        // storeTokenInLS('refreshToken' ,data.data.refreshToken);
        }

        toast.success("Registration successful!", {
            position: 'top-right',
            autoClose: 2000,
        });

        // console.log(data);
        navigate('/');
    } catch (error) {
        console.log("Error details: ", error);
        toast.error("Registration Unsuccessful! " + error.message, {
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
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="/images/register.png"
                  alt="a girl is trying to do registration"
                  width="500"
                  height="500" />
              </div>
      
              {/* ---- Registration Form ---- */}
              <div className="registration-form">
                <h1 className="main-heading">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Here is the checkbox button for teachers*/}
                  <div>
                    <label htmlFor="isAdmin">Teachers</label>
                    <input type="text" placeholder='ENTER TRUE IF YOU ARE A TEACHER' />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit" >Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
