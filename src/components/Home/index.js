import {
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  VStack,
  HStack,
  IconButton
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import PopularReviews from "./PopularReviews";
import Trending from "./Trending";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const [restaurantTerm, setRestaurantTerm] = useState('/');
  
  return (
    <>
      <Center>
        <VStack>
          <Heading mt={10} fontWeight="700" fontSize="5xl">NEU Eats</Heading>
          <InputGroup>
            <InputLeftElement 
            children={
            <Link to={restaurantTerm}><IconButton aria-label='Search database' icon={<SearchIcon />}/></Link>
            } />
            <Input width="800px" onChange={(e) =>
              setRestaurantTerm("search/" + e.target.value)} placeholder="Search NEU Eats"></Input>
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
