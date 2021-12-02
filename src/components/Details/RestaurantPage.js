import React from "react";
import {
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";
import {IoPaw} from "react-icons/all";
import StarRatingComponent from 'react-star-rating-component';

const RestaurantPage = ({
    restaurant = {
      "restaurant_id": 10,
      "name": "Boston Shawarma",
      "address": "315 Huntington Ave",
      "city": "Boston",
      "state": "MA",
      "zip": "02115",
      "rating": 4.0,
      "reviewCount": 2,
      "restaurantImage": "../../images/boston-shawarma-2.jpeg",
      "attributes": {
        "HuskyDollars": true,
        "StudentDiscount": true
      },
      "categories": [
        "Halal",
        "Middle Eastern",
        "Mediterranean"
      ],
      "hours": {
        "MondayStart": "10:00:00",
        "MondayEnd": "23:00:00",
        "TuesdayStart": "10:00:00",
        "TuesdayEnd": "23:00:00",
        "WednesdayStart": "10:00:00",
        "WednesdayEnd": "23:00:00",
        "ThursdayStart": "10:00:00",
        "ThursdayEnd": "23:00:00",
        "FridayStart": "10:00:00",
        "FridayEnd": "23:00:00",
        "SaturdayStart": "10:00:00",
        "SaturdayEnd": "23:00:00",
        "SundayStart": "10:00:00",
        "SundayEnd": "23:00:00"
      }
    }
}) => {
  return(
      <>
        <Flex
            w={'full'}
            h={'50vh'}
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            backgroundImage={
              restaurant.restaurantImage
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
          <HStack align={'flex-end'} maxW={'2xl'} spacing={3}>
            <VStack align={'left'}>
              <Heading color={"white"} as={'h2'} mb={0} size={'2xl'}>Boston Shawarma</Heading>
              <HStack spacing={"3px"}>
                <StarRatingComponent
                    name={restaurant.name + " rating"}
                    editing={false}
                    starColor={"#7986e6"}
                    emptyStarColor={"#b0b0b0"}
                    renderStarIcon={() => <IoPaw size={'1.5em'}/>}
                    value={restaurant.rating}
                />
                <Text color={"white"}>{restaurant.reviewCount} Reviews</Text>
              </HStack>
              <Text color={new Date() >=
              new Date(new Date().getFullYear() + "-" + new Date().getDate() + "-" + (new Date().getMonth() + 1) + "T" + restaurant.hours.MondayStart)
              && new Date() < new Date(new Date().getFullYear() + "-" + new Date().getDate() + "-" + (new Date().getMonth() + 1) + "T" + restaurant.hours.Monday) ? "lightGreen" : "red"} fontWeight={"bold"}>{new Date() >= new Date(restaurant.hours.MondayStart) && new Date() < new Date(restaurant.hours.Monday) ? "open now" : "closed now"}</Text>
              <HStack>
                <CheckIcon color={restaurant.attributes.HuskyDollars ? "lightGreen" : "red"}/>
                <Text color={"white"}>husky dollars</Text>
                <CheckIcon color={restaurant.attributes.StudentDiscount ? "lightGreen" : "red"}/>
                <Text color={"white"}>student discount</Text>
              </HStack>
            </VStack>
          </HStack>
          <Spacer/>
        </Flex>
      </>
  )
}

export default RestaurantPage;