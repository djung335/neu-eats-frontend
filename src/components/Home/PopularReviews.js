import React from "react";
import {Box, Text, Wrap, WrapItem} from "@chakra-ui/react";
import reviews from "./reviews.json";
import PopularReviewItem from "./PopularReviewItem";

const PopularReviews = () => {
    return(     
    <Box w="50%" p={3}>
    <Text fontWeight="700" textAlign="left">Popular Reviews</Text>
    <Wrap mt={5} spacing='25px'>
      {reviews.map((review) => <PopularReviewItem review={review} />)}
    </Wrap>
  </Box>);
};

export default PopularReviews;