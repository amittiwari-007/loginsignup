import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/auth/Login";
import SendPasswordReset from "./components/pages/auth/SendPasswordReset";
import PreDashBoard from "./components/pages/auth/PreDashBoard";
import { AuthProvider } from "./contexts/AuthContexts";
import UpdateProfile from "./components/pages/auth/UpdateProfile";
import { connect } from 'react-redux';

import {removeFromList, addToList} from "./contexts/actions"

function App({list}) {
  console.log(list)
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="resetpassword" element={<SendPasswordReset/>}></Route>
          <Route path="login" element={<Login/>}></Route>
        </Route>
        <Route path="/dashboard" element={<PreDashBoard/>}></Route>
        <Route path="/update-profile" element={<UpdateProfile/>}></Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>

    </>
  );
}

const mapStateToProps = (state) => ({
  list: state.TodoReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  addToList: () => dispatch(addToList()),
  removeFromList: () => dispatch(removeFromList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
