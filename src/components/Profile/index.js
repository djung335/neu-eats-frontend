import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";
import ProfileReviews from "./ProfileReviews";


const Profile = () => {
  return(
      <Flex>
        <Box w="60%" paddingLeft="100px">
          <ProfileReviews />
        </Box>
        <Box w="40%">
          <ProfileCard />
        </Box>
      </Flex>

  );


};

export default Profile;