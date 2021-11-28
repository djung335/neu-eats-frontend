import {
  Button, HStack, Image,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, Text, Textarea, useDisclosure
} from "@chakra-ui/react";
import {FaPenFancy} from "react-icons/all";
import React from "react";
import emptyPaw from "../../images/custom_empty_star.png";
import Rating from "./Rating";

const WriteReview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let [value, setValue] = React.useState("")

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return(
      <>
        <Button
            mr={3}
            colorScheme={'white'}
            bg={'#aacaef'}
            onClick={onOpen}>
          <FaPenFancy/> &nbsp; Write a Review
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Write a Review for "Boston Shawarma"</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <HStack>
                <Rating/>
              </HStack>
              <Textarea
                  value={value}
                  onChange={handleInputChange}
                  placeholder="Write your review here..."
                  size="sm"
              />
            </ModalBody>

            <ModalFooter>
              <Button
                  colorScheme={'white'}
                  bg={'#aacaef'}
                  onClick={onClose}
              >
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}

export default WriteReview;