import React from "react";
import {Box, Flex, Text, VStack} from "@chakra-ui/react";

import restaurant from "../../reducers/data/restaurants.json"
import SearchItems from "./SearchItems";

const Search = () => {
  return (
      <Flex>
        <Box p="2" w="60%">
          <Text fontWeight="bold" fontSize="2em">Results for "Good
            Food"...</Text>

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


        </Box>
        <Box w="40%">
          <h1>Map goes here!</h1>
        </Box>
      </Flex>

  );

};

export default Search;