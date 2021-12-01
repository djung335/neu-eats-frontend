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

const WriteReview = ({
  restaurant = {
    "restaurant_id": 10,
    "name": "Boston Shawarma",
    "address": "315 Huntington Ave",
    "city": "Boston",
    "state": "MA",
    "zip": "02115",
    "rating": 4.0,
    "reviewCount": 2,
    "restaurantImage": "../../images/boston-shawarma-1.jpeg",
    "attributes": {
      "HuskyDollars": true,
      "StudentDiscount": true
    },
    "categories": [
      "Halal",
      "Middle Eastern",
      "Mediterranean"
    ],
    "hours": {
      "Monday": "10:00-23:00",
      "Tuesday": "10:00-23:00",
      "Friday": "10:00-23:00",
      "Wednesday": "10:00-23:00",
      "Thursday": "10:00-23:00",
      "Sunday": "10:00-23:00",
      "Saturday": "10:00-23:00"
    }
  }
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let [value, setValue] = React.useState("")

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return(
      <>
        <Button
            onClick={onOpen}
        >
          <FaPenFancy/> &nbsp; Write a Review
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Write a Review for "{restaurant.name}"</ModalHeader>
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