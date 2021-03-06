import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";
import {IoPaw} from "react-icons/all";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {helpfulReview} from "../../../services/reviewService";

const ReviewItem = ({review}) => {
  /*
    * Note: "helpfulling" a new review doesn't fully work because of a CORS issue since
    * access control origin is missing and a 503 error that occurs whenever we try to fetch.
    * If we had more time, we could fix this problem
    * by updating the post request to avoid this issue.
    * */
  const dispatch = useDispatch();
  const helpfulReviewHandler = () => {
    helpfulReview(dispatch, review);
  }
  return(
      <>
        <Box
            borderWidth="1px"
            maxW="900px"
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
          <Stack mb={2} direction={'row'} spacing={4} align={'center'}>
            <Link to={`/profile/${review.userID}`}>
              <Avatar
                  src={review.profileImage}
                  alt={'Author'}
              />
            </Link>
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
          <ChakraLink onClick={helpfulReviewHandler} color={"#7986e6"}>
            {review.stats.helpfuls} People Found this Review Helpful
          </ChakraLink>
        </Box>
      </>
  )
}

export default ReviewItem;