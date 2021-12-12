import React from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import ReviewsNormal from "./Reviews/ReviewsNormal";
import RestaurantPage from "./RestaurantPage";

const DetailsNormal = () => {
  return(
      <Center>
        <VStack>
          <RestaurantPage/>
          <ReviewsNormal/>
        </VStack>
      </Center>
  );


};

export default DetailsNormal;