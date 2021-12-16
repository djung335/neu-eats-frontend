import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue, Spacer,
} from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";
import {FaTrash, IoPaw} from "react-icons/all";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteReview} from "../../../services/reviewService";

const ReviewItemRestaurant = ({review}) => {
  const dispatch = useDispatch();
  const deleteReviewClickHandler = () => {
    deleteReview(dispatch, review);
  };
  return(
      <>
        <Box
            borderWidth="1px"
            maxW="98%"
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
        >
          <Stack mb={2} direction={'row'} spacing={4} align={'center'}>
            <Link to={'/profile/' /*+ {review.userid}*/}>
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
            <Spacer/>
            <FaTrash color={'gray.500'} onClick={deleteReviewClickHandler}/>
          </Stack>
          <Stack>
            <Text color={'gray.500'}>
              {review.review}
            </Text>
          </Stack>
          <Text color={"#7986e6"}>
            {review.stats.helpfuls} People Found this Review Helpful
          </Text>
        </Box>
      </>
  )
}

export default ReviewItemRestaurant;