import React from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import ReviewsGuest from "./Reviews/ReviewsGuest";
import RestaurantPage from "./RestaurantPage";

const DetailsGuest = () => {
  return(
      <Center>
        <VStack>
          <RestaurantPage/>
          <ReviewsGuest/>
        </VStack>
      </Center>
  );


};

export default DetailsGuest;