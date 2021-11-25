import React from "react";
import { Box, HStack, VStack, Flex, Text, IconButton, Link, Heading, FormControl, Input, Button, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdFastfood, FaUserAlt, FaLock } from "react-icons/all";

const Login = () => {
  return(
    <Flex minH="100vh">
      <Box flex="4" w="full" h="100vh" bg="#aacaef">
        <Flex minH="100vh">
          <VStack w="full" h="100vh">
            <Box w="full" h="10%" marginLeft="10%" marginTop="2.5%">
              <HStack spacing={5}>
                <IconButton icon={<MdFastfood size={25}/>} w="50px" h="50px" p={3} bg="#7986e6" borderRadius="10px" color="white"/>
                <Text fontWeight="bold" fontSize="2em" color="#76797d"> NEU Eats </Text>
              </HStack>
            </Box>
            <Box w="full" h="90%" display="flex" alignItems="center" justifyContent="center">
                <Text fontSize="5.3em" fontWeight="600" marginBottom="15%" marginRight="10%" lineHeight="115%" color="white"> Find good food <br /> <u>faster</u> </Text>
            </Box>
          </VStack>
        </Flex>
      </Box>
      
      <Box flex="3" w="full" h="100vh" bg="white">
        <Link display="flex" justifyContent="end" marginTop="2.5%" marginRight="2.5%" fontWeight="bold" fontSize="0.95em" color="#7986e6" textDecoration="none"> Browse Anonymously </Link>
        <Flex width="full" h="full" align="center" justifyContent="center" mt="-2em">
          <Box p={2}>
            <Box textAlign="start" mb="-0.25rem" ms={2}>
              <Heading fontSize="2em">Log In.</Heading>
            </Box>
            <Box my={4}>
              <form>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<FaUserAlt color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="username" placeholder="username" _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                  </InputGroup>
                </FormControl>
                <FormControl mt={6}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<FaLock color="#a2a2a2"/>} mt="0.85em" ml={1}/>
                    <Input type="password" placeholder="password" _placeholder={{color: "#a2a2a2"}} pr="10em" pt="2em" pb="2em" borderRadius="0.75em"/>
                  </InputGroup>
                </FormControl>
                <Link color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={4}> register </Link> <Link color="#afcdf0" fontSize="0.7em" fontWeight="bold" ml={1}> forgot password? </Link>
                <Box display="flex" justifyContent="end">
                  <Button mt={4} type="submit" w="5.5em" fontSize="1.2em" p="1.1em" fontWeight="normal" bg="#7986e6" color="white" borderRadius="0.6em">
                    Log In
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;