import { useState } from 'react'
import './filmCard.css'
import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg'
import searchBar from './search-bar.svg'
import filmIcon01 from './film-icon01.png'
import arrow from './arrow.svg'
import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'
import smallArrow from './small-arrow.svg'
import socForm01 from './soc-form01.svg'
import socForm02 from './soc-form02.svg'
import socForm03 from './soc-form03.svg'
import socForm04 from './soc-form04.svg'
import like from './like.svg'
import dislike from './dislike.svg'
import heart from './heart.svg'
import smallActorPhoto from './small-actor-photo.png'
import actorCardPhoto from './actor-card-photo.png'

function FilmCard() {

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
            <div className="main-info">
              <div className="main-info-header">
                <div className="main-info-img"><img src={filmIcon01} alt="" /></div>
                <div className="main-info-text">
                  <ul id='main-info-nav'>
                    <Link to='/'><li>Main</li></Link>
                    <Link to='/'><li><img src={smallArrow} alt="" /></li></Link>
                    <Link to='/'><li>Films</li></Link>
                    <Link to='/'><li><img src={smallArrow} alt="" /></li></Link>
                    <Link to='/'><li>Film name</li></Link>
                  </ul>
                  <h1>Film name header</h1>
                  <p>Original name on english</p>
                  <p>Description</p>
                  <ul id='main-info-ul'>
                    <li><Link to='/' id='nobg-btn'>Watch trailer</Link></li>
                    <li><Link to='/'><img src={socForm01} alt="" /></Link></li>
                    <li><Link to='/'><img src={socForm02} alt="" /></Link></li>
                    <li><Link to='/'><img src={socForm03} alt="" /></Link></li>
                    <li><Link to='/'><img src={socForm04} alt="" /></Link></li>
                  </ul>
                </div>
                <div className="under-main-info">
                  <ul>
                    <li><Link to='/'><img src={like} alt="" /></Link></li>
                    <li><Link to='/'><img src={dislike} alt="" /></Link></li>
                    <li><p id="main-info-rating">Rating of: <span id='rating-percentage'></span></p></li>
                    <li><Link to='/'><img src={heart} alt="" /></Link></li>
                    <li><p>Favorite to <span id="rating-fav"></span></p></li>
                  </ul>
                </div>
              </div>
              <div className="info-grid">
                <ul>
                  <li>Year: </li>
                  <li>Country: </li>
                  <li>Slogan: </li>
                  <li>Regiser: </li>
                  <li>Scenario: </li>
                  <li>Produser: </li>
                  <li>Operator: </li>
                  <li>Compositor: </li>
                </ul>
                <ul id='yellow-ul'>
                  <li id='grid-year'><Link to='/'>yearCount</Link></li>
                  <li id='grid-country'><Link to='/'>countryName</Link></li>
                  <li id='grid-slogan'><Link to='/'>sloganText</Link></li>
                  <li id='grid-regiser'><Link to='/'>regiserName</Link></li>
                  <li id='grid-scenario'><Link to='/'>scenarioName</Link></li>
                  <li id='grid-produser'><Link to='/'>produserName</Link></li>
                  <li id='grid-operator'><Link to='/'>operatorName</Link></li>
                  <li id='grid-compositor'><Link to='/'>compositorName</Link></li>
                </ul>
                <ul>
                  <li>Artist: </li>
                  <li>Montage: </li>
                  <li>Janra: </li>
                  <li>Cost in world: </li>
                  <li>Premier (world): </li>
                  <li>Premier (RF): </li>
                  <li>Age: </li>
                  <li>Velocity: </li>
                </ul>
                <ul id='yellow-ul'>
                  <li id='grid-artist'><Link to='/'>artistName</Link></li>
                  <li id='grid-montage'><Link to='/'>montageName</Link></li>
                  <li id='grid-janra'><Link to='/'>janraType</Link></li>
                  <li id='grid-cost'>costWorld</li>
                  <li id='grid-prem-world'><Link to='/'>premWorld</Link></li>
                  <li id='grid-prem-ru'><Link to='/'>premRussia</Link></li>
                  <li id='grid-age'>ageCount</li>
                  <li id='grid-velocity'>velocityTime</li>
                </ul>
              </div>
              <div className="info-actor">
                <div className="info-actor-top">
                  <ul id='info-actor-card'>
                    <li><img src={smallActorPhoto} alt="" /></li>
                    <li><ul>
                        <li><h3>Actor name</h3></li>
                        <li><p id='grey-p'>Actor original name</p></li>
                        <li><p id='yellow-p'>Actor position</p></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id='info-actor-card'>
                    <li><img src={smallActorPhoto} alt="" /></li>
                    <li><ul>
                        <li><h3>Actor name</h3></li>
                        <li><p id='grey-p'>Actor original name</p></li>
                        <li><p id='yellow-p'>Actor position</p></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li><h3>Production:</h3></li>
                    <li><Link to='/' id='yellow-p'>Name</Link></li>
                    <li><Link to='/' id='yellow-p'>Name</Link></li>
                    <li><Link to='/' id='yellow-p'>Name</Link></li>
                  </ul>
                  <ul>
                    <li><h3>Production:</h3></li>
                    <li><Link to='/' id='yellow-p'>Name</Link></li>
                    <li><Link to='/' id='yellow-p'>Name</Link></li>
                    <li><Link to='/' id='yellow-p'>Name</Link></li>
                  </ul>
                </div>
                <div className="info-actor-bottom">
                  <ul>
                    <li>Dub studio:</li>
                    <li><Link to='/' id='yellow-p'>Studio name</Link></li>
                  </ul>
                </div>
              </div>
              <div className="card-wrapper">
              <Link to={`filmCard`}><div className="card">
                <img src={actorCardPhoto} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={actorCardPhoto} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={actorCardPhoto} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={actorCardPhoto} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={actorCardPhoto} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={actorCardPhoto} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={actorCardPhoto} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
              <Link to={`filmCard`}><div className="card">
                <img src={actorCardPhoto} alt="" />
                <h2>Film name</h2>
                <p id='yellow-p'>Film type</p>
              </div></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilmCard
