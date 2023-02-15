import React, { useState } from 'react'
import './signUpScreen.css'
import { Link } from 'react-router-dom';
import SignUpPanel from './SignUpPanel';
import validator from 'validator';

function SignUpScreen() {

    const [goToSignUp, setGoToSignUp] = useState(false)
    const[val, setVal]=useState("")
    const change = e =>{
        setVal(e.target.value);
    }
    const handleButton = () =>{
        if(validator.isEmail(val)){
            setGoToSignUp(true)
        }
        else{
            alert("Enter valid Email!")
        }
    }


    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img
                    className='loginScreen_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo'></img>
                <button className='loginScreen_button'>
                    <Link to='/' className='loginScreen_button_link'>
                        Sign In
                    </Link>
                </button>
                <div className='loginScreen_gradient' />
            </div>
            <div className='loginScreen_body'>
                {goToSignUp ? (
                    <SignUpPanel />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>
                            Ready to watch? Enter your email to create or restart your memembership.
                        </h3>

                        <div className='loginScreen_input'>
                            <form>
                                <input type="email" placeholder="Email Address" required value={val} onChange={change}  />
                                <button className='loginScreen_getStarted' onClick={handleButton}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )
                }
            </div>
        </div>
    )
}

export default SignUpScreen