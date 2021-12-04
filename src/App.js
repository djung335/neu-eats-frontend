import './App.css';

import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import {ChakraProvider } from "@chakra-ui/react"
import Search from "./components/Search";
import Details from "./components/Details";
import Profile from "./components/Profile";
import Login from "./components/Login/";
import Register from "./components/Login/register";
import ForgotPassword from "./components/Login/forgotpassword";
import RestaurantSetUp from "./components/Login/restaurantsetup";
import Header from "./components/Header";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Auth from "./Auth";
import Callback from "./components/Login/Callback";

const App = ({history}) => {
  const auth = new Auth(history);
    return (
      <ChakraProvider>
        <BrowserRouter>
          {/* {
          window.location.pathname !== "/login" ? <Header/>:null && window.location.pathname !== "/login" ? <Divider/>:null
          } */}
          <Routes>
            <Route path="/" element={<Header auth={auth}/>} >
            <Route path="" element={<Home/>} />
              <Route path="home" element={<Home/>} />
              <Route path="privacy" element={<PrivacyPolicy/>} />
              <Route path="search" element={<Search/>} />
              <Route path="details" element={<Details/>} />
              <Route path="profile" element={<Profile/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/callback" element={<Callback auth={auth}/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/setup" element={<RestaurantSetUp />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>

    );
}

export default App;