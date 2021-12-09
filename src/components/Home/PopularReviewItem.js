import React from "react";
import {Box, Image, Heading, Text, HStack, WrapItem, VStack, Divider} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const PopularReviewItem = ({review}) => {
    return(     
      <WrapItem borderWidth={2} shadow="l" rounded="lg">
        <Link to='/details'>
          <VStack>
            {/* <Heading size='xs'>For - </Heading> */}
            <Heading size="xs" color="#7986e6" textAlign="left">{review.restaurant}</Heading>
            <Box height="100px" width="175px">
                <Text fontSize="sm" textAlign="center">"{review.review}"</Text>
            </Box>
            <Divider/>
            <HStack>
                <Text>{review.reviewer}</Text>
                <Image boxSize="25px" src={review.profile} alt="profile picture"></Image>
            </HStack>
        </VStack>
        </Link>
      </WrapItem>);
};

export default PopularReviewItem;