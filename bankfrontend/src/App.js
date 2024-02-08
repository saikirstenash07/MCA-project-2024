import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import Notices from "./components/Notices/Notices";
import { Routes, Route ,Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import AccountInfo from "./components/Account/AccountInfo";
import Logout from "./components/Login/Logout";
import MyBalance from "./components/Account/MyBalance";
import ErrorPage from "./components/Error/ErrorPage";
import Loans from "./components/Account/Loans";
import Cards from "./components/Account/Cards";
import Signup from "./components/RegisterLogin/Signup";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <> 
    <ToastContainer/>
      <Header tg={toggle} />
      <Routes>
        <Route path="/" element={<Home changeValue={changeToggle} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/logout"
          element={<Logout obj={{ tg: toggle, fun: changeToggle }} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notices" element={<Notices />} />
        <Route
          path="/dashboard"
          element={<Dashboard obj={{ tg: toggle, fun: changeToggle }} />}
        />
        <Route path="/account" element={<AccountInfo />} />
        <Route path="/balance" element={<MyBalance />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/cards" element={<Cards />} />
        <Route
          path="*"
          element={<ErrorPage />}
          obj={{ tg: toggle, fun: changeToggle }}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
