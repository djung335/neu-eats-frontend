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
    }).catch(e => navigate('/login'));

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
      <div>
        <h1>Profile</h1>
        <input
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            className="form-control"/>
        <button
            onClick={logout}
            className="btn btn-danger">
          Logout
        </button>
       
      </div>
  );


};

export default Profile;
