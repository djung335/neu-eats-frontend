import React, {useEffect, useState} from "react";
import {Box, Button, HStack, Input, Text, VStack} from "@chakra-ui/react";

import SearchItems from "./SearchItems";
import {Link} from "react-router-dom";

const Search = () => {

  const [restaurantTerm, setRestaurantTerm] = useState('');
  const [restaurant, setRestaurant] = useState([]);

  const findRestaurant = () => {

    fetch(
        `https://api.documenu.com/v2/restaurants/search/geo?cuisine=${restaurantTerm}&lat=42.358990&lon=-71.058632&distance=1&key=22ea8db636a5fc9b62005e445f894b22`)
    .then(res => res.json())
    .then(results => setRestaurant(results.data))
  }

  useEffect(findRestaurant, []);

  return (
      <VStack>
        <HStack>

          <Text><b>Cuisine: </b></Text>
          <Input onChange={(e) =>
              setRestaurantTerm(e.target.value)}
                 placeholder={'What do you want?'}/>
          <Button onClick={findRestaurant} bg="#7986e6" color="white">
            Search
          </Button>
        </HStack>
        <Box p="2" w="80%">

          <Text fontWeight="bold" fontSize="2em">Results
            for {restaurantTerm}...</Text>

            {

              restaurant.map((restaurant, index) => {
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

            <Text fontWeight="bold" fontSize="2em">Search results for {restaurantTerm}...</Text>
          {
            restaurant.map((restaurant, index) => {
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
        </Box>
      </VStack>
  );
};

export default Search;