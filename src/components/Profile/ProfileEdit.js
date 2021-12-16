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
  const params = useParams();
  const [user, setUser] = useState('');
  user.id = params.id
  const navigate = useNavigate();

  const getProfile = () => {
    fetch(`${API_URL}/profile?id=${params.id}`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
    .then(user => {
      setUser(user);
    }).catch(e => navigate('/login'));
  }
  useEffect(getProfile, [navigate]);

  const {isOpen, onOpen, onClose} = useDisclosure()
  
  // Had issues connecting the backend to the netlify, this 
  // was workign previously on local but was not able to get it 
  // working on netlify. Spoke to Sajag during office hours regarding this issue.

  const updateUsername = () =>
      fetch(`${API_URL}/users`, {
        method: 'PUT',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(window.location.reload());


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
                      onChange={(e) => setUser({...user, username: e.target.value})}
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
                      onClick={updateUsername}>
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
