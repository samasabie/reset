import React from 'react'
import "./Navbar.css";

export default function Navbar({ user, logout }) {
  const handleLogOut = () => {
    logout()
  }
  return (

    <header class="header">
      <div class='container'>
        <div class="logo">
             <img src="image/logo.png"/>
         </div>
        <nav class="nav">
          <ul>
            {!user ?
              <>

                <li class="item">
                  <a  href="/">Login</a>
                </li>
                <li class="item">
                  <a href="/signup">Signup</a>
                </li>
              </> : <>
                <ul class='list'>
                  <li >
                    <a href="/homepage">Home</a>
                  </li>
                  <li >
                    <a  href="/userprofile">Profile</a>
                  </li>
                  <li>
                    <a  href="/contact">Contact Us</a>
                  </li>
                </ul>
                <li class='logout'>
                  <button  onClick={handleLogOut}>LogOut</button>
                </li>
              </>}

          </ul>
       </nav>
      </div>
    </header>

  )
}
