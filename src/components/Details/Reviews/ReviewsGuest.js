import {
  Heading
} from "@chakra-ui/react";
import React from "react";
import reviews from "../../../reducers/data/reviews.json"
import ReviewItem from "./ReviewItem";
import WriteReviewGuest from "./WriteReviewGuest";

const ReviewsGuest = (restaurant) => {
  return(
      <>
        <Heading size={'lg'}>Reviews</Heading>
        <WriteReviewGuest/>
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

export default ReviewsGuest;