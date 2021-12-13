import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  Stack,
  Heading,
  useColorModeValue
} from "@chakra-ui/react";
import dave from "../../images/dave.jpeg";
import {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import ProfileEdit from "./ProfileEdit"

const Profile = () => {
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

  return (
      <Flex>
        <Box w='60%'>
          <h1>Profile</h1>
          <h1>Reviews would go here?</h1>
          <input
              value={user.username}
              onChange={(e) => setUser({...user, username: e.target.value})}
              placeholder="username"
              className="form-control"/>
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
                  <Heading fontSize={'18px'} fontStyle={'Bold'}>
                    {user.firstName} {user.lastName}
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
          </VStack>
        </Box>


      </Flex>
  );
}
export default Profile;
