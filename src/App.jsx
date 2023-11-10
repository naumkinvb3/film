import { useState } from 'react'
import './filmCard.css'
import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg'
import searchBar from './search-bar.svg'
import filmIcon01 from './film-icon01.png'
import filmIcon02 from './film-icon02.png'
import filmIcon03 from './film-icon03.png'
import arrow from './arrow.svg'
import like from './like.svg'
import dislike from './dislike.svg'
import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'
import playBtn from './play-btn.svg'
import desc01 from './desc01.svg'
import desc02 from './desc02.svg'
import menu from './menu.svg'
import whiteMenu from './white-menu.svg'

function App() {

  return (
    <>
      <div className="wrapper">
        <div className="header mobile-header">
          <div className="header-elem">
            <li><Link to='/'><img src={menu} alt="" id='white-btn'/></Link></li>
            <li><Link to='/'><img src={searchBar} alt='' id='white-btn'/></Link></li>
          </div>
          <div className="header-elem">
            <img src={logo} alt="" /><Link to='/' id='header-p'><span id='blue-p'>Kino</span>area</Link>
          </div>
          <div className="header-elem">
            <Link to={`login`}><li><p id='blue-btn'>Log in</p></li></Link>
          </div>
        </div>
        <div className="header">
          <div className="header-elem">
            <img src={logo} alt="" />
            <Link to='/' id='header-p'><span id='blue-p'>Kino</span>area</Link>
          </div>
          <div className="header mobile-header">
            <div className="header-elem">
              <h1 id='centered-elem'>Now in cinema <img src={whiteMenu} alt="" /></h1>
            </div>
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
            <li><Link to='/'><img src={searchBar} alt='' id='white-btn'/></Link></li>
              <Link to={`login`}><li><p id='blue-btn'>Log in</p></li></Link>
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="wrapper-elem">
            <div className="header">
              <div className="header-elem">
                <h1>Now in cinema</h1>
              </div>
              <div className="header-elem">
                <div className="split-line"></div>
              </div>
              <div className="header-elem">
                <ul>
                  <Link to='/'><li id='active'>All</li></Link>
                  <Link to='/'><li>Battle</li></Link>
                  <Link to='/'><li>Adventure</li></Link>
                  <Link to='/'><li>Traveling</li></Link>
                  <Link to='/'><li>Comedy</li></Link>
                  <Link to='/'><li>Fantasy</li></Link>
                  <Link to='/'><li>Trillers</li></Link>
                  <Link to='/'><li>Drama</li></Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper-elem">
            <div className="card-wrapper">
              <Link to={`filmCard`}><div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
            </div>
          </div>
          <div className="wrapper-elem">
            <Link to='/'><p id='transparent-btn'>View all</p></Link>
          </div>
          <div className="wrapper-elem">
            <div className="mobile-header mobile-arrow">
              <div className="header-elem">
                <h1>New trailers</h1>
              </div>
              <div className="header-elem">
                <Link to='/'><ul>
                    <li>All trailers</li>
                    <li><img src={arrow} alt="" /></li>
                </ul></Link>
              </div>
            </div>
          </div>
          <div className="wrapper-elem">
            <div className="header">
              <div className="header-elem">
                <h1>New trailers</h1>
              </div>
              <div className="header-elem">
                <Link to='/'><ul>
                    <li>All trailers</li>
                    <li><img src={arrow} alt="" /></li>
                </ul></Link>
              </div>
            </div>
          </div>
          <div className="wrapper-elem">
            <Link to='/'><img src={filmIcon02} alt="" id='big-image'/></Link>
          </div>
          <div className="wrapper-elem">
            <div className="header">
              <div className="header-elem">
                <h1>Film name for big image</h1>
              </div>
              <div className="header-elem">
                <ul className='likes-wrapper'>
                  <ul>
                    <Link to='/'><li><img src={like} alt="" /></li></Link>
                    <Link to='/'><li><img src={dislike} alt="" id='dislike' /></li></Link>
                  </ul>
                  <ul id='count'>
                    <li>Count</li>
                    <li>Count</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper-elem">
            <div className="header">
              <ul className='header-elem'>
                <li><img src={filmIcon03} alt="" id='slider-image'/></li>
                <li><img src={filmIcon03} alt="" id='slider-image'/></li>
                <li><img src={filmIcon03} alt="" id='slider-image'/></li>
                <li><img src={filmIcon03} alt="" id='slider-image'/></li>
                <li><img src={filmIcon03} alt="" id='slider-image'/></li>
                <li><img src={filmIcon03} alt="" id='slider-image'/></li>
                <li><img src={filmIcon03} alt="" id='slider-image'/></li>
              </ul>
            </div>
          </div>
          <div className="wrapper-elem">
            <div className="header">
              <div className="header-elem">
                <h1>Popular films</h1>
              </div>
              <div className="header-elem">
                <div className="split-line"></div>
              </div>
              <div className="header-elem">
                <ul>
                  <Link to='/'><li id='active'>All time</li></Link>
                  <Link to='/'><li>2023</li></Link>
                  <Link to='/'><li>2022</li></Link>
                  <Link to='/'><li>2021</li></Link>
                  <Link to='/'><li>2020</li></Link>
                  <Link to='/'><li>2019</li></Link>
                  <Link to='/'><li>2018</li></Link>
                  <Link to='/'><li>2017</li></Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper-elem">
            <div className="card-wrapper">
              <div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div>
              <div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div>
              <div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div>
              <div className="card">
                <img src={filmIcon01} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div>
            </div>
          </div>
          <div className="wrapper-elem">
            <ul className='header-elem centered'>
              <Link to='/'><li><img src={leftArrow} alt="" /></li></Link>
              <li>Current page / All pages</li>
              <Link to='/'><li><img src={rightArrow} alt="" /></li></Link>
            </ul>
          </div>
          <div className="wrapper-elem mobile-wrapper-elem">
            <div className="actor-card-wrapper">
              <div className="actor-card first-card">
                <ul id='top-text'>
                  <li><p id='yellow-p'>1st place</p></li>
                </ul>
                <ul id='bottom-text'>
                  <h2>Name Surname</h2>
                  <p id='grey-p'>Original name</p>
                  <p id='yellow-p'>Age</p>
                </ul>
              </div>
              <div className="actor-card second-card">
                <ul id='top-text'>
                  <li><p id='yellow-p'>2nd place</p></li>
                </ul>
                <ul id='bottom-text'>
                  <h2>Name Surname</h2>
                  <p id='grey-p'>Original name</p>
                  <p id='yellow-p'>Age</p>
                </ul>
              </div>
            </div>
          </div>
          <div className="mobile-wrapper-elem">
            <div className="actor-card third-card">
              <div className="list-wrapper">
                <ul id='header-elem'>
                  <h2>Name Surname</h2>
                  <p id='grey-p'>Original name</p>
                  <p id='yellow-p'>Age</p>
                </ul>
                <ul id='header-elem'>
                  <li><p id='yellow-p'>3rd place</p></li>
                </ul>
              </div>
              <div className="wide-line"></div>
              <div className="list-wrapper">
                <ul id='header-elem'>
                  <h2>Name Surname</h2>
                  <p id='grey-p'>Original name</p>
                  <p id='yellow-p'>Age</p>
                </ul>
                <ul id='header-elem'>
                  <li><p id='yellow-p'>4th place</p></li>
                </ul>
              </div>
              <div className="wide-line"></div>
              <div className="list-wrapper">
                <ul id='header-elem'>
                  <h2>Name Surname</h2>
                  <p id='grey-p'>Original name</p>
                  <p id='yellow-p'>Age</p>
                </ul>
                <ul id='header-elem'>
                  <li><p id='yellow-p'>5th place</p></li>
                </ul>
              </div>
              <div className="wide-line"></div>
              <div className="list-wrapper">
                <ul id='header-elem'>
                  <h2>Name Surname</h2>
                  <p id='grey-p'>Original name</p>
                  <p id='yellow-p'>Age</p>
                </ul>
                <ul id='header-elem'>
                  <li><p id='yellow-p'>6th place</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="actor-wrapper-elem">
            <div className="actor-card-wrapper">
              <div className="actor-card first-card">
                <ul id='top-text'>
                  <li><p id='yellow-p'>1st place</p></li>
                </ul>
                <ul id='bottom-text'>
                  <h2>Name Surname</h2>
                  <p id='grey-p'>Original name</p>
                  <p id='yellow-p'>Age</p>
                </ul>
              </div>
              <div className="actor-card second-card">
                <ul id='top-text'>
                  <li><p id='yellow-p'>2nd place</p></li>
                </ul>
                <ul id='bottom-text'>
                  <h2>Name Surname</h2>
                  <p id='grey-p'>Original name</p>
                  <p id='yellow-p'>Age</p>
                </ul>
              </div>
              <div className="actor-card third-card">
                <div className="list-wrapper">
                  <ul id='header-elem'>
                    <h2>Name Surname</h2>
                    <p id='grey-p'>Original name</p>
                    <p id='yellow-p'>Age</p>
                  </ul>
                  <ul id='header-elem'>
                    <li><p id='yellow-p'>3rd place</p></li>
                  </ul>
                </div>
                <div className="wide-line"></div>
                <div className="list-wrapper">
                  <ul id='header-elem'>
                    <h2>Name Surname</h2>
                    <p id='grey-p'>Original name</p>
                    <p id='yellow-p'>Age</p>
                  </ul>
                  <ul id='header-elem'>
                    <li><p id='yellow-p'>4th place</p></li>
                  </ul>
                </div>
                <div className="wide-line"></div>
                <div className="list-wrapper">
                  <ul id='header-elem'>
                    <h2>Name Surname</h2>
                    <p id='grey-p'>Original name</p>
                    <p id='yellow-p'>Age</p>
                  </ul>
                  <ul id='header-elem'>
                    <li><p id='yellow-p'>5th place</p></li>
                  </ul>
                </div>
                <div className="wide-line"></div>
                <div className="list-wrapper">
                  <ul id='header-elem'>
                    <h2>Name Surname</h2>
                    <p id='grey-p'>Original name</p>
                    <p id='yellow-p'>Age</p>
                  </ul>
                  <ul id='header-elem'>
                    <li><p id='yellow-p'>6th place</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-elem">
            <div className="header">
              <div className="header-elem">
                <h1>Latest news</h1>
              </div>
              <div className="header-elem">
                <Link to='/'><ul>
                    <li>All news</li>
                    <li><img src={arrow} alt="" /></li>
                </ul></Link>
              </div>
            </div>
          </div>
          <div className="wrapper-elem">
            <div className="news-card-wrapper">
              <div className="big-first-card">
                <ul id='big-top-text'>
                  <li>Date</li>
                  <li><img src={desc01} alt="" /></li>
                  <li>Views</li>
                  <li><img src={desc02} alt="" /></li>
                  <li>Comments</li>
                </ul>
                <ul id='big-bottom-text'>
                  <h1>Header</h1>
                  <p>Description</p>
                </ul>
              </div>
              <div className="big-array-cards">
                <div className="array-elem">
                  <ul>
                    <li>Data</li>
                    <li id='array-header'><h2>Header</h2></li>
                  </ul>
                </div>
                <div className="array-elem">
                  <ul>
                    <li>Data</li>
                    <li id='array-header'><h2>Header</h2></li>
                  </ul>
                </div>
                <div className="array-elem">
                  <ul>
                    <li>Data</li>
                    <li id='array-header'><h2>Header</h2></li>
                  </ul>
                </div>
                <div className="array-elem">
                  <ul>
                    <li>Data</li>
                    <li id='array-header'><h2>Header</h2></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wide-wrapper">
          <div className="wrapper">
            <div className="wrapper-elem">
              <div className="header">
                <div className="header-elem">
                  <h1>Incoming films</h1>
                </div>
                <div className="header-elem">
                  <ul className='header-elem centered'>
                    <Link to='/'><li><img src={leftArrow} alt="" /></li></Link>
                    <li>Current page / All pages</li>
                    <Link to='/'><li><img src={rightArrow} alt="" /></li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper-elem">
              <div className="card-wrapper">
                <div className="card">
                  <img src={filmIcon01} alt="" />
                  <h2>Film name</h2>
                  <p id='yellow-p'>Film type</p>
                </div>
                <div className="card">
                  <img src={filmIcon01} alt="" />
                  <h2>Film name</h2>
                  <p id='yellow-p'>Film type</p>
                </div>
                <div className="card">
                  <img src={filmIcon01} alt="" />
                  <h2>Film name</h2>
                  <p id='yellow-p'>Film type</p>
                </div>
                <div className="card">
                  <img src={filmIcon01} alt="" />
                  <h2>Film name</h2>
                  <p id='yellow-p'>Film type</p>
                </div>
              </div>
            </div>
            <div className="wrapper-elem">
              <div className="header">
                <div className="header-elem">
                  <h1>Cash gathering</h1>
                </div>
                <div className="header-elem">
                  <p id='dynamic-date'>Date</p>
                </div>
                <div className="header-elem">
                  <div className="split-line"></div>
                </div>
                <div className="header-elem">
                  <ul>
                    <Link to='/'><li id='active'>Russia</li></Link>
                    <Link to='/'><li>Whole world</li></Link>
                    <Link to='/'><li>USA and Canada</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper-elem">
              <div className="floored-card-wrapper">
                <div className="floored-card">
                  <ul>
                    <li><img src={filmIcon01} alt="" /></li>
                  </ul>
                  <ul>
                    <li><h2>Film name</h2></li>
                    <li><p id='yellow-p'>Coast</p></li>
                    <li><p id="grey-p">Coast per week</p></li>
                  </ul>
                </div>
                <div className="floored-card">
                  <ul>
                    <li><img src={filmIcon01} alt="" /></li>
                  </ul>
                  <ul>
                    <li><h2>Film name</h2></li>
                    <li><p id='yellow-p'>Coast</p></li>
                    <li><p id="grey-p">Coast per week</p></li>
                  </ul>
                </div><div className="floored-card">
                  <ul>
                    <li><img src={filmIcon01} alt="" /></li>
                  </ul>
                  <ul>
                    <li><h2>Film name</h2></li>
                    <li><p id='yellow-p'>Coast</p></li>
                    <li><p id="grey-p">Coast per week</p></li>
                  </ul>
                </div><div className="floored-card">
                  <ul>
                    <li><img src={filmIcon01} alt="" /></li>
                  </ul>
                  <ul>
                    <li><h2>Film name</h2></li>
                    <li><p id='yellow-p'>Coast</p></li>
                    <li><p id="grey-p">Coast per week</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="wrapper-elem">
              <div className="mail-wrapper">
                <h2><img src={logo} alt="" />Kinoarea</h2>
                <h1>Subscribe for E-mail postment</h1>
                <p>Want to know every news in cinema industry? -<br />
                fill the form below and get free E-mail postment!</p>
                <ul id='mail-ul'>
                  <li><input type="mail" placeholder='Enter your E-mail'/></li>
                  <li><button type='submit' id='form-btn'>Subscribe</button></li>
                </ul>
                <br /><input type="checkbox" id='checkbox'/><p>I'm agree to <Link to ='/'>use of terms</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
