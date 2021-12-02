import React from "react";
import "./index.css"
import {Box, Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FaPaw, FaCheck, FaTimes, IoPaw} from "react-icons/all";

import shawarma from "../../images/boston-shawarma-1.jpeg";

import StarRatingComponent from "react-star-rating-component";

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
            <Image src={shawarma} alt="Restaurant Photo"/></Box>
          <Box>
          </Box>
          <VStack align="left">
            <Heading fontSize="xl">{index}. {rest.restName}</Heading>
            <HStack>

              <StarRatingComponent
                  editing={false}
                  starColor={"#7986e6"}
                  emptyStarColor={"#b0b0b0"}
                  renderStarIcon={() => <IoPaw fontSize={'12px'}/>}
                  value={rest.restRating}
              />

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