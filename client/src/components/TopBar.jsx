import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;

    return (
        <div className="flex items-center sticky top-0 w-full h-[50px] bg-blue-300 font-primary px-10 z-50">
            <div className="topLeft space-x-2">
                <i className="fa-brands fa-github-alt"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin pr-2"></i>
            </div>
            <div className="topCenter | mx-auto">
                <ul className="topList | flex space-x-6 uppercase text-sm font-bold tracking-tight">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Contact</Link></li>
                    <li><Link to="">Write</Link></li>
                    <li><Link to="">{ user && "LOGOUT"}</Link></li>

                </ul>
            </div>
            <div className="topRight flex items-center space-x-6">
                { user ? <img src="http://via.placeholder.com/250x250" className="w-10 h-10 rounded-full" alt="" /> : (
                    <ul className="flex space-x-6 uppercase text-sm font-bold tracking-tight">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                )}
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
    }
