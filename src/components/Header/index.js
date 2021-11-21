import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text, useDisclosure,
    Link
} from "@chakra-ui/react";
import {MdFastfood} from "react-icons/all";


const Header = () => {
  return(
      <Flex>
        <Box p="2">
          <MdFastfood size={40}/>
          {/*<Heading size="md">Chakra App</Heading>*/}
        </Box>
        <Spacer />
        <Box>
          <Link to="/privacy">Privacy Policy</Link>
          <Button m={3}>
            Log In
          </Button>
          <Button mr={3} colorScheme="teal">Register</Button>
        </Box>
      </Flex>
  );

};

export default Header;