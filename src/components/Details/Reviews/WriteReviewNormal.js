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
  const [writeReview, setWriteReview] = useState("");
  const createReview = () => postNewReview({review: writeReview});
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
              />
            </ModalBody>

            <ModalFooter>
              <Button
                  colorScheme={'white'}
                  bg={'#aacaef'}
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