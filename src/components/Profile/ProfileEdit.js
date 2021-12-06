import {
  Button,
  Modal,
  ModalContent, useDisclosure,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
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
          &nbsp; Edit Profile
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>

          <ModalContent>
            <Flex
                minH={'auto'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
              <Stack
                  spacing={4}
                  w={'full'}
                  maxW={'md'}
                  bg={useColorModeValue('white', 'gray.700')}
                  rounded={'xl'}
                  boxShadow={'sm'}
                  p={6}
                  my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                  User Profile Edit
                </Heading>

                <FormControl id="Bio">
                  <FormLabel>Bio</FormLabel>
                  <Input
                      placeholder="Bio"
                      _placeholder={{ color: 'gray.500' }}
                      type="text"
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                      placeholder="your-email@example.com"
                      _placeholder={{ color: 'gray.500' }}
                      type="email"
                  />
                </FormControl>
                <FormControl id="phoneNumber">
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                      placeholder="(123)-456-7890"
                      _placeholder={{ color: 'gray.500' }}
                      type="phoneNumber"
                  />
                </FormControl>
                <Stack spacing={6} direction={['column', 'row']}>
                  <Button
                      bg={'red.400'}
                      color={'white'}
                      w="full"
                      _hover={{
                        bg: 'red.500',
                      }}
                      onClick={onClose}>>
                    Cancel
                  </Button>
                  <Button
                      bg={'blue.400'}
                      color={'white'}
                      w="full"
                      _hover={{
                        bg: 'blue.500',
                      }}
                      onClick={onClose}>
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalContent>
        </Modal>
      </>
  )
}

export default WriteReview;