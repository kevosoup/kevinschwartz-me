import { useEffect, useState } from "react";
import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/posts")
      setPosts(res.data);
    }
    fetchPosts();
  }, []);
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
