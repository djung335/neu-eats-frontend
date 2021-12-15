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

  let reviews;
  if (typeof (auth) == "boolean") {
    reviews = <ProfileAnon/>
  } else {
    reviews = <ProfileMember/>
  }
  return (
      <Provider store={store}>
        {reviews}
      </Provider>
  );
};

export default Profile;
