import {useState} from 'react';
import { Link } from "react-router-dom";
import "./register.css";
import axios from 'axios';

export default function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setError(false);
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true)
    }
  };

  return (
    <div className="register | relative font-secondary w-full flex flex-col justify-center items-center">
        <span className="registerTitle | font-primary uppercase text-lg mb-5">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-xs uppercase">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="johndoe123"
                  className="px-1"
                  onChange={ e => setUsername(e.target.value)}
                />

                <label htmlFor="email" className="text-xs uppercase">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="johndoe@email.com"
                  className="px-1"
                  onChange={ e => setEmail(e.target.value)}
                />

                <label htmlFor="password" className="text-xs uppercase">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  className="px-1"
                  onChange={ e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="registerButton | w-full mt-5 bg-black text-white text-sm font-primary uppercase">Register</button>
        </form>
        <button className="registerButton | absolute top-5 right-10 text-sm underline font-primary">
          <Link to="/login">Login</Link>
        </button>
        { error && <span> Something went wrong! </span> }
    </div>
  )
}
