import React from "react";
import {
  Box,
  Heading,
  HStack,
  Image,
  Stack, StackDivider,
  Text, useColorModeValue,
  VStack
} from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";
import {IoPaw} from "react-icons/all";
import dave from "../../images/dave.jpeg";

const ProfileReviewItem = ({

  review = {
    _id: "567",
    restaurant: "Boston Shawarma",
    userName: "dave24",
    verified: true,
    handle: "Dave P.",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    time: "November 30, 2021",
    profileImage: "../../images/dave.jpeg",
    stats: {
      rating: 4.5,
      helpfuls: 0

    }
  }

}) => {
  return (
      <Box paddingTop={10}>
        <Box
            borderWidth="1px"
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
          <Stack>

            spacing={3}
            bg={useColorModeValue('white', 'gray.800')}

            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            p={6}
            my={12}>
            <HStack
                spacing={10}
                divider={<StackDivider borderColor="gray.200"/>}
            >
              <VStack>
                <Image src={dave} w={'350px'} h={'auto'} alt='ProfilePic'/>
                <Text lineHeight={1.1} fontSize={{base: 'sm', md: 'md'}}>
                  {review.handle}
                </Text>
                <span pos={"relative"} left={"100px"}>
                <StarRatingComponent
                    name={review.handle + "'s review"}
                    editing={false}
                    starColor={"#7986e6"}
                    emptyStarColor={"#b0b0b0"}
                    renderStarIcon={() => <IoPaw fontSize={'12px'}/>}
                    value={review.stats.rating}
                />
              </span>
              </VStack>
              <Text
                  fontSize={'12px'}
                  color={useColorModeValue('gray.800', 'gray.400')}
              >
                {review.review}
              </Text>
            </HStack>
          </Stack>
        </Box>
      </Box>
  );
}
export default ProfileReviewItem;