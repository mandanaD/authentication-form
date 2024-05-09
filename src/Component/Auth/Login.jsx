import auth from "../../assets/Group 18.png"
import "./Login.css"

const Login = () => {
    return (
        <div className="login-container">
            <div className="login">
                <form className={"login-text"}>
                    <h1 className={"l-s"}>welcome back</h1>
                    <p className={"text-container-p text-gray"}>welcome back please enter your details.</p>
                    <div>
                        <input type="email" placeholder={"Email"}/>
                    </div>
                    <div>
                        <input type="password" placeholder={"Password"}/>
                    </div>
                    <button className={"active-btn"}>
                        Login
                    </button>
                </form>
                <div className={"login-img"}>
                    <img src={auth} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Login;
