import React, {useEffect, useState} from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import RestaurantPage from "./RestaurantPage";
import ReviewsNormal from "./ReviewsNormal";
import ReviewsRestaurant from "./ReviewsRestaurant";
import ReviewsGuest from "./ReviewsGuest";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../consts";

const Details = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const getAuth = () => {
    fetch(`${API_URL}/auth`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
    .then(auth => {
      setAuth(auth);
    })
  }
  useEffect(getAuth, [navigate]);

  let reviews;
  if (typeof(auth) == "boolean") {
    reviews = <ReviewsNormal/>
  }
  else {
    reviews = <ReviewsGuest/>
  }
  return(
      <Center>
        <VStack>
          <RestaurantPage/>
          {reviews}
        </VStack>
      </Center>
  );
};

export default Details;