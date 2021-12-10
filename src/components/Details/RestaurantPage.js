import React, {useEffect, useState} from "react";
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
import {useParams} from "react-router-dom";

const RestaurantPage = () => {
  const Documenu = require('documenu')
  Documenu.configure('65ca9233213581c4962279e4e767f1ca')
  const params = useParams();
  const [restaurant, setRestaurantDetails] = useState({Restaurants: ''});
  const findRestaurantDetailsByID = () =>
      fetch(`https://api.documenu.com/v2/restaurant/${params.id}`)
      .then(res => res.json())
      .then(restaurantInf => setRestaurantDetails(restaurantInf));
  useEffect(findRestaurantDetailsByID);
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
                    name={restaurant.restaurant_name + " rating"}
                    editing={false}
                    starColor={"#7986e6"}
                    emptyStarColor={"#b0b0b0"}
                    renderStarIcon={() => <IoPaw size={'1.5em'}/>}
                    value={restaurant.rating}
                />
                <Text color={"white"}>{restaurant.reviewCount} Reviews</Text>
              </HStack>
              <Text fontWeight={"bold"}>{restaurant.hours}</Text>
              <HStack>
                <CheckIcon color={"red"}/>
                <Text color={"white"}>husky dollars</Text>
                <CheckIcon color={"red"}/>
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