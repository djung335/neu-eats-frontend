import {
  Heading,
  HStack, Image,
  Stack,
  StackDivider, Text,
  useColorModeValue, VStack
} from "@chakra-ui/react";
import alexa from "../../images/alexa.jpeg";
import {BsStarFill, BsStarHalf} from "react-icons/all";
import dave from "../../images/dave.jpeg";
import React from "react";

const Reviews = () => {
  return(
      <>
        <Heading>Reviews</Heading>
        <Stack
            spacing={3}
            bg={useColorModeValue('white', 'gray.800')}
            maxW="95%"
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
              <HStack>
                <BsStarFill color={'#7986E6'}/>
                <BsStarFill color={'#7986E6'}/>
                <BsStarFill color={'#7986E6'}/>
                <BsStarFill color={'#7986E6'}/>
                <BsStarFill color={'#7986E6'}/>
              </HStack>
            </VStack>
            <Text
                fontSize={{ base: 'sm', sm: 'md' }}
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
            maxW="95%"
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
              <HStack>
                <BsStarFill color={'#7986E6'}/>
                <BsStarFill color={'#7986E6'}/>
                <BsStarFill color={'#7986E6'}/>
                <BsStarFill color={'#7986E6'}/>
                <BsStarHalf color={'#7986E6'}/>
              </HStack>
            </VStack>
            <Text
                fontSize={{ base: 'sm', sm: 'md' }}
                color={useColorModeValue('gray.800', 'gray.400')}
            >
              Delicious and quick - two critical characteristics for a shawarma restaurant in my opinion. Boston Shawarma is neat and clean and a varied menu - chicken, lamb, kafta and falafel. It’s hard to go wrong here.
            </Text>
          </HStack>
        </Stack>
      </>
  )
}

export default Reviews;