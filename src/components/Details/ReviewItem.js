import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";
import {IoPaw} from "react-icons/all";

const ReviewItem = ({review}) => {
  return(
      <>
        <Box
            borderWidth="1px"
            maxW="95%"
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
          <Stack mb={2} direction={'row'} spacing={4} align={'center'}>
            <Avatar
                src={review.profileImage}
                alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{review.handle}</Text>
              <span pos={"relative"} left={"100px"}>
                <StarRatingComponent
                  name={review.handle + "'s review"}
                  editing={false}
                  starColor={"#7986e6"}
                  emptyStarColor={"#b0b0b0"}
                  renderStarIcon={() => <IoPaw fontSize={['sm', 'md', 'lg', 'xl']}/>}
                  value={review.stats.rating}
              />
              </span>
              <Text color={'gray.500'}>{review.time}</Text>
            </Stack>
          </Stack>
          <Stack>
            <Text color={'gray.500'}>
              {review.review}
            </Text>
          </Stack>
        </Box>
      </>
  )
}

export default ReviewItem;