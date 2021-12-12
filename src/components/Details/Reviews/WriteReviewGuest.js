import {
  Button
} from "@chakra-ui/react";
import {FaPenFancy} from "react-icons/all";
import React from "react";
import {Link} from "react-router-dom";

const WriteReviewGuest = ({
  restaurant = {
    "restaurant_id": 10,
    "name": "Boston Shawarma",
    "address": "315 Huntington Ave",
    "city": "Boston",
    "state": "MA",
    "zip": "02115",
    "rating": 4.0,
    "reviewCount": 2,
    "restaurantImage": "../../images/boston-shawarma-1.jpeg",
    "attributes": {
      "HuskyDollars": true,
      "StudentDiscount": true
    },
    "categories": [
      "Halal",
      "Middle Eastern",
      "Mediterranean"
    ],
    "hours": {
      "Monday": "10:00-23:00",
      "Tuesday": "10:00-23:00",
      "Friday": "10:00-23:00",
      "Wednesday": "10:00-23:00",
      "Thursday": "10:00-23:00",
      "Sunday": "10:00-23:00",
      "Saturday": "10:00-23:00"
    }
  }
}) => {
  return(
      <>
        <Link to={"/login"}>
          <Button
              mr={3}
              colorScheme={'white'}
              bg={'#aacaef'}
          >
            <FaPenFancy/> &nbsp; Write a Review
          </Button>
        </Link>
      </>
  )
}

export default WriteReviewGuest;