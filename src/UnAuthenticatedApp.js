import React from 'react'
import SignUpScreen from './screens/signUpScreen';
import SignInScreen from './screens/SignInScreen';
import { Routes, Route } from 'react-router-dom'


function UnAuthenticatedApp() {
    return (
            <Routes>
                <Route path='/' element={<SignInScreen />} />
                <Route path='/signup' element={<SignUpScreen />} />
            </Routes>
    )
}

export default UnAuthenticatedApp