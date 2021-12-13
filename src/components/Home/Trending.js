import React from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import restaurant from "./restaurant.json"
import SearchItems from "../Search/SearchItems";
import {Link} from "react-router-dom";

const Trending = () => {

    return(<Box w="50%" p={3}>
    <Text fontWeight="700" textAlign="left">Trending</Text>
    {
              restaurant.map((restaurant, index={}) => {
                return (
                    <Box key={restaurant.restaurant_id}>
                      <Link to={`/details/${restaurant.restaurant_id}`}>
                        <VStack spacing="12px">
                          <Box/>
                          <SearchItems restaurant={restaurant}
                                       index={index + 1}/>
                        </VStack>
                      </Link>
                    </Box>
                );
              })
            }
  </Box>); 
    
};

export default Trending;