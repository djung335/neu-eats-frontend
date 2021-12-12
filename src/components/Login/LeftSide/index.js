import React from "react";
import { Box, HStack, VStack, Flex, Text, IconButton } from "@chakra-ui/react";
import { MdFastfood } from "react-icons/all";
import { Link as ReachLink } from "react-router-dom"

const LeftSide = () => {
  return(
    <Box flex="4" w="full" h="100vh" bg="#aacaef">
        <Flex minH="100vh">
          <VStack w="full" h="100vh">
            <Box w="full" h="10%" marginLeft="10%" marginTop="2.5%">
              <HStack spacing={5}>
                <IconButton as={ReachLink} to="/" icon={<MdFastfood size={25}/>} w="50px" h="50px" p={3} bg="#7986e6" borderRadius="10px" color="white"/>
                <Text fontWeight="bold" fontSize="2em" color="#76797d"> NEU Eats </Text>
              </HStack>
            </Box>
            <Box w="full" h="90%" display="flex" alignItems="center" justifyContent="center">
                <Text fontSize={{ base: '5.3em', sm: '2.5em', md: '4em', lg: '5.3em' }} fontWeight="600" marginBottom="25%" lineHeight="115%" color="white" paddingLeft={"10px"} paddingBottom={{base: '0px', sm: '100px', md: '80px', lg: '0px'}}> Find good food <br /> <u>faster</u> </Text>
            </Box>
          </VStack>
        </Flex>
    </Box>
  );
};

export default LeftSide;