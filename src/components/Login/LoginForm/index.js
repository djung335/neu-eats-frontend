import React, { useState } from "react";
import { Box, InputGroup, Input, InputLeftElement, Link, Button, FormControl, Heading } from "@chakra-ui/react";
import { FaLock, FaUserAlt } from "react-icons/all";
import { Link as ReachLink } from "react-router-dom"
import params from "../../../auth0/auth0-params";
import auth0 from 'auth0-js';

const LoginForm = () => {
  var auth0Client = new auth0.WebAuth({
    domain: params.domain,
    clientID: params.clientId,
    audience: params.apiAudience,
    redirectUri: params.callbackUrl,
    scope: params.scope,
    responseType: 'token id_token'
  });
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login(email, password)
  };

  const login = (username,password) => {
    auth0Client.client.login({
      realm:'react-user-demo',
      username,
      password
    }, 
    (err, authResult) => {
      if (err) {
        alert("Error",err.description)
        return
      }
      if (authResult) {
        window.origin = window.location.origin
      }
    })
  }

  return(
    <>
    <Box textAlign="start" mb="-0.25rem" ms={2}>
        <Heading fontSize="2em" color="#4d4c4c">Log In.</Heading>
    </Box>
    <Box my={4}>
        <form onSubmit={onSubmitHandler}>
            <FormControl>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaUserAlt color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="username" placeholder="username" value={ email } onChange={(e) => { setEmail(e.target.value); }} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaLock color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="password" placeholder="password" value={ password } onChange={ (e) => { setPassword(e.target.value); }} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <Link as={ReachLink} to="/register" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={4}> register </Link> <Link as={ReachLink} to="/forgot" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={1}> forgot password? </Link>
                <Box display="flex" justifyContent="end">
                    <Button type="submit" w="5.5em" fontSize="1.2em" p="1.1em" fontWeight="normal" bg="#7986e6" color="white" borderRadius="0.6em">
                        Log In
                    </Button>
                </Box>
        </form>
    </Box>
    </>
  );
};

export default LoginForm;