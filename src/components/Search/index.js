import React, {useEffect, useState} from "react";
import {Box, Button, HStack, Input, Text, VStack} from "@chakra-ui/react";

import SearchItems from "./SearchItems";
import {useNavigate, Link, useParams} from "react-router-dom";

const Search = () => {
  const Documenu = require('documenu')
  Documenu.configure('22ea8db636a5fc9b62005e445f894b22')
  const params = useParams();
  const restaurantName = params.restaurantTerm || 'thai'

  const maxDist = params.distanceTerm
  const [restaurantTerm, setRestaurantTerm] = useState('');
  const [distanceTerm, setDistanceTerm] = useState(maxDist);
  const [restaurant, setRestaurant] = useState([]);

  const findRestaurant = () => {

    fetch(
        `https://api.documenu.com/v2/restaurants/search/geo?cuisine=${restaurantTerm}&lat=42.358990&lon=-71.058632&distance=${distanceTerm}&key=22ea8db636a5fc9b62005e445f894b22`)
    .then(res => res.json())
    .then(results => setRestaurant(results.data))
  }

  useEffect(findRestaurant, []);

  return (

      <VStack>
        <HStack>
          <Text>Cuisine</Text>
          <Input onChange={(e) =>
              setRestaurantTerm(e.target.value)} />
          <Text>Distance</Text>
          <Input onChange={(e) =>
              setDistanceTerm(e.target.value)}
              value={distanceTerm}/>
          <Button onClick={findRestaurant}>
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