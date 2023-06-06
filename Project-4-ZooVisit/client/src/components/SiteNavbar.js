import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/auth'
// import zooLogo from '../images/zoo_logo.png'

//bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'




const SiteNavbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    // Remove token
    window.localStorage.removeItem('animal-token')
    // Redirect to the home page
    navigate('/')
  }

  return (
    <div className='nav-style'>
      <div className='nav-logo'>
        <Navbar.Brand>
          <Link className='btn btn-logo' to='/animals/'> <img id='zoo-logo' src='https://image.shutterstock.com/image-photo/image-260nw-479703550.jpg' alt='zoo-logo' /> </Link>
        </Navbar.Brand>
      </div>

      {userIsAuthenticated() ?
        <>
          <div className='nav-profile'>
            <Nav.Item>
              <Link className='btn btn-nav' to="/profile/"> Profile </Link>
            </Nav.Item>
          </div>
          <Nav.Item onClick={handleLogout}>
            <span className='btn btn-nav'> Logout </span>
          </Nav.Item>
        </> :
        <>
          <div className='nav-login'>
            <Nav.Item>
              <Link className='btn btn-nav' to="register/"> Register </Link>
            </Nav.Item>
          </div>

          <div className='nav-login'>
            <Nav.Item>
              <Link className='btn btn-nav' to="/login/"> Login </Link>
            </Nav.Item>
          </div>
        </>}

    </div>
  )


}
export default SiteNavbar