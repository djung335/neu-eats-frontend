import React from "react";
import "./index.css"
import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FaPaw, FaCheck, FaTimes} from "react-icons/all";
import shawarma from "../../images/boston-shawarma-1.jpeg";

const SearchItem = ({
  rest = {
    restIcon: "/images/java-logo.jpeg",
    restName: "Java", restRating: 4,
    restReviews: "10", restDes:"Lorem something",
    studentRev: "10", otherRev: "4",
    husky: true, discount: false,
    tags: [ "Japanese", "Sushi", "Bar" ]
  },
  index={ }
}) => {
  return (
      <Box p={3} borderWidth={2} shadow="xl" rounded="lg">
        <HStack w="full">

          <Box w="30%">
            {/*Need to change so that it takes image from api
            current one is just placeholder*/}
            <Image src={shawarma} alt="Restaurant Photo"/></Box>
          <Box>
          </Box>
          <VStack align="left">
            <Heading fontSize="xl">{index}. {rest.restName}</Heading>
            <HStack>
              {/*{[...Array(rest.restReviews)].map((star) => {*/}
              {/*  return <FaPaw color="7986e6"/>*/}
              {/*})}*/}
              {rest.restRating >=1 && <FaPaw color="7986e6"/>}
              {rest.restRating < 1 && <FaPaw color="gray"/>}
              {rest.restRating >=2 && <FaPaw color="7986e6"/>}
              {rest.restRating < 2 && <FaPaw color="gray"/>}
              {rest.restRating >=3 && <FaPaw color="7986e6"/>}
              {rest.restRating < 3 && <FaPaw color="gray"/>}
              {rest.restRating >=4 && <FaPaw color="7986e6"/>}
              {rest.restRating < 4 && <FaPaw color="gray"/>}
              {rest.restRating >=5 && <FaPaw color="7986e6"/>}
              {rest.restRating < 5 && <FaPaw color="gray"/>}
              <Text fontSize="12" fontWeight="bold">{rest.restReviews} Reviews</Text>
              <Text fontSize="12">({rest.studentRev} student reviews & {rest.otherRev} other reviews)</Text>
            </HStack>
            <Text>{rest.restDes}</Text>
            <hr/>
            <HStack>
              {rest.husky && <FaCheck fontSize="12" color="green"/>}
              {!rest.husky && <FaTimes fontSize="12" color="red"/>}
              <Text fontSize="12">Husky Dollars</Text>
              {rest.discount && <FaCheck fontSize="12" color="green"/>}
              {!rest.discount && <FaTimes fontSize="12" color="red"/>}
              <Text fontSize="12">Student Discount</Text>
            </HStack>
            <HStack>
            {rest.tags.map((tags) => {
              return <Box fontSize="12" borderRadius="md" background="#7986e6" color="white" p="0.5">{tags}</Box>
            })}
            </HStack>

          </VStack>
        </HStack>
      </Box>
  );
}
export default SearchItem;