import { Flex, Heading, Divider, Text } from "@chakra-ui/react";

const News = () => {
    return (
        <>
           <Flex border="1px solid #c6c6c6" m="3" bgGradient="linear(to-b, #f0f5f5, #fff, #f0f5f5)" borderRadius="10px" height="250px" width="300px" flexWrap="wrap" p={5}>
                <Heading fontSize="25px">Latest news</Heading>
                <Divider/>
                <Text><b>Benefit Claimants' personal data to be shared by February.</b></Text>
                <Text><b>50% of homeless made homeless under 21.</b></Text>    
           </Flex>
        </>
    )
}

export default News;