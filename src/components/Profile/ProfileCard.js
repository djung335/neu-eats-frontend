import React, { useEffect, useState } from "react";
import dave from "../../images/dave.jpeg";
import {
  Heading,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import ProfileEdit from "./ProfileEdit";

import { API_URL } from "../../consts";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
      .then(user => {
        setUser(user);
    }).catch(e => navigate('/login'));
  }
  useEffect(getProfile, [navigate]);

  return (
      <Flex py={6} paddingLeft={'175px'}>
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
                <Heading fontSize={'18px'} fontStyle={'Bold'}>
                {user.username}
                </Heading>
                <Heading fontSize={'14px'} fontStyle={'Bold'}>Owner
                  of {user.restName}</Heading>

              </Stack>
              {/*{(!user.user && !user.owner) &&
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'18px'} fontStyle={'Bold'}>
                  {user.name}
                </Heading>
                <Heading fontSize={'14px'} fontStyle={'Bold'}>Owner
                  of {user.restaurant}</Heading>
              </Stack>
              }*/}


              {user.user &&
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'18px'} fontStyle={'Bold'}>
                </Heading>
                <Heading fontSize={'14px'}
                         fontStyle={'Bold'}>Friends: {user.friends} |
                  Reviews: {user.reviews}</Heading>
              </Stack>
              }
              <Text fontSize={'12px'}>
                <b>Bio: </b>{user.bio}
              </Text>
              <Text fontSize={'12px'} paddingTop={'5px'}>
                <b>Email:</b> {user.email}
              </Text>
              <Text fontSize={'12px'} paddingTop={'5px'}>
                <b>Phone Number:</b> {user.phoneNumber}
              </Text>


            </Box>
            <Box align={'right'}>
              {(user.user || user.owner) &&
              <ProfileEdit/>}
            </Box>
          </Box>
          <Box paddingLeft={'155px'}>
            {(user.user || user.owner) && <Button
                mr={3}
                colorScheme={'white'}
                bg={'red'}
                size={"sm"}
                fontSize={'8px'}
                width={'100px'}
            >
              Log out
            </Button>}
          </Box>
        </VStack>


      </Flex>

  );
}
export default ProfileCard;