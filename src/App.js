import './App.css';

import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"


const App = () => {
  return (
      <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </ChakraProvider>

  );
}

export default App;
