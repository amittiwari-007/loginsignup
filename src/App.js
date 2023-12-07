import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/auth/Login";
import SendPasswordReset from "./components/pages/auth/SendPasswordReset";
import DashBoard from "./components/pages/auth/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="resetpassword" element={<SendPasswordReset/>}></Route>
        </Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;