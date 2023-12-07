import Sidebar from "../components/Sidebar";
import SinglePost from "../components/singlePost";

export default function Single() {
  return (
    <div className="Single flex">
        <SinglePost />
        <Sidebar />
    </div>
  )
}
