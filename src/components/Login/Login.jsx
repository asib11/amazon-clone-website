import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <h4>Login</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="passowrd">Password</label>
                    <input type="passowrd" name="passowrd" id="" required/>
                </div>
                <input type="submit" className='btn-submit' value="Login" />
                <p>New to Amazon-Clone? <span>Create New Account</span></p>
                <p>or</p>
                <input type="submit" className='google-btn' value="Continue With Google" />
            </form>
        </div>
    );
};

export default Login;