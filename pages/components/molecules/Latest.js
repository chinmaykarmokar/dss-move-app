import { Flex, Button, Heading, Text, Image, Divider } from "@chakra-ui/react";

const LatestNews = () => {
    return (
        <>
            <Flex border="1px solid #c6c6c6" m="3" bgGradient="linear(to-b, #f0f5f5, #fff, #f0f5f5)" borderRadius="10px" height="250px" width="300px" flexWrap="wrap" p={5}>
               <Heading fontSize="25px" color="#354882">Latest news</Heading>
               <Divider/>
               <Text>Benefit claimants' personal data to be shared from February - 27/01/15</Text>
               <Text>50% of homeless made homeless under 21 - 07/01/15</Text>
            </Flex>
        </>
    )
}

export default LatestNews;