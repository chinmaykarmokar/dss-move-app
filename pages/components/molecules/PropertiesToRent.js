import { Flex, Heading, Text } from "@chakra-ui/react";

const PropertyToRent = (props) => {
    return (
        <>
            <Flex border="1px solid #c6c6c6" borderRadius="10px" m="3" flexWrap="wrap" w={[300, 400, 625]}>
                <Flex width="100%" bgGradient="linear(to-b, #f0f5f5, #fff, #f0f5f5)" borderBottom="1px solid #c6c6c6" height="50px" borderTopLeftRadius="10px" borderTopRightRadius="10px">
                    <Heading ml={10} mt={2.5} fontSize={["20px", "20px", "25px"]} color="#354882">{props.header}</Heading>
                </Flex>
                <Flex flexWrap="wrap" p={10} mt={["0px", "-40px", "-80px"]} fontSize="16px">
                    <Flex flexWrap="wrap">
                    <Heading fontSize="20px" color="#354882">{props.header1}</Heading>
                    <Text>{props.desc1}</Text>
                    </Flex>
                    <br/>
                    <Flex flexWrap="wrap">
                    <Heading fontSize="20px" color="#354882">{props.header2}</Heading>
                    <Text>{props.desc2}</Text>
                    </Flex>
                    <br/>
                    <Flex flexWrap="wrap">
                    <Heading fontSize="20px" color="#354882">{props.header3}</Heading>
                    <Text>{props.desc3}</Text>
                    </Flex>
                    
                </Flex>
            </Flex>
        </>
    )
}

export default PropertyToRent;