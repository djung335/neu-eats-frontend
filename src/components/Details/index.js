import React, {useEffect, useState} from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";
import RestaurantPage from "./RestaurantPage";
import ReviewsNormal from "./Reviews/ReviewsNormal";
import ReviewsRestaurant from "./Reviews/ReviewsRestaurant";
import ReviewsGuest from "./Reviews/ReviewsGuest";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../consts";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reviews from "../../reducers/reviews";

const store = createStore(reviews);

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

  const [owner, setOwner] = useState({});
  const getOwner = () => {
    fetch(`${API_URL}/userType`, {
      method: 'POST',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(owner => {
      setOwner(owner)
    })
  }

  useEffect(getOwner, [navigate]);

  let reviews;
  if (typeof(auth) == "boolean" && typeof(owner) == "boolean") {
    reviews = <ReviewsRestaurant/>
  } else if (typeof(auth) == "boolean") {
    reviews = <ReviewsNormal/>
  } else {
    reviews = <ReviewsGuest/>
  }
  return(
      <Provider store={store}>
        <Center>
          <VStack>
            <RestaurantPage/>
            {reviews}
          </VStack>
        </Center>
      </Provider>
  );
};

export default Details;