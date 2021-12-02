import {
  Heading
} from "@chakra-ui/react";
import React from "react";
import reviews from "../../reducers/data/reviews.json"
import ReviewItem from "./ReviewItem";
import WriteReview from "./WriteReview";

const Reviews = (restaurant) => {
  return(
      <>
        <Heading size={'lg'}>Reviews</Heading>
        <WriteReview/>
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