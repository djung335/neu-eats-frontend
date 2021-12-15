import React, {useEffect, useState} from "react";
import {
  Center,
  VStack,
} from "@chakra-ui/react";

import {useNavigate} from "react-router-dom";
import {API_URL} from "../../consts";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reviews from "../../reducers/reviews";
import ProfileMember from "./ProfileMember";
import ProfileAnon from "./ProfileAnon";

const store = createStore(reviews);

const Profile = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const getAuth = () => {
    fetch(`${API_URL}/auth`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
    .then(auth => {
      setAuth(auth);
    })
  }
  useEffect(getAuth, [navigate]);

  let prof;
  if (typeof (auth) == "boolean") {
    prof = <ProfileMember/>
  } else {
    prof = <ProfileAnon/>
  }
  return (
      <Provider store={store}>
        {prof}
      </Provider>
  );
};

export default Profile;
