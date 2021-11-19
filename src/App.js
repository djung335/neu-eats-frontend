import './App.css';

import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ChakraProvider, Divider} from "@chakra-ui/react"
import Search from "./components/Search";
import Details from "./components/Details";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Header from "./components/Header";


const App = () => {
  return (
      <ChakraProvider>
        <Header/>
        <Divider/>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home/>} />
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
