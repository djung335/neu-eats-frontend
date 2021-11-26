import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftSide from "./LeftSide/";
import RightSide from "./RightSide/";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return(
    <Flex minH="100vh">
      <LeftSide/>
      <RightSide component={<RegisterForm />}/>
    </Flex>
  );
};

export default Register;