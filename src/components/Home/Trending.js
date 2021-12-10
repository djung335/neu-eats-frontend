import React from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import restaurant from "../../reducers/data/restaurants.json"
import SearchItems from "../Search/SearchItems";
import {Link} from "react-router-dom";

const Trending = () => {
    return(<Box w="50%" p={3}>
    <Text fontWeight="700" textAlign="left">Trending</Text>
    {/*{
restaurant.map((restaurant, index) => {
  return (
      <VStack spacing="12px">
        
        <Box/>
        <Link to='/search'>
        <SearchItems restaurant={restaurant} index={index + 1}/>
        </Link>
      </VStack>
  );
})
}*/}
  </Box>); 
    
};

export default Trending;