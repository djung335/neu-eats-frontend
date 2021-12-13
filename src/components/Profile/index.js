import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

import {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";


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
    });

  /*.catch(e => navigate('/login'))*/
  }
  const logout = () => {
    fetch(`${API_URL}/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => navigate('/'));
  }
  useEffect(getProfile, [navigate]);
  return(
      <Flex>
        <Box w="60%" paddingLeft="100px">
          <Text>{user.firstName} backend broken?</Text>
        </Box>
        <Box w="40%">
          <Text> testing out something </Text>
        </Box>
      </Flex>

  );


};

export default Profile;