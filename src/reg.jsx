import { useState } from 'react'
import './reg.css'
import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg'
import searchBar from './search-bar.svg'

function Reg() {

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="header-elem">
            <img src={logo} alt="" />
            <Link to='/' id='header-p'><span id='blue-p'>Kino</span>area</Link>
          </div>
          <div className="header-elem">
            <ul>
              <Link to='/'><li>Afisha</li></Link>
              <Link to='/'><li>Media</li></Link>
              <Link to='/'><li>Films</li></Link>
              <Link to='/'><li>Actors</li></Link>
              <Link to='/'><li>News</li></Link>
              <Link to='/'><li>Charts</li></Link>
              <Link to='/'><li>Categories</li></Link>
            </ul>
          </div>
          <div className="header-elem">
            <ul>
              <Link to='/'><li><img src={searchBar} alt='' id='white-btn'/></li></Link>
              <Link to={`login`}><li><p id='blue-btn'>Log in</p></li></Link>
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="wrapper-elem">
            <div className="auth">
                <form action="GET">
                    <h1>Registration</h1>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Surname'/>
                    <input type="text" placeholder='Login'/>
                    <input type="password" placeholder='Password'/>
                    <input type="password" placeholder='Repeat password'/>
                    <input type="mail" placeholder='Phone number or e-mail'/>
                    <ul id='checkboxes'>
                        <li><input type="checkbox" /><p>Agree with <Link to='/'>terms of use</Link></p></li>
                        <li><input type="checkbox" /><p>Agree with data store</p></li>
                    </ul>
                    <Link to='/' id='active-btn'>Register</Link>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reg
