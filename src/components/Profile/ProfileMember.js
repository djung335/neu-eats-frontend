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

const ProfileMember = () => {
  const params = useParams();
  const [user, setUser] = useState('');
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

  return (
      <Flex>
        <HStack>
          <Box w='60%'>
            <VStack align={'left'}>
              <Heading>{user.firstName} {user.lastName}'s Reviews</Heading>
              <ProfileReviews/>
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
export default ProfileMember;
