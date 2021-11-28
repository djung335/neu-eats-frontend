import {
  Flex,
  Heading,
  HStack,
  Image, Text,
  VStack
} from "@chakra-ui/react";
import image1 from "../../images/boston-shawarma-1.jpeg";
import filledPaw from "../../images/custom_filled_star.png";
import emptyPaw from "../../images/custom_empty_star.png";
import React from "react";
import WriteReview from "./WriteReview";

const RestaurantInfo = () => {
  return(
      <>
        <Flex
            w={'full'}
            h={'50vh'}
            backgroundImage={
              image1
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
          <HStack align={'flex-end'} maxW={'2xl'} spacing={6}>
            <VStack align={'left'}>
              <Heading color={"white"} as={'h2'} mb={2} size={'2xl'}>Boston Shawarma</Heading>
              <HStack spacing={"3px"}>
                <Image src={filledPaw} w={'40px'}/>
                <Image src={filledPaw} w={'40px'}/>
                <Image src={filledPaw} w={'40px'}/>
                <Image src={filledPaw} w={'40px'}/>
                <Image src={emptyPaw} w={'40px'}/>
                <Text color={"white"}>614 Reviews</Text>
              </HStack>
            </VStack>
            <WriteReview/>
          </HStack>
        </Flex>
      </>
  )
}

export default RestaurantInfo;