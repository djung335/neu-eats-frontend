import {
  Heading
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import ReviewItemRestaurant from "./ReviewItemRestaurant";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllReviews} from "../../../services/reviewService";
import reviews from "../../../reducers/data/reviews.json"
import ReviewItem from "./ReviewItem";
import WriteReviewNormal from "./WriteReviewNormal";

const ReviewsRestaurant = (restaurant) => {
  return(
      <>
        <Heading size={'lg'}>Reviews</Heading>
        <WriteReviewNormal/>
        {
          reviews.map(review => {
            return(
                <ReviewItemRestaurant review={review}/>
            );
          })
        }
      </>
  )
}

/* const selectAllReviews = (state) => state.reviews;

const ReviewsRestaurant = () => {
  const reviews = useSelector(selectAllReviews);
  const dispatch = useDispatch();
  useEffect(() => fetchAllReviews(dispatch));
  return(
      <>
        <Heading size={'lg'}>Reviews</Heading>
        {
          reviews.map(review => {
            return(
                <ReviewItemRestaurant review={review}/>
            );
          })
        }
      </>
  )
}*/

export default ReviewsRestaurant;