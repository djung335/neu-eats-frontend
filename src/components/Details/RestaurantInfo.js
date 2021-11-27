import {
  Button,
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
import {FaPenFancy} from "react-icons/all";
import {Link} from "react-router-dom";

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
            <Link to={'/review'}> {/* fix button alignment by changing justification*/}
              <Button
                  mr={3}
                  colorScheme={'teal'}
                  bg={'#aacaef'}>
                <FaPenFancy/> &nbsp; Write a Review
              </Button>
            </Link>
          </HStack>
        </Flex>
      </>
  )
}

export default RestaurantInfo;