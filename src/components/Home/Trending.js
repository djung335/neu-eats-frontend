import React from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import restaurant from "../../reducers/data/restaurants.json"
import SearchItems from "../Search/SearchItems";

const Trending = () => {
    return(<Box w="50%" p={3}>
    <Text fontWeight="700" textAlign="left">Trending</Text>
    {

restaurant.map((restaurant, index) => {
  return (
      <VStack spacing="12px">
        <Box/>
        <SearchItems restaurant={restaurant} index={index + 1}/>
      </VStack>
  );
})

}
  </Box>); 
    
};

export default Trending;