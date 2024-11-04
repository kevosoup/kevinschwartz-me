import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context"


function App() {
  const {user} = useContext(Context);

  return (
    <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path="/" exact element={<Home></Home>}></Route>
      <Route path="/register" element={user ? <Home/> : <Register />} ></Route>
      <Route path="/login" element={user ? <Home/> : <Login />} ></Route>
      <Route path="/write" element={user ? <Write /> : <Register />} ></Route>
      <Route path="/settings" element={user ? <Settings /> : <Register/>} ></Route>
      <Route path="/post/:postId" element={<Single />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
