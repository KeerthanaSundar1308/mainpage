import {FaUser,FaLock,FaEnvelope} from "react-icons/fa";

const Login=() =>{

    const[action,setAction]=useState('');
    const registerLink=() =>{
        setAction('active');
    };

    const loginLink=() =>{
        setAction('');
    };

    return (
        <div className='wrapper'>
        <div className='form-box-login'>
        <h1 className='h1'> login</h1>
            <form action="">
                
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />  
                    <FaUser className='icon'/>             
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon'/>               
                </div>

                <div className='remember-forgot'>
                    <label>
                        <input type="checkbox" />Remember me
                    </label>
                    <a href="#"> Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className='register-link'>
                    <span> Don't have an account? <Link to='/Register'>Register</Link></span>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Login;
  