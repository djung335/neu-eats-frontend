import React from "react";
import { Box, Stack, Flex, Grid} from "@chakra-ui/react";

const Login = () => {
  return(
    <Grid minH="100vh">
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} w="full" h="100vh" align={'center'} justify={'center'} bg="blue">
            1
          </Flex>
          <Flex flex={1} w="full" h="100vh" align={'center'} justify={'center'} bg="white">
            2
          </Flex>
        </Stack>
    </Grid>
  );


};

export default Login;