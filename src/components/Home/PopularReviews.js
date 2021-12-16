import React from "react";
import {Box, Text, Wrap} from "@chakra-ui/react";
import reviews from "./reviews.json";
import PopularReviewItem from "./PopularReviewItem";

const PopularReviews = () => {
    return(     
    <Box w="50%" p={3}>
      <Text fontWeight="700" textAlign="left">Popular Reviews</Text>
      <Wrap spacing='25px'>
        {
          reviews.map((review) => <PopularReviewItem review={review} />)
        }
      </Wrap>
    </Box>
    );
};

export default PopularReviews;