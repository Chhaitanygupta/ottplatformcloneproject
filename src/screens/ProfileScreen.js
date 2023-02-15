import React from 'react'
import Nav from '../components/Nav'
import './ProfileScreen.css'
import { useAuth } from '../contexts/AuthContext'


function ProfileScreen() {
  const { currentUser, logout } = useAuth();
  function handleLogout(e) {
    e.preventDefault()
    if (currentUser) {
      logout();
    }
  }
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
          <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='ima' />

          <div className='profileScreen_details'>
            <h2>Email: {currentUser.email}</h2>
            <button className='profileScreen_signout' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen