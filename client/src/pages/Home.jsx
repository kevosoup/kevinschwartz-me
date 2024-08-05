import { useEffect, useState } from "react";
import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () =>{
      axios.get("")
    }
  }, []);
  return (
    <>
        <Header />
        <div className="home flex">
            <Posts />
            <Sidebar />
        </div>
    </>
  )
}
