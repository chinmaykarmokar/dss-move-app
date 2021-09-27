import { Flex, Heading } from "@chakra-ui/react";
import UnorderedListItems from "../atoms/UnorderedList";

const Cards = (props) => {
    return (
        <>
            <Flex border="1px solid #c6c6c6" borderRadius="10px" m="3" width="300px" flexWrap="wrap">
                <Flex width="100%" bgGradient="linear(to-b, #f0f5f5, #fff, #f0f5f5)" height="50px" color={props.color} borderBottom="1px solid #c6c6c6" borderTopLeftRadius="10px" borderTopRightRadius="10px">
                    <Heading ml={5} mt={2.5} fontSize="25px">{props.header}</Heading>
                </Flex>
                <Flex flexWrap="wrap" p={5}>
                    {props.desc}
                    <UnorderedListItems
                        list1="Search for a property"
                        list2="Your housing benefit calculator"
                        list3="Find an agent in your area"
                        list4="Create a Dssmove account"
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default Cards;