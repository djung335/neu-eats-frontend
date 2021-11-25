import React from "react";
import {
  Center,
  Text,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import image1 from "../../images/boston-shawarma-1.jpeg";
import image2 from "../../images/boston-shawarma-2.jpeg";
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