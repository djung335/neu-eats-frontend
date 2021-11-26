import React from "react";
import { Box, InputGroup, Input, InputLeftElement, Link, Button, FormControl, Heading } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/all";
import { Link as ReachLink } from "react-router-dom"

const ForgotPasswordForm = () => {
  return(
    <>
    <Box textAlign="start" mb="-0.25rem" mt="-0.5em">
        <Heading fontSize="2em" color="#4d4c4c">Forgot Password?</Heading>
    </Box>
    <Box my={4}>
        <form>
            <FormControl>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaUserAlt color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="username" placeholder="email" _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <Link as={ReachLink} to="/login" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={4}> log in </Link>
                <Box display="flex" justifyContent="end">
                    <Button type="submit" w="5.5em" fontSize="1.2em" p="1.1em" fontWeight="normal" bg="#7986e6" color="white" borderRadius="0.6em">
                        Send Code
                    </Button>
                </Box>
        </form>
    </Box>
    </>
  );
};

export default ForgotPasswordForm;