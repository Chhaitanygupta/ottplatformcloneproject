import React, { useRef, useState } from 'react'
import "./SignUpPanel.css";
import { useAuth } from '../contexts/AuthContext';

function SignUpPanel() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        }
        catch {
            setError("Failed to create an account")
        }
    }


    return (
        <div className='signUpPanel'>
            <form>
                <h1>Sign Up</h1>
                {error}
                <input type="email" placeholder="Email" ref={emailRef} required />
                <input type="password" placeholder="Passowrd" ref={passwordRef} required />
                <input type="password" placeholder="confirmPassword" ref={passwordConfirmRef} required />
                <button type='submit' onClick={handleSubmit} disabled={loading}>Sign In</button>
            </form>
        </div>
    )
}

export default SignUpPanel