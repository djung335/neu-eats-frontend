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
import {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate, useParams} from "react-router-dom";

const ProfileEdit = () => {


  const {isOpen, onOpen, onClose} = useDisclosure()



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
                <Heading lineHeight={1.1} fontSize={{base: '2xl', sm: '3xl'}}>
                  User Profile Edit
                </Heading>

                <FormControl id="Username">
                  <FormLabel>Username</FormLabel>
                  <Input
                      value ={user.username}
                      placeholder="username"
                      _placeholder={{color: 'gray.500'}}
                      type="email"
         
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
                    Submit Username
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalContent>
        </Modal>
      </>
  )
}

export default ProfileEdit;
