import React from "react";
import "./index.css"
import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FaCheck, FaTimes, IoPaw} from "react-icons/all";

import shawarma from "../../images/boston-shawarma-1.jpeg";

import StarRatingComponent from "react-star-rating-component";

const SearchItem = ({
  restaurant = {
    restaurant_id: 10,
    name: "Boston Shawarma",
    address: "315 Huntington Ave",
    city: "Boston",
    state: "MA",
    zip: "02115",
    rating: 4.0,
    reviewCount: 2,
    studentReview: 3,
    restaurantImage: "../../images/boston-shawarma-3.jpeg",
    restaurantDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    attributes: {
      HuskyDollars: true,
      StudentDiscount: true
    },
    categories: ["Halal",
      "Middle Eastern",
      "Mediterranean"]
  },
  index = {}
}) => {
  return (
      <Box p={3} borderWidth={2} shadow="xl" rounded="lg">
        <HStack w="full">
          <Box w="30%">
            <Image src={shawarma} alt="Restaurant Photo"/></Box>
          <Box>
          </Box>
          <VStack align="left">
            <Heading fontSize="xl">{index}. {restaurant.name}</Heading>
            <HStack>

              <StarRatingComponent
                  editing={false}
                  starColor={"#7986e6"}
                  emptyStarColor={"#b0b0b0"}
                  renderStarIcon={() => <IoPaw fontSize={'12px'}/>}
                  value={restaurant.rating}
              />

              <Text fontSize="12" fontWeight="bold">{restaurant.reviewCount
              + restaurant.studentReview} Reviews</Text>
              <Text fontSize="12">({restaurant.studentReview} student reviews
                & {restaurant.reviewCount} other reviews)</Text>
            </HStack>
            <Text>{restaurant.restaurantDescription}</Text>
            <hr/>
            <HStack>
              {restaurant.attributes.HuskyDollars && <FaCheck fontSize="12"
                                                              color="green"/>}
              {!restaurant.attributes.HuskyDollars && <FaTimes fontSize="12"
                                                               color="red"/>}
              <Text fontSize="12">Husky Dollars</Text>

              {restaurant.attributes.StudentDiscount && <FaCheck fontSize="12"
                                                                 color="green"/>}
              {!restaurant.attributes.StudentDiscount && <FaTimes fontSize="12"
                                                                  color="red"/>}
              <Text fontSize="12">Student Discount</Text>
            </HStack>

            <HStack>
              {restaurant.categories.map((tags) => {
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