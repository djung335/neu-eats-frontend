import React from "react";
import { Box,Flex,Text, Image, Heading, HStack, VStack} from "@chakra-ui/react";
import rest from "./rest.json"
import SearchItems from "./SearchItems";

const Search = () => {
  return(
      <Flex>
      <Box p="2" w="60%">
          <Text fontWeight="bold" fontSize="2em">Results for "Good Food"...</Text>
        {
          rest.map((rest, index) => {
            return(
                <VStack spacing="12px">
                  <Box/>
                <SearchItems rest={rest} index={index+1} />
                </VStack>
            );
          })
        }
      </Box>
        <Box w="40%">
          <h1>Map goes here!</h1>
        </Box>
      </Flex>

  );


};

export default Search;