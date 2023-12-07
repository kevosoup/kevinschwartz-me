import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register | relative font-secondary w-full flex flex-col justify-center items-center">
        <span className="registerTitle | font-primary uppercase text-lg mb-5">Register</span>
        <form className="registerForm">
            <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-xs uppercase">Username</label>
                <input type="text" id="username" placeholder="johndoe123" className="px-1"/>

                <label htmlFor="email" className="text-xs uppercase">Email</label>
                <input type="text" id="email" placeholder="johndoe@email.com" className="px-1"/>

                <label htmlFor="password" className="text-xs uppercase">Password</label>
                <input type="password" id="password" placeholder="password" className="px-1"/>
            </div>
            <button className="registerButton | w-full mt-5 bg-black text-white text-sm font-primary uppercase">Register</button>
        </form>
        <button className="registerButton | absolute top-5 right-10 text-sm underline font-primary">
          <Link to="/login">Login</Link>
        </button>
    </div>
  )
}
