import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginSignup from '../auth/LoginSignup';
import './NavBar.css';
import NavBarBottom from '../NavBar-bottom/NavBar-bottom';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <div>
      <nav>
        <ul className='site-options'>
          <li className="home" >
            <NavLink to='/'><img className="logo" src='https://patch.com/img/cdn/users/22867396/2015/11/raw/2015115642a47f57fa7.jpeg' alt='scouttit-logo' style={{ height: '50px', padding: '0 10px 0 0' }} /></NavLink>
            <NavLink to='/'>Scouttit</NavLink>
          </li>
          <li>
          </li>
          <li>
            <NavLink to='/basketball' exact={true}>
              Basketball
            </NavLink>
          </li>
          <li>
            <NavLink to='/football' exact={true}>
              Football
            </NavLink>
          </li>
        </ul>
        <ul className='user-options'>
          {(user) ? <NavLink className='logged-in' to={`/users/${user.id}`}>Welcome, {user.username}!</NavLink> : ''}
          {(user) ? <div className='logged-in'>|</div> : ''}
          {(user) ? <LogoutButton /> : <LoginSignup />}
        </ul>
      </nav>
      {/* only want to render the bottom when we are in a category */}
      {/* <NavBarBottom /> */}
    </div>
  );
}

export default NavBar;
