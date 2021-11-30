import {
  Heading
} from "@chakra-ui/react";
import React from "react";
import reviews from "../reducers/data/reviews.json"
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  return(
      <>
        <Heading size={'lg'}>Reviews</Heading>
        {
          reviews.map(review => {
            return(
                <ReviewItem review={review}/>
            );
          })
        }
      </>
  )
}

export default Reviews;