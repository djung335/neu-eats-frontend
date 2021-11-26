import React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";

const RightSide = ({ component }) => {
  return(
      <Box flex="3" w="full" h="100vh" bg="white">
        <Link display="flex" justifyContent="end" marginTop="2.5%" marginRight="2.5%" fontWeight="bold" fontSize="0.95em" color="#7986e6" textDecoration="none"> Browse Anonymously </Link>
        <Flex width="full" h="full" align="center" justifyContent="center" mt="-2em">
          <Box p={2}>
            {component}
          </Box>
        </Flex>
      </Box>
  );
};

export default RightSide;