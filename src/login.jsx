import { useState } from 'react'
import './reg.css'
import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg'
import searchBar from './search-bar.svg'
import socForm01 from './soc-form01.svg'
import socForm02 from './soc-form02.svg'
import socForm03 from './soc-form03.svg'
import socForm04 from './soc-form04.svg'

function Login() {
  
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
                    <h1>Login or register</h1>
                    <input type="text" placeholder='Login, e-mail or phone'/>
                    <input type="password" placeholder='Password'/>
                    <Link to={`reg`} id='active-btn'>Login</Link>
                    <Link to={`reg`} id='passive-btn'>Registration</Link>
                    <Link to={`restorepass`} id='link'>Restore password</Link>
                </form>
                <div className="soc">
                    <ul>
                        <li><img src={socForm01} alt="" /></li>
                        <li><img src={socForm02} alt="" /></li>
                        <li><img src={socForm03} alt="" /></li>
                        <li><img src={socForm04} alt="" /></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
