import React, {useState, useNavigate, useEffect} from "react";
import {Box, Text, VStack} from "@chakra-ui/react";
import restaurant from "./restaurant.json"
import restaurant2 from "./restaurant2.json"
import SearchItems from "../Search/SearchItems";
import {Link} from "react-router-dom";
import { API_URL } from "../../consts";

const Trending = () => {
  const [auth, setAuth] = useState();
  const navigate = useNavigate();

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
  if (typeof(auth) == "boolean") {
    return(<Box w="50%" p={3}>
    <Text md={5} fontWeight="700" textAlign="left">Favorite Restaurants</Text>
    {
              restaurant2.map((restaurant, index) => {
                return (
                    <Box key={restaurant.restaurant_id}>
                      <Link to={`/details/${restaurant.restaurant_id}`}>
                        {/* <VStack spacing="12px"> */}
                          <Box/>
                          <SearchItems restaurant={restaurant}
                                       index={index + 1}/>
                        {/* </VStack> */}
                      </Link>
                    </Box>
                );
              })
            }
  </Box>); 
  } else {
    return(<Box w="50%" p={3}>
    <Text md={5} fontWeight="700" textAlign="left">Trending</Text>
    {
              restaurant.map((restaurant, index) => {
                return (
                    <Box key={restaurant.restaurant_id}>
                      <Link to={`/details/${restaurant.restaurant_id}`}>
                        {/* <VStack spacing="12px"> */}
                          <Box/>
                          <SearchItems restaurant={restaurant}
                                       index={index + 1}/>
                        {/* </VStack> */}
                      </Link>
                    </Box>
                );
              })
            }
  </Box>); 
  }

    
};

export default Trending;