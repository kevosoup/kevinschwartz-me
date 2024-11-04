import { Link } from "react-router-dom";
import {Context} from "../context/Context"
import axios from "axios";
import { useRef, useContext } from "react";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    dispatch({type: "LOGIN_START" });
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
    }catch(err){
      dispatch({ type: "LOGIN_FAILURE" });

    }
  };

  return (
    <div className="login | font-secondary w-full flex flex-col justify-center items-center">
        <span className="loginTitle | font-primary uppercase text-lg mb-5">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-1">
                <label htmlFor="username" className="text-xs uppercase">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username..."
                  ref={userRef}
                  className="px-1"/>
                <label htmlFor="password" className="text-xs uppercase">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  ref={passwordRef}
                  className="px-1"/>
            </div>
            <button type="submit" disabled={isFetching} className="loginButton | w-full mt-5 bg-black text-white text-sm font-primary uppercase disabled:opacity-75 disabled:cursor-not-allowed">
              Login
            </button>
        </form>
        <button className="loginRegisterButton | text-sm underline font-primary">
          <Link to="/register">Register</Link>
        </button>
    </div>
  )
}
