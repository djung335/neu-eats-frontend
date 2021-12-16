import {
  Heading
} from "@chakra-ui/react";

import React from "react";



import ProfileReviewItem from "./ProfileReviewItem";
import reviews from "./reviews.json";

const ProfileReviews = () => {
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
