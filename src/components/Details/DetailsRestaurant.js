import React from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import Reviews from "./Reviews";
import RestaurantPage from "./RestaurantPage";

const DetailsRestaurant = () => {
  return(
      <Center>
        <VStack>
          <RestaurantPage/>
          <Reviews/>
        </VStack>
      </Center>
  );


};

export default DetailsRestaurant;