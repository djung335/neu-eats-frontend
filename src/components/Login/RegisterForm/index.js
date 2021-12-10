import React, { useState, useEffect } from "react";
import { Box, InputGroup, Input, Text, Link, Button, FormControl, Heading, Checkbox } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom"
import { API_URL } from "../../../consts";

const RegisterForm = () => {
  const [userType, setUserType] = useState();
  const [selected, setSelected] = useState();
  const [user, setUser] = useState({email: '', username: '', password: '', firstName: '', lastName: '', owner: selected});

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
  
  const getUserType = () => {
    fetch(`${API_URL}/userType`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
    .then(userType => {
      setUserType(userType);
    })
  }
  useEffect(getUserType, [navigate]);

  console.log(userType);

  console.log(selected);

  return(
    <>
    <Box textAlign="start" ms={2} mt={"1em"}>
        <Heading fontSize="2em" color="#4d4c4c">Create a new account.</Heading>
    </Box>
    <Box my={4}>
        <form>
            <FormControl>
                <InputGroup>
                    <Input placeholder="First Name" value={ user.firstName } onChange={(e) => setUser({...user, firstName: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="1em" pt="1.8em" pb="1.8em" me={2} borderRadius="0.75em"/>
                    <Input placeholder="Last Name" value={ user.lastName } onChange={(e) => setUser({...user, lastName: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="1em" pt="1.8em" pb="1.8em" ms={2} borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                    <Input type="email" placeholder="email" value={ user.email } onChange={(e) => setUser({...user, email: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="1.8em" pb="1.8em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                    <Input type="password" placeholder="password" value={ user.password } onChange={(e) => setUser({...user, password: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="1.8em" pb="1.8em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                    <Input type="password" placeholder="confirm password" onChange={(e) => setUser({...user, verifyPassword: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="1.8em" pb="1.8em" borderRadius="0.75em"/>
                </InputGroup>
            <FormControl mt={5}>
                <InputGroup>
                    <Input placeholder="username" value={ user.username } onChange={(e) => setUser({...user, username: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="1.8em" pb="1.8em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            </FormControl>
            <Text color="#a2a2a2" fontSize="0.6em" mt={1} ml={3}> already a member? <Link as={ReachLink} to="/login" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={1}> login </Link> </Text> 
                <Box display="flex" justifyContent="end">
                    <Button onClick={ register } w="5.5em" fontSize="1.2em" p="1.1em" fontWeight="normal" bg="#7986e6" color="white" borderRadius="0.6em">
                        Register
                    </Button>
                </Box>
                <Box display="flex" justifyContent="end">
                    <Checkbox onChange={(e) => setSelected( e.target.checked )} color="#a2a2a2" size="sm" mt={2}> restaurant owner </Checkbox>
                </Box>
        </form>
    </Box>
    </>
  );
};

export default RegisterForm;