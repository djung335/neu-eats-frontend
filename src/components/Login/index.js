import React from "react";
import { Box, Stack, HStack, VStack, Flex, Grid, Center, Text, Square, IconButton } from "@chakra-ui/react";
import { MdFastfood } from "react-icons/all";

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
                <Text fontSize="5.3em" fontWeight="600" marginBottom="15%" marginRight="10%" lineHeight="115%" color="white"> Find good food <br /> <u> faster </u> </Text>
            </Box>
          </VStack>
        </Flex>
      </Box>
      
      <Box flex="3" w="full" h="100vh" bg="white">
        
      </Box>
    </Flex>
  );


};

export default Login;