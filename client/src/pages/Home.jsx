import { useEffect, useState } from "react";
import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search]);
  return (
    <>
        <Header />
        <div className="home flex">
            <Posts posts={posts} />
            <Sidebar />
        </div>
    </>
  )
}
