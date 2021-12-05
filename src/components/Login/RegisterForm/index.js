import React, { useState } from "react";
import { Box, InputGroup, Input, InputLeftElement, Text, Link, Button, FormControl, Heading, Checkbox } from "@chakra-ui/react";
import { FaLock, FaUserAlt } from "react-icons/all";
import { Link as ReachLink, useNavigate } from "react-router-dom"
import { API_URL } from "../../../consts";

const RegisterForm = () => {
  const [user, setUser] = useState({username: '', password: ''});
  const navigate = useNavigate();
  const register = () => {
    fetch(`${API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(status => navigate('/profile'));
  };
  return(
    <>
    <Box textAlign="start" mb="-0.25rem" ms={2} mt={"1em"}>
        <Heading fontSize="2em" color="#4d4c4c">Create a new account.</Heading>
    </Box>
    <Box my={4}>
        <form>
            <FormControl>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaUserAlt color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input placeholder="username" value={ user.username } onChange={(e) => setUser({...user, username: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaLock color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="password" placeholder="password" value={ user.password } onChange={(e) => setUser({...user, password: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaLock color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="password" placeholder="confirm password" onChange={(e) => setUser({...user, verifyPassword: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <Text color="#a2a2a2" fontSize="0.6em" mt={1} ml={3}> already a member? <Link as={ReachLink} to="/login" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={1}> login </Link> </Text> 
                <Box display="flex" justifyContent="end">
                    <Button onClick={ register } w="5.5em" fontSize="1.2em" p="1.1em" fontWeight="normal" bg="#7986e6" color="white" borderRadius="0.6em">
                        Register
                    </Button>
                </Box>
                <Box display="flex" justifyContent="end">
                    <Checkbox color="#a2a2a2" size="sm" mt={2}> restaurant owner </Checkbox>
                </Box>
        </form>
    </Box>
    </>
  );
};

export default RegisterForm;