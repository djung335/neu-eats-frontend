import React from "react";
import {
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  VStack,
  HStack,
  Box,
  Text
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

const Home = () => {
  return (
    <>
      <Center>
        <VStack>
        <Heading mt={10} fontWeight="700" fontSize="5xl">NEU Eats</Heading>
        <InputGroup>
          <InputLeftElement children={<SearchIcon/>} />
          <Input width="800px" placeholder="Search NEU Eats"></Input>
          </InputGroup>
       

          </VStack>

      </Center>
      <HStack mt="12">
       <Box w="50%">
       <Text fontWeight="700" textAlign="left">Trending</Text>
     </Box>

     <Box w="50%">
       <Text fontWeight="700" textAlign="left">Popular Reviews</Text>
     </Box>
     </HStack>
     </>
  );

};

export default Home;
