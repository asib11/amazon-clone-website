import './SignUp.css'

const SignUp = () => {
    return (
        <div className='login-container'>
            <h4>Sign Up</h4>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="passowrd">Password</label>
                    <input type="passowrd" name="passowrd" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="passowrd" name="confirm" id="" required/>
                </div>
                <input type="submit" className='btn-submit' value="Sign Up" />
                <p>Already have an account? <span>Login</span></p>
                <p>or</p>
                <input type="submit" className='google-btn' value="Continue With Google" />
            </form>
        </div>
    );
};

export default SignUp;