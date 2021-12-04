import React from "react";
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

const ProfileCard = ({user = {
  name: "Dave peters",
  user: true,
  userName: "dave24",
  restaurant: "Qdoba",
  email: "qdoba.com",
  phoneNumber: "(123)-456-7890",
  reviews: "2",
  friends: "10",
  bio: "Ut enim ad minim veniam, quis nostrud exercitation"}}) => {
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

              {(!user.user ) &&
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'18px'} fontStyle={'Bold'}>
                  {user.name}
                </Heading>
                <Heading fontSize={'14px'} fontStyle={'Bold'}>Owner
                  of {user.restaurant}</Heading>
              </Stack>
              }


              {user.user &&
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'18px'} fontStyle={'Bold'}>
                  {user.name} (You)
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