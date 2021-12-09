import React, {useState} from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import {API_URL} from "../../consts";
import RestaurantPage from "./RestaurantPage";
import ReviewsNormal from "./Reviews";
import ReviewsRestaurant from "./ReviewsRestaurant";
import ReviewsGuest from "./ReviewsGuest";

const Details = () => {
    fetch(`${API_URL}/api/loggedIn`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        ...this.state,
      })
    })

    const isLoggedIn = () => {
      // if logged in and not restaurant owner, then return corresponding page
      if (this.state.d && this.state.owner) {
        return <ReviewsNormal/>;
      } else if (this.state.d && !this.state.owner) {
        return <ReviewsRestaurant/>;
      } else {
        return <ReviewsGuest/>;
      }
    }

  return(
      <Center>
        <VStack>
          <RestaurantPage/>
          {isLoggedIn()}
        </VStack>
      </Center>
  );


};

export default Details;