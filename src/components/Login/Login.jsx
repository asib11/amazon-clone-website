import { Link } from 'react-router-dom';
import './Login.css';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result =>{
            const loginUser = result.user;
            console.log(loginUser.email);
            form.reset();
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div className='login-container'>
            <h4>Login</h4>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input type="submit" className='btn-submit' value="Login" />
                <p>New to Amazon-Clone? <Link to='/signup'>Create New Account</Link> </p>
                <p>or</p>
                <input type="submit" className='google-btn' value="Continue With Google" />
            </form>
        </div>
    );
};

export default Login;