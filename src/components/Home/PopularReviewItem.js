import React from "react";
import {Box, Image, Heading, Text, HStack, Wrap, WrapItem, VStack, Center, Divider} from "@chakra-ui/react";

const PopularReviewItem = ({review}) => {
    return(     
      <WrapItem borderWidth={2} shadow="l" rounded="lg" width="225px" height="175px">
          <VStack>
        {/* <Heading size='xs'>For - </Heading> */}
        <Heading size="xs" color="#7986e6" textAlign="left">{review.restaurant}</Heading>
        <Box>
            <Text fontSize="sm" textAlign="center">"{review.review}"</Text>
        </Box>
        <Divider />
        
        <HStack>
        <Text>{review.reviewer}</Text>
        <Image boxSize="25px" src={review.profile} alt="profile picture"></Image>
        </HStack>
        </VStack>
      </WrapItem>);
};

export default PopularReviewItem;