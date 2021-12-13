import React, {useEffect, useState} from "react";
import {Link as ReachLink, useNavigate} from "react-router-dom";
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

import {API_URL} from "../../consts";

const ProfileCard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState();
  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
    .then(user => {
      setUser(user);
    }).catch(e => navigate('/login'));
  }

  const logout = () => {
    fetch(`${API_URL}/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => navigate(''))
    .then(res => {
      window.location.reload();
    });
  }

}

return (
    <Flex py={6} paddingLeft={'175px'}>
      <VStack>
        {button}
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
                {user.username} {user.lastName}
              </Heading>
            </Stack>

            <Text fontSize={'12px'} paddingTop={'5px'}>
              <b>Email:</b> {user.email}
            </Text>


          </Box>
          <Box align={'right'}>
            <ProfileEdit/>
          </Box>
        </Box>
        <Box paddingLeft={'155px'}>
          <Button
              mr={3}
              colorScheme={'white'}
              bg={'red'}
              size={"sm"}
              fontSize={'8px'}
              width={'100px'}
              onClick{logout}
          >
            Log out
          </Button>
        </Box>
      </VStack>
    </Flex>

);
}
export default ProfileCard;
