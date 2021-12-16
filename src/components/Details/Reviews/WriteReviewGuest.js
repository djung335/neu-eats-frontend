import {
  Button
} from "@chakra-ui/react";
import {FaPenFancy} from "react-icons/all";
import React from "react";
import {Link} from "react-router-dom";

const WriteReviewGuest = () => {
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