import React, { useState } from "react";
import { Box, Alert, InputGroup, Input, InputLeftElement, Link, Button, FormControl, Heading } from "@chakra-ui/react";
import { FaLock, FaUserAlt, AlertIcon } from "react-icons/all";
import { Link as ReachLink, useNavigate } from "react-router-dom"
import { API_URL } from "../../../consts";

const LoginForm = () => {
  const [user, setUser] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const login = () => {
    fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(status => {
      navigate('/')
    });
  }

  return(
    <>
    {!valid && <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>}
    <Box textAlign="start" mb="-0.25rem" ms={2}>
        <Heading fontSize="2em" color="#4d4c4c">Log In.</Heading>
    </Box>
    <Box my={4}>
        <form>
            <FormControl>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaUserAlt color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="username" placeholder="username" value={ user.username } onChange={(e) => setUser({...user, username: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaLock color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="password" placeholder="password" value={ user.password } onChange={(e) => setUser({...user, password: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <Link as={ReachLink} to="/register" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={4}> register </Link> <Link as={ReachLink} to="/forgot" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={1}> forgot password? </Link>
                <Box display="flex" justifyContent="end">
                    <Button onClick={ login } w="5.5em" fontSize="1.2em" p="1.1em" fontWeight="normal" bg="#7986e6" color="white" borderRadius="0.6em">
                        Log In
                    </Button>
                </Box>
        </form>
    </Box>
    </>
  );
};

export default LoginForm;