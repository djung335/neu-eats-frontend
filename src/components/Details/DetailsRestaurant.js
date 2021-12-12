import React from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import ReviewsRestaurant from "./Reviews/ReviewsRestaurant";
import RestaurantPage from "./RestaurantPage";

const DetailsRestaurant = () => {
  return(
      <Center>
        <VStack>
          <RestaurantPage/>
          <ReviewsRestaurant/>
        </VStack>
      </Center>
  );


};

export default DetailsRestaurant;