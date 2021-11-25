import React from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import Reviews from "./Reviews";
import RestaurantInfo from "./RestaurantInfo";

const Details = () => {
  return(
      <Center>
        <VStack>
          <RestaurantInfo/>
          <Reviews/>
        </VStack>
      </Center>
  );


};

export default Details;