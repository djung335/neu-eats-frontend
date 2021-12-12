import React from "react";
import {Flex, Box, Spacer, HStack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const RightSide = ({ component }) => {
  return(
      <Box flex="3" w="full" h="100vh" bg="white">
        <HStack>
          <Spacer/>
          <Link to='/home'>
            <Text fontWeight="bold" fontSize="1em" color="#7986e6" paddingRight={"15px"} paddingTop={"15px"}>
              Browse Anonymously
            </Text>
          </Link>
        </HStack>
        <Flex width="full" h="full" align="center" justifyContent="center" mt="-2em">
          <Box p={2}>
            {component}
          </Box>
        </Flex>
      </Box>
  );
};

export default RightSide;