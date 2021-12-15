import React from "react";
import {
  Text,
  Heading,
  VStack,
  OrderedList,
  ListItem,
  Box, Center, UnorderedList
} from "@chakra-ui/react";

const PrivacyPolicy = () => {
return(
  <Box background={"#aacaef"} paddingTop={"20px"} paddingBottom={"20px"}>
    <VStack>
    <Box width={"90%"} padding={"20px"} background={"#ffffff"}>
      <Center>
        <Heading paddingBottom={"10px"}>Privacy Policy</Heading>
      </Center>
      <OrderedList>
        <ListItem fontWeight={'bold'}>Information We Collect</ListItem>
        <Text>We may collect, transmit, and store information about you in connection with your use of our website, including any information that you post or send to or through the website. This information includes reviews and personal information, such as your full name, username, profile photos, email address, and anything else that you have posted or sent to or through our website.</Text>
        <ListItem fontWeight={'bold'} paddingTop={"10px"}>How We Collect User Information</ListItem>
        <UnorderedList variant={'a'}>
          <ListItem><Box fontWeight={'bold'}>Account Information:</Box> When a user first creates an account on NEU Eats, we collect and use the information the user provides during that process, such as their first name, last name, email address, and any other information they may provide during the account creation process such as their username. We may publicly display the first and last names a user provides, as well their profile photo, on restaurant pages that they post reviews on. The user can later modify some of the account information provided using the website's account settings.</ListItem>
          <ListItem><Box fontWeight={'bold'}>Public Content</Box> User contributions to NEU Eats are intended for public consumption and are therefore viewable to the public. Contributions include any photos, ratings, or reviews that a user may post on the website. Additionally, a user's account profile is also intended for public consumption, including their profile photo, handle, and recent reviews.</ListItem>
          <ListItem><Box fontWeight={'bold'}>Different Devices</Box> A user may access NEU Eats on different devices. The information collected and stored through those different uses may be cross-referenced and combined.</ListItem>
          <ListItem><Box fontWeight={'bold'}>Professional Information</Box> If a user owns a restaurant and has claimed it on NEU Eats, we may collect and display information about the owner related to recent restaurant activities, including the owner's professional background shared with us including an optional personal biography.</ListItem>
        </UnorderedList>
        <ListItem fontWeight={'bold'} paddingTop={"10px"}>Reason for Collecting Information and Uses of User Information</ListItem>
        <Text>We use the information we collect to provide functionality to our website, fulfill your requests, improve the quality of our website, and enhance the security of our website. We collect such user data to verify the legitimacy of each reviewer and restaurant owner and to ensure that the reviews on our website are in line with our company’s values.</Text>
        <ListItem fontWeight={'bold'} paddingTop={"10px"}>Who Has Access to User Information</ListItem>
        <Text>User reviews, ratings, handles, and restaurant names around Northeastern University’s campus are made available to the public as this user information is a key aspect of our website's functionality. In contrast, sensitive information, such as usernames, passwords, and emails, are inaccessible to the public. Such sensitive information is only accessible to our small team of developers and the user associated with the account.</Text>
        <ListItem fontWeight={'bold'} paddingTop={"10px"}>How We Protect/Store User Information</ListItem>
        <Text>The majority of a user’s information inputted when creating their account is stored at the creation into our local database of users. This information includes what has been listed above. Additionally, whenever a user posts a review on the site, we store the review information to ensure that it is available for other users to read. We have protected user information by hiding sensitive information, such as our database and internal source code, from the general public so that it is inaccessible to those outside of our team of developers.</Text>
        <ListItem fontWeight={'bold'} paddingTop={"10px"}>Control Users Have Over Their Information</ListItem>
        <Text>Users can edit their information at any time by using their account settings. They also can change their display names, email addresses, and biographies whenever they want. If the user is a restaurant owner, they can choose to have a biography and hide that they are the owner of an establishment. If a user would not like to share any information, they can anonymously browse our website to look at reviews, but will not be able to leave any reviews of their own.  Additionally, if a restaurant owner chooses to moderate their comments, they should note that any user can request to see those deleted comments at any time.</Text>
      </OrderedList>
    </Box>
    </VStack>
  </Box>
);
};

export default PrivacyPolicy;