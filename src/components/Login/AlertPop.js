import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

export default function AlertPop (props) {
 return (
   <Alert height="2vh" mt={2} status="error" colorScheme="none">
     <AlertIcon />
     <AlertTitle mr={2}>{props.title}</AlertTitle>
   </Alert>
 );
}