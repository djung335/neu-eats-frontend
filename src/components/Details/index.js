import React from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import Reviews from "./Reviews";
import RestaurantPage from "./RestaurantPage";

const Details = ({
  restaurant = {
    "restaurant_id": 10,
    "name": "Boston Shawarma",
    "address": "315 Huntington Ave",
    "city": "Boston",
    "state": "MA",
    "zip": "02115",
    "rating": 4.0,
    "reviewCount": 2,
    "restaurantImage": "../../images/boston-shawarma-2.jpeg",
    "attributes": {
      "HuskyDollars": true,
      "StudentDiscount": true
    },
    "categories": [
      "Halal",
      "Middle Eastern",
      "Mediterranean"
    ],
    "hours": {
      "MondayStart": "10:00:00",
      "MondayEnd": "23:00:00",
      "TuesdayStart": "10:00:00",
      "TuesdayEnd": "23:00:00",
      "WednesdayStart": "10:00:00",
      "WednesdayEnd": "23:00:00",
      "ThursdayStart": "10:00:00",
      "ThursdayEnd": "23:00:00",
      "FridayStart": "10:00:00",
      "FridayEnd": "23:00:00",
      "SaturdayStart": "10:00:00",
      "SaturdayEnd": "23:00:00",
      "SundayStart": "10:00:00",
      "SundayEnd": "23:00:00"
    }
  }
}) => {
  return(
      <Center>
        <VStack>
          <RestaurantPage/>
          <Reviews restaurant={restaurant.name}/>
        </VStack>
      </Center>
  );


};

export default Details;