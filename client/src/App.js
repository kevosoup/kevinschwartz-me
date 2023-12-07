import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const currentUser = false;

  return (
    <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path="/" exact element={<Home></Home>}></Route>
      <Route path="/register" element={currentUser ? <Home/> : <Register />} ></Route>
      <Route path="/login" element={currentUser ? <Home/> : <Login />} ></Route>
      <Route path="/write" element={currentUser ? <Write /> : <Register />} ></Route>
      <Route path="/settings" element={currentUser ? <Settings /> : <Register/>} ></Route>
      <Route path="/post/:postId" element={<Single />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
