import {HStack, Image} from "@chakra-ui/react";
import image1 from "../../images/boston-shawarma-1.jpeg";
import image2 from "../../images/boston-shawarma-2.jpeg";
import React from "react";

const RestaurantInfo = () => {
  return(
      <>
        <HStack spacing={"0px"}>
          <Image src={image1} alt={"image of wrap being made"} w={"50%"}/>
          <Image src={image2} alt={"image of the restaurant"} w={"50%"}/>
        </HStack>
      </>
  )
}

export default RestaurantInfo;