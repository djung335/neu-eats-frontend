import {
  Button,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, Textarea, useDisclosure
} from "@chakra-ui/react";
import {FaPenFancy} from "react-icons/all";
import React from "react";

const WriteReview = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  let [value, setValue] = React.useState("")

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
      <>
        <Button
            mr={3}
            colorScheme={'white'}
            bg={'#aacaef'}
            size={"sm"}
            fontSize={'8px'}
            width={'100px'}
            onClick={onOpen}>
          <FaPenFancy/> &nbsp; Edit Profile
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Bio</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <Textarea
                  value={value}
                  onChange={handleInputChange}
                  placeholder="Edit Bio"
                  size="sm"
              />
            </ModalBody>
            <ModalHeader>Email</ModalHeader>
            <ModalBody>
              <Textarea
                  value={value}
                  onChange={handleInputChange}
                  placeholder="Edit Email"
                  size="sm"
              />
            </ModalBody>
            <ModalHeader>Phone Number</ModalHeader>
            <ModalBody>
              <Textarea
                  value={value}
                  onChange={handleInputChange}
                  placeholder="Edit Phone Number"
                  size="sm"
              />
            </ModalBody>
            <ModalFooter>
              <Button
                  colorScheme={'white'}
                  bg={'#aacaef'}
                  onClick={onClose}
              >
                Save Changes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  )
}

export default WriteReview;