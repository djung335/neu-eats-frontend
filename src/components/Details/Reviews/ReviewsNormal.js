import {
  Heading
} from "@chakra-ui/react";
import React from "react";
import reviews from "../../../reducers/data/reviews.json"
import ReviewItem from "./ReviewItem";
import WriteReviewNormal from "./WriteReviewNormal";

const ReviewsNormal = (restaurant) => {
  return(
      <>
        <Heading size={'lg'}>Reviews</Heading>
        <WriteReviewNormal/>
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

export default ReviewsNormal;