import './App.css';

import React, { Component } from "react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ChakraProvider, Divider} from "@chakra-ui/react"
import Search from "./components/Search";
import Details from "./components/Details";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Header from "./components/Header";
import PrivacyPolicy from "./components/PrivacyPolicy";


const App = () => {
    return (
      <ChakraProvider>
        <BrowserRouter>
          {
          window.location.pathname !== "/login" ? <Header/>:null && window.location.pathname !== "/login" ? <Divider/>:null
          }
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/privacy"} element={<PrivacyPolicy/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>

    );
}

export default App;