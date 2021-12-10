import React from "react";

import "./index.css"
import {Box, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import {BsCurrencyDollar} from "react-icons/all";

import StarRatingComponent from "react-star-rating-component";

const SearchItem = ({
  restaurant = {
    price_range_num: 3,
    cuisines: ['french', 'cafe'],
    restaurant_phone: '123-456-7890',
    restaurant_name: "NEU Eats"

  },
  index = {}
}) => {

  return (
      <Box p={3} borderWidth={2} shadow="xl" rounded="lg" w="80%">
        <HStack w="full">
          <Box>
          </Box>
          <VStack align="left">
            <Heading
                fontSize="xl">{index}. {restaurant.restaurant_name}</Heading>

            <Text fontSize={"sm"}>Phone
              Number: {restaurant.restaurant_phone}</Text>
            <Text fontSize={"sm"}>Address: {restaurant.address.formatted}</Text>
            <Text fontSize={"sm"}>Hours: {restaurant.hours}</Text>
            <HStack>
              <Text>Price: </Text>
              <StarRatingComponent
                  editing={false}
                  starColor={"#7986e6"}
                  emptyStarColor={"#b0b0b0"}
                  renderStarIcon={() => <BsCurrencyDollar fontSize={'12px'}/>}
                  value={restaurant.price_range_num}
              />
            </HStack>
            <hr/>
            <HStack>
              {
                restaurant.cuisines?.map((tags) => {
                return <Box fontSize="12" borderRadius="md" background="#7986e6"
                            color="white" p="0.5">{tags}</Box>
              })}
            </HStack>
          </VStack>
        </HStack>
      </Box>
  );
}
export default SearchItem;