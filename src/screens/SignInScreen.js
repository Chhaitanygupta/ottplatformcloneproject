import React, { useRef, useState } from 'react'
import './SignInScreen.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function SignInScreen() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signIn } = useAuth()
    const [error, setError] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const em = emailRef.current.value;
        const pwd = passwordRef.current.value;
        try {
            if (em && pwd) {
                signIn(em && pwd)
            }
        }
        catch {
            setError("Not able to signin ") 
        }
    }

    return (

        <div className='signUpscreen'>
            <div className='signUpscreen_background'>
                <img
                    className='signUpscreen_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo'></img>
                <div className='signUpscreen_gradient' />
            </div>
            <div className='signUpscreen_form'>
                <form>
                    <h1>Sign In</h1>
                    { }
                    <input type="email" placeholder="Email" ref={emailRef} required />
                    <input type="password" placeholder="Passowrd" ref={passwordRef} required />
                    <button type='submit' onClick={handleSubmit}>Sign In</button>

                    <h4>
                        <span className='signUpscreen_gray'>New to Netflix?</span>
                        <span className='signUpscreen_link'><Link to='/signup' className='signUpscreen_link'>Sign Up now.</Link></span>
                    </h4>
                </form>
            </div>
        </div>
    )
}

export default SignInScreen