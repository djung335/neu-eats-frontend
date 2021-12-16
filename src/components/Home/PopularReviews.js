import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {Box, Text, Wrap} from "@chakra-ui/react";
import reviews from "./reviews.json";
import reviews2 from "./reviews2.json";
import PopularReviewItem from "./PopularReviewItem";
import { API_URL } from "../../consts";

const PopularReviews = () => {
  const [auth, setAuth] = useState();
  const navigate = useNavigate();

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

  if (typeof(auth) == "boolean") {
    return(     
      <Box w="50%" p={3}>
        <Text md={5} fontWeight="700" textAlign="left">My Reviews</Text>
        <Wrap spacing='25px'>
          {
            reviews2.map((review) => <PopularReviewItem review={review} />)
          }
        </Wrap>
      </Box>
      );
    
  } else {
    return(     
      <Box w="50%" p={3}>
        <Text md={5} fontWeight="700" textAlign="left">Popular Reviews</Text>
        <Wrap spacing='25px'>
          {
            reviews.map((review) => <PopularReviewItem review={review} />)
          }
        </Wrap>
      </Box>
      );

  }


};

export default PopularReviews;