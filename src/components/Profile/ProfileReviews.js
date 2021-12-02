import {
  Heading
} from "@chakra-ui/react";

import React from "react";


import reviews from "./reviews.json"
import ProfileReviewItem from "./ProfileReviewItem";


const ProfileReviews = ({
  user = {
    user: false,
    owner: true,
    restName: "Qdoba",
    email: "qdoba.com",
    phoneNumber:"(123)-456-7890",
    reviews:"2",
    friends:"10"

  }
}) => {
  return(
      <>
        {user.owner && <Heading size={'lg'}>Your Restaurant Reviews</Heading>}
        {user.user && <Heading size={'lg'}>Your Reviews</Heading>}
        {!user.user && !user.owner && <Heading size={'lg'}>{user.restName}'s Reviews</Heading>}
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