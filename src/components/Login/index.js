import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftSide from "./LeftSide/";
import RightSide from "./RightSide/";
import LoginForm from "./LoginForm/";

const Login = ({auth}) => {
  return(
    <Flex minH="100vh">
      <LeftSide/>
      <RightSide component={<LoginForm auth={auth} />}/>
    </Flex>
  );
};

export default Login;