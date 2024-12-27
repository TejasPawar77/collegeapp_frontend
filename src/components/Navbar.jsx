import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdCloudUpload } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { useAuth } from '../store/auth';
import "./Navbar.css"

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            {/* <img src="" alt="" /> */}
            <p>LOGO</p>
          </div>

          <nav>
            {/* Instead of using list use anchor tag for navbar */}
            <div className="nav-link">
              <a href="/"><i> <IoHomeSharp /> </i> Home </a>
              <a href="/upload"><i><IoMdCloudUpload /></i> Upload</a>

              {/* This is ternary operator*/}
              {isLoggedIn ? (
                <a href="/logout"><i><FaUser /></i> Logout</a>
              ) : (
                <>
                <a href="/register"><i><FaCircleUser/></i> Register</a>
                <a href="/login"><i><FaUser/></i> Login</a>
                </>
              )}

            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
