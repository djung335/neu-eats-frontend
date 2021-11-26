import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftSide from "./LeftSide/";
import RightSide from "./RightSide/";
import ForgotPasswordForm from "./ForgotPasswordForm";

const Register = () => {
  return(
    <Flex minH="100vh">
      <LeftSide/>
      <RightSide component={<ForgotPasswordForm />}/>
    </Flex>
  );
};

export default Register;