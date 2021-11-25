import React from "react";
import {
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

const Home = () => {
  return (
      <Center>
        <VStack>
        <Text mt={10} fontWeight="700" fontSize="5xl">NEU Eats</Text>
        <InputGroup>
          <InputLeftElement children={<SearchIcon/>} />
          <Input placeholder="Search NEU Eats"></Input>
          </InputGroup>
          </VStack>

      </Center>
  );

};

export default Home;
