import {
  Heading,
  HStack, Image,
  Stack,
  StackDivider, Text,
  useColorModeValue, VStack
} from "@chakra-ui/react";
import alexa from "../../images/alexa.jpeg";
import dave from "../../images/dave.jpeg";
import React from "react";
import filledPaw from "../../images/custom_filled_star.png";
import emptyPaw from "../../images/custom_empty_star.png";

const ProfileReviews = ({
  user = {
    user: false,
    owner: true,
    restName: "Qdoba",
    email: "qdoba.com",
    phoneNumber:"(123)-456-7890",
    reviews:"2",
    friends:"10"

  }
}) => {
  return(
      <>
        {user.owner && <Heading size={'lg'}>Your Restaurant Reviews</Heading>}
        {user.user && <Heading size={'lg'}>Your Reviews</Heading>}
        {!user.user && !user.owner && <Heading size={'lg'}>{user.restName}'s Reviews</Heading>}
        <Stack
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
              divider={<StackDivider borderColor="gray.200" />}
          >
            <VStack>
              <Image src={alexa} w={'300px'} h={'auto'}/>
              <Text lineHeight={1.1} fontSize={{ base: 'sm', md: 'md' }}>
                Alexa S.
              </Text>
              <HStack spacing={'3px'}>
                <Image src={filledPaw} w={'18px'}/>
                <Image src={filledPaw} w={'18px'}/>
                <Image src={filledPaw} w={'18px'}/>
                <Image src={filledPaw} w={'18px'}/>
                <Image src={filledPaw} w={'18px'}/>
              </HStack>
            </VStack>
            <Text
                fontSize={'12px'}
                color={useColorModeValue('gray.800', 'gray.400')}
            >
              Recently dropped by for some Shawarma after moving to the area, and have to say this is the best, most reasonably price shawarma place in the area. The staff are really friendly and the food is a decent sized portion.
              <br/><br/>
              I had a chicken and lamb rice platter, which was really great, my only complaint is that there wasn't enough sauce with the hummus, but at $12, it wasn't bad for the area at all. The chicken and lamb weren't dry and there was plenty of flavor. On top of that, since I dined in, I got a free bottle of water with the meal.
            </Text>
          </HStack>
        </Stack>
        <Stack
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
              divider={<StackDivider borderColor="gray.200" />}
          >
            <VStack>
              <Image src={dave} w={'300px'} h={'auto'}/>
              <Text lineHeight={1.1} fontSize={{ base: 'sm', md: 'md' }}>
                Dave P.
              </Text>
              <HStack spacing={'3px'}>
                <Image src={filledPaw} w={'18px'}/>
                <Image src={filledPaw} w={'18px'}/>
                <Image src={filledPaw} w={'18px'}/>
                <Image src={filledPaw} w={'18px'}/>
                <Image src={emptyPaw} w={'18px'}/>
              </HStack>
            </VStack>
            <Text
                fontSize={'12px'}
                color={useColorModeValue('gray.800', 'gray.400')}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </HStack>
        </Stack>
      </>
  )
}

export default ProfileReviews;