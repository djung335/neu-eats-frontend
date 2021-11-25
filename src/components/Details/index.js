import React from "react";
import {
  Box,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  Divider,
  HStack,
  Image,
  useColorModeValue,
  Heading,
  Stack,
  Button,
  Flex,
  Avatar, useBreakpointValue, FormControl, StackDivider
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import image1 from "../../images/boston-shawarma-1.jpeg";
import image2 from "../../images/boston-shawarma-2.jpeg";
import alexa from "../../images/alexa.jpeg";
import dave from "../../images/dave.jpeg";
import {BsStarFill, BsStarHalf} from "react-icons/all";

const Details = () => {
  return(
      <Center>
        <VStack>
          <HStack spacing={"0px"}>
            <Image src={image1} alt={"image of wrap being made"} w={"50%"}/>
            <Image src={image2} alt={"image of the restaurant"} w={"50%"}/>
          </HStack>
          {/* Card 1 */}
          <Stack
              spacing={3}
              w={'full'}
              maxW={'95%'}
              bg={useColorModeValue('white', 'gray')}
              rounded={'xl'}
              boxShadow={'lg'}
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
                  <BsStarFill color={'teal'}/>
                  <BsStarFill color={'teal'}/>
                  <BsStarFill color={'teal'}/>
                  <BsStarFill color={'teal'}/>
                  <BsStarFill color={'teal'}/>
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
          {/* Card 2*/}
          <Stack
              spacing={3}
              w={'full'}
              maxW={'95%'}
              bg={useColorModeValue('white', 'gray')}
              rounded={'xl'}
              boxShadow={'lg'}
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
                  <BsStarFill color={'teal'}/>
                  <BsStarFill color={'teal'}/>
                  <BsStarFill color={'teal'}/>
                  <BsStarFill color={'teal'}/>
                  <BsStarHalf color={'teal'}/>
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
        </VStack>
      </Center>
  );


};

export default Details;