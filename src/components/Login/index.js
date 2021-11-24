import React from "react";
import { Box, Stack, VStack, Flex, Grid, Center, Text, Square } from "@chakra-ui/react";

const Login = () => {
  return(
    <Flex minH="100vh">
      <Box flex="4" w="full" h="100vh" bg="#aacaef">
        <Flex minH="100vh">
          <VStack w="full" h="100vh" alignItems="flex-start">
            <Box w="full" h="10%">
            </Box>
            <Box w="full" h="90%">
                <Text> Find good foods faster </Text>
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