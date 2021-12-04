import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftSide from "./LeftSide/";
import RightSide from "./RightSide/";
import LoginForm from "./LoginForm/";

const Login = () => {
  return(
    <Flex minH="100vh">
      <LeftSide/>
      <RightSide component={<LoginForm />}/>
    </Flex>
  );
};

export default Login;