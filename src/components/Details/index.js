import React, {useState} from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import RestaurantPage from "./RestaurantPage";
import ReviewsNormal from "./Reviews";
import ReviewsRestaurant from "./ReviewsRestaurant";
import ReviewsGuest from "./ReviewsGuest";

const Details = () => {
  return(
      <Center>
        <VStack>
          <RestaurantPage/>
          <ReviewsGuest/>
        </VStack>
      </Center>
  );
};

export default Details;