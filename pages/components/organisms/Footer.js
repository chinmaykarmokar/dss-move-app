import { Divider, Flex, SimpleGrid, Image, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <>
            <Divider border="1px solid #c6c6c6"/>
            <Flex
                as="nav"
                justifyContent="center"
                flexWrap="wrap"
                padding={6}
                overflow="hidden" 
                width="100%"
            >
                <SimpleGrid columns={[2, null, 8]}>
                    <Flex m={1.5} color="#866152" fontSize="13px"><b>About Us</b></Flex>
                    <Flex m={1.5} color="#866152" fontSize="13px"><b>Contact Us</b></Flex>
                    <Flex m={1.5} color="#866152" fontSize="13px"><b>Terms and Conditions</b></Flex>
                    <Flex m={1.5} color="#866152" fontSize="13px"><b>Press</b></Flex>
                    <Flex m={1.5} color="#866152" fontSize="13px"><b>Site Map</b></Flex>
                    <Flex m={1.5} color="#866152" fontSize="13px"><b>Disclaimer</b></Flex>
                    <Flex></Flex>
                    <Flex flexWrap="wrap">
                        <Text fontSize="10px">Copyright 2021 dssmove.co.uk All rights reserved</Text>
                        <br/>
                        <Image mt="10px" w="90%" src="http://www.dssmove.co.uk/default/public/media/css/images/logo-main.jpg" alt="logo"/>
                    </Flex>
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default Footer;