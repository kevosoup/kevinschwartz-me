import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect (() => {
        const getCats = async () => {
                const res = await axios.get("/categories");
                setCats(res.data);
            };
            getCats();

            cats.map(c => {
                console.log(c.name)
            })

    },[]);
  return (
    <div className='sidebar w-[20%] h-min flex flex-col items-center m-5 px-4 pb-8 border rounded font-secondary'>
        <div className="sidebarItem w-full flex flex-col items-center pb-10">
            <span className="sidebarTitle w-full text-center m-2.5 p-1 font-primary font-uppercase bg-black text-lg text-white">ABOUT ME</span>
            <img src="https://via.placeholder.com/100x100" className="pb-1" alt="" />
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates sint inventore voluptas modi culpa eaque odit molestiae dolore natus vitae animi, ad error in excepturi quasi iste nobis quidem.</p>
        </div>
        <div className="sidebarItem w-full flex flex-col items-center pb-10">
            <span className="sidebarTitle w-full text-center m-2.5 p-1 font-primary font-uppercase bg-black text-white">CATEGORIES</span>
            <ul className="sidebarList w-[90%] grid grid-cols-2 text-xs tracking-tight gap-3 underline">
                {cats.map( c => (
                    <Link to={`/?cat=${c.name}`}>
                        <li>{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem w-full flex flex-col items-center">
        <span className="sidebarTitle w-full text-center m-2.5 p-1 font-primary font-uppercase border-y border-black">FOLLOW ME</span>
        <div className="space-x-2">
            <i className="fa-brands fa-github-alt"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin pr-2"></i>
        </div>
        </div>
    </div>
  )
}
