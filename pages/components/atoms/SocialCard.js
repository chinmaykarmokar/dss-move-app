import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Socials = () => {
    return (
        <>
            <Flex border="1px solid #c6c6c6" borderRadius="10px" bgGradient="linear(to-b, #f0f5f5, #fff)" m="3" height="85px" width="300px" flexWrap="wrap">
               <Box width="190px"><Text p={5} fontSize="12px"><b>Follow dssmove on Facebook and Twitter</b></Text></Box>
               <Flex width="100px" flexWrap="wrap" p={5} m={1}>
                   <FaFacebookSquare color="#3b5998" fontSize="30px"/> <FaTwitterSquare color="#00acee" fontSize="30px"/>
                </Flex>
            </Flex>
            <br/>
        </>
    )
}

export default Socials;