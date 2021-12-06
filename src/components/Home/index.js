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
  Text,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import PopularReviews from "./PopularReviews";
import Trending from "./Trending";

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
        <Trending/>
        <PopularReviews/>
     </HStack>
     </>
  );

};

export default Home;
