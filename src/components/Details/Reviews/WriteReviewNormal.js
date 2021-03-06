import {
  Button, HStack,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, Textarea, useDisclosure
} from "@chakra-ui/react";
import {FaPenFancy} from "react-icons/all";
import React, {useState} from "react";
import Rating from "./Rating";
import {useDispatch} from "react-redux";
import {postNewReview} from "../../../services/reviewService";

const WriteReviewNormal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [newReview, setReview] = useState('');
  const dispatch = useDispatch();
  const reviewClickHandler = () => {
    /*
    * Note: posting a new review doesn't fully work because of a CORS issue since
    * access control origin is missing and a 503 error that occurs whenever we try to fetch.
    * If we had more time, we could fix this problem
    * by updating the post request to avoid this issue.
    * */
    postNewReview(dispatch, {
      review: newReview
    });

  }
  return(
      <>
        <Button
            mr={3}
            colorScheme={'white'}
            bg={'#aacaef'}
            onClick={onOpen}
        >
          <FaPenFancy/> &nbsp; Write a Review
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Write Your Review Below</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <HStack>
                <Rating/>
              </HStack>
              <Textarea
                  placeholder="Write your review here..."
                  size="sm"
                  value={newReview}
                  onChange={(event) => setReview(event.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                  colorScheme={'white'}
                  bg={'#aacaef'}
                  onClick={reviewClickHandler}
                  onClick={createReview}
              >
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}

export default WriteReviewNormal;