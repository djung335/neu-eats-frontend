import React, {useEffect, useState} from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer, Spinner,
  Text,
  VStack
} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";
import {IoPaw} from "react-icons/all";
import StarRatingComponent from 'react-star-rating-component';
import {useParams} from "react-router-dom";

const RestaurantPage = () => {
  const params = useParams();
  const [loading, setLoading] = React.useState(true);
  const [restaurant, setRestaurant] = useState([]);

  const findRestaurantByID = () => {
    setLoading(true);
    fetch(
        `https://api.documenu.com/v2/restaurant/${params.id}?key=65ca9233213581c4962279e4e767f1ca`)
    .then(res => res.json())
    .then((restaurant) => {
      setRestaurant(restaurant.result);
      setLoading(false);
    });
  }

  useEffect(findRestaurantByID, []);
  if (loading) {
    return <Spinner/>;
  }
  return(
      <>
        <Flex
            w={'full'}
            h={'50vh'}
            paddingLeft={"20px"}
            paddingBottom={"20px"}
            bgGradient={[
              'linear(to-b, orange.200, teal.500)',
            ]}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
        >
          <HStack align={'flex-end'} maxW={'2xl'} spacing={3}>
            <VStack align={'left'}>
              <Heading color={"white"} as={'h2'} mb={0} size={'2xl'}>{restaurant.restaurant_name}</Heading>
              <HStack spacing={"3px"}>
                <StarRatingComponent
                    name={"restaurant rating"}
                    editing={false}
                    starColor={"#7986e6"}
                    emptyStarColor={"#b0b0b0"}
                    renderStarIcon={() => <IoPaw size={'1.5em'}/>}
                    value={4}
                />
              </HStack>
              <Text color={"white"} fontWeight={"bold"}>{restaurant.hours.localeCompare("") === 0 ? "Hours Not Available" : restaurant.hours}</Text>
              <Text color={"white"} fontWeight={"bold"}>{restaurant.price_range}</Text>
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
        <>
          <Heading size={'lg'}>Additional Information</Heading>
          <Text>Phone Number: {restaurant.restaurant_phone}</Text>
          <Text>Address: {restaurant.address.formatted}</Text>
          <Text>Restaurant Website: {restaurant.restaurant_website.localeCompare("") === 0 ? "Website Not Available" : restaurant.restaurant_website}</Text>
          <Text>Owner: No Owner Associated With Establishment</Text>
          <HStack>{restaurant.cuisines.map(cuisine => {
            return(<Box fontSize="12" borderRadius="md" background="#7986e6"
                        color="white" p="1">{cuisine}</Box>);
          })}</HStack>
        </>
      </>
  )
}

export default RestaurantPage;