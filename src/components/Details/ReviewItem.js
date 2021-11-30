import React from "react";
import {
  HStack, Image, Stack,
  StackDivider, Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import emptyPaw from "../../images/custom_empty_star.png";
import halfPaw from "../../images/custom_half_filled_star.png";
import filledPaw from "../../images/custom_filled_star.png";

const ReviewItem = ({review}) => {
  return(
      <>
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
              <Image src={review.profileImage} w={'400px'} h={'100px'} objectFit={"contain"}/>
              <Text lineHeight={1.1} fontSize={{ base: 'sm', md: 'md' }}>
                {review.handle}
              </Text>
              <HStack spacing={'3px'}>
                <Image src={filledPaw} w={{base: "30px", sm: "10px", md: "20px"}}/>
                <Image src={filledPaw} w={{base: "30px", sm: "10px", md: "20px"}}/>
                <Image src={filledPaw} w={{base: "30px", sm: "10px", md: "20px"}}/>
                <Image src={filledPaw} w={{base: "30px", sm: "10px", md: "20px"}}/>
                <Image src={filledPaw} w={{base: "30px", sm: "10px", md: "20px"}}/>
              </HStack>
            </VStack>
            <Text
                fontSize={{ base: 'sm', sm: 'sm' }}
                color={useColorModeValue('gray.800', 'gray.400')}
            >
              {review.review}
            </Text>
          </HStack>
        </Stack>
      </>
  )
}

export default ReviewItem;