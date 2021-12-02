import React from "react";
import {Box, Text, Wrap, WrapItem} from "@chakra-ui/react";
import reviews from "./reviews.json";
import TrendingItem from "./TrendingItem";

const Trending = () => {
    return(<Box w="50%" p={3}>
    <Text fontWeight="700" textAlign="left">Trending</Text>
  </Box>); 
    
};

export default Trending;