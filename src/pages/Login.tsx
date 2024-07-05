import "../styles/index.css";
import "../styles/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// { setIsLogged: boolean }
const Login = ({ setIsLogged }) => {
    const [visiability, setVisiability] = useState(true);
    const [loginPassword, setLoginPassword] = useState({
        login: "",
        password: "",
    })
    const [errorMsg, setErrorMsg] = useState("")

    //Navigation
    const navigation = useNavigate();

    const logInObj = {
        username: "medusa.js",
        password: "1234",
    }

    const showPaswword = () => {
        if (visiability) {
            setVisiability(false);
        } else {
            setVisiability(true);
        }
    }
    const handleLogin = (e: any) => {
        e.preventDefault();
        if (logInObj.username === loginPassword.login && logInObj.password === loginPassword.password) {
            setIsLogged(true);
            navigation("/");
        } else {
            setErrorMsg("Invalid credentials");
        }

    }
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setLoginPassword((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })

    }
    return (
        <div className="container-login">
            <div className="left-side">
                <h1>Medusa POS Application</h1>
                <div className="square"></div>
                <img src="/src/assets/Logotype.svg" alt="medusa-logo" />
            </div>
            <div className="right-side">
                <div className="login-form">
                    <h2>Login</h2>
                    <form className="form" method="">
                        <span>{errorMsg}</span>
                        <input type="text" placeholder="www.example.com" value={loginPassword.login} name='login' onChange={handleChange} required />
                        <div className="password-container">
                            <input type={visiability ? "password" : "text"} placeholder="Password" name='password' onChange={handleChange} value={loginPassword.password} required />
                            <span onClick={showPaswword}>
                                <img src="/src/assets/IconButton.png" alt="eye icon" className="icon-toggle-eye" />
                            </span>
                        </div>
                        <a href="">Forgot your password?</a>
                        <button className='btn-login' type="submit" onClick={handleLogin}>Login</button>
                    </form>
                    <div className="policies">
                        <Link to="/userAgreement">User agreement</Link>
                        <Link to="/privacyPolicy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;