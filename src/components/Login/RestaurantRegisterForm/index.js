import React from "react";
import { Box, InputGroup, Input, InputLeftElement, Text, Link, Button, FormControl, Heading } from "@chakra-ui/react";
import { FaUtensils, FaUserPlus, FaUpload } from "react-icons/all";
import { Link as ReachLink } from "react-router-dom"

const RestaurantRegisterForm = () => {
  return(
    <>
    <Box textAlign="start" mb="-0.25rem" ms={2} mt={"1em"}>
        <Heading fontSize="2em" color="#4d4c4c">Restaurant Info</Heading>
    </Box>
    <Box my={4}>
        <form>
            <FormControl>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaUtensils color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="username" placeholder="restaurant name" _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaUserPlus color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="password" placeholder="owners" _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <FormControl mt={5}>
                <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaUpload color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="password" placeholder="confirm password" _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                </InputGroup>
            </FormControl>
            <Text color="#a2a2a2" fontSize="0.6em" mt={1} ml={3}> already a member? <Link as={ReachLink} to="/login" color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={1}> login </Link> </Text> 
                <Box display="flex" justifyContent="end">
                    <Button type="submit" w="5.5em" fontSize="1.2em" p="1.1em" fontWeight="normal" bg="#7986e6" color="white" borderRadius="0.6em">
                        Set Up
                    </Button>
                </Box>
        </form>
    </Box>
    </>
  );
};

export default RestaurantRegisterForm;