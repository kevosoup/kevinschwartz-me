import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login | font-secondary w-full flex flex-col justify-center items-center">
        <span className="loginTitle | font-primary uppercase text-lg mb-5">Login</span>
        <form className="loginForm">
            <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-xs uppercase">Email</label>
                <input type="text" id="email" placeholder="johndoe@email.com" className="px-1"/>
                <label htmlFor="password" className="text-xs uppercase">Password</label>
                <input type="password" id="password" placeholder="password" className="px-1"/>
            </div>
            <button className="loginButton | w-full mt-5 bg-black text-white text-sm font-primary uppercase">Login</button>
        </form>
        <button className="loginRegisterButton | text-sm underline font-primary">
          <Link to="/register">Register</Link>
        </button>
    </div>
  )
}
