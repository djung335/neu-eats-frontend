import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

import {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import ProfileCard from "./ProfileCard"

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
          <ProfileCard/>
        </Box>


      </Flex>
  );

};

export default Profile;
