import React from "react";
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  Divider
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import Header from "../Header";

const Home = () => {
  return (
      <Center>
        <Header/>
        <Divider/>
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
