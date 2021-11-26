import React from "react";
import { Flex } from "@chakra-ui/react";
import LeftSide from "./LeftSide/";
import RightSide from "./RightSide/";
import RestaurantRegisterForm from "./RestaurantRegisterForm";

const RestaurantSetUp = () => {
    return ( <
        Flex minH = "100vh" >
        <
        LeftSide / >
        <
        RightSide component = { < RestaurantRegisterForm / > }
        /> <
        /Flex>
    );
};

export default RestaurantSetUp;