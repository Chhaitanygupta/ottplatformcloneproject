import React from 'react';
import './App.css';
// import HomeScreen from './screens/HomeScreen';
// import SignUpScreen from './screens/signUpScreen';
// import BasicScreen from './screens/BasicScreen';
// import {
//   Routes,
//   Route
// } from "react-router-dom";
// import SignInScreen from './screens/SignInScreen';
// import ProfileScreen from './screens/ProfileScreen';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthenticatedApp from './AuthenticatedApp';
import UnAuthenticatedApp from './UnAuthenticatedApp';

function App() {

  const {  currentUser  }=useAuth();


  return (
    <AuthProvider>
      <div className="app">
        {!currentUser ? <UnAuthenticatedApp/> : <AuthenticatedApp/>}
      </div>
    </AuthProvider>
  );
}

export default App;
