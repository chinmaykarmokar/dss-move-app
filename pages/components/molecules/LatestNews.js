import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

const News = () => {
    return (
        <>
            <Flex border="1px solid #c6c6c6" borderRadius="10px" m="3" width="300px" flexWrap="wrap">
                <Flex width="100%" bgGradient="linear(to-b, #f0f5f5, #fff, #f0f5f5)" height="50px" borderBottom="1px solid #c6c6c6" borderTopLeftRadius="10px" borderTopRightRadius="10px">
                    <Heading ml={8} mt={2.5} fontSize="25px" color="#354882">Latest news</Heading>
                </Flex>
                <Flex flexWrap="wrap" p={5}>
                <UnorderedList>
                    <ListItem fontSize="15px"><b>Benefit claimants' personal data to be shared from February - 27/01/15</b></ListItem>
                </UnorderedList>
                <UnorderedList>
                    <ListItem fontSize="15px"><b>50% of homeless made homeless under 21 - 07/01/15</b></ListItem>
                </UnorderedList>
                </Flex>
            </Flex>
        </>
    )
}

export default News;