import "../styles/index.css";
import "../styles/login.css";
import { useState } from "react";

const Login = () => {
    const [visiability, setVisiability] = useState(true);

    function showPaswword() {
        if (visiability === true) {
            setVisiability(false);
        } else {
            setVisiability(true);
        }
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
                        <input type="text" placeholder="www.example.com" required />
                        <div className="password-container">
                            <input type={visiability ? "password" : "text"} placeholder="Password" required />
                            <span onClick={showPaswword}><img src="/src/assets/IconButton.png" alt="eye icon" className="icon-toggle-eye" /></span>
                        </div>
                        <a href="">Forgot your password?</a>
                        <button type="submit">Login</button>
                    </form>
                    <div className="policies">
                        <a href="">User agreement</a>
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;