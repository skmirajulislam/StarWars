import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="*" element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
