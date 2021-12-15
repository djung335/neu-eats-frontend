import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image,
  Stack,
  Heading,
  useColorModeValue
} from "@chakra-ui/react";
import dave from "../../images/dave.jpeg";
import {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate, useParams} from "react-router-dom";
import ProfileEdit from "./ProfileEdit"
import ProfileReviews from "./ProfileReviews"

const ProfileAnon = () => {
  const params = useParams();
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const getUser = () => {
    fetch(`${API_URL}/users/?id=${params.id}`, {
      method: 'GET',
      credentials: 'include'
    }).then(res => res.json())
    .then(user => {
      setUser(user);
    });
  }
  useEffect(getUser, [navigate]);

  return (
      <Flex>
        <HStack>
          <Box w='60%'>
            <VStack align={'left'}>
              <Heading>{user.firstName} {user.lastName}'s Reviews</Heading>
              <ProfileReviews user={user}/>
            </VStack>
          </Box>
          <Box w='40%'>
            <VStack>
              <Box
                  maxW={'270px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}>
                <Box padding={'10px'}>
                  <Image
                      h={'75%'}
                      w={'full'}
                      src={dave}
                      objectFit={'cover'}
                  />
                </Box>
                <Box p={6}>
                  <Stack spacing={0} align={'center'} mb={5}>
                    <VStack>

                      {user.owner && <Heading fontSize={'18px'}
                                              fontStyle={'Bold'}>
                        {user.firstName} {user.lastName} (Owner)
                      </Heading>}
                      {!user.owner && <Heading fontSize={'18px'}
                                               fontStyle={'Bold'}>
                        {user.firstName} {user.lastName}
                      </Heading>}
                      <Text fontSize={'12px'} paddingTop={'5px'}>
                        <b>Username:</b> {user.username}
                      </Text>
                      <Text fontSize={'12px'} paddingTop={'5px'}>
                        <b>Email:</b> {user.email}
                      </Text>
                    </VStack>
                  </Stack>
                </Box>
                <Box align={'right'}>
                  <ProfileEdit/>
                </Box>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Flex>
  );
}
export default ProfileAnon;