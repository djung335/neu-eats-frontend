import React from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import {MdFastfood} from "react-icons/all";
import {Outlet} from "react-router-dom";
import {Link as ReachLink} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

const Header = () => {
  const {loginWithRedirect, isAuthenticated, logout} = useAuth0();
  let button;
  if (!isAuthenticated) {
    button =
        <Button m={3} onClick={() => loginWithRedirect()}>
          <ReachLink to="/login">Login</ReachLink>
        </Button>;
  } else {
    button =
        <Button m={3}
                onClick={() => logout({returnTo: window.location.origin})}>
          <ReachLink to="/login">Logout</ReachLink>
        </Button>
  }
  return (
      <>
        <Flex>
          <Box p="3">
            <IconButton as={ReachLink} to="/" icon={<MdFastfood size={25}/>}
                        w="50px" h="50px" p={3} bg="#7986e6" borderRadius="10px"
                        color="white"/>
            {/*<Heading size="md">Chakra App</Heading>*/}
          </Box>
          <Spacer/>
          <Box>
            <ReachLink to="/privacy">Privacy Policy</ReachLink>
            {button}
            <Button mr={3} bg="#7986e6" color="white"><ReachLink
                to="/register">Register</ReachLink></Button>
          </Box>
        </Flex>
        <Outlet/>
      </>
  );

};

export default Header;