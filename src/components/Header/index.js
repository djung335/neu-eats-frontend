import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import {MdFastfood} from "react-icons/all";
import { Outlet } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";

import { API_URL } from "../../consts";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState({});
  // const [auth, setAuth] = useState();
  // const getProfile = () => {
  //   fetch(`${API_URL}/profile`, {
  //     method: 'POST',
  //     credentials: 'include'
  //   }).then(res => res.json())
  //   .then(user => {
  //     setUser(user);
  //   })
  // }

  // const getAuth = () => {
  //   fetch(`${API_URL}/auth`, {
  //     method: 'POST',
  //     credentials: 'include'
  //   }).then(res => res.json())
  //   .then(auth => {
  //     setAuth(auth);
  //   })
  // }
  // useEffect(getAuth, [navigate]);

  // const logout = () => {
  //   fetch(`${API_URL}/logout`, {
  //     method: 'POST',
  //     credentials: 'include'
  //   }).then(res => navigate(''))
  //   .then(res => {
  //     window.location.reload();
  //   });
  // }

  // console.log(auth);
  // useEffect(getProfile, [navigate]);
  // console.log(user);


  let button;
  let register;
  // if (typeof(auth) == "boolean") {
  //   button = <Button m={3} onClick={ logout }>
  //     Logout
  //   </Button>
  //   register = <Button mr={3} bg="#7986e6" color="white"><ReachLink to="/profile">Profile</ReachLink></Button>
  // }
  // else {
  //   button = <Button m={3}>
  //     <ReachLink to="/login">Login</ReachLink>
  //   </Button>
  //   register = <Button mr={3} bg="#7986e6" color="white"><ReachLink to="/register">Register</ReachLink></Button>
  // }
  return(
      <>
        <Flex>
          <Box p="3">
            <IconButton as={ReachLink} to="/" icon={<MdFastfood size={25}/>} w="50px" h="50px" p={3} bg="#7986e6" borderRadius="10px" color="white"/>
            {/*<Heading size="md">Chakra App</Heading>*/}
          </Box>
          <Spacer />
          <Box>
            <ReachLink to="/privacy">Privacy Policy</ReachLink>
            {button}
            {register}
          </Box>
        </Flex>
        <Outlet />
      </>
  );

};

export default Header;