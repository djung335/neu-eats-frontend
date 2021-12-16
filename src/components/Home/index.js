import {
  Center,
  Input,
  InputGroup,
  Heading,
  VStack,
  HStack,
  IconButton, InputRightElement
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import PopularReviews from "./PopularReviews";
import Trending from "./Trending";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import { API_URL } from "../../consts";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('/');
  const [auth, setAuth] = useState();

  const getAuth = () => {
    fetch(`${API_URL}/auth`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
    .then(auth => {
      setAuth(auth);
    })
  }






  return (
    <>
      <Center>
        <VStack>
          <Heading mt={10} fontWeight="700" fontSize="5xl">NEU Eats</Heading>
          <InputGroup>
            <Input width={{ base: '800px', sm: '400px', md: '600px', lg: '800px'}} onChange={(e) =>
              setSearchTerm("search/" + e.target.value)} placeholder="Search NEU Eats"></Input>
            <InputRightElement
                children={
                  <Link to={searchTerm}><IconButton aria-label='Search database' icon={<SearchIcon />}/></Link>
                } />
          </InputGroup>
        </VStack>
      </Center>
      {/* <HStack mt="12"> */}
        <Trending/>
        <PopularReviews/>
     {/* </HStack> */}
     </>
  );

};

export default Home;
