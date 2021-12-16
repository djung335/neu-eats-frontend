import {
  Heading
} from "@chakra-ui/react";

import React from "react";



import ProfileReviewItem from "./ProfileReviewItem";
import reviews from "./reviews.json";

const ProfileReviews = ({user = {name: "Dave peters",
  user: true,
  userName: "dave24",
  restaurant: "Qdoba",
  email: "qdoba.com",
  phoneNumber: "(123)-456-7890",
  reviews: "2",
  friends: "10",
  bio: "Ut enim ad minim veniam, quis nostrud exercitation"}}) => {
  return(
      <>
        {
          reviews.map((rest) => {
            return(
                  <ProfileReviewItem review={rest}/>
            );
          })
        }
      </>
  )
}

export default ProfileReviews;
