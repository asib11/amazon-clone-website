import { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [error, setError] = useState('')
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password, confirm);
        
        if(password !== confirm){
            setError('password and confirm password does not match');
            return;
        }else if( password.length <6){
            setError('password length must be 6 length');
            return;
        }
    }


    return (
        <div className='login-container'>
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required/>
                </div>
                <input type="submit" className='btn-submit' value="Sign Up" />
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
                <p>or</p>
                <input type="submit" className='google-btn' value="Continue With Google" />
                <p><small>{error}</small></p>
            </form>
            
        </div>
    );
};

export default SignUp;