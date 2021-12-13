import React, {useEffect, useState} from "react";
import {Box, Button, HStack, Input, Text, VStack} from "@chakra-ui/react";

import SearchItems from "./SearchItems";
import {Link, useNavigate, useParams} from "react-router-dom";


const Search = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [restaurantTerm, setRestaurantTerm] = useState('');
  const [restaurant, setRestaurant] = useState([]);

  const findRestaurant = () => {

    fetch(
        `https://api.documenu.com/v2/restaurants/search/geo?cuisine=${params.restaurantTerm}&lat=42.358990&lon=-71.058632&distance=1&key=65ca9233213581c4962279e4e767f1ca`)
    .then(res => res.json())
    .then(results => setRestaurant(results.data))
    navigate(`/search/${restaurantTerm}`);
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
        </Box>
      </VStack>
  );
};

export default Search;