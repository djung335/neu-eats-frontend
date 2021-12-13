import React, { useState } from "react";
import { Box, InputGroup, Input, Text, Link, Button, FormControl, Heading, Checkbox } from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { API_URL } from "../../../consts";
import AlertPop from "../AlertPop";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const [userType, setUserType] = useState();
  const [user, setUser] = useState({email: '', username: '', password: '', firstName: '', lastName: '', owner: false});


  const [error, setError] = useState(false);
  const onSubmit = data => console.log(data);

  const navigate = useNavigate();
  const registerInput = () => {
    fetch(`${API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }
    ).then(res => {
      if (res.status === 200) {
        navigate('/profile')
      } else {
        setError(true);
      }
  })
  };
  
  return(
    <>
    <Box textAlign="start" ms={2} mt={"1em"}>
        <Heading fontSize="2em" color="#4d4c4c">Create a new account.</Heading>
    </Box>
    <Box my={4}>
        <form>
            <FormControl>
                <InputGroup>
                    <Input placeholder="First Name" {...register("first_name", { required: "Please enter your first name" })} value={ user.firstName } onChange={(e) => setUser({...user, firstName: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="1em" pt="1.8em" pb="1.8em" me={2} borderRadius="0.75em"/>
                    <Input placeholder="Last Name" {...register("last_name", { required: "Please enter your last name" })} value={ user.lastName } onChange={(e) => setUser({...user, lastName: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="1em" pt="1.8em" pb="1.8em" ms={2} borderRadius="0.75em"/>
                </InputGroup>
                {errors.first_name && <AlertPop title={errors.first_name.message} />}
                {errors.last_name && <AlertPop title={errors.last_name.message} />}
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                    <Input type="email" {...register("email", { required: "Please enter an e-mail", pattern: { value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, message: "Invalid e-mail" } })} placeholder="email" value={ user.email } onChange={(e) => setUser({...user, email: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="1.8em" pb="1.8em" borderRadius="0.75em"/>
                </InputGroup>
                {errors.email && <AlertPop title={errors.email.message} />}
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                    <Input type="password" placeholder="password" {...register("password", { required: "Please enter a password", minLength: { value: 6, message: "Too short" } })} value={ user.password } onChange={(e) => setUser({...user, password: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="1.8em" pb="1.8em" borderRadius="0.75em"/>
                </InputGroup>
                {errors.password && <AlertPop title={errors.password.message} />}
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                    <Input type="password" placeholder="confirm password" {...register("password_repeat", { validate: value => value === user.password || "The passwords do not match" })} onChange={(e) => setUser({...user, verifyPassword: e.target.value})} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="1.8em" pb="1.8em" borderRadius="0.75em"/>
                </InputGroup>
                {errors.password_repeat && <AlertPop title={errors.password_repeat.message} />}
            <FormControl mt={5}>
                <InputGroup>
                    <Input placeholder="username" {...register("username", { required: "Please enter a username" })} _placeholder={{color: "#a2a2a2"}} pr="10em" pt="1.8em" pb="1.8em" borderRadius="0.75em"/>
                </InputGroup>
               {errors.username && <AlertPop title={errors.username.message} />}
            </FormControl>
            </FormControl>
            <Text color="#a2a2a2" fontSize="0.6em" mt={1} ml={3}> already a member? <Link as={ReachLink} to="/login" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={1}> login </Link> </Text> 
                <Box display="flex" justifyContent="end">
                    <Button onClick={handleSubmit(onSubmit), registerInput} w="5.5em" fontSize="1.2em" p="1.1em" fontWeight="normal" bg="#7986e6" color="white" borderRadius="0.6em">
                        Register
                    </Button>
                </Box>
                { error && <AlertPop title="Something went wrong!"/> }
                <Box display="flex" justifyContent="end">
                    <Checkbox value={ user.owner } onChange={(e) => setUser({...user, owner: e.target.checked})} color="#a2a2a2" size="sm" mt={2}> restaurant owner </Checkbox>
                </Box>
        </form>
    </Box>
    </>
  );
};

export default RegisterForm;