import "../styles/index.css";
import "../styles/login.css";

const Login = () => {
    return (
        <div className="container">
            <div className="left-side">
                <h1>Medusa POS Application</h1>
                <div className="square"></div>
                <img src="/src/assets/Logotype.svg" alt="medusa-logo" />
            </div>
            <div className="right-side">
                <div className="login-form">
                    <h2>Login</h2>
                    <form className="form">
                        <input type="text" placeholder="www.example.com" required />
                        <input type="password" placeholder="Password" required />
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