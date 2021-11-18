import './App.css';

import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react"
import Search from "./components/Search";
import Details from "./components/Details";
import Profile from "./components/Profile";
import Login from "./components/Login";


const App = () => {
  return (
      <ChakraProvider>
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
